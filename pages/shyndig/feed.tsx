import { useState, useEffect } from "react";
import Link from "next/link";
import ShyndigNavbar from "../../components/ShyndigNavbar";
import {
  Heart,
  MessageCircle,
  Share2,
  Link2,
  BadgeCheck,
} from "lucide-react";
import { mockPlaylists } from "../../data/mockPlaylists";

export default function FeedPage() {
  const [tab, setTab] = useState("following");
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [following, setFollowing] = useState<string[]>([]);
  const [commentingOn, setCommentingOn] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState<Record<string, string[]>>({});
  const [toast, setToast] = useState("");

  const playlists = Object.values(mockPlaylists);

  const handleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleFollow = (id: string) => {
    setFollowing((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handleShare = (playlist: any) => {
    alert(`Shared ${playlist.name}`);
  };

  const openCommentModal = (id: string) => {
    setCommentInput("");
    setCommentingOn(id);
  };

  const closeCommentModal = () => {
    setCommentingOn(null);
  };

  const submitComment = () => {
    if (!commentInput.trim()) return;
    setComments((prev) => ({
      ...prev,
      [commentingOn!]: [...(prev[commentingOn!] || []), commentInput],
    }));
    setToast("Comment posted!");
    setTimeout(() => setToast(""), 3000);
    closeCommentModal();
  };

  return (
    <>
      <ShyndigNavbar />
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Feed</h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setTab("following")}
            className={`px-4 py-2 rounded ${
              tab === "following"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Following
          </button>
          <button
            onClick={() => setTab("trending")}
            className={`px-4 py-2 rounded ${
              tab === "trending"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Trending
          </button>
        </div>

        {playlists.map((pl) => (
          <div
            key={pl.id}
            className="border rounded-lg shadow-sm p-4 mb-6 bg-white"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-200" />
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  {pl.name} <BadgeCheck className="w-4 h-4 text-blue-500" />
                </p>
                <p className="text-sm text-gray-500">{pl.description}</p>
              </div>
            </div>

            <Link href={`/playlist/${pl.id}`}>
              <div className="aspect-video bg-gray-200 mb-3 rounded-md cursor-pointer hover:opacity-80 transition" />
            </Link>

            <p className="text-sm text-gray-600 mb-2">
              {pl.tracks.length} tracks · {pl.likedBy.length + (likes[pl.id] || 0)} likes
            </p>

            <div className="flex justify-between items-center mt-4 text-gray-500">
              <div className="flex gap-6">
                <button
                  onClick={() => handleLike(pl.id)}
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <Heart className="w-5 h-5" />
                  {pl.likedBy.length + (likes[pl.id] || 0)}
                </button>

                <button
                  onClick={() => openCommentModal(pl.id)}
                  className="flex items-center gap-1 hover:text-blue-500"
                >
                  <MessageCircle className="w-5 h-5" />
                  Comment
                </button>

                <button
                  onClick={() => handleFollow(pl.id)}
                  className="text-sm text-blue-600 font-semibold hover:underline"
                >
                  {following.includes(pl.id) ? "Following" : "Follow"}
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `${window.location.origin}/playlist/${pl.id}`
                    )
                  }
                  title="Copy Link"
                  className="hover:text-green-500"
                >
                  <Link2 className="w-5 h-5" />
                </button>

                <button
                  onClick={() => handleShare(pl)}
                  title="Share Playlist"
                  className="hover:text-purple-500"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Comments */}
            {comments[pl.id]?.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <p className="text-sm font-semibold mb-2">Comments:</p>
                {comments[pl.id].map((comment, idx) => (
                  <p key={idx} className="text-sm text-gray-700 mb-1">
                    💬 {comment}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Comment Modal */}
        {commentingOn && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
              <h2 className="text-lg font-semibold mb-2">
                Comment on Playlist: {commentingOn}
              </h2>
              <textarea
                placeholder="Leave a comment..."
                className="w-full p-2 border rounded mb-4"
                rows={4}
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={closeCommentModal}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={submitComment}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast */}
        {toast && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
            {toast}
          </div>
        )}
      </main>
    </>
  );
}
