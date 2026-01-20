"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Newspaper, Briefcase, Settings, Construction, Truck, HardHat } from "lucide-react";

const heroImages = ["/1.jpg", "/2.jpg", "/3.jpg"];

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const { lang } = useLanguage();

  // Slider controls
  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  // Fetch News
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const endpoint = lang === "en" ? "http://https://novasysweb.onrender.com/newsEn" : "http://https://novasysweb.onrender.com/news";
        const response = await axios.get<NewsItem[]>(endpoint);
        setNews(response.data.slice(0, 3)); // Display latest 3
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    };
    fetchNews();
  }, [lang]);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SLIDER SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-black">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <img src={img} alt="Hero" className="w-full h-full object-cover brightness-50" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-6 z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full animate-fade-in">
              {lang === "en" ? "Industry Excellence" : "Салбартаа Тэргүүлэгч"}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter">
              Nova <span className="text-amber-400">Sys Std</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              {lang === "en" 
                ? "World-class solutions." 
                : "Дэлхийн жишигт нийцсэн шийдэл."}
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/components/About" className="px-10 py-4 bg-amber-400 hover:bg-amber-500 text-[#102B5A] font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-1">
                {lang === "en" ? "About us" : "Бидний тухай"}
              </Link>
              <Link href="/components/Contact" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold rounded-2xl transition-all">
                {lang === "en" ? "Contact Us" : "Холбоо барих"}
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Navigation */}
        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-amber-400 hover:text-[#102B5A] transition-all">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-amber-400 hover:text-[#102B5A] transition-all">
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#102B5A] mb-4">
            {lang === "en" ? "Our Core Expertise" : "Манай үйлчилгээнүүд"}
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: lang === "en" ? "Moving Equipment" : "Хөдөлгөөнт тоног төхөөрөмж",
              desc: lang === "en" ? "Precision parts for mobile industrial machinery" : "Сэлбэг хэрэгсэл, дагалдах засвар үйлчилгээ үзүүлэх",
              icon: <Truck className="w-7 h-7" />,
              href: "/components/Service/moving-industry",
              color: "bg-blue-50"
            },
            {
              title: lang === "en" ? "Heavy Industry" : "Хүнд үйлдвэр",
              desc: lang === "en" ? "Provide spare parts and accessory maintenance services" : "Хүнд үйлдвэрийн тоног төхөөрөмж: Мотор, хурдны хайрцаг, холбох эд анги, насос, эдгээрийн сэлбэг хэрэгсэл",
              icon: <Settings className="w-7 h-7" />,
              href: "/components/Service/heavy-industry",
              color: "bg-amber-50"
            },
            {
              title: lang === "en" ? "Mining Solutions" : "Уул уурхай",
              desc: lang === "en" ? "Mining equipment parts" : "Уул уурхайн тоног төхөөрөмж тэдгээрийн эд анги",
              icon: <HardHat className="w-7 h-7" />,
              href: "/components/Service/mining",
              color: "bg-emerald-50"
            },
            {
              title: lang === "en" ? "Construction" : "Барилга",
              icon: <Construction className="w-7 h-7" />,
              href: "/components/Service/construction",
              color: "bg-orange-50"
            }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-[#102B5A] mb-8 group-hover:bg-amber-400 transition-colors`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#102B5A] mb-3 group-hover:text-amber-600 transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center text-sm font-bold text-[#102B5A] opacity-0 group-hover:opacity-100 transition-all">
                {lang === "en" ? "See Details" : "Дэлгэрэнгүй"} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#102B5A] mb-4">
                {lang === "en" ? "Latest Updates" : "Сүүлийн мэдээ"}
              </h2>
              <p className="text-gray-500">{lang === "en" ? "Stay updated with our latest industry news." : "Салбарын цаг үеийн мэдээ мэдээллийг эндээс аваарай."}</p>
            </div>
            <Link href="/components/news" className="flex items-center gap-2 text-[#102B5A] font-bold hover:text-amber-500 transition-colors">
              {lang === "en" ? "All News" : "Бүх мэдээ"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.length > 0 ? (
              news.map((item) => (
                <div key={item.id} onClick={() => setSelectedNews(item)} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={item.image ? (lang === "en" ? `http://https://novasysweb.onrender.com/uploadsEn/${item.image}` : `http://https://novasysweb.onrender.com/uploadsMn/${item.image}`) : "/default-image.png"} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
                    <div className="absolute top-4 left-4 px-4 py-1 bg-amber-400 text-[#102B5A] text-xs font-bold rounded-full">
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#102B5A] mb-4 line-clamp-2 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">{item.description}</p>
                    <div className="flex items-center text-amber-500 font-bold text-sm">
                      {lang === "en" ? "Read More" : "Унших"} <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-400 py-10">No news available</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 container mx-auto px-6">
        <div className="relative rounded-[3.5rem] bg-[#102B5A] overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_0%,_transparent_70%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              {lang === "en" ? "Ready to Power Your Operations?" : "Ирээдүйг хамтдаа бүтээцгээе"}
            </h2>
            <p className="text-blue-100/70 text-lg mb-12 leading-relaxed">
              {lang === "en" 
                ? "Get in touch with our experts to discuss your mining projects and specialized equipment requirements." 
                : "Уул уурхайн төслүүд болон тоног төхөөрөмжийн хэрэгцээний талаар ярилцахын тулд бидэнтэй холбогдоно уу."}
            </p>
            <Link href="/components/Contact" className="inline-flex items-center gap-3 px-12 py-5 bg-amber-400 hover:bg-amber-500 text-[#102B5A] font-bold rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95">
              {lang === "en" ? "Contact Our Team" : "Холбоо барих"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS MODAL */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/40">
          <div className="bg-white rounded-[3rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setSelectedNews(null)} className="absolute top-6 right-6 z-10 p-2 bg-gray-500 hover:bg-black hover:text-white rounded-full transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="h-80 md:h-96 w-full">
               <img src={selectedNews.image ? (lang === "en" ? `http://https://novasysweb.onrender.com/uploadsEn/${selectedNews.image}` : `http://https://novasysweb.onrender.com/uploadsMn/${selectedNews.image}`) : "/default-image.png"} alt={selectedNews.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-10">
              <span className="text-amber-500 font-bold text-sm mb-4 block">{new Date(selectedNews.date).toLocaleDateString()}</span>
              <h3 className="text-3xl font-black text-[#102B5A] mb-6 leading-tight">{selectedNews.title}</h3>
              <p className="text-gray-700 leading-loose text-lg whitespace-pre-wrap">{selectedNews.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;