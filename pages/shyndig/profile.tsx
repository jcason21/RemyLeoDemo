// pages/shyndig/user/[username].tsx
import { useRouter } from "next/router";
import Link from "next/link";
import ShyndigNavbar from "../../components/ShyndigNavbar";
import { mockUsers } from "../../data/mockUsers";
import { mockPlaylists } from "../../data/mockPlaylists";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;

  const user = mockUsers[username as keyof typeof mockUsers];

  if (!user) {
    return (
      <>
        <ShyndigNavbar />
        <main className="pt-24 px-6 max-w-4xl mx-auto text-center text-red-500">
          <h1 className="text-3xl font-bold">User Not Found</h1>
          <p className="mt-4">Sorry, we couldn’t find that profile.</p>
        </main>
      </>
    );
  }

  const createdPlaylists = user.savedPlaylists
    .map((id) => mockPlaylists[id])
    .filter(Boolean);

  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.avatarUrl}
            alt={`${user.displayName}'s avatar`}
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h1 className="text-4xl font-bold">{user.displayName}</h1>
            <p className="text-gray-400">@{user.username}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">{user.bio}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Playlists</h2>
          {createdPlaylists.length ? (
            <ul className="list-disc list-inside">
              {createdPlaylists.map((pl) => (
                <li key={pl.id}>
                  <Link
                    href={`/shyndig/playlist/${pl.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {pl.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No playlists created yet.</p>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Following</h2>
          <ul className="flex gap-3 flex-wrap">
            {user.following.map((handle) => (
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
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Followers</h2>
          <p className="text-gray-600">{user.followers} followers</p>
        </section>
      </main>
    </>
  );
}
