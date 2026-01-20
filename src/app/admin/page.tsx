"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image_url?: string;
}

const AdminPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  // 🔥 Fetch all news on load
  const fetchNews = async () => {
    try {
      const res = await axios.get("https://novasysweb.onrender.com/news");
      setNewsList(res.data);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // ➕ Submit new news
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      await axios.post("https://novasysweb.onrender.com/news", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Мэдээ амжилттай хадгалагдлаа!");
      setTitle("");
      setDate("");
      setDescription("");
      setImage(null);
      fetchNews(); // ⬅ Refresh list
    } catch (err) {
      console.error(err);
      alert("Алдаа гарлаа");
    }
  };

  // ❌ Delete news
  const deleteNews = async (id: number) => {
    if (!confirm("Энэ мэдээг устгах уу?")) return;

    try {
      await axios.delete(`https://novasysweb.onrender.com/news/${id}`);
      alert("Устгагдлаа");
      fetchNews(); // refresh
    } catch (err) {
      console.error(err);
      alert("Устгахад алдаа гарлаа");
    }
  };
 


  return (
    <div className="max-w-4xl text-black mx-auto py-10">

      {/* ==================== ADD NEWS FORM ==================== */}
      <h1 className="text-3xl font-bold mb-6">Мэдээ нэмэх монгол</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Гарчиг"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          placeholder="Тайлбар"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Хадгалах
        </button>
      </form>


      {/* ==================== NEWS LIST ==================== */}
      <h2 className="text-2xl font-bold mb-4">Мэдээний жагсаалт</h2>

      {newsList.length === 0 ? (
        <p>Мэдээ алга.</p>
      ) : (
        <div className="space-y-4">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="border p-4 rounded flex items-start justify-between"
            >
              <div className="flex gap-4">
                {news.image_url && (
                  <img
                    src={`https://novasysweb.onrender.com/uploads/${news.image_url}`}
                    alt={news.title}
                    className="w-32 h-24 object-cover rounded"
                  />
                )}

                <div>
                  <h3 className="text-xl font-semibold">{news.title}</h3>
                  <p className="text-gray-600">{news.date}</p>
                  <p className="mt-2 text-sm">{news.description}</p>
                </div>
              </div>
              <button
                onClick={() => deleteNews(news.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Устгах
              </button>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
