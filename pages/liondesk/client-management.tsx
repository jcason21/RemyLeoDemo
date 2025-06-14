import React, { useState, useEffect } from "react";
import LiondeskNavbar from "../../components/LiondeskNavbar";
import {
  Pencil,
  Trash2,
  Eye,
  UserPlus,
  Users,
  X,
} from "lucide-react";

const initialClients = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    service: "Web Development",
    status: "Active",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    service: "Logo Design",
    status: "Pending",
  },
];

export default function ClientManagementPage() {
  const [clients, setClients] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("clients");
      return saved ? JSON.parse(saved) : initialClients;
    }
    return initialClients;
  });
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    status: "Active",
  });
  const [viewingClient, setViewingClient] = useState(null as null | typeof form);

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const validateEmail = (email: string) => {
    // Simple email regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.email.trim()) {
      alert("Please fill in both name and email.");
      return;
    }
    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (editing !== null) {
      setClients((prev) =>
        prev.map((c) => (c.id === editing ? { ...form, id: editing } : c))
      );
    } else {
      const newClient = { ...form, id: Date.now() };
      setClients((prev) => [...prev, newClient]);
    }
    setForm({ name: "", email: "", service: "", status: "Active" });
    setEditing(null);
  };

  const handleEdit = (client: typeof form & { id: number }) => {
    setForm({ ...client });
    setEditing(client.id);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this client?")) {
      setClients((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <LiondeskNavbar />
      <main className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Users /> Client Management
          </h1>
          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded w-full max-w-xs"
            aria-label="Search clients"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Form */}
          <div className="border p-4 rounded shadow md:w-1/2">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <UserPlus /> {editing ? "Edit Client" : "Add New Client"}
            </h2>
            <input
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-label="Client name"
            />
            <input
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-label="Client email"
            />
            <input
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              aria-label="Service"
            />
            <select
              className="w-full border mb-3 px-3 py-2 rounded"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              aria-label="Status"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {editing ? "Update Client" : "Add Client"}
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto md:w-1/2">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Service</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id} className="border-b">
                    <td className="py-2 px-4">{client.name}</td>
                    <td className="py-2 px-4 break-words max-w-[150px]">
                      {client.email}
                    </td>
                    <td className="py-2 px-4">{client.service}</td>
                    <td className="py-2 px-4">{client.status}</td>
                    <td className="py-2 px-4 space-x-2">
                      <button
                        onClick={() => handleEdit(client)}
                        className="text-blue-600 hover:text-blue-800"
                        aria-label={`Edit ${client.name}`}
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(client.id)}
                        className="text-red-600 hover:text-red-800"
                        aria-label={`Delete ${client.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                      <button
                        onClick={() => setViewingClient(client)}
                        className="text-gray-600 hover:text-black"
                        aria-label={`View details of ${client.name}`}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredClients.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No clients found.</p>
            )}
          </div>
        </div>
      </main>

      {/* View Client Modal */}
      {viewingClient && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
        >
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg">
            <button
              onClick={() => setViewingClient(null)}
              aria-label="Close client details"
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{viewingClient.name}</h2>
            <p>
              <strong>Email:</strong> {viewingClient.email}
            </p>
            <p>
              <strong>Service:</strong> {viewingClient.service || "N/A"}
            </p>
            <p>
              <strong>Status:</strong> {viewingClient.status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
