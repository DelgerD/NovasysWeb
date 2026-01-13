"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/admin/logout",
        {},
        { withCredentials: true } // HTTP-only cookie-г устгахын тулд
      );
      router.push("/Home"); // login page руу redirect
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <nav className="space-x-4 flex items-center">
        <Link href="/admin" className="hover:text-gray-200 transition">News</Link>
        <Link href="/admin/components/NewsEn" className="hover:text-gray-200 transition">NewsEnglish</Link>
        <Link href="/admin/User" className="hover:text-gray-200 transition">Add Admin</Link>
        <Link href="/admin/contact" className="hover:text-gray-200 transition">Contacts</Link>
        {/* <Link href="/admin/components/projectEn" className="hover:text-gray-200 transition">ProjectEn</Link>
        <Link href="/admin/components/projectMn" className="hover:text-gray-200 transition">ProjectMn</Link> */}
        <button
          onClick={handleLogout}
          className="ml-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
