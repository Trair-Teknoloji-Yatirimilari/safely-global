"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function FAQPreview() {
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq1.q"), a: t("faq1.a") },
    { q: t("faq2.q"), a: t("faq2.a") },
    { q: t("faq3.q"), a: t("faq3.a") },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">{t("faq.title")}</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-block text-primary-600 hover:text-primary-700 font-semibold"
          >
            {t("faq.viewAll")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
