"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 L80 25 L80 60 Q80 75 50 90 Q20 75 20 60 L20 25 Z" stroke="#7dd3fc" strokeWidth="4" fill="none"/>
                  <path d="M30 50 L40 55 L50 35 L60 60 L70 50" stroke="#7dd3fc" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold">SAFELY</span>
            </div>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <p className="text-sm text-gray-400">{t("footer.company")}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition">
                  {t("nav.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition">
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition">
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {t("footer.company")}. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
