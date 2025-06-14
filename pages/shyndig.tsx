import Head from "next/head";
import Link from "next/link";
import ShyndigNavbar from "../components/ShyndigNavbar";


export default function HomePage() {
  const featuredPlaylists = [
    {
      title: "Late Night Vibes",
      creator: "Alex G",
      genre: "Lo-Fi / Chillhop",
    },
    {
      title: "Hype Energy",
      creator: "Kia J",
      genre: "Hip-Hop / Trap",
    },
    {
      title: "AfroSoul Sundays",
      creator: "Nia D",
      genre: "Afrobeats / Neo-Soul",
    },
  ];

  const testimonials = [
    {
      name: "Jasmine R.",
      quote:
        "Shyndig helped me discover artists I’d never find on mainstream platforms. The community is fire.",
    },
    {
      name: "Marcus T.",
      quote:
        "I made my first playlist and people started adding songs to it. It's like Twitter but for music.",
    },
  ];

  return (
    <>
      <Head>
        <title>Shyndig | Where Music Lovers Connect</title>
      </Head>

  

      {/* HERO */}
      <main className="pt-28 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gradient-primary mb-8">
          Build Playlists. Share Vibes. Join the Culture.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
          Shyndig is your social music hub — create and share playlists, discover new music,
          and connect with a community that lives for the beat.
        </p>

        <div className="flex justify-center gap-8">
          <Link
            href="/shyndig/explore"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Playlists
          </Link>
          <Link
            href="/shyndig/create"
            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Start Creating
          </Link>
        </div>
      </main>

      {/* FEATURED PLAYLISTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          🔥 Featured Playlists
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {featuredPlaylists.map((playlist, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg p-8 cursor-pointer hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {playlist.title}
              </h3>
              <p className="text-md text-indigo-600 font-medium mb-1">by {playlist.creator}</p>
              <p className="text-sm italic text-gray-500">{playlist.genre}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">💬 Community Love</h2>
          <div className="grid gap-12 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition"
              >
                <p className="italic text-gray-600 mb-6 text-lg">"{t.quote}"</p>
                <p className="font-semibold text-indigo-700 text-right">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm select-none">
            &copy; {new Date().getFullYear()} Shyndig. All rights reserved.
          </p>
          <div className="flex gap-10 text-sm font-semibold">
            <Link
              href="/shyndig/terms"
              className="hover:text-indigo-400 transition"
            >
              Terms
            </Link>
            <Link
              href="/shyndig/privacy"
              className="hover:text-indigo-400 transition"
            >
              Privacy
            </Link>
            <Link
              href="/shyndig/contact"
              className="hover:text-indigo-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .text-gradient-primary {
          background: linear-gradient(90deg, #7c3aed, #4338ca);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}
