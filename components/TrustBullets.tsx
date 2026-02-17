"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function TrustBullets() {
  const { t } = useLanguage();

  const bullets = [
    { icon: "📍", text: t("trust.location") },
    { icon: "✓", text: t("trust.checkin") },
    { icon: "🔔", text: t("trust.emergency") },
    { icon: "🔒", text: t("trust.privacy") },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bullets.map((bullet, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl mb-2">{bullet.icon}</div>
              <p className="text-sm md:text-base font-medium text-gray-700">{bullet.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
