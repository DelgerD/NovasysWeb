"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import en from '../locales/en.json';
import mn from '../locales/mn.json';
import {  Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : mn;

  return (
    <footer className="bg-[#102B5A] text-[#F5F5F5] mt-12">
      <div className="container mx-auto py-10 px-4  grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand / About */}
        <div>
          <img 
            src="/Logo.png" 
            alt={`${t.brand} Logo`} 
            className="w-32 h-auto mb-3 invert brightness-50"
          />
        <div className="m-5">
          {/* <h3 className="text-xl font-semibold text-white mb-3">{t.contact}</h3> */}

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
          
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">{t.quickLinks.title}</h3>
          <ul className="space-y-2">
            <li><a href="/Home" className="hover:text-white transition">{t.quickLinks.home}</a></li>
            <li><a href="/components/About" className="hover:text-white transition">{t.quickLinks.about}</a></li>
            <li><a href="/components/Service" className="hover:text-white transition">{t.quickLinks.service}</a></li>
            <li><a href="/components/Contact" className="hover:text-white transition">{t.quickLinks.contact}</a></li>
            <li><a href="/components/login" className="hover:text-white transition">{t.quickLinks.login}</a></li>
          </ul>
        </div>
        

        {/* Quick Links */}
        
         <div>
    <h3 className="text-xl font-semibold text-white mb-3">{t.quickLinks.social}</h3>
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
        © {new Date().getFullYear()} {t.brand}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
