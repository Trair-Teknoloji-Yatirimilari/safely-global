"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface AppStoreBadgeProps {
  size?: "small" | "large";
  platform?: "ios" | "android" | "both";
}

export default function AppStoreBadge({ size = "large", platform = "both" }: AppStoreBadgeProps) {
  const { language, t } = useLanguage();
  
  // App Store & Google Play links - Yayınlandığında güncellenecek
  const appStoreUrl = "#"; // TODO: App Store linkini ekle
  const playStoreUrl = "#"; // TODO: Google Play linkini ekle
  
  const isLarge = size === "large";
  const showBoth = platform === "both";
  
  const AppStoreButton = () => (
    <div className="relative inline-block">
      <a
        href={appStoreUrl}
        onClick={(e) => {
          e.preventDefault();
          alert(language === "tr" ? "Yakında App Store'da!" : "Coming soon on App Store!");
        }}
        className={`inline-block transition-transform hover:scale-105 cursor-pointer ${
          isLarge ? "h-14" : "h-10"
        }`}
      >
        <svg
          className={isLarge ? "h-14" : "h-10"}
          viewBox="0 0 135 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="135" height="40" rx="5" fill="black"/>
          <path d="M24.769 20.301c-.047-3.225 2.639-4.791 2.761-4.863-1.511-2.203-3.853-2.504-4.671-2.535-1.983-.207-3.887 1.157-4.898 1.157-1.026 0-2.6-1.14-4.273-1.108-2.193.033-4.212 1.272-5.337 3.229-2.287 3.968-.584 9.837 1.632 13.055 1.087 1.578 2.378 3.346 4.074 3.283 1.64-.067 2.259-1.055 4.241-1.055 1.967 0 2.553 1.055 4.289 1.019 1.774-.028 2.894-1.586 3.964-3.173 1.24-1.837 1.751-3.615 1.782-3.707-.039-.016-3.409-1.302-3.564-5.302z" fill="white"/>
          <path d="M22.037 12.211c.9-1.091 1.506-2.596 1.34-4.101-1.296.053-2.87.863-3.8 1.947-.834.965-1.564 2.508-1.368 3.985 1.448.112 2.928-.735 3.828-1.831z" fill="white"/>
          <text x="40" y="15" fill="white" fontSize="9" fontFamily="Arial, sans-serif">
            {language === "tr" ? "App Store'dan" : "Download on the"}
          </text>
          <text x="40" y="28" fill="white" fontSize={language === "tr" ? "5" : "11"} fontFamily="Arial, sans-serif" fontWeight={language === "tr" ? "normal" : "bold"}>
            {language === "tr" ? "Yakında" : "Coming Soon"}
          </text>
        </svg>
      </a>
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs px-2 py-1 rounded-full text-black font-semibold">
        {t("badge.soon")}
      </span>
    </div>
  );

  const PlayStoreButton = () => (
    <div className="relative inline-block">
      <a
        href={playStoreUrl}
        onClick={(e) => {
          e.preventDefault();
          alert(language === "tr" ? "Yakında Google Play'de!" : "Coming soon on Google Play!");
        }}
        className={`inline-block transition-transform hover:scale-105 cursor-pointer ${
          isLarge ? "h-14" : "h-10"
        }`}
      >
        <svg
          className={isLarge ? "h-14" : "h-10"}
          viewBox="0 0 135 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="135" height="40" rx="5" fill="black"/>
          <path d="M8 7.5L22 20L8 32.5V7.5Z" fill="url(#paint0_linear)" />
          <path d="M22 20L8 7.5L26 16L22 20Z" fill="url(#paint1_linear)" />
          <path d="M22 20L26 24L8 32.5L22 20Z" fill="url(#paint2_linear)" />
          <path d="M22 20L26 16L26 24L22 20Z" fill="url(#paint3_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="8" y1="7.5" x2="22" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D7FE"/>
              <stop offset="1" stopColor="#0095D5"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="8" y1="7.5" x2="26" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD800"/>
              <stop offset="1" stopColor="#FF8A00"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="8" y1="32.5" x2="26" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF3A44"/>
              <stop offset="1" stopColor="#B11162"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="22" y1="20" x2="26" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00E676"/>
              <stop offset="1" stopColor="#00C853"/>
            </linearGradient>
          </defs>
          <text x="40" y="15" fill="white" fontSize="7" fontFamily="Arial, sans-serif">
            {language === "tr" ? "Google Play'de" : "GET IT ON"}
          </text>
          <text x="40" y="28" fill="white" fontSize={language === "tr" ? "5" : "9"} fontFamily="Arial, sans-serif" fontWeight={language === "tr" ? "normal" : "bold"}>
            {language === "tr" ? "Yakında" : "Coming Soon"}
          </text>
        </svg>
      </a>
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs px-2 py-1 rounded-full text-black font-semibold">
        {t("badge.soon")}
      </span>
    </div>
  );

  if (showBoth) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <AppStoreButton />
        <PlayStoreButton />
      </div>
    );
  }

  return platform === "ios" ? <AppStoreButton /> : <PlayStoreButton />;
}
