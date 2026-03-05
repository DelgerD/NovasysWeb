"use client";
import { Home, Info, Phone, Hammer, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/Home";

  const [isTop, setIsTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setIsTop(window.scrollY < 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsTop(false);
    }
  }, [isHome]);

  // Үндсэн стиль (Суурь)
  const navLinkBase = `flex items-center gap-2 font-medium transition-colors hover:text-amber-500`;

  return (
    <header
      className={`fixed w-full top-0 left-0 z-[100] transition-all duration-500
        ${isHome ? (isTop ? "bg-transparent text-white" : "bg-white/95 text-slate-900 shadow-lg backdrop-blur-md") : "bg-white text-slate-900 shadow-md"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between p-4 px-6">
        {/* Logo */}
        <Link href="/Home" className="group z-10">
          <img
            src="/Logo.png"
            alt="NovaSys Logo"
            className={`w-36 h-auto transition-all duration-500 group-hover:scale-105 ${isHome && isTop ? "brightness-0 invert" : ""
              }`}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Нүүр - duration-0 */}
          <Link href="/Home" className={`${navLinkBase} duration-0`}>
            <Home size={18} className={isHome && isTop ? "text-amber-400" : "text-amber-600"} />
            {lang === "en" ? "Home" : "Нүүр"}
          </Link>

          {/* Үйлчилгээ (Service) - duration-300 */}
          <div className="relative group py-2">
            <button className={`${navLinkBase} duration-300 cursor-default`}>
              <Hammer size={18} className={isHome && isTop ? "text-amber-400" : "text-amber-600"} />
              {lang === "en" ? "Services" : "Үйлчилгээ"}
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>

            <div className="absolute top-full right-0 md:left-0 md:right-auto mt-1 w-64 bg-white text-slate-900 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 border border-slate-100 overflow-hidden">
              <div className="flex flex-col">
                {[
                  { href: "/components/Service/mining", mn: "Уул уурхай", en: "Mining" },
                  { href: "/components/Service/heavy-industry", mn: "Хүнд үйлдвэр", en: "Heavy Industry" },
                  { href: "/components/Service/moving-industry", mn: "Авто сэлбэг", en: "Auto Parts" },
                  { href: "/components/Service/construction", mn: "Барилгын материал", en: "Construction Materials" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="px-5 py-3 hover:bg-amber-50 hover:text-amber-600 border-l-4 border-transparent hover:border-amber-500 transition-all duration-200 font-medium"
                  >
                    {lang === "en" ? item.en : item.mn}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Бидний тухай - duration-0 */}
          <Link href="/components/About" className={`${navLinkBase} duration-0`}>
            <Info size={18} className={isHome && isTop ? "text-amber-400" : "text-amber-600"} />
            {lang === "en" ? "About" : "Бидний тухай"}
          </Link>

          {/* Холбоо барих - duration-0 */}
          <Link href="/components/Contact" className={`${navLinkBase} duration-0`}>
            <Phone size={18} className={isHome && isTop ? "text-amber-400" : "text-amber-600"} />
            {lang === "en" ? "Contact" : "Холбоо барих"}
          </Link>

          {/* Language Switch */}
          <button
            onClick={toggleLang}
            className={`ml-4 px-4 py-1.5 rounded-full font-bold text-sm transition-all border
              ${isHome && isTop
                ? "border-white/30 hover:bg-white hover:text-slate-900"
                : "border-black/30 hover:bg-white hover:text-slate-900"}
            `}
          >
            {lang === "en" ? "MN" : "EN"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${isHome && isTop ? "text-white" : "text-slate-900"}`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black shadow-lg border-t border-gray-100 overflow-hidden">
          <ul className="flex flex-col p-4 space-y-1">
            {/* 1. Нүүр */}
            <li>
              <Link
                href="/Home"
                className="block px-3 py-2 hover:bg-gray-100 duration-0 font-medium hover:text-amber-500 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {lang === "en" ? "Home" : "Нүүр"}
              </Link>
            </li>

            {/* 2. Үйлчилгээ (Задардаг хэсэг) */}
            <li className="border-y border-gray-50 py-1">
              <div className="px-3 py-2 text-amber-600 font-bold text-sm uppercase tracking-wider ">
                {lang === "en" ? "Services" : "Үйлчилгээ"}
              </div>
              <ul className="pl-4 space-y-1">
                <li>
                  <Link
                    href="/components/Service/mining"
                    className="block px-3 py-2 hover:bg-amber-50 rounded-lg duration-300 text-gray-700 hover:text-amber-500 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang === "en" ? "Mining" : "Уул уурхай"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/Service/heavy-industry"
                    className="block px-3 py-2 hover:bg-amber-50 rounded-lg duration-300 text-gray-700 hover:text-amber-500 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang === "en" ? "Heavy Industry" : "Хүнд үйлдвэр"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/Service/moving-industry"
                    className="block px-3 py-2 hover:bg-amber-50 rounded-lg duration-300 text-gray-700 hover:text-amber-500 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang === "en" ? "Auto Parts" : "Авто сэлбэг"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components/Service/construction"
                    className="block px-3 py-2 hover:bg-amber-50 rounded-lg duration-300 text-gray-700 hover:text-amber-500 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang === "en" ? "Construction Materials" : "Барилгын материал"}
                  </Link>
                </li>
              </ul>
            </li>

            {/* 3. Бидний тухай */}
            <li>
              <Link
                href="/components/About"
                className="block px-3 py-2 hover:bg-gray-100 duration-0 font-medium hover:text-amber-500 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {lang === "en" ? "About" : "Бидний тухай"}
              </Link>
            </li>

            {/* 4. Холбоо барих */}
            <li>
              <Link
                href="/components/Contact"
                className="block px-3 py-2 hover:bg-gray-100 duration-0 font-medium hover:text-amber-500 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {lang === "en" ? "Contact" : "Холбоо барих"}
              </Link>
            </li>

            {/* 5. Хэл солих */}
            <li className="pt-2">
              <button
                onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
                className="w-full text-center py-3 bg-gray-50 rounded-xl font-bold text-amber-600 border border-gray-100 hover:text-amber-500 rounded-lg"
              >
                {lang === "en" ? "Switch to Mongolian (MN)" : "English хэл рүү шилжих (EN)"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;