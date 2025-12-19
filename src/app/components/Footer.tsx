"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import en from "@/app/locales/en.json";
import mn from "@/app/locales/mn.json";

const Footer = () => {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : mn;

  return (
    <footer className="bg-[#102B5A] text-[#F5F5F5] mt-12">
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand / About */}
        <div>
          <img 
            src="/Logo.png" 
            alt={`${t.brand} Logo`} 
            className="w-32 h-auto mb-3 invert brightness-50"
          />

          <p className="mt-3 text-gray-400">{t.brandDescription}</p>

          <div className="flex space-x-4 mt-4">
            <a href="https://twitter.com" className="hover:text-white transition">Twitter</a>
            <a href="https://github.com" className="hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{t.contact}</h3>

          <div className="flex items-center space-x-3 mb-2">
            <Phone size={20} />
            <p>{t.phone}</p>
          </div>

          <div className="flex items-center space-x-3 mb-2">
            <Mail size={20} />
            <p>{t.email}</p>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin size={20} />
            <p>{t.location}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{t.quickLinks.title}</h3>
          <ul className="space-y-2">
            <li><a href="/Home" className="hover:text-white transition">{t.quickLinks.home}</a></li>
            <li><a href="/about" className="hover:text-white transition">{t.quickLinks.about}</a></li>
            <li><a href="/contact" className="hover:text-white transition">{t.quickLinks.contact}</a></li>
            <li><a href="/components/login" className="hover:text-white transition">{t.quickLinks.login}</a></li>
          </ul>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-4 text-center text-gray-500">
        © {new Date().getFullYear()} {t.brand}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
