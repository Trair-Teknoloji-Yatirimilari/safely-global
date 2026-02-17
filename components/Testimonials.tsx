"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonial1.name"),
      role: t("testimonial1.role"),
      text: t("testimonial1.text"),
      rating: 5,
    },
    {
      name: t("testimonial2.name"),
      role: t("testimonial2.role"),
      text: t("testimonial2.text"),
      rating: 5,
    },
    {
      name: t("testimonial3.name"),
      role: t("testimonial3.role"),
      text: t("testimonial3.text"),
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-gray-600">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
