"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "404 - Sayfa Bulunamadı",
      description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
      home: "Ana Sayfaya Dön",
      support: "Destek",
    },
    en: {
      title: "404 - Page Not Found",
      description: "The page you're looking for doesn't exist or may have been moved.",
      home: "Back to Home",
      support: "Support",
    },
  };

  const data = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{data.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 transition shadow-lg"
          >
            {data.home}
          </Link>
          <Link
            href="/support"
            className="px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-gray-50 transition shadow-lg border-2 border-primary-600"
          >
            {data.support}
          </Link>
        </div>

        {/* Decorative illustration */}
        <div className="mt-16 opacity-50">
          <svg
            className="w-64 h-64 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              fill="currentColor"
              className="text-primary-300"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
