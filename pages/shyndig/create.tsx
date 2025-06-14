import React, { useState, useEffect } from "react";
import ShyndigNavbar from "../../components/ShyndigNavbar";

const genres = ["Hip-Hop", "Lo-Fi", "Afrobeat", "Rock", "Jazz", "Pop"];
const moods = ["Chill", "Energetic", "Romantic", "Sad", "Happy"];
const tags = ["vibes", "workout", "study", "party", "relax"];

const fakeArtists = [
  "The Weeknd",
  "J Cole",
  "Billie Eilish",
  "Doja Cat",
  "Kendrick Lamar",
  "Dua Lipa",
  "Drake",
  "SZA",
  "Tyler, The Creator",
  "Ariana Grande",
];

function generateFakeTrackTitle(genre: string, mood: string, tag: string) {
  const adjectives = ["Electric", "Lost", "Vibin'", "Midnight", "Frozen"];
  const nouns = ["Dreams", "Tempo", "Rhythm", "Glow", "Moonlight"];
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${
    nouns[Math.floor(Math.random() * nouns.length)]
  }`;
}

function generateFakePlaylist({ genre, mood, tags }) {
  const tag = tags[Math.floor(Math.random() * tags.length)] || "";
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: generateFakeTrackTitle(genre, mood, tag),
    artist: fakeArtists[Math.floor(Math.random() * fakeArtists.length)],
  }));
}

export default function CreatePlaylistPage() {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [playlistName, setPlaylistName] = useState("");
  const [generatedTracks, setGeneratedTracks] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const lastPlaylist = localStorage.getItem("shyndig_last_playlist");
    if (lastPlaylist) {
      const { name, tracks } = JSON.parse(lastPlaylist);
      setGeneratedTracks(tracks);
      setPlaylistName(name);
    }
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedTracks(null);
    setTimeout(() => {
      const newTracks = generateFakePlaylist({
        genre: selectedGenre,
        mood: selectedMood,
        tags: selectedTags,
      });
      const name = playlistName || `${selectedMood} ${selectedGenre} Mix`;
      setGeneratedTracks(newTracks);
      setPlaylistName(name);
      localStorage.setItem(
        "shyndig_last_playlist",
        JSON.stringify({ name, tracks: newTracks })
      );
      setIsGenerating(false);
    }, 1000); // Simulate API delay
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <ShyndigNavbar />
      <main className="pt-24 max-w-3xl mx-auto px-6 space-y-10">
        <h1 className="text-4xl font-extrabold text-center text-pink-600">
          Create AI-Generated Playlist
        </h1>

        {/* Input Form */}
        <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Playlist Name (optional)
              </label>
              <input
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                placeholder="e.g. Late Night Coding Mix"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">Genre</label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              >
                {genres.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">Mood</label>
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              >
                {moods.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">Tags</label>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
                      selectedTags.includes(tag)
                        ? "bg-pink-600 border-pink-600 text-white shadow-md"
                        : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-pink-50"
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Generate Button */}
        <div>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`w-full py-3 rounded-md text-white font-semibold transition ${
              isGenerating
                ? "bg-pink-300 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-700 shadow-lg"
            }`}
          >
            {isGenerating ? "Generating..." : "Generate Playlist"}
          </button>
        </div>

        {/* Playlist Display */}
        {generatedTracks && !isGenerating && (
          <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{playlistName}</h2>
            <ul className="divide-y divide-gray-200">
              {generatedTracks.map((track) => (
                <li
                  key={track.id}
                  className="py-3 flex justify-between items-center hover:bg-pink-50 rounded px-3 transition"
                >
                  <span className="font-medium text-gray-900">{track.title}</span>
                  <span className="text-gray-500">{track.artist}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setShowSaveModal(true)}
                className="flex-1 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow"
              >
                Save to Profile
              </button>
              <button
                onClick={() => setShowShareModal(true)}
                className="flex-1 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow"
              >
                Share Playlist
              </button>
            </div>
          </section>
        )}

        {/* Save Modal */}
        {showSaveModal && (
          <Modal title="Saved!" onClose={() => setShowSaveModal(false)}>
            Your playlist has been saved to your profile (fake save).
          </Modal>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <Modal title="Share This Playlist" onClose={() => setShowShareModal(false)}>
            <p>Here’s your link:</p>
            <code className="block mt-2 bg-gray-100 p-3 rounded text-sm font-mono select-all">
              https://shyndig.app/p/12345
            </code>
          </Modal>
        )}
      </main>
    </div>
  );
}

// ————————————————————————
// 🔹 Modal Component
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
        <h3 className="text-xl font-bold mb-3 text-pink-600">{title}</h3>
        <div className="text-gray-700">{children}</div>
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 text-xl font-bold"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
