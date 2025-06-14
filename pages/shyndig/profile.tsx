import Link from "next/link";
import ShyndigNavbar from "../../components/ShyndigNavbar";
import ShyndigLayout from "../../components/ShyndigLayout";

const fakeUser = {
  username: "NiaD",
  bio: "Music lover and curator of soulful vibes.",
  badges: ["Top Curator", "Community Helper"],
  playlistsCreated: [
    { id: "afrosoul-sundays", title: "AfroSoul Sundays" },
    { id: "sunset-chill", title: "Sunset Chill" },
  ],
  likedPlaylists: [
    { id: "hype-energy", title: "Hype Energy" },
    { id: "late-night-vibes", title: "Late Night Vibes" },
  ],
  followers: 342,
};

export default function UserProfile() {
  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{fakeUser.username}</h1>
        <p className="text-gray-700 mb-6">{fakeUser.bio}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Badges</h2>
          <ul className="flex gap-3">
            {fakeUser.badges.map((badge, i) => (
              <li
                key={i}
                className="bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full font-semibold text-sm cursor-default"
                title={badge}
              >
                {badge}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Playlists Created</h2>
          <ul className="list-disc list-inside">
            {fakeUser.playlistsCreated.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/shyndig/playlist/${id}`}>
                  <a className="text-blue-600 hover:underline cursor-pointer">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Liked Playlists</h2>
          <ul className="list-disc list-inside">
            {fakeUser.likedPlaylists.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/shyndig/playlist/${id}`}>
                  <a className="text-blue-600 hover:underline cursor-pointer">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Followers</h2>
          <p>{fakeUser.followers} followers</p>
        </section>
      </main>
    </>
  );
}
