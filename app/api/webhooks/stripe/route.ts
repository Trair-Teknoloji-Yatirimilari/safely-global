import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "No signature provided" },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("✅ Checkout session completed:", {
          sessionId: session.id,
          customerId: session.customer,
          customerEmail: session.customer_details?.email,
          subscriptionId: session.subscription,
          amountTotal: session.amount_total,
          currency: session.currency,
        });
        // TODO: Veritabanına kullanıcı abonelik bilgisini kaydet
        // TODO: Kullanıcıya hoş geldin e-postası gönder
        break;

      case "customer.subscription.created":
        const subscriptionCreated = event.data.object as Stripe.Subscription;
        console.log("🆕 Subscription created:", {
          subscriptionId: subscriptionCreated.id,
          customerId: subscriptionCreated.customer,
          status: subscriptionCreated.status,
          currentPeriodEnd: new Date(subscriptionCreated.current_period_end * 1000),
          planId: subscriptionCreated.items.data[0]?.price.id,
          trialEnd: subscriptionCreated.trial_end ? new Date(subscriptionCreated.trial_end * 1000) : null,
        });
        // TODO: Veritabanında abonelik durumunu "active" yap
        // TODO: Kullanıcıya mobil uygulama üzerinden bildirim gönder
        break;

      case "customer.subscription.updated":
        const subscriptionUpdated = event.data.object as Stripe.Subscription;
        console.log("🔄 Subscription updated:", {
          subscriptionId: subscriptionUpdated.id,
          customerId: subscriptionUpdated.customer,
          status: subscriptionUpdated.status,
          cancelAtPeriodEnd: subscriptionUpdated.cancel_at_period_end,
          currentPeriodEnd: new Date(subscriptionUpdated.current_period_end * 1000),
        });
        // TODO: Veritabanında abonelik durumunu güncelle
        if (subscriptionUpdated.cancel_at_period_end) {
          console.log("⚠️ Subscription will be cancelled at period end");
          // TODO: Kullanıcıya iptal bildirimi gönder
        }
        break;

      case "customer.subscription.deleted":
        const subscriptionDeleted = event.data.object as Stripe.Subscription;
        console.log("❌ Subscription deleted:", {
          subscriptionId: subscriptionDeleted.id,
          customerId: subscriptionDeleted.customer,
          canceledAt: subscriptionDeleted.canceled_at ? new Date(subscriptionDeleted.canceled_at * 1000) : null,
        });
        // TODO: Veritabanında abonelik durumunu "cancelled" yap
        // TODO: Kullanıcının premium özelliklerine erişimini kapat
        // TODO: Kullanıcıya iptal onay e-postası gönder
        break;

      case "invoice.payment_succeeded":
        const invoice = event.data.object as Stripe.Invoice;
        console.log("💰 Invoice payment succeeded:", {
          invoiceId: invoice.id,
          customerId: invoice.customer,
          subscriptionId: invoice.subscription,
          amountPaid: invoice.amount_paid,
          currency: invoice.currency,
          periodEnd: new Date(invoice.period_end * 1000),
        });
        // TODO: Ödeme makbuzunu kullanıcıya e-posta ile gönder
        // TODO: Veritabanında son ödeme tarihini güncelle
        break;

      case "invoice.payment_failed":
        const failedInvoice = event.data.object as Stripe.Invoice;
        console.log("⛔ Invoice payment failed:", {
          invoiceId: failedInvoice.id,
          customerId: failedInvoice.customer,
          subscriptionId: failedInvoice.subscription,
          amountDue: failedInvoice.amount_due,
          attemptCount: failedInvoice.attempt_count,
        });
        // TODO: Kullanıcıya ödeme başarısız bildirimi gönder
        // TODO: Kullanıcıdan ödeme yöntemini güncellemesini iste
        break;

      case "customer.subscription.trial_will_end":
        const trialEndingSub = event.data.object as Stripe.Subscription;
        console.log("⏰ Trial will end soon:", {
          subscriptionId: trialEndingSub.id,
          customerId: trialEndingSub.customer,
          trialEnd: new Date(trialEndingSub.trial_end! * 1000),
        });
        // TODO: Kullanıcıya deneme süresi bitiyor bildirimi gönder
        break;

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
