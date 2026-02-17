"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function SupportPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Destek",
      subtitle: "Size nasıl yardımcı olabiliriz?",
      email: "Destek E-postası",
      emailAddress: "info@trairx.com",
      topics: "Destek Konuları",
      topicsList: [
        { icon: "🐛", title: "Hata Bildirimi", desc: "Uygulama ile ilgili bir sorun mu buldunuz?" },
        { icon: "🗑️", title: "Veri Silme Talebi", desc: "Hesabınızı ve verilerinizi silmek ister misiniz?" },
        { icon: "❓", title: "Hesap Yardımı", desc: "Hesabınızla ilgili yardıma mı ihtiyacınız var?" },
        { icon: "💡", title: "Özellik Önerisi", desc: "Yeni bir özellik öneriniz mi var?" },
      ],
      form: {
        title: "Bize Ulaşın",
        name: "Adınız",
        email: "E-posta",
        subject: "Konu",
        message: "Mesajınız",
        device: "Cihaz Bilgisi (opsiyonel)",
        devicePlaceholder: "Örn: iPhone 14, iOS 17.2",
        version: "Uygulama Versiyonu (opsiyonel)",
        versionPlaceholder: "Örn: 1.0.0",
        submit: "Gönder",
        note: "Not: Bu form şu anda aktif değil. Lütfen info@trairx.com adresine e-posta gönderin."
      }
    },
    en: {
      title: "Support",
      subtitle: "How can we help you?",
      email: "Support Email",
      emailAddress: "info@trairx.com",
      topics: "Support Topics",
      topicsList: [
        { icon: "🐛", title: "Report a Bug", desc: "Found an issue with the app?" },
        { icon: "🗑️", title: "Data Deletion Request", desc: "Want to delete your account and data?" },
        { icon: "❓", title: "Account Help", desc: "Need help with your account?" },
        { icon: "💡", title: "Feature Suggestion", desc: "Have a new feature idea?" },
      ],
      form: {
        title: "Contact Us",
        name: "Your Name",
        email: "Email",
        subject: "Subject",
        message: "Your Message",
        device: "Device Info (optional)",
        devicePlaceholder: "e.g., iPhone 14, iOS 17.2",
        version: "App Version (optional)",
        versionPlaceholder: "e.g., 1.0.0",
        submit: "Send",
        note: "Note: This form is not currently active. Please email info@trairx.com."
      }
    }
  };

  const data = content[language];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{data.title}</h1>
          <p className="text-xl text-gray-600">{data.subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{data.email}</h2>
          <a
            href="mailto:info@trairx.com"
            className="text-2xl text-primary-600 hover:text-primary-700 font-semibold"
          >
            {data.emailAddress}
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{data.topics}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.topicsList.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{data.form.title}</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {data.form.name}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {data.form.email}
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {data.form.subject}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {data.form.message}
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {data.form.device}
                </label>
                <input
                  type="text"
                  placeholder={data.form.devicePlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {data.form.version}
                </label>
                <input
                  type="text"
                  placeholder={data.form.versionPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
              disabled
            >
              {data.form.submit}
            </button>

            <p className="text-sm text-gray-500 text-center">{data.form.note}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
