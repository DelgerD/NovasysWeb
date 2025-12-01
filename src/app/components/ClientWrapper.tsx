// src/app/components/ClientWrapper.tsx
"use client";

import { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { LanguageProvider } from "@/app/context/LanguageContext";

interface Props {
  children: ReactNode;
}

const ClientWrapper: React.FC<Props> = ({ children }) => {
  return (
    <LanguageProvider>
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </LanguageProvider>
  );
};

export default ClientWrapper;
