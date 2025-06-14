import React from "react";
import LiondeskNavbar from "../../components/LiondeskNavbar";
import { Button } from "../../components/ui/button";
import { Pencil, Trash2, Eye, Send, FileText } from "lucide-react";

export default function ClientsPage() {
  const clients = [
    { name: "Jane Doe", email: "jane@example.com", phone: "555-1234" },
    { name: "John Smith", email: "john@example.com", phone: "555-5678" },
    { name: "Sarah Connor", email: "sarah@example.com", phone: "555-2468" },
    { name: "Marcus Wright", email: "marcus@example.com", phone: "555-1357" },
  ];

  return (
    <>
      <LiondeskNavbar />
      <main className="min-h-screen bg-[#0D3B66] text-[#FAF0CA] px-6 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center drop-shadow-lg">
          Client Management
        </h1>

        {/* Add New Client Button */}
        <section className="flex justify-end mb-6">
          <Button
            variant="outline"
            className="bg-[#E0B84E] text-[#0D3B66] px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#d3a63e] transition-colors"
          >
            Add New Client
          </Button>
        </section>

        {/* Clients Table */}
        <section className="overflow-x-auto">
          <table className="w-full table-auto bg-[#144972] rounded-2xl overflow-hidden shadow-lg text-left">
            <thead className="bg-[#1a4c7f] text-[#FAF0CA]/80 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#1c5c90] transition-colors border-b border-[#0f3559]/30"
                >
                  <td className="px-6 py-4">{client.name}</td>
                  <td className="px-6 py-4">{client.email}</td>
                  <td className="px-6 py-4">{client.phone}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        className="text-[#E0B84E] hover:underline px-3 flex items-center gap-1"
                      >
                        <Pencil className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        className="text-red-400 hover:underline px-3 flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
