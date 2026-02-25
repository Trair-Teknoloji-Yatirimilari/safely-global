"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

export default function SupportPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    device: '',
    version: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setFormData({ ...formData, subject: value });
  };

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
        sending: "Gönderiliyor...",
        success: "Mesajınız başarıyla gönderildi!",
        error: "Bir hata oluştu. Lütfen tekrar deneyin."
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
        sending: "Sending...",
        success: "Your message has been sent successfully!",
        error: "An error occurred. Please try again."
      }
    }
  };

  const data = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        device: '',
        version: '',
      });
    } catch (err) {
      setError(data.form.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-primary-100 mb-8">{data.subtitle}</p>
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a
              href="mailto:info@trairx.com"
              className="text-lg font-semibold hover:text-primary-100 transition"
            >
              {data.emailAddress}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{data.form.title}</h2>
            <p className="text-gray-600">{language === 'tr' ? 'Formu doldurun, en kısa sürede size dönüş yapalım' : 'Fill out the form and we\'ll get back to you soon'}</p>
          </div>
          
          {success && (
            <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-green-900">{language === 'tr' ? 'Başarılı!' : 'Success!'}</p>
                  <p className="text-green-800">{data.form.success}</p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-5 bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 rounded-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-red-900">{language === 'tr' ? 'Hata!' : 'Error!'}</p>
                  <p className="text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {data.form.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {data.form.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {data.topics} <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none bg-white appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.5rem',
                  paddingRight: '2.5rem'
                }}
                required
              >
                <option value="">{language === 'tr' ? 'Bir kategori seçin...' : 'Select a category...'}</option>
                {data.topicsList.map((topic, index) => (
                  <option key={index} value={topic.title}>
                    {topic.icon} {topic.title}
                  </option>
                ))}
              </select>
              {selectedCategory && (
                <p className="mt-2 text-sm text-gray-600">
                  {data.topicsList.find(t => t.title === selectedCategory)?.desc}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {data.form.subject} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                placeholder={language === 'tr' ? 'Konunuzu kısaca özetleyin' : 'Briefly summarize your topic'}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {data.form.message} <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {data.form.device}
                </label>
                <input
                  type="text"
                  value={formData.device}
                  onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                  placeholder={data.form.devicePlaceholder}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {data.form.version}
                </label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  placeholder={data.form.versionPlaceholder}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {data.form.sending}
                </span>
              ) : (
                data.form.submit
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
