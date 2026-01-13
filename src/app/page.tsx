"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

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

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const { lang } = useLanguage();

  // Slider
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // Fetch News
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

  // Fetch Projects
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
      <section className="relative w-full min-h-screen">
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
          <h1 className="text-6xl font-extrabold text-white mb-4">Nova Sys Std</h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl text-center">
            {lang === "en" ? "Leading supplier of mining equipment" : "Уул уурхайн тоног төхөөрөмжийн тэргүүлэгч нийлүүлэгч"}
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
          
          
          <section className="bg-white py-20 px-4">
            <h2 className="text-3xl text-black font-bold text-center mb-12">
              {lang === "en" ? "Service" : "Үйлчилгээ"}
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                
                {
                  title: "Хөдөлгөөнт тоног төхөөрөмжийн сэлбэг хэрэгсэл",
                  description: "Үйлдвэрлэлийн тоног төхөөрөмжийн хөдөлгөөнт сэлбэг хэрэгслүүдийг хангана.",
                  image: "/service1.jpg",
                  href: "components/Service/moving-equipment"
                  
                },
                {
                  title: "Хүнд үйлдвэрийн тоног төхөөрөмжийн сэлбэг хэрэгсэл",
                  description: "Үйлдвэрийн машины, мотор, насос зэрэг тоног төхөөрөмжийн сэлбэг хэрэгсэл.",
                  image: "/service1.jpg",
                  href: "/components/Service/heavy-industry"
                },
                {
                  title: "Уул уурхайн тоног төхөөрөмжийн сэлбэг хэрэгсэл",
                  description: "Экскаватор, бульдозер, уул уурхайн тоног төхөөрөмжийн эд анги, сэлбэг.",
                  image: "/service1.jpg",
                  href: "/components/Service/mining"
                },
                {
                  title: "Барилгын материал",
                  description: "Барилгын ажилд шаардлагатай цемент, блок, дотор заслын материал зэргийг нийлүүлнэ.",
                  image: "/service1.jpg",
                  href: "/components/Service/construction"
                }
              ].map((item, index) => (
               <Link
        key={index}
        href={item.href}
        className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                  </Link>
              ))}
            </div>
          </section>


      
      {/* Latest News */}
      <section className="bg-white py-20 px-4">
        <h2 className="text-3xl text-black font-bold text-center mb-12">
          {lang === "en" ? "Latest News" : "Сүүлийн мэдээ"}
        </h2>

        <div className="grid md:grid-cols-3 gap-15">
          {news.length > 0 ? (
            news.map((item) => {
              const imageUrl =
                item.image && item.image.trim() !== ""
                  ? lang === "en"
                    ? `http://localhost:8000/uploadsEn/${item.image}`
                    : `http://localhost:8000/uploadsMn/${item.image}`
                  : "/default-image.png";

              return (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedNews(item)}
                >
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 line-clamp-3 mb-3">{item.description}</p>
                  <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-3">No news available</p>
          )}
        </div>
      </section>

      {/* Recent Projects
      <section className="bg-white py-20 px-4 mt-4">
        <h2 className="text-3xl text-black font-bold text-center mb-12">
          {lang === "en" ? "Recent Projects" : "Сүүлийн төслүүд"}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.length > 0 ? (
            projects.map((item) => {
              const imageUrl =
                item.image
                  ? lang === "en"
                    ? `http://localhost:8000/uploadsEn/project/${item.image}`
                    : `http://localhost:8000/uploadsMn/project/${item.image}`
                  : "/default-image.png";

              return (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(item)}
                >
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 line-clamp-3 mb-3">{item.description}</p>
                  <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-3">No projects available</p>
          )}
        </div>
      </section> */}

      {/* Modal for News */}
      {selectedNews && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm overflow-auto p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                onClick={() => setSelectedNews(null)}
              >
                &times;
              </button>
              <img
                src={
                  selectedNews.image
                    ? lang === "en"
                      ? `http://localhost:8000/uploadsEn/${selectedNews.image}`
                      : `http://localhost:8000/uploadsMn/${selectedNews.image}`
                    : "/default-image.png"
                }
                alt={selectedNews.title}
                className="w-full h-auto max-h-[400px] object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl text-black font-bold mb-2">{selectedNews.title}</h3>
              <p className="text-gray-700 mb-4">{selectedNews.description}</p>
              <p className="text-sm text-gray-500">{new Date(selectedNews.date).toLocaleDateString()}</p>
            </div>
          </div>
        )}

      {/* Modal for Projects */}
      {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm overflow-auto p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <img
                src={
                  selectedProject.image
                    ? lang === "en"
                      ? `http://localhost:8000/uploadsEn/project/${selectedProject.image}`
                      : `http://localhost:8000/uploadsMn/project/${selectedProject.image}`
                    : "/default-image.png"
                }
                alt={selectedProject.title}
                className="w-full h-auto max-h-[400px] object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl text-black font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              <p className="text-sm text-gray-500">{new Date(selectedProject.date).toLocaleDateString()}</p>
            </div>
          </div>
        )}

         <section className="bg-gradient-to-r from-amber-200 to-amber-300 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#102b5a] mb-4 drop-shadow-md">
            {lang === "en" ? "Let’s Build the Future Together" : "Ирээдүйг хамтдаа бүтээцгээе"}
          </h2>
          <p className="text-gray-700 mb-8 text-lg md:text-xl">
            {lang === "en" ? "Get in touch to discuss your mining projects and equipment needs." : 
          "Уул уурхайн төслүүд болон тоног төхөөрөмжийн хэрэгцээний талаар ярилцахын тулд бидэнтэй холбогдоно уу."}
          </p>
          <Link
            href="/components/Contact"
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
             {lang === "en" ? "Contact Us" : "Холбоо барих"}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
  