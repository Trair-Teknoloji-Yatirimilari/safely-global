"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

type BillingPeriod = "monthly" | "yearly";

export default function PricingPage() {
  const { language } = useLanguage();
  const [loading, setLoading] = useState<string | null>(null);
  const [premiumPeriod, setPremiumPeriod] = useState<BillingPeriod>("monthly");
  const [vipPeriod, setVipPeriod] = useState<BillingPeriod>("monthly");

  const handleSubscribe = async (priceId: string, planName: string) => {
    setLoading(planName);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error:", error);
      alert(language === "tr" ? "Bir hata oluştu. Lütfen tekrar deneyin." : "An error occurred. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  // Price IDs from environment variables
  const priceIds = {
    premiumMonthly: process.env.NEXT_PUBLIC_PRICE_PREMIUM_MONTHLY || "price_premium_monthly",
    premiumYearly: process.env.NEXT_PUBLIC_PRICE_PREMIUM_YEARLY || "price_premium_yearly",
    vipMonthly: process.env.NEXT_PUBLIC_PRICE_VIP_MONTHLY || "price_vip_monthly",
    vipYearly: process.env.NEXT_PUBLIC_PRICE_VIP_YEARLY || "price_vip_yearly",
  };

  const content = {
    tr: {
      title: "Fiyatlandırma",
      subtitle: "Size uygun planı seçin",
      trial: "🎁 7 gün ücretsiz deneme",
      monthly: "Aylık",
      yearly: "Yıllık",
      save: "2 ay bedava",
      basic: {
        name: "Basic",
        price: "Ücretsiz",
        description: "Temel güvenlik özellikleri",
        features: [
          "Check-in: Günde 1",
          "Güven Kişisi: 1 kişi",
          "Bildirimler: Push",
          "Hatırlatma: Sınırsız",
          "Dijital Mektup: 1 adet",
          "Check-in Modları: 1 (Normal)",
        ],
        limitations: [
          "Aile Oluşturma",
          "Konum Paylaşımı",
          "Öncelikli Destek",
          "Özel Temsilci",
          "VIP Destek",
        ],
        cta: "Ücretsiz Başla",
      },
      premium: {
        name: "Premium",
        monthlyPrice: "$9.99",
        yearlyPrice: "$99.99",
        description: "Gelişmiş özellikler ve sınırsız kullanım",
        activationNote: "⚡ 30 dakika içinde plan aktif olacaktır",
        features: [
          "Check-in: Sınırsız",
          "Güven Kişisi: 5 kişi",
          "Aile Oluşturma: 5 üye",
          "Bildirimler: Push + SMS",
          "Hatırlatma: Sınırsız",
          "Dijital Mektup: 10/ay",
          "Check-in Modları: 7 mod",
          "Konum Paylaşımı",
          "Öncelikli Destek",
        ],
        limitations: [
          "Özel Temsilci",
          "VIP Destek",
          "Yakın Takip Modu",
        ],
        cta: "Abone Ol",
      },
      vip: {
        name: "VIP",
        monthlyPrice: "$99.99",
        yearlyPrice: "$990",
        description: "Kurumsal ve aileler için tam paket",
        activationNote: "⚡ 30 dakika içinde plan aktif olacaktır",
        features: [
          "Check-in: Sınırsız",
          "Güven Kişisi: Sınırsız",
          "Aile Oluşturma: Sınırsız üye",
          "Bildirimler: Push + SMS + Arama",
          "Hatırlatma: Sınırsız",
          "Dijital Mektup: Sınırsız",
          "Check-in Modları: 8 mod",
          "Yakın Takip Modu",
          "Konum Paylaşımı",
          "Öncelikli Destek",
          "Özel Temsilci",
          "VIP Destek Hizmeti",
        ],
        cta: "Abone Ol",
      },
    },
    en: {
      title: "Pricing",
      subtitle: "Choose the plan that fits you",
      trial: "🎁 7-day free trial",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 2 months",
      basic: {
        name: "Basic",
        price: "Free",
        description: "Essential safety features",
        features: [
          "Check-in: 1 per day",
          "Trust Circle: 1 person",
          "Notifications: Push",
          "Reminders: Unlimited",
          "Digital Letter: 1",
          "Check-in Modes: 1 (Normal)",
        ],
        limitations: [
          "Family Creation",
          "Location Sharing",
          "Priority Support",
          "Dedicated Agent",
          "VIP Support",
        ],
        cta: "Start Free",
      },
      premium: {
        name: "Premium",
        monthlyPrice: "$9.99",
        yearlyPrice: "$99.99",
        description: "Advanced features and unlimited usage",
        activationNote: "⚡ Plan will be activated within 30 minutes",
        features: [
          "Check-in: Unlimited",
          "Trust Circle: 5 people",
          "Family Creation: 5 members",
          "Notifications: Push + SMS",
          "Reminders: Unlimited",
          "Digital Letter: 10/month",
          "Check-in Modes: 7 modes",
          "Location Sharing",
          "Priority Support",
        ],
        limitations: [
          "Dedicated Agent",
          "VIP Support",
          "Close Follow Mode",
        ],
        cta: "Subscribe",
      },
      vip: {
        name: "VIP",
        monthlyPrice: "$99.99",
        yearlyPrice: "$990",
        description: "Complete package for enterprise and families",
        activationNote: "⚡ Plan will be activated within 30 minutes",
        features: [
          "Check-in: Unlimited",
          "Trust Circle: Unlimited",
          "Family Creation: Unlimited",
          "Notifications: Push + SMS + Call",
          "Reminders: Unlimited",
          "Digital Letter: Unlimited",
          "Check-in Modes: 8 modes",
          "Close Follow Mode",
          "Location Sharing",
          "Priority Support",
          "Dedicated Agent",
          "VIP Support Service",
        ],
        cta: "Subscribe",
      },
    },
  };

  const data = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            {data.subtitle}
          </h1>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 rounded-full border border-green-200">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-base text-gray-700 font-semibold">
              {data.trial}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 select-none flex flex-col hover:shadow-xl transition-shadow duration-300 min-h-[700px]">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {data.basic.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {data.basic.price}
                </span>
              </div>
              <p className="text-sm text-gray-600">{data.basic.description}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {data.basic.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
              {data.basic.limitations.map((limitation, idx) => (
                <li key={`limit-${idx}`} className="flex items-start opacity-50">
                  <svg
                    className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500 text-sm line-through">{limitation}</span>
                </li>
              ))}
            </ul>

            <button
              disabled
              className="w-full py-3 rounded-lg font-semibold bg-gray-200 text-gray-600 cursor-not-allowed mt-auto"
            >
              {data.basic.cta}
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border-2 border-primary-500 transform md:scale-105 select-none flex flex-col hover:shadow-2xl transition-all duration-300 min-h-[700px]">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {language === "tr" ? "⭐ En Popüler" : "⭐ Most Popular"}
              </span>
            </div>

            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {data.premium.name}
              </h3>

              {/* Billing Period Toggle */}
              <div className="flex items-center justify-center gap-2 mb-4 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setPremiumPeriod("monthly")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition ${
                    premiumPeriod === "monthly"
                      ? "bg-white text-primary-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {data.monthly}
                </button>
                <button
                  onClick={() => setPremiumPeriod("yearly")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition relative ${
                    premiumPeriod === "yearly"
                      ? "bg-white text-primary-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {data.yearly}
                  {premiumPeriod === "yearly" && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                      {data.save}
                    </span>
                  )}
                </button>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-primary-900">
                  {premiumPeriod === "monthly" ? data.premium.monthlyPrice : data.premium.yearlyPrice}
                </span>
                <span className="text-gray-600">
                  {premiumPeriod === "monthly" ? (language === "tr" ? "/ay" : "/month") : (language === "tr" ? "/yıl" : "/year")}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{data.premium.description}</p>
              <p className="text-xs text-green-600 font-semibold bg-green-50 px-3 py-2 rounded-lg">
                {data.premium.activationNote}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {data.premium.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
              {data.premium.limitations.map((limitation, idx) => (
                <li key={`limit-${idx}`} className="flex items-start opacity-50">
                  <svg
                    className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500 text-sm line-through">{limitation}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSubscribe(
                premiumPeriod === "monthly" ? priceIds.premiumMonthly : priceIds.premiumYearly,
                `Premium ${premiumPeriod === "monthly" ? "Monthly" : "Yearly"}`
              )}
              disabled={loading === `Premium ${premiumPeriod === "monthly" ? "Monthly" : "Yearly"}`}
              className="w-full py-3 rounded-lg font-semibold bg-primary-600 text-white hover:bg-primary-700 disabled:bg-primary-400 transition mt-auto shadow-lg hover:shadow-xl"
            >
              {loading === `Premium ${premiumPeriod === "monthly" ? "Monthly" : "Yearly"}` ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {language === "tr" ? "Yükleniyor..." : "Loading..."}
                </span>
              ) : (
                data.premium.cta
              )}
            </button>
          </div>

          {/* VIP Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-500 select-none flex flex-col hover:shadow-xl transition-shadow duration-300 min-h-[700px]">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {data.vip.name}
              </h3>

              {/* Billing Period Toggle */}
              <div className="flex items-center justify-center gap-2 mb-4 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setVipPeriod("monthly")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition ${
                    vipPeriod === "monthly"
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {data.monthly}
                </button>
                <button
                  onClick={() => setVipPeriod("yearly")}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition relative ${
                    vipPeriod === "yearly"
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {data.yearly}
                  {vipPeriod === "yearly" && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                      {data.save}
                    </span>
                  )}
                </button>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-purple-900">
                  {vipPeriod === "monthly" ? data.vip.monthlyPrice : data.vip.yearlyPrice}
                </span>
                <span className="text-gray-600">
                  {vipPeriod === "monthly" ? (language === "tr" ? "/ay" : "/month") : (language === "tr" ? "/yıl" : "/year")}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{data.vip.description}</p>
              <p className="text-xs text-green-600 font-semibold bg-green-50 px-3 py-2 rounded-lg">
                {data.vip.activationNote}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {data.vip.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSubscribe(
                vipPeriod === "monthly" ? priceIds.vipMonthly : priceIds.vipYearly,
                `VIP ${vipPeriod === "monthly" ? "Monthly" : "Yearly"}`
              )}
              disabled={loading === `VIP ${vipPeriod === "monthly" ? "Monthly" : "Yearly"}`}
              className="w-full py-3 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 disabled:bg-purple-400 transition mt-auto shadow-lg hover:shadow-xl"
            >
              {loading === `VIP ${vipPeriod === "monthly" ? "Monthly" : "Yearly"}` ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {language === "tr" ? "Yükleniyor..." : "Loading..."}
                </span>
              ) : (
                data.vip.cta
              )}
            </button>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {language === "tr" ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
            </h2>
            <p className="text-gray-600">
              {language === "tr" ? "Merak ettiklerinizin cevapları" : "Everything you need to know"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">?</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === "tr"
                      ? "Ücretsiz deneme nasıl çalışır?"
                      : "How does the free trial work?"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "tr"
                      ? "İlk aboneliğinizde 7 gün ücretsiz deneme hakkınız vardır. Deneme süresi sonunda otomatik olarak ücretlendirme başlar. İstediğiniz zaman iptal edebilirsiniz."
                      : "Your first subscription includes a 7-day free trial. Billing starts automatically after the trial period. You can cancel anytime."}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">?</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === "tr"
                      ? "Aboneliğimi nasıl iptal ederim?"
                      : "How do I cancel my subscription?"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "tr"
                      ? "Stripe müşteri portalından istediğiniz zaman iptal edebilirsiniz. İptal sonrası mevcut dönem sonuna kadar erişiminiz devam eder."
                      : "You can cancel anytime from the Stripe customer portal. You'll retain access until the end of your current billing period."}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">?</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === "tr"
                      ? "Plan değiştirebilir miyim?"
                      : "Can I change my plan?"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "tr"
                      ? "Evet, istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Değişiklik hemen geçerli olur."
                      : "Yes, you can upgrade or downgrade your plan anytime. Changes take effect immediately."}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">?</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === "tr"
                      ? "Güvenli ödeme yapabiliyor muyum?"
                      : "Is payment secure?"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "tr"
                      ? "Evet, tüm ödemeler Stripe üzerinden güvenli bir şekilde işlenir. Kredi kartı bilgileriniz bizimle paylaşılmaz."
                      : "Yes, all payments are securely processed through Stripe. Your credit card information is never shared with us."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
