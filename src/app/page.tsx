"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "@/app/context/LanguageContext";

const heroImages = ["/1.jpg", "/2.jpg", "/3.jpg"];

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  const { lang } = useLanguage();

  // Slider
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // ---------- 📰 NEWS татах ----------
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const endpoint =
          lang === "en"
            ? "http://localhost:8000/newsEn"
            : "http://localhost:8000/news";

        const response = await axios.get<NewsItem[]>(endpoint);
        setNews(response.data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    };

    fetchNews();
  }, [lang]);

  // ---------- 🛠 PROJECT татах ----------
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const endpoint =
          lang === "en"
            ? "http://localhost:8000/projectEn"
            : "http://localhost:8000/projectMn";

        const response = await axios.get<ProjectItem[]>(endpoint);
        setProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchProjects();
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 container mx-auto">

      {/* HERO */}
      <section className="relative h-[600px] w-full overflow-hidden">
        {heroImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity brightness-75 duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-extrabold text-white mb-4">NovaSys</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl text-center">
            Leading supplier of mining equipment and innovative software solutions
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 📰 Latest News */}
<section className="bg-white py-20 px-4">
  <h2 className="text-3xl text-black font-bold text-center mb-12">
    {lang === "en" ? "Latest News" : "Сүүлийн мэдээ"}
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {news.length > 0 ? (
      news.map((item) => {
        const imageUrl =
          item.image
            ? (lang === "en"
                ? `http://localhost:8000/uploadsEn/${item.image}`
                : `http://localhost:8000/uploadsMn/${item.image}`)
            : "/default-image.png";

        return (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 line-clamp-3 mb-3">
              {item.description}
            </p>

            <p className="text-sm text-gray-500">
              {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
        );
      })
    ) : (
      <p className="text-center col-span-3">No news available</p>
    )}
  </div>
</section>

{/* 🛠 Recent Projects */}
<section className="bg-white py-20 px-4 mt-4">
  <h2 className="text-3xl text-black font-bold text-center mb-12">
    {lang === "en" ? "Recent Projects" : "Сүүлийн төслүүд"}
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {projects.length > 0 ? (
      projects.map((item) => {
        const imageUrl =
          item.image
            ? (lang === "en"
                ? `http://localhost:8000/uploadsEn/project/${item.image}`
                : `http://localhost:8000/uploadsMn/project/${item.image}`)
            : "/default-image.png";

        return (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 line-clamp-3 mb-3">
              {item.description}
            </p>

            <p className="text-sm text-gray-500">
              {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
        );
      })
    ) : (
      <p className="text-center col-span-3">No projects available</p>
    )}
  </div>
</section>

    </div>
  );
};

export default Home;
