# Stripe Entegrasyonu Kurulum Rehberi

## 1. Stripe Hesabı Oluşturma

1. [Stripe Dashboard](https://dashboard.stripe.com/register) adresinden hesap oluşturun
2. Test modunda çalışmak için "Test Mode" aktif olmalı

## 2. API Anahtarlarını Alma

1. Stripe Dashboard'da **Developers > API keys** bölümüne gidin
2. Aşağıdaki anahtarları kopyalayın:
   - **Publishable key** (pk_test_ ile başlar)
   - **Secret key** (sk_test_ ile başlar)

## 3. Ürün ve Fiyat Oluşturma

### Premium Monthly ($9.90/ay)
1. Dashboard'da **Products** > **Add Product** tıklayın
2. Ürün bilgileri:
   - Name: `Premium Monthly`
   - Description: `Gelişmiş özellikler ve sınırsız kullanım`
3. Pricing:
   - Price: `$9.90`
   - Billing period: `Monthly`
   - Type: `Recurring`
4. **Save product** tıklayın
5. Oluşan **Price ID**'yi kopyalayın (price_ ile başlar)

### Premium Yearly ($99.00/yıl)
1. Aynı Premium ürününe gidin
2. **Add another price** tıklayın
3. Pricing:
   - Price: `$99.00`
   - Billing period: `Yearly`
4. Price ID'yi kopyalayın

### VIP Monthly ($99.90/ay)
1. **Products** > **Add Product** tıklayın
2. Ürün bilgileri:
   - Name: `VIP Monthly`
   - Description: `Kurumsal ve aileler için tam paket`
3. Pricing:
   - Price: `$99.90`
   - Billing period: `Monthly`
4. Price ID'yi kopyalayın

### VIP Yearly ($999.00/yıl)
1. Aynı VIP ürününe gidin
2. **Add another price** tıklayın
3. Pricing:
   - Price: `$999.00`
   - Billing period: `Yearly`
4. Price ID'yi kopyalayın

## 4. .env.local Dosyasını Güncelleme

`.env.local` dosyasındaki placeholder değerleri gerçek değerlerle değiştirin:

```env
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_GERÇEK_SECRET_KEY_BURAYA
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_GERÇEK_PUBLISHABLE_KEY_BURAYA
STRIPE_WEBHOOK_SECRET=whsec_WEBHOOK_SECRET_BURAYA
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Stripe Price IDs
NEXT_PUBLIC_PRICE_PREMIUM_MONTHLY=price_PREMIUM_MONTHLY_ID_BURAYA
NEXT_PUBLIC_PRICE_PREMIUM_YEARLY=price_PREMIUM_YEARLY_ID_BURAYA
NEXT_PUBLIC_PRICE_VIP_MONTHLY=price_VIP_MONTHLY_ID_BURAYA
NEXT_PUBLIC_PRICE_VIP_YEARLY=price_VIP_YEARLY_ID_BURAYA
```

## 5. Webhook Kurulumu (Opsiyonel - Production için gerekli)

### Local Test için Stripe CLI
1. [Stripe CLI](https://stripe.com/docs/stripe-cli) indirin ve kurun
2. Terminal'de login olun:
   ```bash
   stripe login
   ```
3. Webhook'u forward edin:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
4. Çıkan webhook secret'ı (whsec_ ile başlar) `.env.local` dosyasına ekleyin

### Production için
1. Stripe Dashboard'da **Developers > Webhooks** > **Add endpoint**
2. Endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
3. Events to send:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
4. Webhook signing secret'ı kopyalayın ve `.env.local` dosyasına ekleyin

## 6. Test Kartları

Stripe test modunda kullanabileceğiniz kartlar:

- **Başarılı ödeme**: `4242 4242 4242 4242`
- **Ödeme başarısız**: `4000 0000 0000 0002`
- **3D Secure gerekli**: `4000 0027 6000 3184`

Diğer bilgiler:
- CVV: Herhangi 3 rakam
- Tarih: Gelecekte herhangi bir tarih
- ZIP: Herhangi 5 rakam

## 7. Uygulamayı Çalıştırma

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000/pricing` adresine gidin ve test edin.

## 8. Üretim Ortamına Geçiş

1. Stripe Dashboard'da **Test Mode**'u kapatın
2. Production API anahtarlarını alın (pk_live_ ve sk_live_)
3. Production ürünleri ve fiyatları oluşturun
4. `.env.local` yerine production environment variables kullanın
5. Webhook'u production URL'e yönlendirin

## Önemli Notlar

- Test modunda gerçek ödeme alınmaz
- 7 günlük ücretsiz deneme otomatik olarak eklenir
- Kullanıcılar Stripe Checkout sayfasında ödeme yapar
- Abonelik yönetimi Stripe Customer Portal üzerinden yapılır
- Webhook'lar abonelik durumlarını takip etmek için kullanılır

## Sorun Giderme

### "Invalid API Key" hatası
- API anahtarlarının doğru kopyalandığından emin olun
- Test modunda test anahtarları, production'da live anahtarlar kullanın

### Webhook çalışmıyor
- Stripe CLI'ın çalıştığından emin olun
- Webhook secret'ın doğru olduğunu kontrol edin
- Console'da webhook loglarını kontrol edin

### Ödeme sayfası açılmıyor
- Price ID'lerin doğru olduğunu kontrol edin
- Browser console'da hata mesajlarını kontrol edin
- Network tab'de API çağrılarını inceleyin
