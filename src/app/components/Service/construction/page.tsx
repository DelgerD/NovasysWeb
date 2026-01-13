"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { HardHat, Home, Truck, Settings, ArrowRight, Building2, CheckCircle } from "lucide-react";
import Link from "next/link";

const ConstructionPage: React.FC = () => {
  const { lang } = useLanguage();

  const expertise = [
    {
      en: "Mining Solutions",
      mn: "Уул уурхай",
      descEn: "Mining equipment parts.",
      descMn: "Уул уурхайн тоног төхөөрөмж эд анги.",
      icon: <HardHat className="w-6 h-6" />,
      href: "/components/Service/mining"
    },
     {
      en: "Heavy Industry",
      mn: "Хүнд үйлдвэр",
      descEn: "Provide spare parts and accessory maintenance services.",
      descMn: "Хүнд үйлдвэрийн тоног төхөөрөмж: Мотор, хурдны хайрцаг, холбох эд анги, насос, эдгээрийн сэлбэг хэрэгсэл.",
      icon: <Settings className="w-6 h-6" />,
      href: "/components/Service/heavy-industry"
    },
    {
      en: "Moving Equipment",
      mn: "Хөдөлгөөнт тоног төхөөрөмж",
      descEn: "Precision parts for mobile industrial machinery.",
      descMn: "Сэлбэг хэрэгсэл, дагалдах засвар үйлчилгээ үзүүлэх.",
      icon: <Truck className="w-6 h-6" />,
      href: "/components/Service/moving-industry"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#102B5A]">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-amber-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
              {lang === "en" ? "Built to Last" : "Насан туршийн баталгаа"}
            </span> */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
              {lang === "en" ? (
                <>Constructing <span className="text-amber-400">Future</span> Landmarks</>
              ) : (
                <>Ирээдүйн <span className="text-amber-400">Үнэ Цэнийг</span> Бүтээнэ</>
              )}
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
              {lang === "en"
                ? "From solid foundations to refined interior finishing — we bring precision to every stage of construction."
                : "Бат бөх сууриас эхлээд тансаг дотор засал хүртэл — бид барилгын үе шат бүрт нарийн хийц, чанарыг эрхэмлэнэ."}
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <button className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-[#102B5A] font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg">
                {lang === "en" ? "View Projects" : "Төслүүд үзэх"}
              </button> */}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-200 rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">
                {lang === "en" ? "Our Quality Standards" : "Чанарын стандартууд"}
              </h3>
              <div className="space-y-6">
                {[
                  { t: lang === "en" ? "Assembly installation" : "Угсралт суурилуулалт", d: "Eco-friendly Mining" },
                  { t: lang === "en" ? "Provide training on how to use and repair" : "Ашиглах бол засварлах сургалт үзүүлэх", d: "ISO Certified Standards" },
                  { t: lang === "en" ? "Prepare BOM or bill of materials" : "BOM буюу сэлбэгийн задаргаа бэлдэж өгөх", d: "Next-gen Machinery" },
                  { t: lang === "en" ? "Update maintenance plans and reliability results" : "Засварын төлөвлөгөө болон найдвартай ажиллагааны дүн шинэжилгээ хийх", d: "Eco-friendly Mining" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-amber-400/20 p-1.5 rounded-full">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{item.t}</h4>
                      <p className="text-blue-200/50 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#102B5A] mb-8">
            {lang === "en" ? "Full-Cycle Construction Solutions" : "Барилгын иж бүрэн үйлчилгээ"}
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-10 rounded-full" />
          <p className="max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed">
            {lang === "en"
              ? "We provide comprehensive construction services designed for durability, efficiency, and modern architectural standards."
              : "Бид орчин үеийн архитектурын стандарт, үр ашиг, удаан эдэлгээнд нийцсэн барилга угсралтын иж бүрэн үйлчилгээг мэргэжлийн түвшинд үзүүлдэг."}
          </p>
        </div>
      </section> */}

      {/* EXPERTISE GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:bg-[#102B5A] transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-4"
              >
                <div className="w-14 h-14 mb-8 rounded-2xl bg-amber-100 group-hover:bg-amber-400 flex items-center justify-center text-[#102B5A] transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#102B5A] group-hover:text-white mb-4 transition-colors duration-500">
                  {lang === "en" ? item.en : item.mn}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100/70 leading-relaxed transition-colors duration-500">
                  {lang === "en" ? item.descEn : item.descMn}
                </p>
                <Link href={item.href} >
                <div className="mt-8 flex items-center text-amber-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {lang === "en" ? "Learn More" : "Дэлгэрэнгүй"} <ArrowRight className="ml-2 w-4 h-4" />
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] bg-[#102B5A] overflow-hidden p-12 md:p-20 text-center">
            {/* Background Decoration */}
            <Home className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                {lang === "en" ? "Build with Confidence" : "Итгэлтэйгээр бүтээе"}
              </h2>
              <p className="text-lg text-blue-100/70 mb-12">
                {lang === "en"
                 ? "Let us turn your construction vision into reality."
                  : "Таны барилгын төслийг бодит бүтээл болгоё."}
              </p>
              <a
                href="/components/Contact"
                className="inline-flex items-center gap-3 px-12 py-5 bg-amber-400 hover:bg-amber-500 text-[#102B5A] font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                {lang === "en" ? "Get a Quote" : "Зөвлөгөө авах"}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionPage;