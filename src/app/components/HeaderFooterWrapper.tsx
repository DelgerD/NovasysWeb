// src/app/components/HeaderFooterWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function HeaderFooterWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Admin-тай холбоотой бүх замыг шалгана (/admin, /admin/dashboard гэх мэт)
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {/* Admin зам биш бол Header харуулна */}
      {!isAdminRoute && <Header />}
      
      {children}
      
      {/* Admin зам биш бол Footer харуулна */}
      {!isAdminRoute && <Footer />}
    </>
  );
}