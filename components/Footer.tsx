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
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"></div>
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
