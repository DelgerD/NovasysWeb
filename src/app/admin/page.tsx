"use client";

import React, { useState } from "react";
import axios from "axios";

const AdminPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:8000/news", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Мэдээ амжилттай хадгалагдлаа!");
      setTitle(""); setDate(""); setDescription(""); setImage(null);
    } catch (err) {
      console.error(err);
      alert("Алдаа гарлаа");
    }
  };

  return (
    <div className="max-w-3xl text-black mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin - Мэдээ нэмэх</h1>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          placeholder="Гарчиг"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded "
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
    </div>
  );
};

export default AdminPage;
