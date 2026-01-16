"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Settings, Truck, Construction, Leaf, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

const MiningPage: React.FC = () => {
  const { lang } = useLanguage();

  const services = [
    // {
    //   en: "Exploration & Survey",
    //   mn: "Хайгуул, судалгаа",
    //   descEn: "Advanced geological surveys and precise resource assessment.",
    //   descMn: "Геологийн нарийвчилсан судалгаа, нөөцийн үнэн зөв үнэлгээ.",
    //   icon: <Activity className="w-6 h-6" />,
    // },
    {
      en: "Moving Equipment",
      mn: "Хөдөлгөөнт тоног төхөөрөмж",
      descEn: "Precision parts for mobile industrial machinery",
      descMn: "Сэлбэг хэрэгсэл, дагалдах засвар үйлчилгээ үзүүлэх",
      icon: <Truck className="w-6 h-6" />,
      href: "/components/Service/moving-industry"
    },
    {
      en: "Heavy Industry",
      mn: "Хүнд үйлдвэр",
      descEn: "Provide spare parts and accessory maintenance services",
      descMn: "Хүнд үйлдвэрийн тоног төхөөрөмж: Мотор, хурдны хайрцаг, холбох эд анги, насос, эдгээрийн сэлбэг хэрэгсэл",
      icon: <Settings className="w-6 h-6" />,
      href: "/components/Service/heavy-industry"
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
          <div className="absolute top-0 -left-20 w-96 h-96 bg-amber-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
              {lang === "en" ? "Industry Leader" : "Салбартаа тэргүүлэгч"}
            </span> */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
              {lang === "en" ? (
                <>Precision in <span className="text-amber-400">Mining</span></>
              ) : (
                <>Уул уурхайн <span className="text-amber-400">Тоног төхөөрөмж</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
              {lang === "en"
                ? "Delivering innovative mining solutions that balance operational excellence with environmental responsibility."
                : "Эдийн засгийн хэмнэлттэй орчин үеийн шинэлэг тоног төхөөрөмж тэдгээрийн дагалдах сэлбэг хэрэгсэл."}
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <button className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-[#102B5A] font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-400/20">
                {lang === "en" ? "Our Projects" : "Төслүүдтэй танилцах"}
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
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
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
              {lang === "en" ? "Comprehensive Mining Services" : "Уул уурхайн иж бүрэн үйлчилгээ"}
            </h2>
            <div className="w-24 h-1.5 bg-amber-400 mx-auto mb-10 rounded-full" />
            <p className="text-xl text-gray-600 leading-relaxed">
              {lang === "en"
                ? "From initial exploration to final mineral processing, we utilize cutting-edge technology to ensure maximize resource recovery while minimizing environmental footprint."
                : "Хайгуулаас эхлээд эцсийн боловсруулалт хүртэл бид дэвшилтэт технологийг ашиглан нөөц ашиглалтыг нэмэгдүүлж, байгаль орчинд үзүүлэх нөлөөллийг бууруулдаг."}
            </p>
          </div>
        </div>
      </section> */}

      {/* SERVICES GRID */}
      <section className="py-24 bg-gray-50 ">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
            {/* Abstract Background for CTA */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                {lang === "en" ? "Mine with Confidence" : "Итгэлтэйгээр олборлоё"}
              </h2>
              <p className="text-lg text-blue-100/70 mb-12">
                {lang === "en"
                 ? "Partner with us for reliable and sustainable mining solutions." 
                 : "Найдвартай, тогтвортой уул уурхайн шийдлүүдийн төлөө бидэнтэй хамтар."}
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

export default MiningPage;