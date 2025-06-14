import { useEffect, useState } from "react";
import ShyndigNavbar from "../../components/ShyndigNavbar";
import ShyndigLayout from "../../components/ShyndigLayout";
import { useMockUser } from "../../lib/mockUser";

const mockUserPrefs = {
  nia: ["afrobeats", "neo-soul", "r&b"],
  dex: ["trap", "r&b", "lofi"],
  vibeSeeker: ["lofi", "neo-soul", "r&b"], // Added to match mockUser
};

function generateSharedPlaylist(user1: string, user2: string) {
  const prefs1 = mockUserPrefs[user1];
  const prefs2 = mockUserPrefs[user2];

  if (!prefs1 || !prefs2) {
    return {
      id: "shared-vibe",
      name: "Shared Vibes",
      description: "Couldn't generate playlist — no genre preferences found.",
      coverUrl:
        "https://i.scdn.co/image/ab67616d0000b2730c1de1c545bd90e0a0072c63",
      tracksCount: 0,
    };
  }

  const common = prefs1.filter((g) => prefs2.includes(g));

  return {
    id: "shared-vibe",
    name: "Shared Vibes",
    description: `Blending your taste in ${common.join(", ")}`,
    coverUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c1de1c545bd90e0a0072c63",
    tracksCount: 20,
  };
}

export default function MessagesPage() {
  const user = useMockUser();
  const currentUser = user.username.toLowerCase();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "nia",
      text: "Hey! What should we vibe to today?",
      time: "2h ago",
    },
    {
      id: 2,
      sender: currentUser,
      text: "Let me ask the AI…",
      time: "1h 50m ago",
    },
    {
      id: 3,
      sender: "ai",
      playlist: generateSharedPlaylist("nia", currentUser),
      time: "1h 49m ago",
    },
  ]);

  return (
    <>
      <ShyndigNavbar />
      <main className="max-w-2xl mx-auto px-4 pt-24 pb-10">
        <h1 className="text-3xl font-bold mb-6 text-center">💬 DM: Nia</h1>
        <div className="space-y-6">
          {messages.map((msg) => {
            const isMe = msg.sender === currentUser;
            const isAI = msg.sender === "ai";

            return (
              <div
                key={msg.id}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-xl p-4 ${
                    isAI
                      ? "bg-blue-100 border border-blue-400"
                      : isMe
                      ? "bg-gradient-to-tr from-pink-500 to-pink-700 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {/* Text message */}
                  {msg.text && <p className="mb-2">{msg.text}</p>}

                  {/* Playlist card */}
                  {msg.playlist && (
                    <div className="bg-white border rounded-lg p-3 shadow hover:shadow-md transition">
                      <div className="flex gap-4">
                        <img
                          src={msg.playlist.coverUrl}
                          alt="Playlist cover"
                          className="w-16 h-16 rounded object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">
                            {msg.playlist.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {msg.playlist.description}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {msg.playlist.tracksCount} tracks
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Timestamp */}
                  <p className="text-xs text-gray-500 mt-2 text-right">
                    {msg.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
