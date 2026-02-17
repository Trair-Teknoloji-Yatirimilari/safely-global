"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import AppStoreBadge from "./AppStoreBadge";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"></div>
            <span className="text-xl font-bold text-primary-800">SAFELY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.home")}
            </Link>
            <Link href="/#features" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.features")}
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.faq")}
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.support")}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
              className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              {language === "tr" ? "EN" : "TR"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
