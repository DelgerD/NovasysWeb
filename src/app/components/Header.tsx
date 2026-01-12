"use client";
import { Home, Info, Phone, Hammer } from "lucide-react";
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
        ${isHome ? (isTop ? "bg-transparent text-white text-md " : "bg-white text-black") : "bg-white text-black"}
      `}
    >
      <div className="container mx-auto flex items-center p-4">

  {/* Logo - зүүн талд */}
 <Link href="/Home" className="text-2xl font-bold">
      <img
        src="/Logo.png"
        alt={translations.brand}
        className={`w-32 h-auto mb-3 transition-all duration-300 ${
          isHome && isTop ? "invert brightness-50" : ""
        }`}
      />
    </Link>
  {/* Menu + Language - баруун талд */}
  <div className="ml-auto flex items-center space-x-6">

    <nav className="flex items-center space-x-6">
      <Link href="/Home" className="hover:text-gray-200 transition duration-0  flex items-center gap-2">
        <Home size={18} />
        {translations.quickLinks.home}
      </Link>

  <div className="relative group">
    <button className="hover:text-gray-200 transition   flex items-center gap-2  ">
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
           Auto iin сэлбэг 
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

      <Link href="/components/About" className="hover:text-gray-200 duration-0 transition flex items-center gap-2">
        <Info size={18} />
        {translations.quickLinks.about}
      </Link>

      <Link href="/components/Contact" className="hover:text-gray-200 duration-0 transition flex items-center gap-2">
        <Phone size={18} />
        {translations.quickLinks.contact}
      </Link>
    </nav>

    {/* Language Switch */}
    <button
      onClick={toggleLang}
      className=" px-3 py-1 rounded hover:bg-gray-400 transition"
    >
      {lang === "en" ? "MN" : "EN"}
    </button>

  </div>
</div>
    </header>
  );
};

export default Header;
//NUUR , UILCHILGEE ,bidnii tuhai , HOLBOO BARIH 
//hUDULgoont tonog tohooromjiin selbeg heregsel 
// Hund uildveriin tonog tohooromojiin selbeg heregsel 
// uul uurhain tonog tohooromjiin --
// barilgiin material 