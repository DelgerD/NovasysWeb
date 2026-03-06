import type { Metadata, Viewport } from "next"; // 'use client' байхгүй!
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper"; // Өмнө хийсэн Provider-уудын wrapper
import HeaderFooterWrapper from "./components/HeaderFooterWrapper"; // Шинэ wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  
  // ... бусад metadata
  icons: {
    icon: [
      { url: '/icon.png' }, 
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' }, // Apple төхөөрөмжид зориулсан стандарт хэмжээ
    ],
  },

  title: {
    default: "Nova Sys Std",
    template: "%s | NovaSys",
  },
  description: "NovaSys provides world-class solutions in mining, heavy industry, auto parts, and construction materials.",
  keywords: [
  // --- English (Professional & Industrial) ---
  "NovaSys Mongolia", 
  "Mining Solutions Mongolia", 
  "Heavy Industrial Equipment Mongolia", 
  "Auto Spare Parts Ulaanbaatar", 
  "Construction Materials Mongolia", 
  "Industrial Engineering Services", 
  "Mining Machinery Supplier", 
  "Heavy Duty Truck Parts Mongolia", 
  "Nova Sys Std Mongolia",

  // --- Mongolian (Cyrillic) ---
  "НоваСис Монгол", 
  "Уул уурхайн шийдэл", 
  "Хүнд үйлдвэрлэлийн тоног төхөөрөмж", 
  "Авто сэлбэгийн худалдаа", 
  "Барилгын материалын нийлүүлэлт", 
  "Монгол улсын уул уурхай", 
  "Сэлбэг хэрэгсэл Улаанбаатар", 
  "Үйлдвэрлэлийн инженерчлэл",

  // --- Mongolian Galig (Latin / Search Friendly) ---
  "NovaSys Mongol", 
  "Uul uurhai Mongolia", 
  "Hund uildver Mongol", 
  "Avto selbeg Ulaanbaatar", 
  "Barilgyn material niiluulelt", 
  "Tonog tuuhuurumj Mongol", 
  "Uul uurhain tonog tuuhuurumj", 
  "Nova Sis Std", 
  "Mongol uls mining"
],
  
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102B5A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 1. Эхлээд Provider-ууд (Language, Parallax) */}
        <ClientWrapper>
          {/* 2. Дараа нь Header/Footer-ийн логик */}
          <HeaderFooterWrapper>
            {children}
          </HeaderFooterWrapper>
        </ClientWrapper>
      </body>
    </html>
  );
}