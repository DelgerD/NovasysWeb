"use client";
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { Award, Users, Globe, Rocket, Eye, ArrowRight, ShieldCheck } from "lucide-react";

const About: React.FC = () => {
  const { lang } = useLanguage();

  const stats = [
    { label: lang === "en" ? "Years Experience" : "Жилийн туршлага", value: "15+", icon: <Award className="w-5 h-5" /> },
    { label: lang === "en" ? "Experts" : "Мэргэжилтнүүд", value: "50+", icon: <Users className="w-5 h-5" /> },
    { label: lang === "en" ? "Projects Done" : "Төсөл хэрэгжүүлсэн", value: "200+", icon: <ShieldCheck className="w-5 h-5" /> },
    { label: lang === "en" ? "Global Partners" : "Түнш байгууллага", value: "12", icon: <Globe className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative py-32 overflow-hidden bg-[#102B5A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-amber-400 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]" />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
            {lang === "en" ? "About Our Company" : "Компанийн тухай"}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Nova <span className="text-amber-400">Sys Std</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100/80 leading-relaxed">
            {lang === "en" 
              ? "World-Class Solutions." 
              : "Дэлхийн жишигт нийцсэн шийдэл."}
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative -mt-16 container mx-auto px-6 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-[#102B5A] mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#102B5A] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#102B5A] mb-8">
              {lang === "en" ? "Excellence in Every Operation" : "Үйл ажиллагаа бүрийн төгс гүйцэтгэл"}
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                {lang === "en" 
                  ? "With over 15 years of industry leadership, Nova Sys Std has evolved into a multi-sector powerhouse, delivering precision-engineered solutions for the most challenging environments." 
                  : "15 гаруй жилийн салбарын туршлагатай Nova Sys Std нь хамгийн хүнд нөхцөлд ч нарийн инженерчлэлийн шийдлүүдийг нийлүүлдэг олон салбарт тэргүүлэгч хүчин болон өргөжсөн."}
              </p>
              <p>
                {lang === "en" 
                  ? "Our approach combines heavy machinery expertise with strategic consulting to ensure your projects move from blueprint to reality with maximum efficiency." 
                  : "Бид хүнд машин механизмын туршлагыг стратегийн зөвлөх үйлчилгээтэй хослуулж, таны төслийг төлөвлөгөөнөөс бодит байдал руу хамгийн өндөр үр ашигтайгаар шилжүүлдэг."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
             <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#102B5A] mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-amber-400 rounded-full" />
                  {lang === "en" ? "Experience & Reliability" : "Туршлага ба Найдвартай байдал"}
                </h3>
                <p className="text-gray-600">
                  {lang === "en" ? "Trusted by tier-1 mining companies for delivering consistent results under extreme conditions." : "Хүнд нөхцөлд тогтвортой үр дүн үзүүлдэг тул дэлхийн шилдэг уул уурхайн компаниудын итгэлийг хүлээсэн."}
                </p>
             </div>
             <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#102B5A] mb-4 flex items-center gap-3">
                   <div className="w-2 h-8 bg-amber-400 rounded-full" />
                   {lang === "en" ? "End-to-End Support" : "Иж бүрэн дэмжлэг"}
                </h3>
                <p className="text-gray-600">
                  {lang === "en" ? "From sourcing and logistics to onsite maintenance, we provide a full lifecycle support for your assets." : "Хангамж, ложистикоос эхлээд газар дээрх засвар үйлчилгээ хүртэл бид таны хөрөнгийн иж бүрэн мөчлөгийг дэмждэг."}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - MODERN BENTO */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm relative overflow-hidden group">
              <Rocket className="w-16 h-16 text-amber-400/20 absolute -top-4 -right-4 group-hover:scale-110 transition duration-500" />
              <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-[#102B5A] mb-8">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#102B5A] mb-4">
                {lang === "en" ? "Our Objective" : "Бидний эрхэм зорилт"}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {lang === "en" 
                  ? "Deliver world-class spare parts solutions to Mongolia’s mining industry with unmatched reliability, quality, and service by 2028." 
                  : "2028 он гэхэд дэлхийн жишигт нийцсэн найдвартай, чанар сэлбэг болон тоног төхөөрөмжийн шийдлүүд, түүний засвар үйлчилгээтэй хамт цогцоор нь монголын уул уурхайн салбарт үзүүлхээр зорьж байна."}
              </p>
            </div>
            
            

            <div className="bg-[#102B5A] p-12 rounded-[3rem] shadow-xl relative overflow-hidden group">
              <Eye className="w-16 h-16 text-white/10 absolute -top-4 -right-4 group-hover:scale-110 transition duration-500" />
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-amber-400 mb-8">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {lang === "en" ? "Our Goals" : "Бидний зорилго"}
              </h3>
              <div className="text-blue-100/70 text-lg leading-relaxed">
                  {lang === "en" ? (
                    <ul className="list-decimal pl-5 space-y-2">
                      <li>Establish a reliable supply chain for world-class mining spare parts in Mongolia</li>
                      <li>Build long-term partnerships with leading global manufacturers</li>
                      <li>Achieve official distributor and certification status from internationally recognized brands</li>
                      <li>Provide integrated spare parts, equipment, and maintenance solutions</li>
                      <li>Enhance customer trust through consistent quality, service excellence, and technical support</li>
                    </ul>
                  ) : (
                    <ul className="list-decimal pl-5 space-y-2">
                      <li>Монголын уул уурхайн салбарт дэлхийн жишигт нийцсэн найдвартай сэлбэгийн нийлүүлэлтийн сүлжээг бүрдүүлэх</li>
                      <li>Олон улсын тэргүүлэгч үйлдвэрлэгчидтэй урт хугацааны стратегийн түншлэл бий болгох</li>
                      <li>Олон улсад хүлээн зөвшөөрөгдсөн брэндүүдийн албан ёсны дистрибьютор, сертификаттай болох</li>
                      <li>Сэлбэг, тоног төхөөрөмж, засвар үйлчилгээний нэгдсэн цогц шийдэл санал болгох</li>
                      <li>Чанар, найдвартай байдал, мэргэжлийн үйлчилгээгээр харилцагчдын итгэлийг нэмэгдүүлэх</li>
                    </ul>
                  )}
                </div>


            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] bg-gradient-to-r from-amber-200 to-amber-400 overflow-hidden p-12 md:p-20 text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-[#102B5A] mb-8">
                {lang === "en" ? "Ready to Build the Future?" : "Ирээдүйг хамтдаа бүтээх үү?"}
              </h2>
              <p className="text-lg text-[#102B5A]/80 mb-12 font-medium">
                {lang === "en" 
                  ? "Join hands with Nova Sys Std for industrial solutions that set new standards in efficiency and safety." 
                  : "Үр ашиг болон аюулгүй ажиллагааны шинэ стандартыг тогтоож буй Nova Sys Std-тэй хамтран ажиллана уу."}
              </p>
              <a
                href="/components/Contact"
                className="inline-flex items-center gap-3 px-12 py-5 bg-[#102B5A] text-white font-bold rounded-2xl shadow-2xl hover:bg-[#102B5A]/90 transition-all hover:scale-105 active:scale-95"
              >
                {lang === "en" ? "Contact Our Team" : "Манай багтай холбогдох"}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;