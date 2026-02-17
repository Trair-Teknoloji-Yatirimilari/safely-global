"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function FAQPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Sıkça Sorulan Sorular",
      subtitle: "SAFELY hakkında merak ettikleriniz",
      faqs: [
        {
          q: "Konum paylaşımı nasıl çalışır?",
          a: "Konumunuzu sadece güvendiğiniz kişilerle paylaşırsınız. Konum paylaşımı tamamen opsiyoneldir ve istediğiniz zaman kapatabilirsiniz. Verileriniz şifrelenir ve güvenli bir şekilde saklanır."
        },
        {
          q: "Check-in nedir?",
          a: "Check-in, belirli zamanlarda güvende olduğunuzu bildirmeniz için hatırlatma sistemidir. Zamanlanmış check-in'ler oluşturabilir ve sevdikleriniz düzenli olarak sizden haber alabilir."
        },
        {
          q: "Verilerim güvende mi?",
          a: "Evet. Tüm verileriniz şifrelenir ve güvenli sunucularda saklanır. Verilerinizi asla üçüncü taraflarla paylaşmayız veya satmayız. GDPR ve veri koruma yasalarına tam uyumluyuz."
        },
        {
          q: "Yardım çağrısı nasıl çalışır?",
          a: "Yardım butonuna bastığınızda, güven çemberinizdeki tüm kişiler anında bilgilendirilir. Ancak unutmayın: SAFELY profesyonel yardım servisi yerine geçmez. Hayati tehlike durumunda 112'yi arayın."
        },
        {
          q: "Hesap silme / veri silme nasıl?",
          a: "Hesabınızı uygulama içinden veya info@trairx.com adresine e-posta göndererek silebilirsiniz. Tüm verileriniz 30 gün içinde kalıcı olarak silinir."
        },
        {
          q: "Uygulama ücretsiz mi?",
          a: "Evet, SAFELY şu anda tamamen ücretsizdir. Temel güvenlik özelliklerinin herkes için erişilebilir olmasını istiyoruz."
        },
        {
          q: "Hangi cihazlarda çalışır?",
          a: "SAFELY şu anda iOS cihazlarda (iPhone) kullanılabilir. App Store'dan indirebilirsiniz."
        },
        {
          q: "İnternet bağlantısı gerekli mi?",
          a: "Evet, konum paylaşımı ve bildirimler için internet bağlantısı gereklidir. Çevrimdışıyken bazı özellikler çalışmayabilir."
        },
        {
          q: "Pil tüketimi nasıl?",
          a: "SAFELY, pil tüketimini minimize etmek için optimize edilmiştir. Arka planda çalışırken düşük güç modunu kullanır."
        },
        {
          q: "Birden fazla dil destekliyor mu?",
          a: "Evet, SAFELY Türkçe ve İngilizce dillerini destekler. Uygulama içinden dil değiştirebilirsiniz."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about SAFELY",
      faqs: [
        {
          q: "How does location sharing work?",
          a: "You share your location only with trusted contacts. Location sharing is entirely optional and you can turn it off anytime. Your data is encrypted and stored securely."
        },
        {
          q: "What is check-in?",
          a: "Check-in is a reminder system to let others know you're safe at scheduled times. You can create scheduled check-ins and your loved ones can hear from you regularly."
        },
        {
          q: "Is my data safe?",
          a: "Yes. All your data is encrypted and stored on secure servers. We never share or sell your data to third parties. We are fully compliant with GDPR and data protection laws."
        },
        {
          q: "What happens when I need help?",
          a: "When you press the help button, all people in your trust circle are immediately notified. However, remember: SAFELY is not a substitute for professional help services. Call 112 in life-threatening situations."
        },
        {
          q: "How do I delete my account/data?",
          a: "You can delete your account from within the app or by emailing info@trairx.com. All your data will be permanently deleted within 30 days."
        },
        {
          q: "Is the app free?",
          a: "Yes, SAFELY is currently completely free. We want basic safety features to be accessible to everyone."
        },
        {
          q: "Which devices does it work on?",
          a: "SAFELY is currently available on iOS devices (iPhone). You can download it from the App Store."
        },
        {
          q: "Is internet connection required?",
          a: "Yes, internet connection is required for location sharing and notifications. Some features may not work when offline."
        },
        {
          q: "How is battery consumption?",
          a: "SAFELY is optimized to minimize battery consumption. It uses low power mode when running in the background."
        },
        {
          q: "Does it support multiple languages?",
          a: "Yes, SAFELY supports Turkish and English. You can change the language from within the app."
        }
      ]
    }
  };

  const data = content[language];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{data.title}</h1>
          <p className="text-xl text-gray-600">{data.subtitle}</p>
        </div>

        <div className="space-y-6">
          {data.faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
