"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "@/app/context/LanguageContext";
import { Calendar, ArrowRight, Search, Newspaper, X, ChevronRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const { lang } = useLanguage();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const endpoint = lang === "en" ? "http://https://novasysweb.onrender.com/newsEn" : "http://https://novasysweb.onrender.com/news";
        const response = await axios.get<NewsItem[]>(endpoint);
        setNews(response.data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [lang]);

  // Хайлт хийх функц
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* HEADER SECTION */}
      <section className="relative py-24 bg-[#102B5A] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#fbbf24_0%,_transparent_50%)]" />
        <div className="relative container mx-auto px-6 text-center">
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
            {lang === "en" ? "Company Updates" : "Цаг үеийн мэдээлэл"}
          </span> */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">
            {lang === "en" ? "News & Insights" : "Мэдээ мэдээлэл"}
          </h1>
          
          {/* SEARCH BAR */}
          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-400 transition-colors w-5 h-5" />
            <input
              type="text"
              placeholder={lang === "en" ? "Search news..." : "Мэдээ хайх..."}
              className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* NEWS GRID SECTION */}
      <section className="py-20 container mx-auto px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedNews(item)}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                {/* Image Wrapper */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image ? (lang === "en" ? `http://https://novasysweb.onrender.com/uploadsEn/${item.image}` : `http://https://novasysweb.onrender.com/uploadsMn/${item.image}`) : "/default-image.png"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-5 left-5 px-4 py-2 bg-white/90 backdrop-blur text-[#102B5A] text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#102B5A] mb-4 line-clamp-2 group-hover:text-amber-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <span className="text-amber-500 font-bold text-sm flex items-center gap-2">
                      {lang === "en" ? "Read Details" : "Дэлгэрэнгүй"}
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <Newspaper className="w-5 h-5 text-gray-200 group-hover:text-amber-200 transition-colors" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Newspaper className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              {lang === "en" ? "No news found matching your search." : "Хайлтад тохирох мэдээ олдсонгүй."}
            </p>
          </div>
        )}
      </section>

      {/* MODAL FOR SINGLE NEWS */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-6 right-6 z-20 p-3 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full transition-all group shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="h-[300px] md:h-[450px] w-full relative">
              <img
                src={selectedNews.image ? (lang === "en" ? `http://https://novasysweb.onrender.com/uploadsEn/${selectedNews.image}` : `http://https://novasysweb.onrender.com/uploadsMn/${selectedNews.image}`) : "/default-image.png"}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-3 text-amber-400 font-bold mb-4">
                  <Calendar className="w-5 h-5" />
                  {new Date(selectedNews.date).toLocaleDateString()}
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                  {selectedNews.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-10 md:p-16">
              <div className="prose prose-lg max-w-none text-gray-700 leading-loose whitespace-pre-wrap">
                {selectedNews.description}
              </div>
              
              <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#102B5A] flex items-center justify-center text-white font-bold">N</div>
                   <div>
                     <p className="text-sm font-bold text-[#102B5A]">Nova Sys Std</p>
                     <p className="text-xs text-gray-400">Official Newsroom</p>
                   </div>
                </div>
                <button 
                  onClick={() => setSelectedNews(null)}
                  className="px-8 py-3 bg-gray-100 hover:bg-[#102B5A] hover:text-white rounded-xl font-bold transition-all"
                >
                  {lang === "en" ? "Back to News" : "Буцах"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;