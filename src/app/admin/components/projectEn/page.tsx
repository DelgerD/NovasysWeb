"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface ProjectItem {
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

  const [ProjectList, setProjectList] = useState<ProjectItem[]>([]);

  // 🔥 Fetch all news on load
  const fetchProject = async () => {
    try {
      const res = await axios.get("http://localhost:8000/projectEn");
      setProjectList(res.data);
    } catch (err) {
      console.error("Failed to fetch project:", err);
    }
  };

  useEffect(() => {
    fetchProject();
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
      await axios.post("http://localhost:8000/projectEn", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Мэдээлэл амжилттай хадгалагдлаа!");
      setTitle("");
      setDate("");
      setDescription("");
      setImage(null);
      fetchProject(); // ⬅ Refresh list
    } catch (err) {
      console.error(err);
      alert("Алдаа гарлаа");
    }
  };

  // ❌ Delete news
  const deleteProject = async (id: number) => {
    if (!confirm("Энэ мэдээлэлийг устгах уу?")) return;

    try {
      await axios.delete(`http://localhost:8000/projectEn/${id}`);
      alert("Устгагдлаа");
      fetchProject(); // refresh
    } catch (err) {
      console.error(err);
      alert("Устгахад алдаа гарлаа");
    }
  };

  return (
    <div className="max-w-4xl text-black mx-auto py-10">

      {/* ==================== ADD NEWS FORM ==================== */}
      <h1 className="text-3xl font-bold mb-6">Input project information</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Header"
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
          placeholder="Description"
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
          Save
        </button>
      </form>


      {/* ==================== NEWS LIST ==================== */}
      <h2 className="text-2xl font-bold mb-4">Project List</h2>

      {ProjectList.length === 0 ? (
        <p>No projects.</p>
      ) : (
        <div className="space-y-4">
          {ProjectList.map((Project) => (
            <div
              key={Project.id}
              className="border p-4 rounded flex items-start justify-between"
            >
              <div className="flex gap-4">
                {Project.image_url && (
                  <img
                    src={`http://localhost:8000/uploadsEn/project/${Project.image_url}`}
                    alt={Project.title}
                    className="w-32 h-24 object-cover rounded"
                  />
                )}

                <div>
                  <h3 className="text-xl font-semibold">{Project.title}</h3>
                  <p className="text-gray-600">{Project.date}</p>
                  <p className="mt-2 text-sm">{Project.description}</p>
                </div>
              </div>

              <button
                onClick={() => deleteProject(Project.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
