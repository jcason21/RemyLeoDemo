import React, { useState } from "react";
import LiondeskNavbar from "../../components/LiondeskNavbar";
import { Bell, X, CheckCircle, Circle } from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    type: "Appointment",
    message: "You have an appointment with Jane Doe tomorrow at 3 PM.",
    read: false,
    date: "2025-06-08 14:00",
  },
  {
    id: 2,
    type: "Invoice",
    message: "Invoice #1234 has been paid by John Smith.",
    read: true,
    date: "2025-06-06 09:30",
  },
  {
    id: 3,
    type: "Message",
    message: "New message from client Mike Brown.",
    read: false,
    date: "2025-06-07 18:45",
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  const clearAll = () => setNotifications([]);

  return (
    <div className="min-h-screen bg-white text-black">
      <LiondeskNavbar />
      <main className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Bell /> Notifications
          </h1>
          <button
            onClick={clearAll}
            className="text-red-600 hover:text-red-800"
            aria-label="Clear all notifications"
          >
            Clear All
          </button>
        </div>

        {notifications.length === 0 ? (
          <p className="text-center text-gray-500">No notifications.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map(({ id, type, message, read, date }) => (
              <li
                key={id}
                className={`border rounded p-4 flex justify-between items-start ${
                  read ? "bg-gray-100" : "bg-white shadow-md"
                }`}
              >
                <div>
                  <p className="font-semibold">{type}</p>
                  <p className="text-sm mb-1">{message}</p>
                  <p className="text-xs text-gray-500">{date}</p>
                </div>
                <button
                  onClick={() => toggleRead(id)}
                  aria-label={read ? "Mark as unread" : "Mark as read"}
                  className="ml-4 text-blue-600 hover:text-blue-800"
                >
                  {read ? <CheckCircle size={20} /> : <Circle size={20} />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
