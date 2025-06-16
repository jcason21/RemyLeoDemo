import React, { useState } from "react";
import ShyndigNavbar from "../../components/ShyndigNavbar";
import Link from "next/link";
import { mockPlaylists } from "../../data/mockPlaylists";
import { useMockUser } from "../../lib/mockUser";

const genres = ["Hip-Hop", "Lo-Fi", "Afrobeat", "Rock", "Jazz", "Pop"];
const moods = ["Chill", "Energetic", "Romantic", "Sad", "Happy"];

export default function ExplorePage() {
  const user = useMockUser();
  const [filter, setFilter] = useState({ genre: "", mood: "" });

  const allPlaylists = Object.values(mockPlaylists);

  // Simple filtering logic by genre and mood
  const filteredPlaylists = allPlaylists.filter((playlist) => {
    const genreMatch = filter.genre ? playlist.genre === filter.genre : true;
    const moodMatch = filter.mood ? playlist.mood === filter.mood : true;
    return genreMatch && moodMatch;
  });

  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 pb-32 px-6 max-w-6xl mx-auto text-white">
        <h1 className="text-4xl font-extrabold mb-10 text-center">Explore Music</h1>

        <p className="text-center text-gray-400 text-lg mb-6">
          Welcome back,{" "}
          <span className="font-semibold text-indigo-400">{user.username}</span> 👋
        </p>

        {/* Genre Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() =>
                setFilter((f) => ({ ...f, genre: f.genre === g ? "" : g }))
              }
              className={`px-4 py-2 rounded-full border text-sm transition ${
                filter.genre === g
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Mood Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() =>
                setFilter((f) => ({ ...f, mood: f.mood === m ? "" : m }))
              }
              className={`px-4 py-2 rounded-full border text-sm transition ${
                filter.mood === m
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Playlist Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaylists.length === 0 && (
            <p className="text-center text-gray-400 col-span-full">
              No playlists found for the selected filters.
            </p>
          )}
          {filteredPlaylists.map((playlist) => (
            <Link
              key={playlist.id}
              href={`/shyndig/playlist/${playlist.id}`}
              className="bg-white hover:bg-gray-100 transition rounded-2xl p-6 shadow-md hover:shadow-xl text-black"
            >
              <h3 className="text-xl font-semibold mb-1">{playlist.title}</h3>
              <p className="text-sm text-gray-600 italic mb-1">
                {playlist.genre} / {playlist.mood}
              </p>
              <p className="text-sm text-gray-600 italic mb-3">
                Curated by{" "}
                <span className="font-semibold">
                  {playlist.createdBy || "Unknown curator"}
                </span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {playlist.tracks?.length > 0 && (
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700">
                    {playlist.tracks.length} tracks
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
