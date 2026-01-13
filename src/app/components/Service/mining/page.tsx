"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const MiningPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-200 to-amber-300 py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#102B5A_0%,_transparent_60%)]" />
        <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#102B5A] mb-6 leading-tight">
              {lang === "en" ? "Mining Solutions" : "Уул уурхайн шийдлүүд"}
            </h1>
            <div className="w-20 h-1 bg-[#102B5A] mb-6" />
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              {lang === "en"
                ? "Efficient, safe, and sustainable solutions for modern mining operations."
                : "Орчин үеийн уул уурхайн үйл ажиллагаанд зориулсан үр ашигтай, аюулгүй, тогтвортой шийдлүүд."}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur rounded-3xl p-10 shadow-xl">
            <h3 className="text-xl font-semibold text-[#102B5A] mb-4">
              {lang === "en" ? "Why Work With Us?" : "Яагаад бидтэй хамтрах вэ?"}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ {lang === "en" ? "Proven mining expertise" : "Батлагдсан туршлага"}</li>
              <li>✔ {lang === "en" ? "Safety-first approach" : "Аюулгүй ажиллагааг нэн тэргүүнд"}</li>
              <li>✔ {lang === "en" ? "Modern mining equipment" : "Орчин үеийн тоног төхөөрөмж"}</li>
              <li>✔ {lang === "en" ? "Operational efficiency" : "Үйл ажиллагааны өндөр үр ашиг"}</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-6">
          {lang === "en" ? "What We Offer" : "Бид юу санал болгодог вэ"}
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
          {lang === "en"
            ? "We provide comprehensive mining services that cover exploration, extraction, and processing."
            : "Хайгуул, олборлолт, боловсруулалтыг хамарсан уул уурхайн иж бүрэн үйлчилгээг бид үзүүлдэг."}
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-16">
            {lang === "en" ? "Mining Expertise" : "Уул уурхайн чиглэлүүд"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                en: "Exploration & Survey",
                mn: "Хайгуул, судалгаа",
                descEn: "Geological surveys and resource assessment.",
                descMn: "Геологийн судалгаа, нөөцийн үнэлгээ."
              },
              {
                en: "Mining Equipment",
                mn: "Уул уурхайн тоног төхөөрөмж",
                descEn: "Supply and operation of heavy mining equipment.",
                descMn: "Уул уурхайн хүнд даацын тоног төхөөрөмж."
              },
              {
                en: "Extraction & Processing",
                mn: "Олборлолт ба боловсруулалт",
                descEn: "Efficient extraction and mineral processing.",
                descMn: "Үр ашигтай олборлолт, ашигт малтмалын боловсруулалт."
              },
              {
                en: "Safety & Environment",
                mn: "Аюулгүй байдал ба байгаль орчин",
                descEn: "Safety management and environmental compliance.",
                descMn: "Аюулгүй ажиллагаа, байгаль орчны стандарт."
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
            {lang === "en" ? "Mine with Confidence" : "Итгэлтэйгээр олборлоё"}
          </h2>
          <p className="text-gray-200 mb-10 max-w-xl mx-auto">
            {lang === "en"
              ? "Partner with us for reliable and sustainable mining solutions."
              : "Найдвартай, тогтвортой уул уурхайн шийдлүүдийн төлөө бидэнтэй хамтар."}
          </p>

          <a
            href="/components/Contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-200 to-amber-300 text-[#102B5A] font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            {lang === "en" ? "Contact Us" : "Холбоо барих"}
          </a>
        </div>
      </section>

    </div>
  );
};

export default MiningPage;
