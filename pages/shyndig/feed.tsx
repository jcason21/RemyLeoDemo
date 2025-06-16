import { useEffect, useState } from "react";
import ShyndigNavbar from "../../components/ShyndigNavbar";
import CardPlaylist from "../../components/CardPlaylist";
import { mockPlaylists } from "../../data/mockPlaylists";

export default function FeedPage() {
  const [tab, setTab] = useState("trending");
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [following, setFollowing] = useState<string[]>([]);
  const [commentingOn, setCommentingOn] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState<Record<string, string[]>>({});
  const [toast, setToast] = useState("");

  const playlists = Object.values(mockPlaylists);

  // Auto-follow first 2 playlists on load
  useEffect(() => {
    setFollowing(playlists.slice(0, 2).map((pl) => pl.id));
  }, []);

  const filteredPlaylists =
    tab === "following"
      ? following.length > 0
        ? playlists.filter((pl) => following.includes(pl.id))
        : playlists
      : playlists;

  const handleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleFollow = (id: string) => {
    setFollowing((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handleShare = (playlist: any) => {
    alert(`Shared ${playlist.title}`);
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

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {["following", "trending"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded ${
                tab === t
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Feed Posts using CardPlaylist */}
        {filteredPlaylists.map((pl) => (
          <CardPlaylist
  key={pl.id}
  playlist={pl}
  likesCount={(pl.likedBy?.length || 0) + (likes[pl.id] || 0)}
  isFollowing={following.includes(pl.id)}
  commentsCount={comments[pl.id]?.length || 0}
  onLike={handleLike}
  onFollow={handleFollow}
  onShare={handleShare}
  onOpenComments={openCommentModal}
/>

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
