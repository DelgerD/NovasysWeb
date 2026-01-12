"use client";
import React from "react";

const MiningPage = () => {
  return (
    <section className="container mx-auto px-4 py-10 text-black">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Уул уурхайн тоног төхөөрөмжийн сэлбэг хэрэгсэл</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Уул уурхайн тоног төхөөрөмжийн сэлбэг хэрэгсэл нь уурхайн үйл ажиллагааг тасралтгүй явуулахад зориулагдсан өндөр чанартай бүтээгдэхүүнүүд юм.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-white bg-[#102B5A] p-3 rounded">Экскаватор, бульдозер</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Экскаваторын сэлбэг хэрэгсэл</li>
            <li>Бульдозерийн сэлбэг хэрэгсэл</li>
            <li>Хөдөлгүүрийн засвар үйлчилгээний хэрэгсэл</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-white bg-[#102B5A] p-3 rounded">Уурхайн тоног төхөөрөмж</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Хувин, дамжуулагч системийн сэлбэг</li>
            <li>Нунтаглагч болон шигшүүрийн эд анги</li>
            <li>Эрчим хүчний болон цахилгаан хэрэгсэл</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MiningPage;
