"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import { useState } from "react";

export default function Screenshots() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Ekran görüntüsü dosya isimleri - public/screenshots/ klasöründe olmalı
  const screenshots = [
    "screenshot1.png",
    "screenshot2.png", 
    "screenshot3.png",
    "screenshot4.png",
    "screenshot5.png",
    "screenshot6.png",
    "screenshot7.png",
    "screenshot8.png"
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              {t("screenshots.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("screenshots.subtitle")}
            </p>
          </div>

          {/* Desktop view - Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 mb-8">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ aspectRatio: '9/19' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src={`/screenshots/${screenshot}`}
                  alt={`SAFELY Screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <p className="text-white text-sm font-medium">{t("screenshots.screen")} {index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view - Horizontal scroll */}
          <div className="md:hidden relative">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-xl overflow-hidden snap-center"
                  style={{ aspectRatio: '9/19' }}
                >
                  <Image
                    src={`/screenshots/${screenshot}`}
                    alt={`SAFELY Screenshot ${index + 1}`}
                    width={256}
                    height={554}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {screenshots.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-primary-300"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-md w-full" style={{ aspectRatio: '9/19' }}>
            <Image
              src={`/screenshots/${screenshots[selectedImage]}`}
              alt={`SAFELY Screenshot ${selectedImage + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`w-3 h-3 rounded-full transition ${
                  index === selectedImage ? "bg-white" : "bg-white/40"
                }`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
