"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function useAdminAuth() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        await axios.get("https://novasysweb.onrender.com/admin/me", { withCredentials: true });
        setLoading(false); // admin
      } catch (err) {
        router.push("/login"); // admin биш бол login руу
      }
    };

    checkAdmin();
  }, [router]);

  return loading;
}
