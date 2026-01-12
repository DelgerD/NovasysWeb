"use client";
import React from "react";

const HeavyIndustryPage = () => {
  return (
    <section className="container mx-auto px-4 py-10 text-black">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Хүнд үйлдвэрийн тоног төхөөрөмжийн сэлбэг хэрэгсэл</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Хүнд үйлдвэрийн тоног төхөөрөмжийн сэлбэг хэрэгсэл нь таны үйлдвэрийн үйл ажиллагааг тасралтгүй, аюулгүй ажиллуулахад зориулагдсан.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-white bg-[#102B5A] p-3 rounded">Механик тоног төхөөрөмж</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Үйлдвэрийн машин механизмын сэлбэг</li>
            <li>Мотор, трансмиссийн хэсгүүд</li>
            <li>Турбины болон насосны сэлбэг</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-white bg-[#102B5A] p-3 rounded">Электрон ба автоматжуулалт</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Контроллер, сенсор</li>
            <li>PLC ба цахилгаан холбоо</li>
            <li>Програмчлалын болон оношилгооны хэрэгсэл</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeavyIndustryPage;
