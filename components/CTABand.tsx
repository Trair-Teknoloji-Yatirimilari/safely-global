"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreBadge from "./AppStoreBadge";

export default function CTABand() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">{t("cta.title")}</h2>
        <p className="text-xl text-blue-100 mb-8">{t("cta.subtitle")}</p>
        <AppStoreBadge />
      </div>
    </section>
  );
}
