import { useRouter } from "next/router";
import { useState } from "react";
import { mockUsers } from "../../../data/mockUsers";
import { mockPlaylists } from "../../../data/mockPlaylists";
import Link from "next/link";
import ShyndigNavbar from "../../../components/ShyndigNavbar";

export default function UserProfilePage() {
  const router = useRouter();
  const { username } = router.query;

  if (!username || typeof username !== "string") return <div>Loading...</div>;

  const user = mockUsers[username.toLowerCase()];
  if (!user) return <div>User not found</div>;

  const savedPlaylists = (user.savedPlaylists || [])
    .map((p) => (typeof p === "string" ? mockPlaylists[p] : p))
    .filter(Boolean);

  const [profilePic, setProfilePic] = useState<string>(user.avatarUrl);
  const [badges] = useState(["Top Listener", "Chill Vibes", "Early Adopter"]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === "string") setProfilePic(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 max-w-xl mx-auto px-6">
        {/* Profile Header */}
        <section className="flex items-center space-x-6 mb-10">
          <div className="relative">
            <img
              src={profilePic}
              alt={`${user.displayName} avatar`}
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-2 text-sm cursor-pointer"
              title="Change profile picture"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-gray-900">{user.displayName}</h1>
            <p className="text-indigo-600 text-lg mt-1">@{user.username}</p>
            <p className="mt-4 text-gray-700 leading-relaxed">{user.bio}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Saved Playlists */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Saved Playlists</h2>
          {savedPlaylists.length > 0 ? (
            <ul className="grid gap-5 md:grid-cols-2">
              {savedPlaylists.map((playlist) => (
                <li key={playlist.id}>
                  <Link
                    href={`/shyndig/playlist/${playlist.id}`}
                    className="block bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-900">{playlist.name}</h3>
                    <p className="text-gray-500 mt-1">{playlist.description}</p>
                    <p className="mt-3 text-sm text-gray-400">
                      {playlist.tracks.length} track{playlist.tracks.length !== 1 ? "s" : ""}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No saved playlists yet.</p>
          )}
        </section>
      </main>
    </>
  );
}
