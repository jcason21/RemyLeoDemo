import { useState } from "react";
import Link from "next/link";
import ShyndigNavbar from "../../components/ShyndigNavbar";
import { generatePlaylistFromPreferences } from "../../lib/aiGenerator";
import { mockUsers } from "../../data/mockUsers";

export default function CreatePage() {
  const [playlistName, setPlaylistName] = useState("");
  const [mood, setMood] = useState("Chill");
  const [genre, setGenre] = useState("Hip-Hop");
  const [tags, setTags] = useState(["vibes"]);
  const [generatedTracks, setGeneratedTracks] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const handleGenerate = () => {
    const playlist = generatePlaylistFromPreferences({ mood, genre, tags });
    setGeneratedTracks(playlist);
  };

  const handleSave = () => {
    const id = Math.random().toString(36).substring(2, 9);
    const newPlaylist = {
      id,
      name: playlistName || `Untitled - ${new Date().toLocaleDateString()}`,
      tracks: generatedTracks,
    };

    // Save to localStorage
    localStorage.setItem(id, JSON.stringify(newPlaylist));

    // Ensure mock guest user has a savedPlaylists array
    const guest = mockUsers["guest"];
    if (guest) {
      if (!Array.isArray(guest.savedPlaylists)) {
        guest.savedPlaylists = [];
      }
      guest.savedPlaylists.unshift(id);
    }

    setShowSaveModal(true);
  };

  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Create a New Playlist</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Playlist Name</label>
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Late Night Vibes"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Mood</label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="border px-3 py-2 rounded-md text-gray-900 bg-white"
            >
              <option>Chill</option>
              <option>Energetic</option>
              <option>Romantic</option>
              <option>Sad</option>
              <option>Happy</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Genre</label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="border px-3 py-2 rounded-md text-gray-900 bg-white"
            >
              <option>Hip-Hop</option>
              <option>Lo-Fi</option>
              <option>Afrobeat</option>
              <option>Pop</option>
              <option>Jazz</option>
              <option>Rock</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Generate Playlist
        </button>

        {generatedTracks.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Generated Tracks</h2>
            <ul className="divide-y divide-gray-200 bg-white rounded-md border">
              {generatedTracks.map((track) => (
                <li key={track.id} className="flex justify-between py-2 px-3 text-sm">
                  <span className="font-medium text-gray-900">{track.title}</span>
                  <span className="text-gray-500">{track.artist}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleSave}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Save Playlist
            </button>
          </section>
        )}

        {showSaveModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-lg font-semibold mb-2">Playlist Saved!</h2>
              <p className="text-sm mb-4">
                You can view it in your profile.
              </p>
              <Link
                href="/shyndig/user/guest"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Go to Profile
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
