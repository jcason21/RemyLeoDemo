import React, { useState } from "react";
import LiondeskNavbar from "../../components/LiondeskNavbar";
import { Users, FileText, CalendarDays, PlusCircle } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample pulled-in data
const appointments = [
  { client: "Jane Doe", date: "2025-06-10" },
  { client: "John Smith", date: "2025-06-12" },
];

const invoices = [
  { client: "Jane Doe", amount: 500, date: "2025-06-01" },
  { client: "John Smith", amount: 250, date: "2025-06-05" },
];

const clients = [
  { name: "Jane Doe" },
  { name: "John Smith" },
  { name: "Chris Evans" },
];

const chartData = [
  { name: "Jan", income: 0 },
  { name: "Feb", income: 200 },
  { name: "Mar", income: 300 },
  { name: "Apr", income: 250 },
  { name: "May", income: 500 },
  { name: "Jun", income: 750 },
];

export default function DashboardPage() {
  const recentActivity = [
    `Created invoice for ${invoices[0].client}`,
    `Scheduled appointment with ${appointments[0].client}`,
    `Added new client ${clients[2].name}`,
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <LiondeskNavbar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded shadow flex items-center gap-4">
            <Users className="text-blue-600" size={32} />
            <div>
              <p className="text-sm">Total Clients</p>
              <h2 className="text-xl font-bold">{clients.length}</h2>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded shadow flex items-center gap-4">
            <FileText className="text-green-600" size={32} />
            <div>
              <p className="text-sm">Total Invoices</p>
              <h2 className="text-xl font-bold">{invoices.length}</h2>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded shadow flex items-center gap-4">
            <CalendarDays className="text-yellow-600" size={32} />
            <div>
              <p className="text-sm">Upcoming Appointments</p>
              <h2 className="text-xl font-bold">{appointments.length}</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Income Over Time</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {recentActivity.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-right">
          <a
            href="/liondesk/client-management"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <PlusCircle size={16} /> Add New Client
          </a>
        </div>
      </main>
    </div>
  );
}
