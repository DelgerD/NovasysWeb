import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminHeader from "./components/AdminHeader";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies(); // <--- await нэмэх
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    redirect("/Home");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      <main className="p-6">{children}</main>
    </div>
  );
}
