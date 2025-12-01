"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const AdminContacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get<Contact[]>("http://localhost:8000/contacts"); // backend route
        setContacts(res.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl text-black font-bold mb-6 text-center">Contact Messages</h1>

      {contacts.length === 0 ? (
        <p className="text-center text-gray-500">No messages found.</p>
      ) : (
        <div className="grid gap-6">
          {contacts.map((c) => (
            <div key={c.id} className="p-4 bg-white rounded shadow hover:shadow-lg transition">
              <div className="flex justify-between mb-2">
                <h2 className="font-semibold text-black text-lg">{c.name}</h2>
                <span className="text-sm text-gray-500">{new Date(c.created_at).toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-700"><strong>Email:</strong> {c.email}</p>
              <p className="text-sm text-gray-700"><strong>Subject:</strong> {c.subject}</p>
              <p className="text-sm text-gray-700 mt-2">{c.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
