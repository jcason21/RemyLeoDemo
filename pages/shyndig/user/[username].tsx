// pages/shyndig/user/[username].tsx
import { useRouter } from "next/router";
import Link from "next/link";
import ShyndigNavbar from "../../../components/ShyndigNavbar";
import { mockUsers } from "../../../data/mockUsers";

export default function DynamicUserProfile() {
  const router = useRouter();
  const { username } = router.query;

  if (!username || typeof username !== "string") {
    return (
      <>
        <ShyndigNavbar />
        <main className="pt-24 px-6 max-w-4xl mx-auto text-center">
          <p className="text-gray-600">Loading user profile...</p>
        </main>
      </>
    );
  }

  const user = mockUsers[username.toLowerCase()];
  if (!user) {
    return (
      <>
        <ShyndigNavbar />
        <main className="pt-24 px-6 max-w-4xl mx-auto text-center text-red-600">
          <h1 className="text-3xl font-bold">User Not Found</h1>
          <p className="mt-4">Sorry, we couldn’t find a profile for @{username}.</p>
        </main>
      </>
    );
  }

  const savedPlaylists = user.savedPlaylists ?? [];
  const following = user.following ?? [];

  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          {user.avatarUrl && (
            <img
              src={user.avatarUrl}
              alt={`${user.displayName}'s avatar`}
              className="w-16 h-16 rounded-full object-cover border border-gray-300"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold">{user.displayName}</h1>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>

        {/* Saved Playlists */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Saved Playlists</h2>
          {savedPlaylists.length === 0 ? (
            <p className="text-gray-500">No playlists saved yet.</p>
          ) : (
            <div className="space-y-6">
              {savedPlaylists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-pink-600">
                      {playlist.name}
                    </h3>
                    <Link
                      href={`/shyndig/playlist/${playlist.id}`}
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      View Full →
                    </Link>
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {playlist.tracks?.slice(0, 6).map((track) => (
                      <li
                        key={track.id}
                        className="py-2 flex justify-between text-sm"
                      >
                        <span className="font-medium text-gray-900">
                          {track.title}
                        </span>
                        <span className="text-gray-500">{track.artist}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Followers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Followers</h2>
          <p>{user.followers ?? 0} follower{(user.followers ?? 0) !== 1 ? "s" : ""}</p>
        </section>

        {/* Following */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Following</h2>
          {following.length === 0 ? (
            <p className="text-gray-500">Not following anyone.</p>
          ) : (
            <ul className="list-disc list-inside">
              {following.map((handle) => (
                <li key={handle}>
                  <Link
                    href={`/shyndig/user/${handle}`}
                    className="text-blue-600 hover:underline"
                  >
                    @{handle}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}
