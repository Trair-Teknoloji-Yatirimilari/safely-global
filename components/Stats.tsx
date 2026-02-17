"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { icon: "📱", value: "10,000+", label: t("stats.downloads") },
    { icon: "⭐", value: "4.8", label: t("stats.rating") },
    { icon: "🌍", value: "50+", label: t("stats.countries") },
    { icon: "👥", value: "5,000+", label: t("stats.activeUsers") },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-primary-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
