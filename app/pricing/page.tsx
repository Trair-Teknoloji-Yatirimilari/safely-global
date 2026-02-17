"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreBadge from "@/components/AppStoreBadge";

export default function PricingPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Fiyatlandırma",
      subtitle: "Size uygun planı seçin",
      trial: "7 gün ücretsiz Premium deneme",
      monthly: "Aylık",
      features: "Özellikler",
      getStarted: "Başlayın",
      plans: [
        {
          name: "Basic",
          price: "Ücretsiz",
          period: "",
          description: "Temel güvenlik özellikleri",
          features: [
            "Konum paylaşımı (sınırlı)",
            "Check-in (günde 3)",
            "2 güven çemberi kişisi",
            "Temel bildirimler",
          ],
          cta: "Ücretsiz Başla",
          popular: false,
        },
        {
          name: "Premium",
          price: "$9.90",
          period: "/ay",
          description: "Gelişmiş özellikler ve sınırsız kullanım",
          features: [
            "Sınırsız konum paylaşımı",
            "Sınırsız check-in",
            "10 güven çemberi kişisi",
            "Hızlı yardım çağrısı",
            "Zamanlanmış hatırlatmalar",
            "Öncelikli destek",
            "7 gün ücretsiz deneme",
          ],
          cta: "Premium'a Geç",
          popular: true,
        },
        {
          name: "VIP",
          price: "$99.90",
          period: "/ay",
          description: "Kurumsal ve aileler için tam paket",
          features: [
            "Premium'daki tüm özellikler",
            "Sınırsız güven çemberi",
            "Aile yönetimi",
            "Gelişmiş raporlama",
            "Özel destek hattı",
            "API erişimi",
            "Özelleştirilebilir bildirimler",
            "7 gün ücretsiz deneme",
          ],
          cta: "VIP'e Geç",
          popular: false,
        },
      ],
    },
    en: {
      title: "Pricing",
      subtitle: "Choose the plan that fits you",
      trial: "7-day free Premium trial",
      monthly: "Monthly",
      features: "Features",
      getStarted: "Get Started",
      plans: [
        {
          name: "Basic",
          price: "Free",
          period: "",
          description: "Essential safety features",
          features: [
            "Location sharing (limited)",
            "Check-in (3 per day)",
            "2 trust circle members",
            "Basic notifications",
          ],
          cta: "Start Free",
          popular: false,
        },
        {
          name: "Premium",
          price: "$9.90",
          period: "/month",
          description: "Advanced features and unlimited usage",
          features: [
            "Unlimited location sharing",
            "Unlimited check-ins",
            "10 trust circle members",
            "Quick help alert",
            "Scheduled reminders",
            "Priority support",
            "7-day free trial",
          ],
          cta: "Go Premium",
          popular: true,
        },
        {
          name: "VIP",
          price: "$99.90",
          period: "/month",
          description: "Complete package for enterprise and families",
          features: [
            "All Premium features",
            "Unlimited trust circle",
            "Family management",
            "Advanced reporting",
            "Dedicated support line",
            "API access",
            "Customizable notifications",
            "7-day free trial",
          ],
          cta: "Go VIP",
          popular: false,
        },
      ],
    },
  };

  const data = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">{data.subtitle}</p>
          <p className="text-lg text-primary-600 font-semibold">
            🎁 {data.trial}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular
                  ? "ring-2 ring-primary-500 transform scale-105"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {language === "tr" ? "En Popüler" : "Most Popular"}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            {language === "tr"
              ? "Uygulamayı indirerek üyelik planlarına erişebilirsiniz"
              : "Download the app to access membership plans"}
          </p>
          <AppStoreBadge />
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {language === "tr" ? "Sıkça Sorulan Sorular" : "FAQ"}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === "tr"
                  ? "Ücretsiz deneme nasıl çalışır?"
                  : "How does the free trial work?"}
              </h3>
              <p className="text-gray-600">
                {language === "tr"
                  ? "Kayıt olan her kullanıcıya 7 gün ücretsiz Premium üyelik hediye edilir. Deneme süresi sonunda otomatik olarak ücretlendirme başlar. İstediğiniz zaman iptal edebilirsiniz."
                  : "Every new user gets 7 days of free Premium membership. Billing starts automatically after the trial period. You can cancel anytime."}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === "tr"
                  ? "Aboneliğimi nasıl iptal ederim?"
                  : "How do I cancel my subscription?"}
              </h3>
              <p className="text-gray-600">
                {language === "tr"
                  ? "iPhone Ayarlar > Apple ID > Abonelikler bölümünden istediğiniz zaman iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar erişiminiz devam eder."
                  : "Go to iPhone Settings > Apple ID > Subscriptions to cancel anytime. You'll retain access until the end of your current billing period."}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === "tr"
                  ? "Plan değiştirebilir miyim?"
                  : "Can I change my plan?"}
              </h3>
              <p className="text-gray-600">
                {language === "tr"
                  ? "Evet, istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Değişiklik hemen geçerli olur."
                  : "Yes, you can upgrade or downgrade your plan anytime. Changes take effect immediately."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
