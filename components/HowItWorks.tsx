"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { title: t("how.step1.title"), desc: t("how.step1.desc") },
    { title: t("how.step2.title"), desc: t("how.step2.desc") },
    { title: t("how.step3.title"), desc: t("how.step3.desc") },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">{t("how.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
