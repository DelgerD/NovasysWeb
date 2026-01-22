"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { LanguageProvider } from "./context/LanguageContext";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // одоогийн URL-г авах

  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#ffffff" }}
      >
        <LanguageProvider>
          {/* /admin замд Header харуулахгүй */}
          {!isAdminRoute && <Header />}

          <main>{children}</main>

          {/* /admin замд Footer харуулахгүй */}
          {!isAdminRoute && <Footer />}
        </LanguageProvider>
      </body>
    </html>
  );
}
