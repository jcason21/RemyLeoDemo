import React, { useState } from "react";
import LiondeskNavbar from "../../components/LiondeskNavbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  CartesianGrid,
} from "recharts";
import { saveAs } from "file-saver";
import { CSVLink } from "react-csv";

// Sample full dataset - monthly revenue per service for 12 months
const fullRevenueData = [
  { month: "Jan", "Web Development": 1800, "Logo Design": 1200, "Web Services": 1000 },
  { month: "Feb", "Web Development": 1500, "Logo Design": 1100, "Web Services": 600 },
  { month: "Mar", "Web Development": 2000, "Logo Design": 1400, "Web Services": 1100 },
  { month: "Apr", "Web Development": 1700, "Logo Design": 1300, "Web Services": 800 },
  { month: "May", "Web Development": 2100, "Logo Design": 1600, "Web Services": 1500 },
  { month: "Jun", "Web Development": 2400, "Logo Design": 1800, "Web Services": 1900 },
  { month: "Jul", "Web Development": 2300, "Logo Design": 1700, "Web Services": 1600 },
  { month: "Aug", "Web Development": 2200, "Logo Design": 1650, "Web Services": 1400 },
  { month: "Sep", "Web Development": 2500, "Logo Design": 1850, "Web Services": 2000 },
  { month: "Oct", "Web Development": 2600, "Logo Design": 1900, "Web Services": 2100 },
  { month: "Nov", "Web Development": 2700, "Logo Design": 2000, "Web Services": 2200 },
  { month: "Dec", "Web Development": 2800, "Logo Design": 2100, "Web Services": 2300 },
];

const invoiceStatusData = [
  { status: "Paid", count: 120 },
  { status: "Pending", count: 45 },
  { status: "Overdue", count: 15 },
];

// Helper to get month index for filtering
const monthOrder = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// CSV headers for export
const csvHeaders = [
  { label: "Month", key: "month" },
  { label: "Web Development", key: "Web Development" },
  { label: "Logo Design", key: "Logo Design" },
  { label: "Web Services", key: "Web Services" },
];

export default function ReportingPage() {
  // State for filtering months
  const [startMonth, setStartMonth] = useState("Jan");
  const [endMonth, setEndMonth] = useState("Jun");

  // State for drilldown service (null = no drilldown)
  const [drillDownService, setDrillDownService] = useState<string | null>(null);

  // Filter data by selected month range
  const filteredData = fullRevenueData.filter(({ month }) => {
    const monthIdx = monthOrder.indexOf(month);
    return (
      monthIdx >= monthOrder.indexOf(startMonth) &&
      monthIdx <= monthOrder.indexOf(endMonth)
    );
  });

  // Calculate totals for summary cards from filtered data
  const totalClients = 185; // static for demo
  const totalRevenue = filteredData.reduce((acc, d) => {
    return acc + d["Web Development"] + d["Logo Design"] + d["Web Services"];
  }, 0);
  const invoicesPaid = 120; // static for demo
  const invoicesOverdue = 15; // static for demo

  // Prepare drilldown data for selected service
  const drillDownData = drillDownService
    ? filteredData.map(({ month, ...services }) => ({
        month,
        revenue: services[drillDownService],
      }))
    : null;

  // Export CSV data — either full filtered or drilldown view
  const csvData = drillDownService
    ? drillDownData?.map(({ month, revenue }) => ({
        Month: month,
        Revenue: revenue,
      })) || []
    : filteredData;

  // Handle clicking a service line to toggle drilldown
  const onLineClick = (service: string) => {
    setDrillDownService((prev) => (prev === service ? null : service));
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <LiondeskNavbar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Reporting & Analytics</h1>

        {/* Date Range Filter */}
        <section className="mb-8">
          <label className="mr-4 font-semibold">
            Start Month:
            <select
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
              className="ml-2 border rounded px-2 py-1"
            >
              {monthOrder.map((m) => (
                <option key={m} value={m} disabled={monthOrder.indexOf(m) > monthOrder.indexOf(endMonth)}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label className="ml-6 font-semibold">
            End Month:
            <select
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
              className="ml-2 border rounded px-2 py-1"
            >
              {monthOrder.map((m) => (
                <option key={m} value={m} disabled={monthOrder.indexOf(m) < monthOrder.indexOf(startMonth)}>
                  {m}
                </option>
              ))}
            </select>
          </label>
        </section>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 border rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Total Clients</h2>
            <p className="text-3xl font-bold">{totalClients}</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
            <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Invoices Paid</h2>
            <p className="text-3xl font-bold">{invoicesPaid}</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Invoices Overdue</h2>
            <p className="text-3xl font-bold">{invoicesOverdue}</p>
          </div>
        </div>

        {/* Revenue Over Time Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 cursor-pointer">
            Revenue Over Time by {drillDownService || "Service"}
            {drillDownService && (
              <button
                onClick={() => setDrillDownService(null)}
                className="ml-4 px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                Back to Overview
              </button>
            )}
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            {drillDownService ? (
              // Drilldown: Single line for chosen service revenue by month
              <LineChart
                data={drillDownData || []}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563EB"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            ) : (
              // Overview: Multi-line chart for all services
              <LineChart
                data={filteredData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend
                  verticalAlign="top"
                  height={36}
                  onClick={(e) => {
                    if (typeof e.dataKey === "string") onLineClick(e.dataKey);
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="Web Development"
                  stroke="#2563EB"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                  style={{ cursor: "pointer" }}
                />
                <Line
                  type="monotone"
                  dataKey="Logo Design"
                  stroke="#10B981"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                  style={{ cursor: "pointer" }}
                />
                <Line
                  type="monotone"
                  dataKey="Web Services"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                  style={{ cursor: "pointer" }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>

          {/* Export Buttons */}
          <div className="mt-4 flex gap-4">
            {drillDownService ? (
              <CSVLink
                data={csvData}
                filename={`${drillDownService}_revenue_${startMonth}-${endMonth}.csv`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Export {drillDownService} CSV
              </CSVLink>
            ) : (
              <CSVLink
                data={csvData}
                headers={csvHeaders}
                filename={`revenue_${startMonth}-${endMonth}.csv`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Export All Services CSV
              </CSVLink>
            )}
            {/* Add PDF export if you want - requires extra libs */}
          </div>
        </section>

        {/* Invoice Status Distribution Bar Chart */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Invoice Status Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={invoiceStatusData}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#2563EB" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
}
