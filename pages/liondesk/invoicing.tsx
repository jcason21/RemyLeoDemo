import React, { useState, useEffect } from "react";
import LiondeskNavbar from "../../components/LiondeskNavbar";
import {
  FileText,
  Pencil,
  Trash2,
  DollarSign,
} from "lucide-react";

const initialInvoices = [
  {
    id: 1,
    client: "Jane Doe",
    email: "jane@example.com",
    service: "Web Development",
    amount: 1200,
    dueDate: "2025-07-01",
    status: "Unpaid",
  },
  {
    id: 2,
    client: "John Smith",
    email: "john@example.com",
    service: "Logo Design",
    amount: 600,
    dueDate: "2025-07-15",
    status: "Paid",
  },
];

export default function InvoicingPage() {
  const [invoices, setInvoices] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("invoices");
      return saved ? JSON.parse(saved) : initialInvoices;
    }
    return initialInvoices;
  });

  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    client: "",
    email: "",
    service: "",
    amount: "",
    dueDate: "",
    status: "Unpaid",
  });

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const filteredInvoices = invoices.filter((inv) =>
    inv.client.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    if (
      !form.client ||
      !form.email ||
      !form.service ||
      !form.amount ||
      !form.dueDate
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (isNaN(Number(form.amount)) || Number(form.amount) <= 0) {
      alert("Amount must be a positive number.");
      return;
    }

    if (editing !== null) {
      setInvoices((prev) =>
        prev.map((inv) =>
          inv.id === editing ? { ...form, id: editing, amount: Number(form.amount) } : inv
        )
      );
    } else {
      const newInvoice = { ...form, id: Date.now(), amount: Number(form.amount) };
      setInvoices((prev) => [...prev, newInvoice]);
    }
    setForm({
      client: "",
      email: "",
      service: "",
      amount: "",
      dueDate: "",
      status: "Unpaid",
    });
    setEditing(null);
  };

  const handleEdit = (invoice) => {
    setForm({ ...invoice, amount: invoice.amount.toString() });
    setEditing(invoice.id);
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this invoice?")
    ) {
      setInvoices((prev) => prev.filter((inv) => inv.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <LiondeskNavbar />
      <main className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FileText /> Invoicing
          </h1>
          <input
            type="text"
            placeholder="Search invoices by client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-64"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <DollarSign /> {editing ? "Edit Invoice" : "Add New Invoice"}
            </h2>
            <input
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Client Name"
              value={form.client}
              onChange={(e) => setForm({ ...form, client: e.target.value })}
            />
            <input
              type="email"
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Client Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            />
            <input
              type="number"
              min="0"
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Amount"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
            <input
              type="date"
              className="w-full border mb-3 px-3 py-2 rounded"
              value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            />
            <select
              className="w-full border mb-3 px-3 py-2 rounded"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="Unpaid">Unpaid</option>
              <option value="Paid">Paid</option>
              <option value="Overdue">Overdue</option>
            </select>
            <button
              onClick={handleSave}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              {editing ? "Update Invoice" : "Add Invoice"}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Client</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Service</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Due Date</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((inv) => (
                  <tr key={inv.id} className="border-b">
                    <td className="py-2 px-4">{inv.client}</td>
                    <td className="py-2 px-4">{inv.email}</td>
                    <td className="py-2 px-4">{inv.service}</td>
                    <td className="py-2 px-4">${inv.amount.toFixed(2)}</td>
                    <td className="py-2 px-4">{inv.dueDate}</td>
                    <td className="py-2 px-4">{inv.status}</td>
                    <td className="py-2 px-4 space-x-2">
                      <button
                        onClick={() => handleEdit(inv)}
                        className="text-blue-600 hover:text-blue-800"
                        aria-label={`Edit invoice for ${inv.client}`}
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(inv.id)}
                        className="text-red-600 hover:text-red-800"
                        aria-label={`Delete invoice for ${inv.client}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredInvoices.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-4 text-gray-500">
                      No invoices found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
