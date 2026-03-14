"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const content = {
    tr: {
      title: "🎉 Abonelik Başarılı!",
      subtitle: "Safely Global Premium/VIP üyeliğiniz aktif edildi.",
      message: "7 günlük ücretsiz deneme süreniz başladı. Bu süre boyunca tüm özelliklere tam erişiminiz var.",
      sessionId: "İşlem ID",
      nextSteps: "Sonraki Adımlar",
      step1: "Safely Global uygulamasını indirin",
      step2: "Hesabınızla giriş yapın",
      step3: "Premium/VIP özelliklerinin keyfini çıkarın",
      backHome: "Ana Sayfaya Dön",
      downloadApp: "Uygulamayı İndir",
    },
    en: {
      title: "🎉 Subscription Successful!",
      subtitle: "Your Safely Global Premium/VIP membership is now active.",
      message: "Your 7-day free trial has started. You have full access to all features during this period.",
      sessionId: "Transaction ID",
      nextSteps: "Next Steps",
      step1: "Download the Safely Global app",
      step2: "Sign in with your account",
      step3: "Enjoy Premium/VIP features",
      backHome: "Back to Home",
      downloadApp: "Download App",
    },
  };

  const data = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 mb-2">{data.subtitle}</p>
            <p className="text-gray-600">{data.message}</p>
          </div>

          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600 mb-1">{data.sessionId}</p>
              <p className="text-xs text-gray-500 font-mono break-all">
                {sessionId}
              </p>
            </div>
          )}

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {data.nextSteps}
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <p className="text-gray-700 pt-1">{data.step1}</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <p className="text-gray-700 pt-1">{data.step2}</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <p className="text-gray-700 pt-1">{data.step3}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              {data.backHome}
            </Link>
            <a
              href="https://apps.apple.com/app/safely-global"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              {data.downloadApp}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
