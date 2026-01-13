"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const ConstructionPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-200 to-amber-300 py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#102B5A_0%,_transparent_60%)]" />
        <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#102B5A] mb-6 leading-tight">
              {lang === "en" ? "Construction Services" : "Барилгын үйлчилгээ"}
            </h1>
            <div className="w-20 h-1 bg-[#102B5A] mb-6" />
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              {lang === "en"
                ? "From solid foundations to refined interior finishing — we build with precision."
                : "Бат бөх сууриас эхлээд чанартай дотор засал хүртэл — бид нарийн хийцээр бүтээнэ."}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur rounded-3xl p-10 shadow-xl">
            <h3 className="text-xl font-semibold text-[#102B5A] mb-4">
              {lang === "en" ? "Why Choose Us?" : "Яагаад бид вэ?"}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ {lang === "en" ? "Quality materials" : "Чанартай материал"}</li>
              <li>✔ {lang === "en" ? "Safety focused" : "Аюулгүй байдал"}</li>
              <li>✔ {lang === "en" ? "Experienced engineers" : "Туршлагатай инженерүүд"}</li>
              <li>✔ {lang === "en" ? "On-time delivery" : "Хугацаанд нь гүйцэтгэл"}</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      {/* <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-6">
          {lang === "en" ? "What We Do" : "Бид юу хийдэг вэ"}
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
          {lang === "en"
            ? "We provide full-cycle construction services designed for durability, efficiency, and modern standards."
            : "Бид орчин үеийн стандарт, үр ашиг, удаан эдэлгээнд нийцсэн иж бүрэн барилгын үйлчилгээ үзүүлдэг."}
        </p>
      </section> */}

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-16">
            {lang === "en" ? "Construction Expertise" : "Барилгын чиглэлүүд"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                en: "Foundation",
                mn: "Барилгын суурь",
                descEn: "Load-bearing and seismic-safe foundations.",
                descMn: "Ачаалал даах, газар хөдлөлтөд тэсвэртэй суурь."
              },
              {
                en: "Exterior",
                mn: "Гадна хийц",
                descEn: "Facade, roofing, thermal insulation.",
                descMn: "Фасад, дээвэр, дулаалга."
              },
              {
                en: "Interior",
                mn: "Дотор засал",
                descEn: "Functional, modern interior finishing.",
                descMn: "Орчин үеийн, практик дотор засал."
              },
              {
                en: "Engineering",
                mn: "Инженерийн систем",
                descEn: "Electrical, plumbing, ventilation.",
                descMn: "Цахилгаан, сантехник, агааржуулалт."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-6 rounded-full bg-gradient-to-r from-amber-200 to-amber-300 flex items-center justify-center text-[#102B5A] font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#102B5A] mb-3">
                  {lang === "en" ? item.en : item.mn}
                </h3>
                <p className="text-gray-700">
                  {lang === "en" ? item.descEn : item.descMn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#102B5A] py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_0%,_transparent_60%)]" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {lang === "en" ? "Build with Confidence" : "Итгэлтэйгээр бүтээе"}
          </h2>
          <p className="text-gray-200 mb-10 max-w-xl mx-auto">
            {lang === "en"
              ? "Let us turn your construction vision into reality."
              : "Таны барилгын төслийг бодит бүтээл болгоё."}
          </p>

          <a
            href="/components/Contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-200 to-amber-300 text-[#102B5A] font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            {lang === "en" ? "Get in Touch" : "Холбоо барих"}
          </a>
        </div>
      </section>

    </div>
  );
};

export default ConstructionPage;
