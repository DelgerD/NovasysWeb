import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <nav className="space-x-4">
        <Link href="/admin" className="hover:text-gray-200 transition">News</Link>
        <Link href="/admin/components/NewsEn">NewsEnglish</Link>
        <Link href="/admin/User">Add Admin</Link>
        <Link href="/admin/contact">Contacts</Link>
        
      </nav>
    </header>
  );
}
