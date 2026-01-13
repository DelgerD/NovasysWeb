"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const HeavyIndustryPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-200 to-amber-300 py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#102B5A_0%,_transparent_60%)]" />
        <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#102B5A] mb-6 leading-tight">
              {lang === "en" ? "Heavy Industry Solutions" : "Хүнд үйлдвэрийн шийдлүүд"}
            </h1>
            <div className="w-20 h-1 bg-[#102B5A] mb-6" />
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              {lang === "en"
                ? "Powering large-scale industrial operations with reliable machinery and engineering."
                : "Томоохон үйлдвэрийн үйл ажиллагааг найдвартай тоног төхөөрөмж, инженерчлэлээр дэмжинэ."}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur rounded-3xl p-10 shadow-xl">
            <h3 className="text-xl font-semibold text-[#102B5A] mb-4">
              {lang === "en" ? "Our Strengths" : "Бидний давуу тал"}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ {lang === "en" ? "Heavy-duty equipment" : "Хүнд даацын тоног төхөөрөмж"}</li>
              <li>✔ {lang === "en" ? "Industrial safety standards" : "Үйлдвэрийн аюулгүй байдал"}</li>
              <li>✔ {lang === "en" ? "Skilled engineers" : "Мэргэшсэн инженерүүд"}</li>
              <li>✔ {lang === "en" ? "Long-term reliability" : "Удаан хугацааны найдвартай байдал"}</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-6">
          {lang === "en" ? "What We Deliver" : "Бид юу нийлүүлдэг вэ"}
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
          {lang === "en"
            ? "We provide end-to-end heavy industry services designed for productivity, safety, and sustainability."
            : "Бид бүтээмж, аюулгүй байдал, тогтвортой байдалд чиглэсэн хүнд үйлдвэрийн иж бүрэн үйлчилгээг үзүүлдэг."}
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-16">
            {lang === "en" ? "Heavy Industry Expertise" : "Хүнд үйлдвэрийн чиглэлүүд"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                en: "Industrial Machinery",
                mn: "Үйлдвэрийн тоног төхөөрөмж",
                descEn: "Supply and installation of heavy industrial machinery.",
                descMn: "Хүнд үйлдвэрийн тоног төхөөрөмжийн нийлүүлэлт, суурилуулалт."
              },
              {
                en: "Plant Construction",
                mn: "Үйлдвэрийн барилга",
                descEn: "Construction of factories and processing plants.",
                descMn: "Үйлдвэр, боловсруулах байгууламжийн барилга угсралт."
              },
              {
                en: "Maintenance & Repair",
                mn: "Засвар үйлчилгээ",
                descEn: "Preventive maintenance and equipment overhaul.",
                descMn: "Тоног төхөөрөмжийн засвар, техникийн үйлчилгээ."
              },
              {
                en: "Industrial Engineering",
                mn: "Инженерийн шийдэл",
                descEn: "Process optimization and engineering solutions.",
                descMn: "Үйл явцын оновчлол, инженерийн шийдлүүд."
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
            {lang === "en" ? "Power Your Industry" : "Үйлдвэрээ хүчирхэгжүүлье"}
          </h2>
          <p className="text-gray-200 mb-10 max-w-xl mx-auto">
            {lang === "en"
              ? "Partner with us for reliable heavy industry solutions."
              : "Найдвартай хүнд үйлдвэрийн шийдлүүдийн төлөө бидэнтэй хамтар."}
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

export default HeavyIndustryPage;
