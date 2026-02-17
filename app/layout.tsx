import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAFELY - Check-in. Stay connected. Feel safe.",
  description: "Sevdiklerinizle bağlantıda kalın. Akıllı check-in, konum paylaşımı ve anlık bildirimler ile güvende hissedin.",
  keywords: "güvenlik, check-in, konum paylaşımı, anlık bildirim, aile güvenliği, safety app, location sharing",
  authors: [{ name: "TrairX Technology O.Ü" }],
  creator: "TrairX Technology O.Ü",
  publisher: "TrairX Technology O.Ü",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.safely-global.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SAFELY - Check-in. Stay connected. Feel safe.",
    description: "Sevdiklerinizle bağlantıda kalın. Akıllı check-in, konum paylaşımı ve anlık bildirimler ile güvende hissedin.",
    url: 'https://www.safely-global.com',
    siteName: 'SAFELY',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // TODO: OG image ekle
        width: 1200,
        height: 630,
        alt: 'SAFELY App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SAFELY - Check-in. Stay connected. Feel safe.",
    description: "Sevdiklerinizle bağlantıda kalın. Akıllı check-in, konum paylaşımı ve anlık bildirimler ile güvende hissedin.",
    images: ['/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SAFELY',
  },
  applicationName: 'SAFELY',
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/app/safely/id123456789', // TODO: Gerçek App Store linkini ekle
      app_store_id: '123456789', // TODO: Gerçek App ID'yi ekle
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
