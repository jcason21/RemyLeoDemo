import React from "react";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";

export default function ShyndigPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
          Welcome to Shyndig
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-12">
          The AI-powered music playground where vibes meet innovation. 
          Shyndig helps you discover new sounds, connect with others, and level up your playlist game.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🎯 What You Can Do with Shyndig
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg">
              <h3 className="text-[#D4AF37] text-xl font-bold mb-2">🎧 Smart Music Discovery</h3>
              <p>Get personalized playlists curated by AI based on your listening behavior and vibe.</p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg">
              <h3 className="text-[#D4AF37] text-xl font-bold mb-2">👥 Profiles & Playlists</h3>
              <p>Create your own profile, build playlists, and share them with friends or fans.</p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg">
              <h3 className="text-[#D4AF37] text-xl font-bold mb-2">💬 Engage & React</h3>
              <p>Like, comment, and discover what others are vibing to in the community.</p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg">
              <h3 className="text-[#D4AF37] text-xl font-bold mb-2">🏆 Gamified Experience</h3>
              <p>Earn achievements and climb the leaderboard as you explore and interact.</p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg md:col-span-2">
              <h3 className="text-[#D4AF37] text-xl font-bold mb-2">📊 AI Insights</h3>
              <p>Track your musical growth and see which sounds you’re vibing with most.</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-4">
          <Button
            variant="outline"
            className="bg-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:opacity-90"
            onClick={() => router.push("/contact")}
          >
            🎟️ Request Early Access
          </Button>

          <Button
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-2xl text-lg hover:bg-[#2f2f2f]"
            onClick={() => router.push("/studio")}
          >
            ← Back to Studio
          </Button>
        </section>
      </main>
    </>
  );
}