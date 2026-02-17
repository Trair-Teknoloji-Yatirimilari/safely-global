"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  tr: {
    // Navbar
    "nav.home": "Ana Sayfa",
    "nav.features": "Özellikler",
    "nav.pricing": "Fiyatlandırma",
    "nav.faq": "SSS",
    "nav.support": "Destek",
    "nav.download": "İndir",
    
    // Badge
    "badge.soon": "Yakında",
    
    // Hero
    "hero.title": "SAFELY",
    "hero.tagline": "Check-in. Stay connected. Feel safe.",
    "hero.description": "Sevdiklerinizle bağlantıda kalın. Akıllı check-in, konum paylaşımı ve anlık bildirimler ile güvende hissedin.",
    "hero.cta": "Yakında iOS ve Android'de",
    "hero.disclaimer": "SAFELY profesyonel yardım servisi yerine geçmez. Acil durumlarda 112'yi arayın.",
    
    // Trust Bullets
    "trust.location": "Konum Paylaşımı",
    "trust.checkin": "Check-in",
    "trust.emergency": "Anlık Bildirimler",
    "trust.privacy": "Gizlilik Odaklı",
    
    // Features
    "features.title": "Özellikler",
    "features.subtitle": "Güvenliğiniz için tasarlandı",
    "feature1.title": "Akıllı Check-in",
    "feature1.desc": "Belirli zamanlarda otomatik check-in yapın. Sevdikleriniz güvende olduğunuzu bilsin.",
    "feature2.title": "Güvenli Konum Paylaşımı",
    "feature2.desc": "Konumunuzu sadece güvendiğiniz kişilerle paylaşın. Tam kontrol sizde.",
    "feature3.title": "Hızlı Yardım Çağrısı",
    "feature3.desc": "Yardıma ihtiyacınız olduğunda tek tuşla güven çemberinizi bilgilendirin.",
    "feature4.title": "Zamanlanmış Kontrol",
    "feature4.desc": "Hatırlatmalar ile düzenli check-in yapın. Unutmayın.",
    "feature5.title": "Güven Çemberi",
    "feature5.desc": "Güvendiğiniz kişileri ekleyin. Onlar da sizi takip edebilsin.",
    "feature6.title": "Çoklu Dil Desteği",
    "feature6.desc": "Türkçe, İngilizce ve daha fazla dilde kullanın.",
    
    // How It Works
    "how.title": "Nasıl Çalışır?",
    "how.step1.title": "1. Hesap Oluşturun",
    "how.step1.desc": "Hızlı ve kolay kayıt olun. Telefon numarası opsiyonel.",
    "how.step2.title": "2. Güven Çemberinizi Ekleyin",
    "how.step2.desc": "Sevdiklerinizi davet edin ve güven çemberinizi oluşturun.",
    "how.step3.title": "3. Check-in Yapın",
    "how.step3.desc": "Düzenli check-in yapın. Onlar da sizin güvende olduğunuzu bilsin.",
    
    // Screenshots
    "screenshots.title": "Uygulama Ekranları",
    "screenshots.subtitle": "SAFELY'nin kullanıcı dostu arayüzünü keşfedin",
    
    // FAQ
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.viewAll": "Tümünü Gör",
    "faq1.q": "Konum paylaşımı nasıl çalışır?",
    "faq1.a": "Konumunuzu sadece güvendiğiniz kişilerle paylaşırsınız. İstediğiniz zaman kapatabilirsiniz.",
    "faq2.q": "Check-in nedir?",
    "faq2.a": "Belirli zamanlarda güvende olduğunuzu bildirmeniz için hatırlatma sistemidir.",
    "faq3.q": "Verilerim güvende mi?",
    "faq3.a": "Evet. Verileriniz şifrelenir ve asla üçüncü taraflarla paylaşılmaz.",
    
    // CTA Band
    "cta.title": "Bugün Başlayın",
    "cta.subtitle": "SAFELY'yi indirin ve güvende hissedin.",
    "cta.button": "App Store'dan İndir",
    
    // Stats
    "stats.downloads": "İndirme",
    "stats.rating": "Puan",
    "stats.countries": "Ülke",
    "stats.activeUsers": "Aktif Kullanıcı",
    
    // Testimonials
    "testimonials.title": "Kullanıcılarımız Ne Diyor?",
    "testimonials.subtitle": "Binlerce mutlu kullanıcıdan bazıları",
    "testimonial1.name": "Ayşe K.",
    "testimonial1.role": "Öğrenci",
    "testimonial1.text": "Gece geç saatlerde eve dönerken ailem beni takip edebiliyor. Kendimi çok daha güvende hissediyorum.",
    "testimonial2.name": "Mehmet Y.",
    "testimonial2.role": "Yazılım Geliştirici",
    "testimonial2.text": "Seyahat ederken eşim ve çocuklarımla bağlantıda kalmak için mükemmel. Basit ve kullanışlı.",
    "testimonial3.name": "Zeynep A.",
    "testimonial3.role": "Öğretmen",
    "testimonial3.text": "Check-in özelliği harika. Yaşlı annem için kullanıyorum, her gün düzenli olarak haber alıyorum.",
    
    // Footer
    "footer.company": "TrairX Technology O.Ü",
    "footer.description": "Güvenliğiniz için tasarlandı.",
    "footer.links": "Bağlantılar",
    "footer.legal": "Yasal",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Kullanım Koşulları",
    "footer.support": "Destek",
    "footer.rights": "Tüm hakları saklıdır.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.support": "Support",
    "nav.download": "Download",
    
    // Badge
    "badge.soon": "Soon",
    
    // Hero
    "hero.title": "SAFELY",
    "hero.tagline": "Check-in. Stay connected. Feel safe.",
    "hero.description": "Stay connected with your loved ones. Feel safe with smart check-ins, location sharing, and instant notifications.",
    "hero.cta": "Coming Soon on iOS & Android",
    "hero.disclaimer": "SAFELY is not a substitute for professional help services. Call 112 in emergencies.",
    
    // Trust Bullets
    "trust.location": "Location Sharing",
    "trust.checkin": "Check-in",
    "trust.emergency": "Instant Notifications",
    "trust.privacy": "Privacy Focused",
    
    // Features
    "features.title": "Features",
    "features.subtitle": "Designed for your safety",
    "feature1.title": "Smart Check-in",
    "feature1.desc": "Automatic check-ins at scheduled times. Let your loved ones know you're safe.",
    "feature2.title": "Secure Location Sharing",
    "feature2.desc": "Share your location only with trusted contacts. You're in full control.",
    "feature3.title": "Quick Help Alert",
    "feature3.desc": "Notify your trust circle instantly with one tap when you need help.",
    "feature4.title": "Scheduled Reminders",
    "feature4.desc": "Get reminders for regular check-ins. Never forget.",
    "feature5.title": "Trust Circle",
    "feature5.desc": "Add trusted contacts. They can follow you too.",
    "feature6.title": "Multi-language Support",
    "feature6.desc": "Use in Turkish, English, and more languages.",
    
    // How It Works
    "how.title": "How It Works?",
    "how.step1.title": "1. Create Account",
    "how.step1.desc": "Quick and easy registration. Phone number is optional.",
    "how.step2.title": "2. Add Your Trust Circle",
    "how.step2.desc": "Invite your loved ones and build your trust circle.",
    "how.step3.title": "3. Check-in",
    "how.step3.desc": "Regular check-ins. Let them know you're safe.",
    
    // Screenshots
    "screenshots.title": "App Screenshots",
    "screenshots.subtitle": "Discover SAFELY's user-friendly interface",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.viewAll": "View All",
    "faq1.q": "How does location sharing work?",
    "faq1.a": "You share your location only with trusted contacts. You can turn it off anytime.",
    "faq2.q": "What is check-in?",
    "faq2.a": "It's a reminder system to let others know you're safe at scheduled times.",
    "faq3.q": "Is my data safe?",
    "faq3.a": "Yes. Your data is encrypted and never shared with third parties.",
    
    // CTA Band
    "cta.title": "Get Started Today",
    "cta.subtitle": "Download SAFELY and feel safe.",
    "cta.button": "Download on App Store",
    
    // Stats
    "stats.downloads": "Downloads",
    "stats.rating": "Rating",
    "stats.countries": "Countries",
    "stats.activeUsers": "Active Users",
    
    // Testimonials
    "testimonials.title": "What Our Users Say",
    "testimonials.subtitle": "Hear from thousands of happy users",
    "testimonial1.name": "Sarah K.",
    "testimonial1.role": "Student",
    "testimonial1.text": "My family can track me when I'm coming home late at night. I feel much safer now.",
    "testimonial2.name": "Michael Y.",
    "testimonial2.role": "Software Developer",
    "testimonial2.text": "Perfect for staying connected with my wife and kids while traveling. Simple and useful.",
    "testimonial3.name": "Emma A.",
    "testimonial3.role": "Teacher",
    "testimonial3.text": "The check-in feature is amazing. I use it for my elderly mother, getting regular updates every day.",
    
    // Footer
    "footer.company": "TrairX Technology O.Ü",
    "footer.description": "Designed for your safety.",
    "footer.links": "Links",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.support": "Support",
    "footer.rights": "All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
