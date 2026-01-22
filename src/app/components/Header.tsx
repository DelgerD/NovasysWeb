"use client";
import { Home, Info, Phone, Hammer, Menu, X } from "lucide-react";
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
            alt={lang === "en" ? "NovaSys Logo" : "NovaSys Лого"}
            className={`w-32 h-auto transition-all duration-300 ${
              isHome && isTop ? "invert brightness-50" : ""
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/Home" className="flex items-center gap-2 duration-0 hover:text-gray-500 transition">
            <Home size={18} />
            {lang === "en" ? "Home" : "Нүүр"}
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-gray-500 transition">
              <Hammer size={18} />
              {lang === "en" ? "Service" : "Үйлчилгээ"}
            </button>
            {/* Dropdown menu */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
              <ul className="flex flex-col">
                <li>
                  <Link href="/components/Service/mining" className="block px-4 py-2 hover:bg-gray-100">
                    {lang === "en" ? "Mining" : "Уул уурхай"}
                  </Link>
                </li>
                <li>
                  <Link href="/components/Service/heavy-industry" className="block px-4 py-2 hover:bg-gray-100">
                    {lang === "en" ? "Heavy Industry" : "Хүнд үйлдвэр"}
                  </Link>
                </li>
                <li>
                  <Link href="/components/Service/moving-industry" className="block px-4 py-2 hover:bg-gray-100">
                    {lang === "en" ? "Auto Parts" : "Авто сэлбэг"}
                  </Link>
                </li>
                <li>
                  <Link href="/components/Service/construction" className="block px-4 py-2 hover:bg-gray-100">
                    {lang === "en" ? "Construction Materials" : "Барилгын материал"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/components/About" className="flex items-center duration-0 gap-2 hover:text-gray-500 transition">
            <Info size={18} />
            {lang === "en" ? "About" : "Бидний тухай"}
          </Link>

          <Link href="/components/Contact" className="flex items-center duration-0 gap-2 hover:text-gray-500 transition">
            <Phone size={18} />
            {lang === "en" ? "Contact" : "Холбоо барих"}
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
      {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-black shadow-md">
            <ul className="flex flex-col p-4 space-y-2">
              <li>
                <Link
                  href="/Home"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)} // ← энд нэмэв
                >
                  {lang === "en" ? "Home" : "Нүүр"}
                </Link>
              </li>
              <li>
                <Link
                  href="/components/Service/mining"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === "en" ? "Mining" : "Уул уурхай"}
                </Link>
              </li>
              <li>
                <Link
                  href="/components/Service/heavy-industry"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === "en" ? "Heavy Industry" : "Хүнд үйлдвэр"}
                </Link>
              </li>
              <li>
                <Link
                  href="/components/Service/moving-industry"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === "en" ? "Auto Parts" : "Авто сэлбэг"}
                </Link>
              </li>
              <li>
                <Link
                  href="/components/Service/construction"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === "en" ? "Construction Materials" : "Барилгын материал"}
                </Link>
              </li>
              <li>
                <Link
                  href="/components/About"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === "en" ? "About" : "Бидний тухай"}
                </Link>
              </li>
              <li>
                <Link
                  href="/components/Contact"
                  className="block px-2 py-2 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {lang === "en" ? "Contact" : "Холбоо барих"}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => { toggleLang(); setMobileMenuOpen(false); }} // ← энд бас хаах
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
