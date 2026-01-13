"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const MovingIndustryPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-200 to-amber-300 py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#102B5A_0%,_transparent_60%)]" />
        <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#102B5A] mb-6 leading-tight">
              {lang === "en" ? "Auto Parts Solutions" : "Авто сэлбэгийн шийдлүүд"}
            </h1>
            <div className="w-20 h-1 bg-[#102B5A] mb-6" />
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              {lang === "en"
                ? "High-quality auto parts for cars, trucks, and heavy vehicles."
                : "Автомашин, ачааны машин болон хүнд даацын тээврийн хэрэгслийн өндөр чанартай сэлбэгүүд."}
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur rounded-3xl p-10 shadow-xl">
            <h3 className="text-xl font-semibold text-[#102B5A] mb-4">
              {lang === "en" ? "Why Choose Our Parts?" : "Яагаад манай сэлбэгийг сонгох вэ?"}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ {lang === "en" ? "Premium quality components" : "Өндөр чанартай сэлбэг"} </li>
              <li>✔ {lang === "en" ? "Reliable and durable" : "Найдвартай, удаан эдэлгээтэй"} </li>
              <li>✔ {lang === "en" ? "Wide variety" : "Өргөн сонголт"} </li>
              <li>✔ {lang === "en" ? "Fast delivery" : "Хурдан хүргэлт"} </li>
            </ul>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-6">
          {lang === "en" ? "Our Auto Parts" : "Манай авто сэлбэг"}
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
          {lang === "en"
            ? "We provide original and high-quality auto parts for various vehicle types, ensuring safety and performance."
            : "Бид төрөл бүрийн тээврийн хэрэгслийн хувьд оригинал, өндөр чанартай авто сэлбэгийг нийлүүлж, аюулгүй байдал, ажиллагааг баталгаажуулна."}
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#102B5A] mb-16">
            {lang === "en" ? "Categories of Auto Parts" : "Авто сэлбэгийн төрлүүд"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                en: "Engine Parts",
                mn: "Моторын сэлбэг",
                descEn: "High-quality engine components for all vehicle types.",
                descMn: "Бүх төрлийн тээврийн хэрэгслийн моторын өндөр чанартай сэлбэгүүд."
              },
              {
                en: "Suspension & Brakes",
                mn: "Тулгуур ба тоормос",
                descEn: "Reliable suspension and braking systems.",
                descMn: "Найдвартай тулгуур, тоормосны системүүд."
              },
              {
                en: "Transmission Parts",
                mn: "Шаталт, дамжуулах хэсэг",
                descEn: "Durable gears, clutches, and transmission components.",
                descMn: "Удаан эдэлгээтэй шатуур, холхивч, дамжуулах сэлбэгүүд."
              },
              {
                en: "Electrical & Lighting",
                mn: "Цахилгаан ба гэрэлтүүлэг",
                descEn: "Wiring, lights, and other electrical components.",
                descMn: "Утас, гэрэл болон бусад цахилгаан сэлбэгүүд."
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
            {lang === "en" ? "Get the Right Parts Today" : "Зөв сэлбэгийг өнөөдөр аваарай"}
          </h2>
          <p className="text-gray-200 mb-10 max-w-xl mx-auto">
            {lang === "en"
              ? "Contact us to find high-quality auto parts for your vehicle."
              : "Таны автомашинд зориулсан өндөр чанартай сэлбэгийг олохын тулд бидэнтэй холбогдоорой."}
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

export default MovingIndustryPage;
