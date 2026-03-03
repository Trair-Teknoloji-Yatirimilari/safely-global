// Backend: /api/stripe/webhook endpoint
// Node.js / Express

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

/**
 * Stripe Webhook Endpoint
 * URL: https://api.safely-global.com/api/stripe/webhook
 * Method: POST
 */
router.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Stripe webhook signature doğrulaması
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('⚠️ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log('📨 Webhook received:', event.type);

  // Event handling
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object);
        break;

      case 'customer.subscription.created':
        await handleSubscriptionCreated(event.data.object);
        break;

      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object);
        break;

      case 'invoice.payment_succeeded':
        await handlePaymentSucceeded(event.data.object);
        break;

      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object);
        break;

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('❌ Error processing webhook:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

/**
 * Checkout Session Completed
 * Kullanıcı ödemeyi tamamladı
 */
async function handleCheckoutCompleted(session) {
  console.log('✅ Checkout completed:', {
    sessionId: session.id,
    customerId: session.customer,
    customerEmail: session.customer_details?.email,
    subscriptionId: session.subscription,
  });

  const customerEmail = session.customer_details?.email;
  const subscriptionId = session.subscription;

  if (!customerEmail) {
    console.error('❌ No customer email found');
    return;
  }

  try {
    // Kullanıcıyı veritabanında bul (email ile)
    const user = await findUserByEmail(customerEmail);
    
    if (!user) {
      console.error('❌ User not found:', customerEmail);
      return;
    }

    // Kullanıcıyı premium yap
    await updateUserPremiumStatus(user.id, {
      isPremium: true,
      stripeCustomerId: session.customer,
      stripeSubscriptionId: subscriptionId,
      subscriptionStatus: 'active',
      premiumStartDate: new Date(),
    });

    console.log('✅ User upgraded to premium:', user.id);

    // Kullanıcıya hoş geldin bildirimi gönder
    await sendPushNotification(user.id, {
      title: 'Premium Üyeliğiniz Aktif! 🎉',
      body: '30 dakika içinde tüm premium özelliklere erişebileceksiniz.',
    });

    // E-posta gönder
    await sendEmail(customerEmail, 'premium-welcome', {
      userName: user.name,
      subscriptionId: subscriptionId,
    });

  } catch (error) {
    console.error('❌ Error in handleCheckoutCompleted:', error);
    throw error;
  }
}

/**
 * Subscription Created
 * Abonelik oluşturuldu
 */
async function handleSubscriptionCreated(subscription) {
  console.log('🆕 Subscription created:', {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    status: subscription.status,
    priceId: subscription.items.data[0]?.price.id,
    trialEnd: subscription.trial_end ? new Date(subscription.trial_end * 1000) : null,
  });

  try {
    const user = await findUserByStripeCustomerId(subscription.customer);
    
    if (!user) {
      console.error('❌ User not found for customer:', subscription.customer);
      return;
    }

    // Abonelik bilgilerini güncelle
    await updateUserSubscription(user.id, {
      stripeSubscriptionId: subscription.id,
      subscriptionStatus: subscription.status,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      planType: getPlanType(subscription.items.data[0]?.price.id),
    });

    console.log('✅ Subscription info updated for user:', user.id);

  } catch (error) {
    console.error('❌ Error in handleSubscriptionCreated:', error);
    throw error;
  }
}

/**
 * Subscription Updated
 * Abonelik güncellendi
 */
async function handleSubscriptionUpdated(subscription) {
  console.log('🔄 Subscription updated:', {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    status: subscription.status,
    cancelAtPeriodEnd: subscription.cancel_at_period_end,
  });

  try {
    const user = await findUserByStripeCustomerId(subscription.customer);
    
    if (!user) {
      console.error('❌ User not found for customer:', subscription.customer);
      return;
    }

    // Abonelik durumunu güncelle
    await updateUserSubscription(user.id, {
      subscriptionStatus: subscription.status,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      planType: getPlanType(subscription.items.data[0]?.price.id),
    });

    // Eğer iptal edilmişse kullanıcıya bildir
    if (subscription.cancel_at_period_end) {
      await sendPushNotification(user.id, {
        title: 'Aboneliğiniz İptal Edildi',
        body: `${new Date(subscription.current_period_end * 1000).toLocaleDateString()} tarihine kadar premium özellikleriniz aktif kalacak.`,
      });
    }

    console.log('✅ Subscription updated for user:', user.id);

  } catch (error) {
    console.error('❌ Error in handleSubscriptionUpdated:', error);
    throw error;
  }
}

/**
 * Subscription Deleted
 * Abonelik iptal edildi - premiumu kapat
 */
async function handleSubscriptionDeleted(subscription) {
  console.log('❌ Subscription deleted:', {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    canceledAt: subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : null,
  });

  try {
    const user = await findUserByStripeCustomerId(subscription.customer);
    
    if (!user) {
      console.error('❌ User not found for customer:', subscription.customer);
      return;
    }

    // Premiumu kapat - Basic plana düşür
    await updateUserPremiumStatus(user.id, {
      isPremium: false,
      subscriptionStatus: 'cancelled',
      premiumEndDate: new Date(),
      planType: 'basic',
    });

    console.log('✅ Premium cancelled for user:', user.id);

    // Kullanıcıya bildirim gönder
    await sendPushNotification(user.id, {
      title: 'Premium Üyeliğiniz Sona Erdi',
      body: 'Basic plana geçiş yaptınız. İstediğiniz zaman tekrar premium olabilirsiniz.',
    });

    // E-posta gönder
    await sendEmail(user.email, 'premium-cancelled', {
      userName: user.name,
      cancelDate: new Date().toLocaleDateString(),
    });

  } catch (error) {
    console.error('❌ Error in handleSubscriptionDeleted:', error);
    throw error;
  }
}

/**
 * Payment Succeeded
 * Ödeme başarılı
 */
async function handlePaymentSucceeded(invoice) {
  console.log('💰 Payment succeeded:', {
    invoiceId: invoice.id,
    customerId: invoice.customer,
    subscriptionId: invoice.subscription,
    amountPaid: invoice.amount_paid / 100,
    currency: invoice.currency,
  });

  try {
    const user = await findUserByStripeCustomerId(invoice.customer);
    
    if (!user) {
      console.error('❌ User not found for customer:', invoice.customer);
      return;
    }

    // Son ödeme tarihini güncelle
    await updateUserPayment(user.id, {
      lastPaymentDate: new Date(),
      lastPaymentAmount: invoice.amount_paid / 100,
      lastInvoiceId: invoice.id,
    });

    // Ödeme makbuzu gönder
    await sendEmail(user.email, 'payment-receipt', {
      userName: user.name,
      amount: invoice.amount_paid / 100,
      currency: invoice.currency.toUpperCase(),
      invoiceUrl: invoice.hosted_invoice_url,
      date: new Date().toLocaleDateString(),
    });

    console.log('✅ Payment recorded for user:', user.id);

  } catch (error) {
    console.error('❌ Error in handlePaymentSucceeded:', error);
    throw error;
  }
}

/**
 * Payment Failed
 * Ödeme başarısız - kullanıcıyı uyar
 */
async function handlePaymentFailed(invoice) {
  console.log('⛔ Payment failed:', {
    invoiceId: invoice.id,
    customerId: invoice.customer,
    subscriptionId: invoice.subscription,
    amountDue: invoice.amount_due / 100,
    attemptCount: invoice.attempt_count,
  });

  try {
    const user = await findUserByStripeCustomerId(invoice.customer);
    
    if (!user) {
      console.error('❌ User not found for customer:', invoice.customer);
      return;
    }

    // Başarısız ödeme kaydı
    await recordFailedPayment(user.id, {
      invoiceId: invoice.id,
      amount: invoice.amount_due / 100,
      attemptCount: invoice.attempt_count,
      failedAt: new Date(),
    });

    // Kullanıcıyı uyar - PUSH bildirimi
    await sendPushNotification(user.id, {
      title: '⚠️ Ödeme Başarısız',
      body: 'Ödemeniz alınamadı. Lütfen ödeme yönteminizi kontrol edin.',
      action: 'UPDATE_PAYMENT_METHOD',
    });

    // E-posta uyarısı
    await sendEmail(user.email, 'payment-failed', {
      userName: user.name,
      amount: invoice.amount_due / 100,
      currency: invoice.currency.toUpperCase(),
      attemptCount: invoice.attempt_count,
      updatePaymentUrl: `https://safely-global.com/account/billing`,
    });

    // 3. denemeden sonra aboneliği askıya al
    if (invoice.attempt_count >= 3) {
      await updateUserSubscription(user.id, {
        subscriptionStatus: 'past_due',
      });

      await sendPushNotification(user.id, {
        title: '🚨 Abonelik Askıya Alındı',
        body: 'Ödeme alınamadığı için premium özellikleriniz askıya alındı.',
        action: 'UPDATE_PAYMENT_METHOD',
      });
    }

    console.log('✅ Payment failure handled for user:', user.id);

  } catch (error) {
    console.error('❌ Error in handlePaymentFailed:', error);
    throw error;
  }
}

// ============================================
// Helper Functions (Veritabanı işlemleri)
// ============================================

/**
 * Email ile kullanıcı bul
 */
async function findUserByEmail(email) {
  // TODO: Veritabanı sorgusu
  // Örnek: return await db.users.findOne({ email });
  console.log('🔍 Finding user by email:', email);
  return null; // Gerçek implementasyonu ekleyin
}

/**
 * Stripe Customer ID ile kullanıcı bul
 */
async function findUserByStripeCustomerId(customerId) {
  // TODO: Veritabanı sorgusu
  // Örnek: return await db.users.findOne({ stripeCustomerId: customerId });
  console.log('🔍 Finding user by Stripe customer ID:', customerId);
  return null; // Gerçek implementasyonu ekleyin
}

/**
 * Kullanıcı premium durumunu güncelle
 */
async function updateUserPremiumStatus(userId, data) {
  // TODO: Veritabanı güncelleme
  // Örnek: return await db.users.update({ id: userId }, data);
  console.log('💾 Updating premium status for user:', userId, data);
}

/**
 * Kullanıcı abonelik bilgilerini güncelle
 */
async function updateUserSubscription(userId, data) {
  // TODO: Veritabanı güncelleme
  // Örnek: return await db.subscriptions.update({ userId }, data);
  console.log('💾 Updating subscription for user:', userId, data);
}

/**
 * Kullanıcı ödeme bilgilerini güncelle
 */
async function updateUserPayment(userId, data) {
  // TODO: Veritabanı güncelleme
  console.log('💾 Updating payment info for user:', userId, data);
}

/**
 * Başarısız ödeme kaydı
 */
async function recordFailedPayment(userId, data) {
  // TODO: Veritabanı kayıt
  console.log('💾 Recording failed payment for user:', userId, data);
}

/**
 * Push bildirimi gönder
 */
async function sendPushNotification(userId, notification) {
  // TODO: Firebase/OneSignal/APNs entegrasyonu
  console.log('📱 Sending push notification to user:', userId, notification);
}

/**
 * E-posta gönder
 */
async function sendEmail(email, template, data) {
  // TODO: E-posta servisi (SendGrid, Resend, vb.)
  console.log('📧 Sending email to:', email, 'Template:', template);
}

/**
 * Price ID'den plan tipini belirle
 */
function getPlanType(priceId) {
  const priceMap = {
    'price_1T70dHKTeh6su2tzZEaLRKiV': 'premium_monthly',
    'price_1T70hZKTeh6su2tzwIs0Bs4G': 'premium_yearly',
    'price_1T70jLKTeh6su2tzcWxzxyyZ': 'vip_monthly',
    'price_1T70kvKTeh6su2tzpUl6MwuI': 'vip_yearly',
  };
  return priceMap[priceId] || 'unknown';
}

module.exports = router;
