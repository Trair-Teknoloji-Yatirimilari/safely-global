"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: Şubat 2026",
      sections: [
        {
          title: "1. Giriş",
          content: "TrairX Technology O.Ü (Estonya) olarak, SAFELY uygulamasını kullanan kullanıcılarımızın gizliliğini korumayı taahhüt ediyoruz. Bu gizlilik politikası, hangi verileri topladığımızı, nasıl kullandığımızı ve haklarınızı açıklar."
        },
        {
          title: "2. Topladığımız Veriler",
          content: "SAFELY aşağıdaki verileri toplayabilir:\n\n• Hesap Bilgileri: İsim, e-posta adresi (opsiyonel), telefon numarası (opsiyonel)\n• Konum Verileri: Sadece siz paylaşmayı seçtiğinizde GPS konumunuz\n• Kullanım Verileri: Uygulama içi aktiviteler, check-in geçmişi\n• Cihaz Bilgileri: Cihaz modeli, işletim sistemi versiyonu\n\nKonum verisi toplama tamamen opsiyoneldir ve istediğiniz zaman kapatabilirsiniz."
        },
        {
          title: "3. Verileri Nasıl Kullanırız",
          content: "Topladığımız verileri şu amaçlarla kullanırız:\n\n• Uygulama hizmetlerini sağlamak (check-in, konum paylaşımı)\n• Güvenlik özelliklerini etkinleştirmek\n• Kullanıcı deneyimini iyileştirmek\n• Teknik destek sağlamak\n• Yasal yükümlülükleri yerine getirmek\n\nVerilerinizi asla pazarlama amacıyla satmayız veya üçüncü taraflarla paylaşmayız."
        },
        {
          title: "4. Veri Paylaşımı",
          content: "Verileriniz yalnızca şu durumlarda paylaşılır:\n\n• Sizin açık izninizle (örn. güven çemberinizdeki kişilerle konum paylaşımı)\n• Hizmet sağlayıcılarımızla (sunucu hosting, analitik) - sadece gerekli olduğu kadar\n• Yasal zorunluluklar gereği (mahkeme kararı, yasal süreçler)\n\nÜçüncü taraf hizmet sağlayıcılarımız verilerinizi korumak için sözleşmesel olarak yükümlüdür."
        },
        {
          title: "5. Veri Saklama",
          content: "Verilerinizi yalnızca gerekli olduğu süre boyunca saklarız:\n\n• Hesap verileri: Hesabınızı silene kadar\n• Konum geçmişi: 90 gün\n• Check-in geçmişi: 1 yıl\n\nHesabınızı sildiğinizde, tüm kişisel verileriniz 30 gün içinde sistemlerimizden kalıcı olarak silinir."
        },
        {
          title: "6. Güvenlik",
          content: "Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanırız:\n\n• Veri şifreleme (transit ve depolama)\n• Güvenli sunucu altyapısı\n• Düzenli güvenlik denetimleri\n• Erişim kontrolü ve kimlik doğrulama\n\nAncak, internet üzerinden veri iletiminin %100 güvenli olmadığını unutmayın."
        },
        {
          title: "7. Kullanıcı Hakları",
          content: "GDPR ve ilgili yasalar kapsamında şu haklara sahipsiniz:\n\n• Verilerinize erişim hakkı\n• Verilerin düzeltilmesi hakkı\n• Verilerin silinmesi hakkı (unutulma hakkı)\n• Veri taşınabilirliği hakkı\n• İtiraz etme hakkı\n\nBu haklarınızı kullanmak için info@trairx.com adresine e-posta gönderin."
        },
        {
          title: "8. Çocukların Gizliliği",
          content: "SAFELY, 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşın altındaki çocuklardan veri toplamayız. Eğer bir ebeveyn veya vasi olarak çocuğunuzun bize kişisel bilgi verdiğini fark ederseniz, lütfen bizimle iletişime geçin."
        },
        {
          title: "9. Değişiklikler",
          content: "Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda sizi uygulama içi bildirim veya e-posta ile bilgilendireceğiz. Politikayı düzenli olarak gözden geçirmenizi öneririz."
        },
        {
          title: "10. İletişim",
          content: "Gizlilik politikamız hakkında sorularınız varsa:\n\nE-posta: info@trairx.com\nŞirket: TrairX Technology O.Ü\nAdres: Estonya"
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: February 2026",
      sections: [
        {
          title: "1. Introduction",
          content: "As TrairX Technology O.Ü (Estonia), we are committed to protecting the privacy of users of the SAFELY application. This privacy policy explains what data we collect, how we use it, and your rights."
        },
        {
          title: "2. Data We Collect",
          content: "SAFELY may collect the following data:\n\n• Account Information: Name, email address (optional), phone number (optional)\n• Location Data: Your GPS location only when you choose to share it\n• Usage Data: In-app activities, check-in history\n• Device Information: Device model, operating system version\n\nLocation data collection is entirely optional and you can turn it off at any time."
        },
        {
          title: "3. How We Use Data",
          content: "We use collected data for:\n\n• Providing app services (check-in, location sharing)\n• Enabling security features\n• Improving user experience\n• Providing technical support\n• Fulfilling legal obligations\n\nWe never sell your data or share it with third parties for marketing purposes."
        },
        {
          title: "4. Data Sharing",
          content: "Your data is only shared in these situations:\n\n• With your explicit consent (e.g., location sharing with your trust circle)\n• With our service providers (server hosting, analytics) - only as necessary\n• When legally required (court order, legal processes)\n\nOur third-party service providers are contractually obligated to protect your data."
        },
        {
          title: "5. Data Retention",
          content: "We retain your data only as long as necessary:\n\n• Account data: Until you delete your account\n• Location history: 90 days\n• Check-in history: 1 year\n\nWhen you delete your account, all personal data is permanently removed from our systems within 30 days."
        },
        {
          title: "6. Security",
          content: "We use industry-standard security measures to protect your data:\n\n• Data encryption (in transit and at rest)\n• Secure server infrastructure\n• Regular security audits\n• Access control and authentication\n\nHowever, please note that no data transmission over the internet is 100% secure."
        },
        {
          title: "7. User Rights",
          content: "Under GDPR and related laws, you have the following rights:\n\n• Right to access your data\n• Right to rectification\n• Right to erasure (right to be forgotten)\n• Right to data portability\n• Right to object\n\nTo exercise these rights, email info@trairx.com."
        },
        {
          title: "8. Children's Privacy",
          content: "SAFELY is not intended for children under 13. We do not knowingly collect data from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us."
        },
        {
          title: "9. Changes",
          content: "We may update this privacy policy from time to time. We will notify you of significant changes via in-app notification or email. We recommend reviewing the policy regularly."
        },
        {
          title: "10. Contact",
          content: "If you have questions about our privacy policy:\n\nEmail: info@trairx.com\nCompany: TrairX Technology O.Ü\nAddress: Estonia"
        }
      ]
    }
  };

  const data = content[language];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">{data.title}</h1>
        <p className="text-gray-500 mb-12">{data.lastUpdated}</p>

        <div className="prose prose-lg max-w-none">
          {data.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
