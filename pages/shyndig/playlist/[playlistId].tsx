import { useRouter } from "next/router";
import { useMockUser } from "../../../lib/mockUser";
import ShyndigNavbar from "../../../components/ShyndigNavbar";

const mockPlaylists = [
  {
    id: "playlist001",
    title: "Sunset Lo-Fi",
    curator: "vibeSeeker",
    genre: "Lo-Fi",
    mood: "Chill",
    tags: ["study", "relax"],
    tracks: [
      { id: "track123", title: "Evening Light", artist: "DJ Drift" },
      { id: "track456", title: "Still Waters", artist: "Lofi Lenny" },
    ],
    coverUrl: "https://i.scdn.co/image/ab67616d0000b2730c1de1c545bd90e0a0072c63",
  },
  {
    id: "playlist003",
    title: "Soulful Sunday",
    curator: "nia.d",
    genre: "Afrobeat",
    mood: "Romantic",
    tags: ["vibes", "relax"],
    tracks: [
      { id: "track789", title: "Palm Wine Dreams", artist: "NaijaSoul" },
      { id: "track999", title: "Honey Breeze", artist: "Fela Jr." },
    ],
    coverUrl: "https://i.scdn.co/image/ab67616d0000b273c1e9f8f1c1533a70872f34f",
  },
];

export default function PlaylistDetailPage() {
  const { query } = useRouter();
  const { id } = query;
  const user = useMockUser();

  // 🚨 Wait for router to load
  if (!id) return null;

  const playlist = mockPlaylists.find((pl) => pl.id === id);
  const isFavorited = user.favorites?.includes(id as string);

  if (!playlist) {
    return (
      <>
        <ShyndigNavbar />
        <main className="pt-24 px-6 max-w-4xl mx-auto text-white">
          <h1 className="text-2xl font-bold">Playlist not found.</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 pb-20 px-6 max-w-4xl mx-auto text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          <img
            src={playlist.coverUrl}
            alt="Playlist cover"
            className="w-48 h-48 object-cover rounded-xl shadow"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{playlist.title}</h1>
            <p className="text-indigo-400 mb-1">by {playlist.curator}</p>
            <p className="text-sm text-gray-400 italic mb-3">
              {playlist.genre} / {playlist.mood}
            </p>
            <div className="flex gap-2 flex-wrap mb-3">
              {playlist.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {isFavorited && (
              <span className="inline-block text-indigo-500 text-sm mt-1">
                ⭐ This playlist is in your favorites
              </span>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Tracks</h2>
        <div className="space-y-4">
          {playlist.tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white text-black rounded-xl p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{track.title}</p>
                <p className="text-sm text-gray-600">{track.artist}</p>
              </div>
              {user.likedTracks.includes(track.id) && (
                <span className="text-pink-500 text-sm">♥ Liked</span>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
