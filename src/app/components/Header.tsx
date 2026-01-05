"use client";
import { Home, Info, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import en from "@/app/locales/en.json";
import mn from "@/app/locales/mn.json";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const translations = lang === "en" ? en : mn;

  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/Home";

  const [isTop, setIsTop] = useState(true);
 
  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setIsTop(window.scrollY < 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsTop(false); // Home биш бол тогтмол background-тэй
    }
  }, [isHome]);
  
  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300
        ${isHome ? (isTop ? "bg-transparent text-white text-md" : "bg-[#102B5A] text-[#F5F5F5]") : "bg-[#102B5A] text-[#F5F5F5]"}
      `}
    >
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Brand / Logo */}
        <Link href="/Home" className="text-2xl font-bold invert brightness-50">
          <img 
            src="/Logo.png" 
            alt={translations.brand} 
            className="w-32 h-auto " 
          />
        </Link>

        {/* Menu */}
       <nav className="space-x-6 flex items-center">
          <Link href="/Home" className="hover:text-gray-200 transition flex items-center gap-2">
            <Home size={18} />
            {translations.quickLinks.home}
          </Link>

          {/* <Link href="/components/About" className="hover:text-gray-200 transition flex items-center gap-2">
            <Info size={18} />
            {translations.quickLinks.about}
          </Link> */}

          <Link href="/components/Contact" className="hover:text-gray-200 transition flex items-center gap-2">
            <Phone size={18} />
            {translations.quickLinks.contact}
          </Link>
        </nav>


        {/* Language Switch */}
        <button
          onClick={toggleLang}
          className="ml-6 bg-gray-700 px-3 py-1 rounded hover:bg-gray-900 transition"
        >
          {lang === "en" ? "MN" : "EN"}
        </button>
      </div>
    </header>
  );
};

export default Header;
