"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import en from "@/app/locales/en.json";
import mn from "@/app/locales/mn.json";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const translations = lang === "en" ? en : mn;

  return (
    <header className="bg-gray-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Brand / Logo */}
        <Link href="/Home" className="text-2xl font-bold">
           <img 
            src="/Logo.png" 
            alt={translations.brand} 
            className="w-32 h-auto" 
          />
        </Link>

        {/* Menu */}
        <nav className="space-x-6">
          <Link href="/Home" className="hover:text-gray-200 transition">
            {translations.quickLinks.home}
          </Link>
          <Link href="/components/About" className="hover:text-gray-200 transition">
            {translations.quickLinks.about}
          </Link>
          <Link href="/components/Contact" className="hover:text-gray-200 transition">
            {translations.quickLinks.contact}
          </Link>
        </nav>

        {/* Language Switch */}
        <button
          onClick={toggleLang}
          className="ml-6 bg-gray-600 px-3 py-1 rounded hover:bg-gray-900 transition"
        >
          {lang === "en" ? "MN" : "EN"}
        </button>
      </div>
    </header>
  );
};

export default Header;
