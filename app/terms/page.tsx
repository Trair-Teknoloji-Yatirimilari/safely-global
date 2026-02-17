"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Kullanım Koşulları",
      lastUpdated: "Son Güncelleme: Şubat 2026",
      sections: [
        {
          title: "1. Kabul",
          content: "SAFELY uygulamasını kullanarak, bu kullanım koşullarını kabul etmiş olursunuz. Koşulları kabul etmiyorsanız, lütfen uygulamayı kullanmayın."
        },
        {
          title: "2. Uygunluk",
          content: "SAFELY'yi kullanmak için:\n\n• En az 13 yaşında olmalısınız\n• Yasal olarak bağlayıcı sözleşme yapma yetkiniz olmalı\n• Bulunduğunuz ülkede uygulamayı kullanmanız yasal olmalı\n\n18 yaşın altındaysanız, ebeveyn veya vasi izni gereklidir."
        },
        {
          title: "3. Kullanıcı Sorumlulukları",
          content: "SAFELY'yi kullanırken:\n\n• Hesap bilgilerinizin güvenliğinden siz sorumlusunuz\n• Doğru ve güncel bilgi sağlamalısınız\n• Uygulamayı yasa dışı amaçlarla kullanmamalısınız\n• Başkalarının haklarını ihlal etmemelisiniz\n• Sistemi manipüle etmeye veya zarar vermeye çalışmamalısınız"
        },
        {
          title: "4. Yasaklanan Kullanımlar",
          content: "Aşağıdaki kullanımlar kesinlikle yasaktır:\n\n• Başkalarını taciz etmek veya tehdit etmek\n• Sahte bilgi veya kimlik kullanmak\n• Spam veya istenmeyen içerik göndermek\n• Virüs veya zararlı kod yaymak\n• Uygulamayı tersine mühendislik yapmak\n• Başkalarının hesaplarına yetkisiz erişim\n\nBu kurallara uymayan hesaplar askıya alınabilir veya silinebilir."
        },
        {
          title: "5. Feragatname - Profesyonel Yardım Servisi Değildir",
          content: "ÖNEMLİ: SAFELY PROFESYONEL YARDIM SERVİSİ YERİNE GEÇMEZ.\n\nSAFELY bir güvenlik ve iletişim aracıdır, ancak:\n\n• Hayati tehlike durumlarında 112'yi arayın\n• SAFELY'nin her zaman çalışacağını garanti edemeyiz\n• İnternet bağlantısı gerektirir\n• Konum doğruluğu değişebilir\n• Bildirimler gecikebilir veya ulaşmayabilir\n\nHayati tehlike durumları için resmi yardım servislerini kullanın."
        },
        {
          title: "6. Sorumluluk Sınırlaması",
          content: "Yasaların izin verdiği ölçüde:\n\n• SAFELY 'olduğu gibi' sağlanır, garanti verilmez\n• Hizmet kesintilerinden sorumlu değiliz\n• Veri kaybından sorumlu değiliz\n• Dolaylı veya arızi zararlardan sorumlu değiliz\n• Maksimum sorumluluğumuz ödediğiniz ücretle sınırlıdır (şu anda ücretsiz)\n\nBazı yargı bölgeleri sorumluluk sınırlamalarına izin vermez, bu durumda yukarıdakiler geçerli olmayabilir."
        },
        {
          title: "7. Fikri Mülkiyet",
          content: "SAFELY uygulaması ve tüm içeriği (logo, tasarım, kod) TrairX Technology O.Ü'nün mülkiyetindedir. Kullanıcılar:\n\n• Uygulamayı kişisel kullanım için kullanabilir\n• İçeriği kopyalayamaz, değiştiremez veya dağıtamaz\n• Ticari amaçlarla kullanamazlar (izin olmadan)\n\nTüm ticari markalar ilgili sahiplerinin mülkiyetindedir."
        },
        {
          title: "8. Değişiklikler",
          content: "Bu koşulları istediğimiz zaman değiştirebiliriz. Önemli değişiklikler için:\n\n• Uygulama içi bildirim göndeririz\n• E-posta ile bilgilendiririz (varsa)\n• Değişiklikler yayınlandıktan sonra geçerli olur\n\nDeğişikliklerden sonra uygulamayı kullanmaya devam ederseniz, yeni koşulları kabul etmiş sayılırsınız."
        },
        {
          title: "9. Hesap Sonlandırma",
          content: "Hesabınızı istediğiniz zaman silebilirsiniz. Biz de:\n\n• Koşulları ihlal ederseniz hesabınızı askıya alabiliriz\n• Yasal nedenlerle hesabınızı sonlandırabiliriz\n• Hizmeti durdurma hakkını saklı tutarız\n\nHesap sonlandırıldığında, verileriniz gizlilik politikamıza uygun olarak silinir."
        },
        {
          title: "10. Uygulanacak Hukuk",
          content: "Bu koşullar Estonya yasalarına tabidir ve TrairX Technology O.Ü tarafından yönetilir. Uyuşmazlıklar Estonya mahkemelerinde çözülür.\n\nAncak, bulunduğunuz ülkenin tüketici koruma yasaları da geçerli olabilir."
        },
        {
          title: "11. İletişim",
          content: "Kullanım koşulları hakkında sorularınız için:\n\nE-posta: info@trairx.com\nŞirket: TrairX Technology O.Ü\nAdres: Estonya"
        }
      ]
    },
    en: {
      title: "Terms of Use",
      lastUpdated: "Last Updated: February 2026",
      sections: [
        {
          title: "1. Acceptance",
          content: "By using the SAFELY application, you accept these terms of use. If you do not accept the terms, please do not use the application."
        },
        {
          title: "2. Eligibility",
          content: "To use SAFELY:\n\n• You must be at least 13 years old\n• You must have legal capacity to enter binding contracts\n• Use must be legal in your country\n\nIf you are under 18, parental or guardian consent is required."
        },
        {
          title: "3. User Responsibilities",
          content: "When using SAFELY:\n\n• You are responsible for your account security\n• You must provide accurate and current information\n• You must not use the app for illegal purposes\n• You must not violate others' rights\n• You must not attempt to manipulate or damage the system"
        },
        {
          title: "4. Prohibited Uses",
          content: "The following uses are strictly prohibited:\n\n• Harassing or threatening others\n• Using false information or identity\n• Sending spam or unwanted content\n• Spreading viruses or malicious code\n• Reverse engineering the application\n• Unauthorized access to others' accounts\n\nAccounts violating these rules may be suspended or deleted."
        },
        {
          title: "5. Disclaimer - Not Professional Help Services",
          content: "IMPORTANT: SAFELY IS NOT A SUBSTITUTE FOR PROFESSIONAL HELP SERVICES.\n\nSAFELY is a safety and communication tool, but:\n\n• Call 112 in life-threatening situations\n• We cannot guarantee SAFELY will always work\n• Requires internet connection\n• Location accuracy may vary\n• Notifications may be delayed or not delivered\n\nUse official help services for life-threatening situations."
        },
        {
          title: "6. Limitation of Liability",
          content: "To the extent permitted by law:\n\n• SAFELY is provided 'as is' without warranty\n• We are not responsible for service interruptions\n• We are not responsible for data loss\n• We are not responsible for indirect or incidental damages\n• Our maximum liability is limited to fees paid (currently free)\n\nSome jurisdictions do not allow liability limitations, in which case the above may not apply."
        },
        {
          title: "7. Intellectual Property",
          content: "The SAFELY application and all content (logo, design, code) are owned by TrairX Technology O.Ü. Users:\n\n• May use the app for personal use\n• May not copy, modify, or distribute content\n• May not use for commercial purposes (without permission)\n\nAll trademarks are property of their respective owners."
        },
        {
          title: "8. Changes",
          content: "We may change these terms at any time. For significant changes:\n\n• We will send in-app notifications\n• We will notify by email (if available)\n• Changes take effect after publication\n\nContinued use after changes means you accept the new terms."
        },
        {
          title: "9. Account Termination",
          content: "You can delete your account at any time. We may also:\n\n• Suspend your account if you violate terms\n• Terminate your account for legal reasons\n• Reserve the right to discontinue service\n\nWhen account is terminated, your data is deleted according to our privacy policy."
        },
        {
          title: "10. Governing Law",
          content: "These terms are subject to Estonian law and governed by TrairX Technology O.Ü. Disputes are resolved in Estonian courts.\n\nHowever, consumer protection laws in your country may also apply."
        },
        {
          title: "11. Contact",
          content: "For questions about terms of use:\n\nEmail: info@trairx.com\nCompany: TrairX Technology O.Ü\nAddress: Estonia"
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
