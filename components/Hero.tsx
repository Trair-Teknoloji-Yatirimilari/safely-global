"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreBadge from "./AppStoreBadge";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-2xl md:text-3xl text-primary-700 mb-4 font-light">
            {t("hero.tagline")}
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>

          <AppStoreBadge />

          <p className="mt-8 text-sm text-gray-500 max-w-xl mx-auto">
            ⚠️ {t("hero.disclaimer")}
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
