# Stripe Webhook Kurulum Rehberi

## 🎯 Webhook Nedir?

Webhook'lar Stripe'dan gelen event bildirimlerini dinler. Örneğin:
- Kullanıcı abone oldu
- Ödeme başarılı/başarısız
- Abonelik iptal edildi
- Deneme süresi bitiyor

## 📋 Production Webhook Kurulumu

### 1. Stripe Dashboard'da Webhook Oluşturun

1. [Stripe Dashboard](https://dashboard.stripe.com) → **Developers** → **Webhooks**
2. **Add endpoint** butonuna tıklayın
3. **Endpoint URL:**
   ```
   https://safely-global.com/api/webhooks/stripe
   ```

4. **Select events to listen to:**
   - ✅ `checkout.session.completed`
   - ✅ `customer.subscription.created`
   - ✅ `customer.subscription.updated`
   - ✅ `customer.subscription.deleted`
   - ✅ `invoice.payment_succeeded`
   - ✅ `invoice.payment_failed`
   - ✅ `customer.subscription.trial_will_end`

5. **Add endpoint** tıklayın

6. **Signing secret**'ı kopyalayın (whsec_ ile başlar)

### 2. Webhook Secret'ı .env.local'e Ekleyin

```env
STRIPE_WEBHOOK_SECRET=whsec_BURAYA_WEBHOOK_SECRET
```

### 3. Server'ı Yeniden Başlatın

```bash
npm run dev
```

## 🧪 Local Test İçin (Opsiyonel)

### Stripe CLI ile Local Test

1. **Stripe CLI Kurulumu:**
   ```bash
   # macOS
   brew install stripe/stripe-cli/stripe
   
   # Windows
   # https://github.com/stripe/stripe-cli/releases/latest adresinden indirin
   ```

2. **Login:**
   ```bash
   stripe login
   ```

3. **Webhook Forward:**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. Çıkan webhook secret'ı (whsec_) `.env.local` dosyasına ekleyin

5. **Test Event Gönderme:**
   ```bash
   # Başarılı ödeme testi
   stripe trigger checkout.session.completed
   
   # Abonelik oluşturma testi
   stripe trigger customer.subscription.created
   
   # Ödeme başarısız testi
   stripe trigger invoice.payment_failed
   ```

## 📊 Webhook Event'leri ve Anlamları

### checkout.session.completed
- **Ne zaman:** Kullanıcı ödeme sayfasını tamamladığında
- **Yapılacak:** 
  - Veritabanına kullanıcı kaydı
  - Hoş geldin e-postası
  - Mobil uygulama bildirimi

### customer.subscription.created
- **Ne zaman:** Abonelik oluşturulduğunda
- **Yapılacak:**
  - Abonelik durumunu "active" yap
  - Premium özellikleri aç
  - 30 dakika içinde aktif olacak bildirimi

### customer.subscription.updated
- **Ne zaman:** Abonelik değiştiğinde (plan değişikliği, iptal vb.)
- **Yapılacak:**
  - Abonelik durumunu güncelle
  - Plan değişikliği bildirimi
  - İptal bildirimi (cancel_at_period_end = true ise)

### customer.subscription.deleted
- **Ne zaman:** Abonelik tamamen iptal edildiğinde
- **Yapılacak:**
  - Premium özellikleri kapat
  - Basic plana düşür
  - İptal onay e-postası

### invoice.payment_succeeded
- **Ne zaman:** Aylık/yıllık ödeme başarılı olduğunda
- **Yapılacak:**
  - Ödeme makbuzu gönder
  - Son ödeme tarihini güncelle
  - Abonelik süresini uzat

### invoice.payment_failed
- **Ne zaman:** Ödeme başarısız olduğunda
- **Yapılacak:**
  - Kullanıcıya uyarı gönder
  - Ödeme yöntemi güncelleme linki
  - 3 başarısız denemeden sonra aboneliği askıya al

### customer.subscription.trial_will_end
- **Ne zaman:** Deneme süresi bitmeden 3 gün önce
- **Yapılacak:**
  - Hatırlatma bildirimi
  - Deneme süresi bitiyor e-postası

## 🔍 Webhook Loglarını İzleme

### Server Logları
```bash
# Terminal'de server loglarını izleyin
npm run dev
```

### Stripe Dashboard
1. **Developers** → **Webhooks**
2. Endpoint'inize tıklayın
3. **Logs** sekmesinde tüm event'leri görebilirsiniz

## ⚠️ Önemli Notlar

1. **Güvenlik:**
   - Webhook secret'ı asla paylaşmayın
   - Signature verification her zaman aktif olmalı

2. **Idempotency:**
   - Aynı event birden fazla gelebilir
   - Event ID'yi kontrol edin, tekrar işlemeyin

3. **Timeout:**
   - Webhook handler 10 saniye içinde cevap vermeli
   - Uzun işlemler için queue kullanın

4. **Retry:**
   - Stripe başarısız webhook'ları otomatik tekrar dener
   - 3 gün boyunca denemeye devam eder

## 🎯 Sonraki Adımlar

1. ✅ Webhook endpoint'i oluştur (Yapıldı)
2. ✅ Event handler'ları yaz (Yapıldı)
3. ⏳ Veritabanı entegrasyonu ekle
4. ⏳ E-posta bildirimleri ekle
5. ⏳ Mobil uygulama bildirimleri ekle
6. ⏳ Webhook loglarını veritabanına kaydet

## 📞 Destek

Webhook ile ilgili sorun yaşarsanız:
- Stripe Dashboard → Webhooks → Logs
- Server console loglarını kontrol edin
- Stripe dokümantasyonu: https://stripe.com/docs/webhooks
