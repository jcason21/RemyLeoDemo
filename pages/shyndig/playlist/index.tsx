import ShyndigNavbar from "../../../components/ShyndigNavbar";
import Link from "next/link";

const playlists = [
  { id: "late-night-vibes", title: "Late Night Vibes" },
  { id: "hype-energy", title: "Hype Energy" },
  { id: "afrosoul-sundays", title: "AfroSoul Sundays" },
];

export default function PlaylistIndex() {
  return (
    <>
      <ShyndigNavbar />
      <main className="shyndig-pt-24 shyndig-px-6 shyndig-max-w-4xl shyndig-mx-auto">
        <h1 className="shyndig-text-4xl shyndig-font-bold shyndig-mb-8">All Playlists</h1>
        <ul>
          {playlists.map(({ id, title }) => (
            <li key={id} className="shyndig-mb-4">
              <Link
                href={`/shyndig/playlist/${id}`}
                className="shyndig-text-blue-600 shyndig-hover:underline"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
