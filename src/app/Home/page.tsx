"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const heroImages = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
];

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [news, setNews] = useState<NewsItem[]>([]); // News state

  // Автоматаар 5 секунд тутам зураг солигдох
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Backend-с мэдээ авах
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<NewsItem[]>("http://localhost:8000/news"); // backend URL
        setNews(response.data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 container mx-auto">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        {heroImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
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

      {/* Latest News Section */}
      <section className="bg-white py-20 px-4">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.length > 0 ? (
            news.map((item) => (
              <div
                key={item.id}
                className="bg-gray-500 p-6 rounded shadow transition transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="mt-2 text-md">{item.description}</p>
                <p className="text-sm">{new Date(item.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">No news available</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
