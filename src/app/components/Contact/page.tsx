"use client";
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://novasysweb.onrender.com/contacts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      alert(lang === "en" ? "Message sent successfully!" : "Амжилттай илгээгдлээ!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      alert(err.message || "Error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO HEADER --- */}
      <section className="relative py-24 bg-[#102B5A] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#fbbf24_0%,_transparent_50%)]" />
        <div className="relative container mx-auto px-6 text-center">
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
            {lang === "en" ? "Get in touch" : "Холбоо тогтоох"}
          </span> */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            {lang === "en" ? "Contact Our Experts" : "Бидэнтэй холбогдох"}
          </h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto font-light">
            {lang === "en" 
              ? "Nova Sys Std is ready to support your mining and industrial projects with global expertise." 
              : "Nova Sys Std нь таны уул уурхай, үйлдвэрлэлийн төслүүдийг дэлхийн түвшний туршлагаар дэмжихэд бэлэн байна."}
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- LEFT SIDE: INFO CARDS --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#102B5A] mb-8 flex items-center gap-2">
                <MessageSquare className="text-amber-500 w-5 h-5" />
                {lang === "en" ? "Quick Connect" : "Холбоо барих"}
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-500 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102B5A] text-sm uppercase tracking-tighter">{lang === "en" ? "Location" : "Хаяг"}</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      {lang === "en" ? "Chinggis Ave #90, HUD, Ulaanbaatar" : "Чингисийн өргөн чөлөө 90-р байр, ХУД, Улаанбаатар"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-500 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102B5A] text-sm uppercase tracking-tighter">{lang === "en" ? "Call Us" : "Утас"}</h4>
                    <p className="text-gray-500 text-sm mt-1">+976 89808252</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-500 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102B5A] text-sm uppercase tracking-tighter">{lang === "en" ? "Email" : "И-мэйл"}</h4>
                    <p className="text-gray-500 text-sm mt-1">sales@novastd.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded with Style */}
            <div className="rounded-[2.5rem] overflow-hidden h-64 border border-gray-100 shadow-sm  transition-all duration-700">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d584!2d106.886857!3d47.8974832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693a7adfb6321:0xd8380ec99dc3af4c!2z0JDQvdGD0L0g0YLQvdCy!5e0!3m2!1smn!2smn!4v1700000000000"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>

            </div>
          </div>

          {/* --- RIGHT SIDE: PREMIUM FORM --- */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50">
            <h3 className="text-2xl font-bold text-[#102B5A] mb-8">
              {lang === "en" ? "Send an Inquiry" : "Хүсэлт илгээх"}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black uppercase ml-2">{lang === "en" ? "Full Name" : "Таны нэр"}</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-100 border border-transparent focus:border-amber-400 focus:bg-white rounded-2xl outline-none transition-all text-black"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black uppercase ml-2">{lang === "en" ? "Email Address" : "И-мэйл"}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-100 border border-transparent focus:border-amber-400 focus:bg-white rounded-2xl outline-none transition-all text-black"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase ml-2">{lang === "en" ? "Subject" : "Гарчиг"}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 border border-transparent focus:border-amber-400 focus:bg-white rounded-2xl outline-none transition-all text-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase ml-2">{lang === "en" ? "Message" : "Мессеж"}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-100 border border-transparent focus:border-amber-400 focus:bg-white rounded-2xl outline-none transition-all min-h-[150px] text-black"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#102B5A] text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#1a3d7a] hover:-translate-y-1 transition-all shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {lang === "en" ? "Submit Message" : "Илгээх"}
                    <Send className="w-5 h-5 text-amber-400" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;