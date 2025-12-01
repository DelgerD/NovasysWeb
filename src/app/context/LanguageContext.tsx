"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Lang = "en" | "mn";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang: Lang = lang === "en" ? "mn" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
