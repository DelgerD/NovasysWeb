"use client";
import { Home, Info, Phone, Hammer, Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import en from '../locales/en.json';
import mn from '../locales/mn.json';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const translations = lang === "en" ? en : mn;

  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/Home";

  const [isTop, setIsTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setIsTop(window.scrollY < 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsTop(false);
    }
  }, [isHome]);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300
        ${isHome ? (isTop ? "bg-transparent text-white" : "bg-white text-black shadow-md") : "bg-white text-black shadow-md"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/Home" className="text-2xl font-bold">
          <img
            src="/Logo.png"
            alt={translations.brand}
            className={`w-32 h-auto transition-all duration-300 ${
              isHome && isTop ? "invert brightness-50" : ""
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/Home" className="flex items-center duration-0 gap-2 hover:text-gray-500 transition">
            <Home size={18} />
            {translations.quickLinks.home}
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-gray-500 transition">
              <Hammer size={18} />
              {translations.quickLinks.service}
            </button>
            {/* Dropdown menu */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
              <ul className="flex flex-col">
                <li>
                  <Link href="/components/Service/mining" className="block px-4 py-2 hover:bg-gray-100">
                    Уул уурхай
                  </Link>
                </li>
                <li>
                  <Link href="/components/Service/heavy-industry" className="block px-4 py-2 hover:bg-gray-100">
                    Хүнд үйлдвэр
                  </Link>
                </li>
                <li>
                  <Link href="/components/Service/moving-industry" className="block px-4 py-2 hover:bg-gray-100">
                    Авто сэлбэг
                  </Link>
                </li>
                <li>
                  <Link href="/components/Service/construction" className="block px-4 py-2 hover:bg-gray-100">
                    Барилгын материал
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/components/About" className="flex items-center duration-0 gap-2 hover:text-gray-500 transition">
            <Info size={18} />
            {translations.quickLinks.about}
          </Link>

          <Link href="/components/Contact" className="flex items-center duration-0 gap-2 hover:text-gray-500 transition">
            <Phone size={18} />
            {translations.quickLinks.contact}
          </Link>

          {/* Language Switch */}
          <button
            onClick={toggleLang}
            className="px-3 py-1 rounded hover:bg-gray-300 transition"
          >
            {lang === "en" ? "MN" : "EN"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded hover:bg-gray-300 transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/Home" className="block px-2 py-2 hover:bg-gray-100">
                {translations.quickLinks.home}
              </Link>
            </li>
            <li>
              <Link href="/components/Service/mining" className="block px-2 py-2 hover:bg-gray-100">
                Уул уурхай
              </Link>
            </li>
            <li>
              <Link href="/components/Service/heavy-industry" className="block px-2 py-2 hover:bg-gray-100">
                Хүнд үйлдвэр
              </Link>
            </li>
            <li>
              <Link href="/components/Service/moving-industry" className="block px-2 py-2 hover:bg-gray-100">
                Авто сэлбэг
              </Link>
            </li>
            <li>
              <Link href="/components/Service/construction" className="block px-2 py-2 hover:bg-gray-100">
                Барилгын материал
              </Link>
            </li>
            <li>
              <Link href="/components/About" className="block px-2 py-2 hover:bg-gray-100">
                {translations.quickLinks.about}
              </Link>
            </li>
            <li>
              <Link href="/components/Contact" className="block px-2 py-2 hover:bg-gray-100">
                {translations.quickLinks.contact}
              </Link>
            </li>
            <li>
              <button
                onClick={toggleLang}
                className="w-full text-left px-2 py-2 hover:bg-gray-100"
              >
                {lang === "en" ? "MN" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

//NUUR , UILCHILGEE ,bidnii tuhai , HOLBOO BARIH 
//hUDULgoont tonog tohooromjiin selbeg heregsel 
// Hund uildveriin tonog tohooromojiin selbeg heregsel 
// uul uurhain tonog tohooromjiin --
// barilgiin material 