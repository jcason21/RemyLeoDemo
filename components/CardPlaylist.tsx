import React from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Link2,
  BadgeCheck,
} from "lucide-react";

interface Track {
  id: string;
  title: string;
  artist: string;
  length: string;
}

interface Playlist {
  id: string;
  createdBy: string;
  title: string;
  tracks: Track[];
  likedBy?: string[];
}

interface CardPlaylistProps {
  playlist: Playlist;
  likesCount?: number;
  isFollowing?: boolean;
  commentsCount?: number;
  onLike: (id: string) => void;
  onFollow: (id: string) => void;
  onShare: (playlist: Playlist) => void;
  onOpenComments: (id: string) => void;
}

export default function CardPlaylist({
  playlist,
  likesCount = 0,
  isFollowing = false,
  commentsCount = 0,
  onLike,
  onFollow,
  onShare,
  onOpenComments,
}: CardPlaylistProps) {
  return (
    <div className="border rounded-lg shadow-sm p-4 mb-6 bg-white text-gray-900">
      {/* Creator Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-200" />
        <div>
          <p className="font-semibold flex items-center gap-2">
            {playlist.createdBy} <BadgeCheck className="w-4 h-4 text-blue-500" />
          </p>
          <p className="text-sm text-gray-600">{playlist.title}</p>
        </div>
      </div>

      {/* Track Table */}
      <div className="mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">#</th>
              <th className="py-2">Title</th>
              <th className="py-2">Artist</th>
              <th className="py-2 text-right">Length</th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.slice(0, 5).map((track, i) => (
              <tr key={track.id} className="border-b hover:bg-gray-50">
                <td className="py-2 pr-4">{i + 1}</td>
                <td className="py-2">{track.title}</td>
                <td className="py-2">{track.artist}</td>
                <td className="py-2 text-right">{track.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Likes & Meta */}
      <p className="text-sm text-gray-600 mb-2">
        {playlist.tracks?.length || 0} tracks · {likesCount} likes
      </p>

      {/* Actions */}
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <div className="flex gap-6">
          <button
            onClick={() => onLike(playlist.id)}
            className="flex items-center gap-1 hover:text-red-500"
          >
            <Heart className="w-5 h-5" />
            {likesCount}
          </button>

          <button
            onClick={() => onOpenComments(playlist.id)}
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <MessageCircle className="w-5 h-5" />
            {commentsCount}
          </button>

          <button
            onClick={() => onFollow(playlist.id)}
            className="text-sm text-blue-600 font-semibold hover:underline"
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                `${window.location.origin}/playlist/${playlist.id}`
              )
            }
            title="Copy Link"
            className="hover:text-green-500"
          >
            <Link2 className="w-5 h-5" />
          </button>

          <button
            onClick={() => onShare(playlist)}
            title="Share Playlist"
            className="hover:text-purple-500"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
