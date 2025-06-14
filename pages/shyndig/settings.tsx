import { useState } from "react";
import ShyndigNavbar from "../../components/ShyndigNavbar";

export default function SettingsPage() {
  const [connected, setConnected] = useState({
    spotify: true,
    youtube: false,
    apple: false,
  });

  const toggleConnection = (service: "spotify" | "youtube" | "apple") => {
    setConnected((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900">⚙️ Settings</h1>

        {/* Account Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Account</h2>
          <div className="space-y-5">
            {[
              { label: "Name", value: "Dex Stryker", type: "text" },
              { label: "Username", value: "dexbeats", type: "text" },
              { label: "Email", value: "dex@shyndig.io", type: "email" },
            ].map(({ label, value, type }) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                  type={type}
                  value={value}
                  disabled
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed text-gray-600"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Linked Music Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Linked Music Services</h2>
          <div className="flex flex-wrap gap-5">
            <button
              onClick={() => toggleConnection("spotify")}
              className={`flex-1 min-w-[140px] px-6 py-3 rounded-xl text-white font-semibold shadow-md transition-colors ${
                connected.spotify ? "bg-green-600 hover:bg-green-700" : "bg-green-400 hover:bg-green-500"
              }`}
            >
              {connected.spotify ? "Connected to Spotify" : "Connect Spotify"}
            </button>

            <button
              onClick={() => toggleConnection("youtube")}
              className={`flex-1 min-w-[140px] px-6 py-3 rounded-xl text-white font-semibold shadow-md transition-colors ${
                connected.youtube ? "bg-red-600 hover:bg-red-700" : "bg-red-400 hover:bg-red-500"
              }`}
            >
              {connected.youtube ? "Connected to YouTube" : "Connect YouTube"}
            </button>

            <button
              onClick={() => toggleConnection("apple")}
              className={`flex-1 min-w-[140px] px-6 py-3 rounded-xl text-white font-semibold shadow-md transition-colors ${
                connected.apple ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {connected.apple ? "Connected to Apple Music" : "Connect Apple Music"}
            </button>
          </div>
        </section>

        {/* Preferences */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Preferences</h2>
          <div className="space-y-5">
            <label className="flex items-center space-x-3 cursor-default">
              <input
                type="checkbox"
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded"
                checked
                readOnly
              />
              <span className="text-gray-700 font-medium">Enable notifications</span>
            </label>

            <label className="flex items-center space-x-3 cursor-not-allowed opacity-60">
              <input
                type="checkbox"
                className="w-5 h-5 border-gray-300 rounded cursor-not-allowed"
                disabled
              />
              <span className="text-gray-500 font-medium">Dark mode (coming soon)</span>
            </label>
          </div>
        </section>

        {/* Save Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              console.log("Saving settings:", { connected });
              alert("Settings saved!");
            }}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg transition"
          >
            Save Settings
          </button>
        </div>
      </main>
    </>
  );
}
