import ShyndigNavbar from "../../components/ShyndigNavbar";
import Link from "next/link";
import ShyndigLayout from "../../components/ShyndigLayout";

const topCurators = [
  { name: "Alex G", followers: 1200 },
  { name: "Nia D", followers: 980 },
  { name: "Kia J", followers: 850 },
];

const mostSharedPlaylists = [
  { title: "AfroSoul Sundays", shares: 310 },
  { title: "Gym Motivation", shares: 275 },
  { title: "Chill & Code", shares: 240 },
];

const badgeWinners = [
  { name: "Marcus T.", badge: "🔥 Weekly Vibes Champ" },
  { name: "Sade L.", badge: "👑 Most Shared Curator" },
];

export default function LeaderboardPage() {
  return (
    <>
      <ShyndigNavbar />
      <main className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">🏆 Leaderboard</h1>

        {/* Top Curators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Top Curators</h2>
          <ul className="space-y-3">
            {topCurators.map((user, i) => (
              <li key={i} className="border p-4 rounded shadow-sm">
                <span className="font-semibold">{user.name}</span> – {user.followers} followers
              </li>
            ))}
          </ul>
        </section>

        {/* Most Shared Playlists */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Most Shared Playlists</h2>
          <ul className="space-y-3">
            {mostSharedPlaylists.map((pl, i) => (
              <li key={i} className="border p-4 rounded shadow-sm">
                <span className="font-semibold">{pl.title}</span> – {pl.shares} shares
              </li>
            ))}
          </ul>
        </section>

        {/* Badge Winners */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Badge Winners</h2>
          <ul className="space-y-3">
            {badgeWinners.map((bw, i) => (
              <li key={i} className="border p-4 rounded shadow-sm">
                <span className="font-semibold">{bw.name}</span> – {bw.badge}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
