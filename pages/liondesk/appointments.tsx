import React, { useState, useEffect } from "react";
import LiondeskNavbar from "../../components/LiondeskNavbar";
import {
  CalendarDays,
  Pencil,
  Trash2,
  User,
} from "lucide-react";

const initialAppointments = [
  {
    id: 1,
    client: "Jane Doe",
    date: "2025-06-15",
    time: "10:00",
    service: "Web Development",
    status: "Confirmed",
  },
  {
    id: 2,
    client: "John Smith",
    date: "2025-06-16",
    time: "14:00",
    service: "Logo Design",
    status: "Pending",
  },
];

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("appointments");
      return saved ? JSON.parse(saved) : initialAppointments;
    }
    return initialAppointments;
  });
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    client: "",
    date: "",
    time: "",
    service: "",
    status: "Pending",
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const filteredAppointments = appointments.filter((a) =>
    a.client.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    if (
      !form.client ||
      !form.date ||
      !form.time ||
      !form.service
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (editing !== null) {
      setAppointments((prev) =>
        prev.map((a) =>
          a.id === editing ? { ...form, id: editing } : a
        )
      );
    } else {
      const newAppointment = { ...form, id: Date.now() };
      setAppointments((prev) => [...prev, newAppointment]);
    }
    setForm({
      client: "",
      date: "",
      time: "",
      service: "",
      status: "Pending",
    });
    setEditing(null);
  };

  const handleEdit = (appointment) => {
    setForm({ ...appointment });
    setEditing(appointment.id);
  };

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this appointment?")
    ) {
      setAppointments((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <LiondeskNavbar />
      <main className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <CalendarDays /> Appointments
          </h1>
          <input
            type="text"
            placeholder="Search appointments by client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-64"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User /> {editing ? "Edit Appointment" : "Add New Appointment"}
            </h2>
            <input
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Client Name"
              value={form.client}
              onChange={(e) => setForm({ ...form, client: e.target.value })}
            />
            <input
              type="date"
              className="w-full border mb-3 px-3 py-2 rounded"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <input
              type="time"
              className="w-full border mb-3 px-3 py-2 rounded"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
            <input
              className="w-full border mb-3 px-3 py-2 rounded"
              placeholder="Service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            />
            <select
              className="w-full border mb-3 px-3 py-2 rounded"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
            </select>
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {editing ? "Update Appointment" : "Add Appointment"}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Client</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Time</th>
                  <th className="py-2 px-4">Service</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appt) => (
                  <tr key={appt.id} className="border-b">
                    <td className="py-2 px-4">{appt.client}</td>
                    <td className="py-2 px-4">{appt.date}</td>
                    <td className="py-2 px-4">{appt.time}</td>
                    <td className="py-2 px-4">{appt.service}</td>
                    <td className="py-2 px-4">{appt.status}</td>
                    <td className="py-2 px-4 space-x-2">
                      <button
                        onClick={() => handleEdit(appt)}
                        className="text-blue-600 hover:text-blue-800"
                        aria-label={`Edit appointment for ${appt.client}`}
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(appt.id)}
                        className="text-red-600 hover:text-red-800"
                        aria-label={`Delete appointment for ${appt.client}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredAppointments.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-gray-500">
                      No appointments found.
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
