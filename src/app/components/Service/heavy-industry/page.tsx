"use client";
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Truck, Construction, HardHat, Cpu, ArrowRight, Cog, ShieldCheck } from "lucide-react";
import Link from "next/link";

const HeavyIndustryPage: React.FC = () => {
  const { lang } = useLanguage();

  const services = [
   {
      en: "Mining Solutions",
      mn: "Уул уурхай",
      descEn: "Mining equipment parts",
      descMn: "Уул уурхайн тоног төхөөрөмж тэдгээрийн эд анги",
      icon: <HardHat className="w-6 h-6" />,
      href: "/components/Service/mining"
    },
    {
      en: "Moving Equipment",
      mn: "Хөдөлгөөнт тоног төхөөрөмж",
      descEn: "Precision parts for mobile industrial machinery",
      descMn: "Сэлбэг хэрэгсэл, дагалдах засвар үйлчилгээ үзүүлэх",
      icon: <Truck className="w-6 h-6" />,
      href: "/components/Service/moving-industry"
    },
   
    {
      en: "Construction",
      mn: "Барилга",
      descEn: "Materials and raw materials required for construction work",
      descMn: "Барилгын ажилд шаардлагатай материал болон түүхий эд",
      icon: <Construction className="w-6 h-6" />,
      href: "/components/Service/construction"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#102B5A]">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-amber-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
              {lang === "en" ? "Engineering Excellence" : "Инженерчлэлийн Шилдэг Шийдэл"}
            </span> */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
              {lang === "en" ? (
                <>Next-Gen <span className="text-amber-400">Industrial</span> Solutions</>
              ) : (
                <>Хүнд үйлдвэрийн <span className="text-amber-400">Шийдлүүд</span> </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
              {lang === "en"
                ? "Powering large-scale industrial operations with world-class machinery, engineering, and unmatched reliability."
                : "Дэлхийн жишигт нийцсэн техник хэрэгсэл, инженерчлэлээр томоохон үйлдвэрүүдийн үйл ажиллагааг тасралтгүй, найдвартай дэмжинэ."}
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <button className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-[#102B5A] font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-400/20">
                {lang === "en" ? "Explore Services" : "Үйлчилгээ үзэх"}
              </button> */}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-200 rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">
                {lang === "en" ? "Additionally" : "Нэмэлтээр"}
              </h3>
              <div className="space-y-6">
                {[
                  { t: lang === "en" ? "Assembly installation" : "Угсралт суурилуулалт", d: lang === "en" ? "Fast and reliable" : "Хурдан шуурхай, найдвартай"},
                  { t: lang === "en" ? "Provide training on how to use and repair" : "Ашиглах бол засварлах сургалт үзүүлэх",  d: lang === "en" ? "Manufacturer's instructions and recommendations" : "Үйлдвэрлэгчийн заавар зөвлөмж" },
                  { t: lang === "en" ? "Prepare BOM or bill of materials" : "BOM буюу сэлбэгийн задаргаа бэлдэж өгөх", d: lang === "en" ? "Easy to understand" : "Ойлгомжтой, хялбар" },
                  { t: lang === "en" ? "Update maintenance plans and reliability results" : "Засварын төлөвлөгөө болон найдвартай ажиллагааны дүн шинэжилгээ хийх", d: lang === "en" ? "Reliable, easy" : "Найдвартай, хялбар" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-amber-400/20 p-2 rounded-lg">
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
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
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#102B5A] mb-8">
              {lang === "en" ? "Building the Industrial Future" : "Үйлдвэрлэлийн ирээдүйг цогцлоох нь"}
            </h2>
            <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-10 rounded-full" />
            <p className="text-xl text-gray-600 leading-relaxed">
              {lang === "en"
                ? "We provide end-to-end heavy industry services designed for maximum productivity, absolute safety, and long-term sustainability in challenging environments."
                : "Бид бүтээмжийг дээд зэргээр нэмэгдүүлж, аюулгүй байдал, тогтвортой байдлыг хангасан хүнд үйлдвэрийн иж бүрэн үйлчилгээг хүнд нөхцөлд ч чанартай гүйцэтгэдэг."}
            </p>
          </div>
        </div>
      </section> */}

      {/* SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
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
            {/* Background Icon decoration */}
            <Cog className="absolute -top-10 -left-10 w-64 h-64 text-white/5 animate-spin-slow" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                {lang === "en"  ? "Power Your Industry" : "Үйлдвэрээ хүчирхэгжүүлье"}
              </h2>
              <p className="text-lg text-blue-100/70 mb-12">
                {lang === "en"
                    ? "Partner with us for reliable heavy industry solutions."
                    : "Найдвартай хүнд үйлдвэрийн шийдлүүдийн төлөө бидэнтэй хамтар."}
              </p>
              <a
                href="/components/Contact"
                className="inline-flex items-center gap-3 px-12 py-5 bg-amber-400 hover:bg-amber-500 text-[#102B5A] font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                {lang === "en" ? "Contact Us" : "Холбоо барих"}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeavyIndustryPage;