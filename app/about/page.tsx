"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Hakkımızda",
      subtitle: "Geleceğin teknolojisini bugün inşa ediyoruz",
      intro: {
        title: "TrairX Technology O.Ü",
        text: "TrairX Technology O.Ü, yapay zekâ çağının altyapısını inşa etmeyi hedefleyen Estonya merkezli bir teknoloji şirketidir.\n\nBiz yalnızca yazılım geliştirmiyoruz; insan hayatını dönüştüren, güvenliği güçlendiren ve dijital dünyayı daha akıllı hale getiren sistemler tasarlıyoruz.\n\nTrairX'in temel vizyonu, yapay zekâyı günlük yaşamın doğal bir parçası haline getirmek ve onu gerçek dünya problemlerini çözen, ölçülebilir değer üreten bir güce dönüştürmektir.",
      },
      philosophy: {
        title: "Bizim İçin Teknoloji",
        items: [
          "Teknoloji yalnızca kod değildir.",
          "Teknoloji; güven inşa etme aracıdır.",
          "Teknoloji; sınırları kaldıran bir altyapıdır.",
          "Teknoloji; insan potansiyelini büyüten bir güçtür.",
        ],
      },
      focus: {
        title: "Odak Alanlarımız",
        text: "Geliştirdiğimiz ürünler; güvenlik, iletişim, veri analitiği ve yapay zekâ tabanlı karar sistemleri üzerine kuruludur. Her projemizde ölçeklenebilirlik, güvenlik ve küresel erişilebilirlik temel prensiptir.",
      },
      whatWeDo: {
        title: "TrairX Olarak",
        items: [
          {
            icon: "🌍",
            title: "Küresel SaaS Platformları",
            text: "Küresel ölçekte çalışabilecek SaaS platformları geliştiriyoruz",
          },
          {
            icon: "🤖",
            title: "Yapay Zekâ Sistemleri",
            text: "Yapay zekâ destekli asistan sistemleri tasarlıyoruz",
          },
          {
            icon: "🔒",
            title: "Güvenlik Çözümleri",
            text: "Güvenlik ve veri gizliliğini en üst seviyede tutan çözümler üretiyoruz",
          },
          {
            icon: "🚀",
            title: "Dijital Ekosistemler",
            text: "Geleceğin dijital ekosistemlerini bugünden inşa ediyoruz",
          },
        ],
      },
      mission: {
        title: "Amacımız",
        text: "Yalnızca ürün üretmek değil; uzun vadeli bir teknoloji ekosistemi oluşturmaktır.\n\nTrairX, yapay zekânın sadece konuşan bir sistem değil; düşünen, analiz eden ve değer üreten bir altyapı olması gerektiğine inanır. Bu doğrultuda geliştirdiğimiz her çözüm, sürdürülebilir büyüme ve global etki hedefi taşır.",
      },
      tagline: {
        text: "Geleceğin teknolojisini beklemiyoruz.",
        highlight: "Onu inşa ediyoruz.",
      },
      company: {
        title: "Şirket Bilgileri",
        name: "TrairX Technology O.Ü",
        location: "Estonya",
        email: "info@trairx.com",
        website: "www.safely-global.com",
      },
      contact: {
        title: "İletişim",
        text: "Sorularınız veya önerileriniz için bizimle iletişime geçin:",
        cta: "Destek Sayfası",
      },
    },
    en: {
      title: "About Us",
      subtitle: "Building tomorrow's technology today",
      intro: {
        title: "TrairX Technology O.Ü",
        text: "TrairX Technology O.Ü is an Estonia-based technology company aiming to build the infrastructure of the artificial intelligence era.\n\nWe don't just develop software; we design systems that transform human life, strengthen security, and make the digital world smarter.\n\nTrairX's core vision is to make artificial intelligence a natural part of everyday life and transform it into a force that solves real-world problems and generates measurable value.",
      },
      philosophy: {
        title: "For Us, Technology",
        items: [
          "Technology is not just code.",
          "Technology is a tool for building trust.",
          "Technology is an infrastructure that removes boundaries.",
          "Technology is a force that amplifies human potential.",
        ],
      },
      focus: {
        title: "Our Focus Areas",
        text: "Our products are built on security, communication, data analytics, and AI-powered decision systems. Scalability, security, and global accessibility are fundamental principles in every project.",
      },
      whatWeDo: {
        title: "What We Do at TrairX",
        items: [
          {
            icon: "🌍",
            title: "Global SaaS Platforms",
            text: "We develop SaaS platforms that can operate on a global scale",
          },
          {
            icon: "🤖",
            title: "AI-Powered Systems",
            text: "We design AI-powered assistant systems",
          },
          {
            icon: "🔒",
            title: "Security Solutions",
            text: "We create solutions that maintain the highest level of security and data privacy",
          },
          {
            icon: "🚀",
            title: "Digital Ecosystems",
            text: "We build tomorrow's digital ecosystems today",
          },
        ],
      },
      mission: {
        title: "Our Purpose",
        text: "Our purpose is not just to produce products, but to create a long-term technology ecosystem.\n\nTrairX believes that artificial intelligence should not just be a conversational system, but an infrastructure that thinks, analyzes, and creates value. Every solution we develop is designed with the goal of sustainable growth and global impact.",
      },
      tagline: {
        text: "We don't wait for tomorrow's technology.",
        highlight: "We build it.",
      },
      company: {
        title: "Company Information",
        name: "TrairX Technology O.Ü",
        location: "Estonia",
        email: "info@trairx.com",
        website: "www.safely-global.com",
      },
      contact: {
        title: "Contact",
        text: "Get in touch with us for questions or suggestions:",
        cta: "Support Page",
      },
    },
  };

  const data = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-gray-600">{data.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
            {data.intro.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line text-center">
            {data.intro.text}
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
            {data.focus.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {data.focus.text}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
            {data.philosophy.title}
          </h2>
          <div className="space-y-4">
            {data.philosophy.items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-xl text-center"
              >
                <p className="text-lg text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            {data.whatWeDo.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.whatWeDo.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
            {data.mission.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line text-center">
            {data.mission.text}
          </p>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl mb-4">{data.tagline.text}</p>
          <p className="text-3xl md:text-4xl font-bold">{data.tagline.highlight}</p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {data.company.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <p className="text-blue-200 mb-2">
                {language === "tr" ? "Şirket Adı" : "Company Name"}
              </p>
              <p className="text-xl font-semibold">{data.company.name}</p>
            </div>
            <div>
              <p className="text-blue-200 mb-2">
                {language === "tr" ? "Konum" : "Location"}
              </p>
              <p className="text-xl font-semibold">{data.company.location}</p>
            </div>
            <div>
              <p className="text-blue-200 mb-2">
                {language === "tr" ? "E-posta" : "Email"}
              </p>
              <p className="text-xl font-semibold">
                <a
                  href={`mailto:${data.company.email}`}
                  className="hover:text-blue-200 transition"
                >
                  {data.company.email}
                </a>
              </p>
            </div>
            <div>
              <p className="text-blue-200 mb-2">
                {language === "tr" ? "Web Sitesi" : "Website"}
              </p>
              <p className="text-xl font-semibold">{data.company.website}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            {data.contact.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{data.contact.text}</p>
          <Link
            href="/support"
            className="inline-block px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 transition shadow-lg"
          >
            {data.contact.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
