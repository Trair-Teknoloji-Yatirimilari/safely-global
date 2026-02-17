"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: "⏰", title: t("feature1.title"), desc: t("feature1.desc") },
    { icon: "📍", title: t("feature2.title"), desc: t("feature2.desc") },
    { icon: "🚨", title: t("feature3.title"), desc: t("feature3.desc") },
    { icon: "⏱️", title: t("feature4.title"), desc: t("feature4.desc") },
    { icon: "👥", title: t("feature5.title"), desc: t("feature5.desc") },
    { icon: "🌍", title: t("feature6.title"), desc: t("feature6.desc") },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">{t("features.title")}</h2>
          <p className="text-xl text-gray-600">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
