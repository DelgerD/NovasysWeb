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

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchContacts = async (filter = false) => {
    try {
      setLoading(true);

      const params: any = {};
      if (filter && startDate) params.start = startDate;
      if (filter && endDate) params.end = endDate;

      const res = await axios.get<Contact[]>("http://localhost:8000/contacts", { params });

      setContacts(res.data);
      setError(null);

    } catch (err: any) {
      setError(err.message || "Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const clearFilter = () => {
    setStartDate("");
    setEndDate("");
    fetchContacts();
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl text-black font-bold mb-6 text-center">Contact Messages</h1>

      {/* ================= FILTER UI ================= */}
      <div className="bg-white p-4 rounded shadow mb-6 flex gap-4 items-end">
        <div className="flex flex-col">
          <label className="text-black mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2 rounded text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-black mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-2 rounded text-black"
          />
        </div>

        <button
          onClick={() => fetchContacts(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Filter
        </button>

        <button
          onClick={clearFilter}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Clear
        </button>
      </div>

      {/* ================= LIST ================= */}
      {loading && <p className="text-center mt-8">Loading...</p>}
      {error && <p className="text-center mt-8 text-red-500">{error}</p>}

      {!loading && !error && contacts.length === 0 && (
        <p className="text-center text-gray-500">No messages found.</p>
      )}

      {!loading && !error && contacts.length > 0 && (
        <div className="grid gap-6">
          {contacts.map((c) => (
            <div key={c.id} className="p-4 bg-white rounded shadow hover:shadow-lg transition">
              <div className="flex justify-between mb-2">
                <h2 className="font-semibold text-black text-lg">{c.name}</h2>
                <span className="text-sm text-gray-500">
                  {new Date(c.created_at).toLocaleString()}
                </span>
              </div>

              <p className="text-sm text-gray-700"><strong>Email:</strong> {c.email}</p>
              <p className="text-sm text-gray-700"><strong>Subject:</strong> {c.subject}</p>
              <p className="text-sm text-gray-700 mt-2">{c.message}</p>
             {/* Delete button */}
        <div className="mt-2 flex justify-end">
          <button
            onClick={async () => {
              if (!confirm("Are you sure you want to delete this message?")) return;
              try {
                await axios.delete(`http://localhost:8000/contacts/${c.id}`);
                // Delete хийсний дараа contact list-ийг refresh хийх
                setContacts((prev) => prev.filter((contact) => contact.id !== c.id));
              } catch (err) {
                console.error(err);
                alert("Failed to delete message.");
              }
            }}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
        
      </div>
    ))}
  </div>
)}
    </div>
  );
};

export default AdminContacts;
