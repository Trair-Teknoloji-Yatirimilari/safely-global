"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Hero from "@/components/Hero";
import TrustBullets from "@/components/TrustBullets";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import FAQPreview from "@/components/FAQPreview";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBullets />
      <Stats />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Testimonials />
      <FAQPreview />
      <CTABand />
    </>
  );
}
