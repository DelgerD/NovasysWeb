// src/pages/contact.tsx
"use client";
import { Bold } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { text } from "stream/consumers";
import { useLanguage } from "@/app/context/LanguageContext";



const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { lang } = useLanguage();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:8000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to send message");

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 container mx-auto">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">{lang === "en" ? "Contact us" : "Бидэнтэй холбогдох"}</h1>
        <p className="text-gray-700 text-center mb-8">
          {lang === "en" ? "Reach out to Nova Sys Std for any inquiries, project discussions, or support regarding mining equipment." : 
          "Уул уурхайн тоног төхөөрөмжтэй холбоотой аливаа лавлагаа, төслийн хэлэлцүүлэг эсвэл дэмжлэг авахыг хүсвэл Nova Sys Std-тэй холбогдоно уу."}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4 text-black">
            <div>
              <h3 className="text-black font-semibold text-lg">{lang === "en" ? "Address:" : "Хаяг:"}</h3>
              <p >{lang === "en" ? "Chinggis Ave Building #90, HUD - 3 khoroo, Ulaanbaatar 17060" : "Чингисийн өргөн чөлөө 90-р байр, ХУД - 3 хороо, Улаанбаатар 17060"}</p>
            </div>
            <div>
              <h3 className=" text-black font-semibold text-lg">{lang === "en" ? "Phone:" : "Утасны дугаар:"}</h3>
              <p>+976 9999-8888</p>
            </div>
            <div>
              <h3 className="text-black font-semibold text-lg">{lang === "en" ? "Email:" : "И-мэйл:"}</h3>
              <p>Sales@novastd.com</p>
            </div>

            {/* Optional: Google Map */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.6931195790033!2d106.91761811542549!3d47.920155279190364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969b8f3c57bcb1%3A0x94a7cbbf38db9d7b!2sUlaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2sus!4v1699058888888!5m2!1sen!2sus"
                width="100%"
                height="250"
                className="border-0 rounded"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="text-black">
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <input 
                type="text"
                name="name"
                color="black"
                value={formData.name}
                onChange={handleChange}
                placeholder={lang === "en" ? "Your name:" : "Таны нэр"}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-ring-black"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={lang === "en" ? "Your email:" : "Таны и-мэйл"}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={lang === "en" ? "Subject:" : "Гарчиг"}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-ring-black"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={lang === "en" ? "Your message:" : "Таны мессеж"}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-ring-black"
                rows={5}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#102B5A] text-white p-3 rounded font-semibold hover:bg-gray-900 transition"
              >
                {lang === "en" ? "Send message:" : "Мессеж илгээх"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
