"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-[#102B5A] text-[#F5F5F5] mt-12">
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand / About */}
        <div>
          <img 
            src="/Logo.png" 
            alt={lang === "en" ? "NovaSys Logo" : "NovaSys Лого"} 
            className="w-32 h-auto mb-3 invert brightness-50"
          />
          <div className="m-5">
            <div className="flex items-center space-x-3 mb-2">
              <Phone size={20} />
              <p>{lang === "en" ? "+976 89808252" : "+976 89808252"}</p>
            </div>

            <div className="flex items-center space-x-3 mb-2">
              <Mail size={20} />
              <p>{lang === "en" ? "Sales@novastd.com" : "Sales@novastd.com"}</p>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin size={20} />
              <p>{lang === "en" ? "Chinggis Ave Building #90, HUD - 3 khoroo, Ulaanbaatar 17060" : "Чингисийн өргөн чөлөө Building #90, HUD - 3 хороо, Улаанбаатар 17060"}</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            {lang === "en" ? "Quick Links" : "Хурдан холбоосууд"}
          </h3>
          <ul className="space-y-2">
            <li><a href="/Home" className="hover:text-white transition">{lang === "en" ? "Home" : "Нүүр"}</a></li>
            <li><a href="/components/About" className="hover:text-white transition">{lang === "en" ? "About" : "Бидний тухай"}</a></li>
            <li><a href="/components/Contact" className="hover:text-white transition">{lang === "en" ? "Contact" : "Холбоо барих"}</a></li>
            <li><a href="/components/login" className="hover:text-white transition">{lang === "en" ? "Login" : "Нэвтрэх"}</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            {lang === "en" ? "Social" : "Сошиал"}
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Facebook size={20} className="text-white" />
              <a href="https://www.facebook.com/profile.php?id=61579717915984" className="hover:text-white transition">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={20} className="text-white" />
              <a href="https://instagram.com" className="hover:text-white transition">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={20} className="text-white" />
              <a href="https://linkedin.com" className="hover:text-white transition">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-4 text-center text-gray-500">
        © {new Date().getFullYear()} NovaSys. {lang === "en" ? "All rights reserved." : "Бүх эрх хуулиар хамгаалагдсан."}
      </div>
    </footer>
  );
};

export default Footer;
