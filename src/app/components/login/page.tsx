"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Алдааг цэвэрлэх
    try {
      const res = await axios.post(
      "https://novasysweb.onrender.com/components/login",
      { email, password },
      { withCredentials: true }
    );
    console.log("Backend-ээс хариу ирлээ:", res.data);
    if (res.status === 200) {
      // Күүки хадгалагдахгүй байх магадлалтай тул токен ирсэн бол гараар тавих (Optionally)
      // Cookies.set("admin_token", res.data.token); 
      
      console.log("Амжилттай, шилжиж байна...");
      window.location.href = "/admin"; // Router-ээс илүү баталгаатай
    }
      if (res.data.token) {
      Cookies.set("admin_token", res.data.token, { 
        expires: 1, 
        secure: true, 
        sameSite: 'Lax' // Middleware нэг домэйн дотор (Vercel) уншихад Lax байж болно
      });
    }
      console.log("Login successful, redirecting...");
      router.push("/admin"); 
      router.refresh();// амжилттай login бол admin руу
    } catch (err: any) {
    console.error("Login Error:", err.response || err);
    setError(err.response?.data?.error || "Хүсэлт амжилтгүй боллоо");
  }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border rounded"
          required
        />
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
 //21