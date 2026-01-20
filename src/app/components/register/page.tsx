"use client";

import React, { useState } from "react";
import axios from "axios";

const AdminUsers: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const res = await axios.post("https://novasysweb.onrender.com/users", {
        email,
        password,
        full_name: fullName,
      });
      setMessage("Хэрэглэгч амжилттай нэмэгдлээ!");
      setEmail("");
      setPassword("");
      setFullName("");
    } catch (err: any) {
      console.error(err);
      setMessage(err.response?.data?.error || "Алдаа гарлаа");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 text-black">
      <h1 className="text-3xl text-black font-bold mb-6 text-center">Admin - Хэрэглэгч нэмэх</h1>

      {message && (
        <p className={`text-center mb-4 ${message.includes("амжилттай") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Нэмэх
        </button>
      </form>
    </div>
  );
};

export default AdminUsers;
