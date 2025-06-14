import { useRouter } from "next/router";
import ShyndigNavbar from "../../../components/ShyndigNavbar";

import { mockPlaylists } from "../../../data/mockPlaylists";

export default function TrackDetailPage() {
  const router = useRouter();
  const { trackId } = router.query;

  if (!trackId || typeof trackId !== "string") return <div>Loading...</div>;

  // Collect all tracks from all playlists
  const allTracks = Object.values(mockPlaylists).flatMap((playlist) => playlist.tracks);
  // Find track by id
  const track = allTracks.find((t) => t.id === trackId);

  if (!track) return <div>Track not found</div>;

  return (
    <><ShyndigNavbar></ShyndigNavbar>
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-6 mb-6">
        <img
          src={track.albumArtUrl ?? "/default-album-art.png"}
          alt={track.title}
          className="w-32 h-32 object-cover rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-1">{track.title}</h1>
          <p className="text-gray-600 text-lg">{track.artist}</p>
          <p className="text-gray-400 text-sm mt-1">
            {track.length ?? "?"} • {track.plays ?? "0"} plays
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>
          <strong>Album:</strong> {track.album || "Unknown"}
        </p>
        <p>
          <strong>Genre:</strong> {track.genre || "N/A"}
        </p>
        <p>
          <strong>Release Date:</strong> {track.releaseDate || "TBA"}
        </p>

        {/* Placeholder for music preview */}
        {track.previewUrl ? (
          <audio controls className="mt-4 w-full">
            <source src={track.previewUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p className="text-gray-500 italic mt-4">Preview not available.</p>
        )}
      </div>
    </div>
    </>
  );
}
