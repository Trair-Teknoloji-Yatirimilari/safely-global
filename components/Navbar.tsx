"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 L80 25 L80 60 Q80 75 50 90 Q20 75 20 60 L20 25 Z" stroke="#7dd3fc" strokeWidth="4" fill="none"/>
                <path d="M30 50 L40 55 L50 35 L60 60 L70 50" stroke="#7dd3fc" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-primary-800">SAFELY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.home")}
            </Link>
            <Link href="/#features" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.features")}
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.pricing")}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.about")}
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.faq")}
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-primary-600 transition">
              {t("nav.support")}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <span className="text-xl">{currentLanguage?.flag}</span>
                <span className="hidden sm:inline">{currentLanguage?.name}</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'tr' | 'en');
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition ${
                        language === lang.code ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {language === lang.code && (
                        <svg className="w-5 h-5 ml-auto text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
