"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const About: React.FC = () => {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-amber-200 to-amber-300 text-[#102B5A] py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="">Nova Sys Std</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#102B5A]/80">
            {lang === "en" ? "Trusted partner in mining equipment, industrial solutions, and operational excellence." : 
            "Уул уурхайн тоног төхөөрөмж, үйлдвэрлэлийн шийдэл, үйл ажиллагааны шилдэг байдлын найдвартай түнш."}
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-12">
          {lang === "en" ? "Who We Are" : "Бид хэн бэ ?"}
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-[#102B5A]">
              {lang === "en" ? "Experience & Reliability" : "Туршлага ба Найдвартай байдал"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {lang === "en" ? "With over 15 years of experience, Nova Sys Std delivers reliable mining equipment and industrial technologies tailored for modern operations." : 
              "15 гаруй жилийн туршлагатай Nova Sys Std нь орчин үеийн үйл ажиллагаанд тохирсон найдвартай уул уурхайн тоног төхөөрөмж, үйлдвэрлэлийн технологийг нийлүүлдэг."}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-[#102B5A]">
              {lang === "en" ? "End-to-End Solutions" : "Эцсийн шийдэл"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {lang === "en" ? "From heavy machinery supply to consulting and maintenance, we support your projects from planning to execution." : 
              "Хүнд машин механизмын хангамжаас эхлээд зөвлөгөө, засвар үйлчилгээ хүртэл бид таны төслүүдийг төлөвлөлтөөс эхлээд хэрэгжүүлэх хүртэл дэмждэг."}
            </p>
          </div>
        </div>
      </section>

      {/* EQUIPMENT & SOLUTIONS */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-14">
            {lang === "en" ? "Our Equipment & Solutions" : "Манай тоног төхөөрөмж ба шийдлүүд"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excavators & Loaders",
                desc: "High-performance machinery designed for efficiency and durability."
              },
              {
                title: "Crushing & Processing",
                desc: "Advanced systems for crushing, processing, and material handling."
              },
              {
                title: "Maintenance & Consulting",
                desc: "Expert support to maximize uptime and operational safety."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-semibold text-[#102B5A] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-14">
          {lang === "en" ? "Mission & Vision" : "Эрхэм зорилго ба алсын хараа"}
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow border-l-4 border-amber-300">
            <h3 className="text-xl font-semibold mb-2 text-[#102B5A]">
              {lang === "en" ? "Our Mission" : "Бидний эрхэм зорилго"}
            </h3>
            <p className="text-gray-700">
              {lang === "en" ? "To deliver innovative, reliable, and safe mining equipment that improves productivity and operational efficiency." : 
              "Бүтээмж болон үйл ажиллагааны үр ашгийг дээшлүүлэх шинэлэг, найдвартай, аюулгүй уул уурхайн тоног төхөөрөмжийг нийлүүлэх."}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border-l-4 border-amber-300">
            <h3 className="text-xl font-semibold mb-2 text-[#102B5A]">
              {lang === "en" ? "Our Vision" : "Бидний алсын хараа"}
            </h3>
            <p className="text-gray-700">
              {lang === "en" ? "To become a globally recognized partner for mining companies, known for quality, sustainability, and service excellence." : 
              "Чанар, тогтвортой байдал, үйлчилгээний шилдэг чанараараа алдартай, дэлхий даяар хүлээн зөвшөөрөгдсөн уул уурхайн компаниудын түнш болох."}
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-amber-200 to-amber-300 text-[#102B5A] py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {lang === "en" ? "Let’s Build the Future Together" : "Ирээдүйг хамтдаа бүтээцгээе"}
        </h2>
        <p className="text-[#102B5A]/70 mb-10">
          {lang === "en" ? "Get in touch to discuss your mining projects and equipment needs." : 
          "Уул уурхайн төслүүд болон тоног төхөөрөмжийн хэрэгцээний талаар ярилцахын тулд бидэнтэй холбогдоно уу."}
        </p>

        <a
          href="/components/Contact"
          className="inline-block px-8 py-4 bg-white text-[#102B5A] font-semibold rounded-full hover:bg-gray-100 transition"
        >
          {lang === "en" ? "Contact Us" : "Холбоо барих"}
        </a>
      </section>

    </div>
  );
};

export default About;
