"use client";
import React from "react";

const ConstructionPage = () => {
  return (
    <section className="container mx-auto px-4 py-10 text-black">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Барилгын материал</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Барилгын материалын төрөл бүрийг нийлүүлж, чанартай бүтээгдэхүүнээр барилгын ажлыг түргэн, найдвартай гүйцэтгэх боломжтой.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-white bg-[#102B5A] p-3 rounded">Барилгын суурь материал</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Шохойн чулуу, цемент, хайрга</li>
            <li>Бетон, блок, тоосго</li>
            <li>Уусгагч болон наалдамхай материал</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2 text-white bg-[#102B5A] p-3 rounded">Дотор заслын материал</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Цементэн зуурмаг, ханын будгийн материал</li>
            <li>Шал, хаалга, цонхны эд анги</li>
            <li>Дотор заслын хэрэгслүүд</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConstructionPage;
