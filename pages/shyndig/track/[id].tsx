import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ShyndigNavbar from "../../../components/ShyndigNavbar";
import { mockPlaylists } from "../../../data/mockPlaylists";

export default function TrackDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const allTracks = Object.values(mockPlaylists).flatMap((playlist) =>
    playlist.tracks.map((track) => ({
      ...track,
      playlistTitle: playlist.title,
      playlistId: playlist.id,
    }))
  );

  const track = allTracks.find((t) => t.id === id);

  const [comments, setComments] = useState<string[]>(track?.sampleComments || []);
  const [newComment, setNewComment] = useState("");

  if (!track) {
    return (
      <div className="text-center py-32 text-gray-600 text-xl">
        Track not found.
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  return (
    <>
      <Head>
        <title>{track.title} | Shyndig</title>
      </Head>

      <ShyndigNavbar />

      <main className="pt-28 px-6 md:px-12 max-w-3xl mx-auto text-white text-center">
        <div className="bg-white text-gray-900 rounded-3xl shadow-xl p-10">
          <h1 className="text-4xl font-bold mb-2">{track.title}</h1>
          <p className="text-lg text-indigo-600 mb-1">{track.artist}</p>
          <p className="text-sm text-gray-500 mb-4 italic">
            From playlist: <span>{track.playlistTitle}</span>
          </p>

          <p className="text-sm mb-1">🕒 Length: {track.length}</p>
          <p className="text-sm mb-1">❤️ Likes: {track.likes}</p>
          <p className="text-sm mb-6">💬 {comments.length} Comments</p>

          {/* Comment Section */}
          <section className="text-left">
            <h2 className="text-xl font-bold mb-4">Comments</h2>

            <div className="space-y-3 mb-6">
              {comments.length > 0 ? (
                comments.map((comment, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg"
                  >
                    {comment}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No comments yet.</p>
              )}
            </div>

            {/* Add Comment Form */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black"
              />
              <button
                onClick={handleAddComment}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
          </section>

          <button
            className="mt-10 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            onClick={() => router.back()}
          >
            ← Back
          </button>
        </div>
      </main>
    </>
  );
}
