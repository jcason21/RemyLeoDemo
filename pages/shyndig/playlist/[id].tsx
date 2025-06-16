import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import ShyndigNavbar from "../../../components/ShyndigNavbar";
import { mockPlaylists } from "../../../data/mockPlaylists";
import { mockUsers } from "../../../data/mockUsers";
import { motion } from "framer-motion";

export default function PlaylistDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const playlist = mockPlaylists[id as string];

  if (!playlist) {
    return (
      <div className="text-center py-32 text-gray-600 text-xl">
        Playlist not found.
      </div>
    );
  }

  const curator = mockUsers[playlist.createdBy];
  const fallbackUsername = playlist.createdBy;

  function formatTime(length: string | number) {
    if (typeof length === "number") {
      const mins = Math.floor(length / 60);
      const secs = length % 60;
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    const parts = length.split(":");
    const mins = parseInt(parts[0], 10);
    const secs = parseInt(parts[1], 10);

    if (isNaN(mins) || isNaN(secs)) return "0:00";

    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  return (
    <>
      <Head>
        <title>{playlist.title} | Shyndig</title>
      </Head>

      <ShyndigNavbar />

      {/* HERO SECTION */}
      <main className="pt-28 px-6 md:px-12 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          {playlist.title}
        </h1>

        <p className="text-gray-400 mb-4">
          Curated by{" "}
          {curator ? (
            <Link
              href={`/shyndig/user/${curator.username}`}
              className="text-indigo-400 hover:underline"
            >
              @{curator.username}
            </Link>
          ) : (
            <span className="text-indigo-400">@{fallbackUsername}</span>
          )}{" "}
          — <span>{playlist.genre}</span> / <span>{playlist.mood}</span>
        </p>

        <p className="text-sm italic text-gray-400 mb-10">
          {playlist.genre} / {playlist.mood} • {playlist.tracks.length} tracks
        </p>

        {/* TRACK LIST TABLE */}
        <section className="bg-white rounded-3xl shadow-xl p-8 text-left text-gray-800">
          <h2 className="text-2xl font-bold mb-6">Track List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 px-4 font-semibold">#</th>
                  <th className="py-2 px-4 font-semibold">Title</th>
                  <th className="py-2 px-4 font-semibold">Artist</th>
                  <th className="py-2 px-4 font-semibold">Length</th>
                  <th className="py-2 px-4 font-semibold">Likes</th>
                  <th className="py-2 px-4 font-semibold">Comments</th>
                </tr>
              </thead>
              <tbody>
                {playlist.tracks.map((track, index) => (
                  <motion.tr
                    key={track.id}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => router.push(`/shyndig/track/${track.id}`)}
                    className="hover:bg-gray-100 cursor-pointer transition"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4 font-medium text-indigo-700">
                      {track.title}
                    </td>
                    <td className="py-2 px-4">{track.artist}</td>
                    <td className="py-2 px-4">{formatTime(track.length)}</td>
                    <td className="py-2 px-4">{track.likes}</td>
                    <td className="py-2 px-4">{track.comments}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm select-none">
            &copy; {new Date().getFullYear()} Shyndig. All rights reserved.
          </p>
          <div className="flex gap-10 text-sm font-semibold">
            <Link href="/shyndig/terms" className="hover:text-indigo-400 transition">
              Terms
            </Link>
            <Link href="/shyndig/privacy" className="hover:text-indigo-400 transition">
              Privacy
            </Link>
            <Link href="/shyndig/contact" className="hover:text-indigo-400 transition">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
