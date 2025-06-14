import ShyndigNavbar from "../../components/ShyndigNavbar";
import Link from "next/link";
import ShyndigLayout from "../../components/ShyndigLayout";

const notifications = [
  {
    type: "like",
    message: "Nia D liked your playlist <strong>AfroSoul Sundays</strong>.",
    time: "2h ago",
  },
  {
    type: "comment",
    message: 'Kia J commented on <strong>Hype Energy</strong>: “🔥🔥🔥”',
    time: "5h ago",
  },
  {
    type: "follow",
    message: "Alex G started following you.",
    time: "1d ago",
  },
  {
    type: "update",
    message: "<strong>Late Night Vibes</strong> added 3 new tracks.",
    time: "2d ago",
  },
];

export default function NotificationsPage() {
  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 max-w-xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-center mb-8 tracking-wide text-gray-900">
          🔔 Notifications
        </h1>
        <ul className="space-y-5">
          {notifications.map((n, i) => (
            <li
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col"
              style={{ borderLeftWidth: "5px", borderLeftColor: "#405de6" }} // Instagram blue accent
            >
              <p
                className="text-gray-900 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: n.message }}
              />
              <span className="text-xs text-gray-500 mt-2 self-end">{n.time}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
