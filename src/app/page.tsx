"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguage } from "../app/context/LanguageContext";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Settings, Construction, Truck, HardHat, Sparkles } from "lucide-react";

// Салбар бүрт тохирсон бодит зургууд болон текстүүд
const heroSlides = [
  {
    // 1. Уул уурхай (Хуучнаараа - Найдвартай)
    url: "https://images.pexels.com/photos/2892618/pexels-photo-2892618.jpeg?auto=compress&cs=tinysrgb&w=1600",
    titleMn: "Уул Уурхай", titleEn: "Mining Solutions",
    descMn: "Уул уурхайн хүнд нөхцөлд зориулсан найдвартай тоног төхөөрөмж.",
    descEn: "Reliable equipment for the toughest mining operations."
  },
  {
    // 2. Хүнд үйлдвэр (Хуучнаараа - Найдвартай)
    url: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    titleMn: "Хүнд Үйлдвэр", titleEn: "Heavy Industry",
    descMn: "Үйлдвэрлэлийн мотор, насос болон нарийн эд ангиуд.",
    descEn: "Industrial engines, pumps, and precision components."
  },
  {
    // 3. БАРИЛГЫН МАТЕРИАЛ (Яг металл хийц, арматур, барилгын бэлдэц)
    url: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    titleMn: "Барилгын Материал", titleEn: "Construction Materials",
    descMn: "Стандарт шаардлага хангасан чанартай барилгын материалын нийлүүлэлт.",
    descEn: "Supply of high-quality construction materials meeting global standards."
  },
  {
    // 4. АВТО СЭЛБЭГ (Яг хүнд механизмын мотор, араа, эд анги)
    url: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1600",
    titleMn: "Авто Сэлбэг", titleEn: "Auto Spare Parts",
    descMn: "Хүнд даацын автомашин, механизмын оригинал сэлбэг хэрэгсэл.",
    descEn: "Genuine spare parts and maintenance for heavy-duty machinery."
  }
];

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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const endpoint = lang === "en"
          ? "https://novasysweb.onrender.com/newsEn"
          : "https://novasysweb.onrender.com/news";

        const response = await axios.get<NewsItem[]>(endpoint, {
          timeout: 15000 // 15 секунд хүлээх (Render-ийг асахыг хүлээхэд тустай)
        });

        if (response.data) {
          setNews(response.data.slice(0, 3));
        }
      } catch (err: any) {
        if (err.code === 'ECONNABORTED') {
          console.error("Сервер хариу өгөхөд хэтэрхий удаж байна");
        } else {
          console.error("Сүлжээний алдаа гарлаа:", err.message);
        }
      }
    };
    fetchNews();
  }, [lang]);
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SLIDER SECTION */}
      <section className="relative h-[100vh] w-full overflow-hidden bg-black">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
          >
            <img
              src={slide.url}
              alt={slide.titleEn}
              className="w-full h-full object-cover brightness-[0.4]"
              referrerPolicy="no-referrer"
            />

            {/* Слайд бүрт харгалзах Текстүүд */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
              <div className={`max-w-4xl transition-all duration-1000 ${index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
                  {lang === "en" ? slide.titleEn : slide.titleMn}
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-8 font-sans leading-tight tracking-tighter">
                  Nova <span className="text-amber-400">Sys Std</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  {lang === "en" ? slide.descEn : slide.descMn}
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  <Link href="/components/About" className="px-10 py-4 bg-amber-400 hover:bg-amber-500 text-[#102B5A] font-bold rounded-2xl transition-all shadow-xl">
                    {lang === "en" ? "About us" : "Бидний тухай"}
                  </Link>
                  <Link href="/components/Contact" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold rounded-2xl transition-all">
                    {lang === "en" ? "Contact Us" : "Холбоо барих"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-amber-400 transition-all">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-amber-400 transition-all">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Индикатор цэгүүд */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "w-10 bg-amber-400" : "w-4 bg-white/30"}`} />
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
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
              title: lang === "en" ? "Machinery Parts" : "Механизмын сэлбэг",
              desc: lang === "en" ? "Precision parts and auto components" : "Хүнд даацын автомашин, механизмын оригинал сэлбэг хэрэгсэл",
              icon: <Truck className="w-7 h-7" />,
              href: "/components/Service/moving-industry",
              color: "bg-blue-50"
            },
            {
              title: lang === "en" ? "Heavy Industry" : "Хүнд үйлдвэр",
              desc: lang === "en" ? "Industrial engines and gearboxes" : "Хүнд үйлдвэрийн мотор, хурдны хайрцаг, насос, тэдгээрийн сэлбэг",
              icon: <Settings className="w-7 h-7" />,
              href: "/components/Service/heavy-industry",
              color: "bg-amber-50"
            },
            {
              title: lang === "en" ? "Mining Solutions" : "Уул уурхай",
              desc: lang === "en" ? "Mining equipment and specialized parts" : "Уул уурхайн тоног төхөөрөмж тэдгээрийн эд анги",
              icon: <HardHat className="w-7 h-7" />,
              href: "/components/Service/mining",
              color: "bg-emerald-50"
            },
            {
              title: lang === "en" ? "Construction" : "Барилга",
              desc: lang === "en" ? "Advanced construction machinery" : "Барилга угсралт, дэд бүтцийн тоног төхөөрөмж",
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

      {/* LATEST NEWS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
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
            {news.map((item) => (
              <div key={item.id} onClick={() => setSelectedNews(item)} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image ? (lang === "en" ? `https://novasysweb.onrender.com/uploadsEn/${item.image}` : `https://novasysweb.onrender.com/uploadsMn/${item.image}`) : "/default-image.png"}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}а

      <section className="py-24 container mx-auto px-6 relative overflow-hidden">
        {/* Арын чимэглэл - Зөөлөн гэрэлтэлт */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[120px] -z-10" />

        <div className="relative rounded-[3.5rem] bg-gradient-to-br from-[#102B5A] via-[#163a7a] to-[#0a1d3d] overflow-hidden p-12 md:p-24 text-center border border-white/10 shadow-2xl">

          {/* Арын хээ (Pattern) - Илүү дизайнлаг болгоно */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
          </div>

          {/* Гэрлийн эффект */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Жижиг текст (Badge) */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 text-sm font-semibold mb-6 tracking-wider">
              <Sparkles className="w-4 h-4" />
              {lang === "en" ? "PARTNER WITH US" : "БИДЭНТЭЙ ХАМТРАХ"}
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight ">
              {lang === "en"
                ? <>Ready to <span className="text-amber-400">Power</span> Your Operations?</>
                : <>Ирээдүйг <span className="text-amber-400">хамтдаа</span> бүтээцгээе</>
              }
            </h2>

            <p className="text-blue-100/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              {lang === "en"
                ? "We provide high-quality solutions for mining, industry, and construction with world-class standard."
                : "Бид уул уурхай, үйлдвэрлэл, барилгын салбарт дэлхийн жишигт нийцсэн чанартай шийдлүүдийг нийлүүлнэ."
              }
            </p>

            <Link
              href="/components/Contact"
              className="group relative inline-flex items-center gap-4 px-14 py-6 bg-amber-400 hover:bg-white text-[#102B5A] font-black rounded-2xl shadow-[0_20px_50px_rgba(251,191,36,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              {/* Гялалзах эффект (Hover үед) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <span className="relative z-10 text-lg tracking-wide">
                {lang === "en" ? "CONTACT OUR TEAM" : "ХОЛБОО БАРИХ"}
              </span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS MODAL */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/40">
          <div className="bg-white rounded-[3rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setSelectedNews(null)} className="absolute top-6 right-6 z-10 p-2 bg-gray-200 hover:bg-black hover:text-white rounded-full transition-all">
              <ChevronLeft className="w-6 h-6 rotate-180" />
            </button>
            <div className="h-80 md:h-96 w-full">
              <img src={selectedNews.image ? (lang === "en" ? `https://novasysweb.onrender.com/uploadsEn/${selectedNews.image}` : `https://novasysweb.onrender.com/uploadsMn/${selectedNews.image}`) : "/default-image.png"} alt={selectedNews.title} className="w-full h-full object-cover" />
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