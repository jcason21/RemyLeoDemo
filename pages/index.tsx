import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";
import Head from "next/head";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Remy Leo | The Future is Stitched & Scripted</title>
        <meta
          name="description"
          content="Remy Leo is where creative technology meets wearable storytelling. Choose your path — build digital tools or wear the message."
        />
      </Head>

      <main className="min-h-screen bg-[#1A1A1A] flex flex-col justify-center items-center text-white px-6">
        {/* Glowing Logo */}
        <div className="relative mb-6">
          <div className="absolute inset-0 blur-2xl opacity-40 bg-[#D4AF37] rounded-full animate-pulse"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/logo.png" alt="Remy Leo Logo" className="w-48 h-48" />
          </motion.div>
        </div>

        {/* Headline & Subtext */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#D4AF37] text-center mb-4">
          The Future is Stitched & Scripted
        </h1>

        <p className="text-lg text-gray-300 text-center max-w-xl mb-10">
          Remy Leo is where creative technology meets wearable storytelling.
          Choose your path — build digital tools or wear the message.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] px-6 py-3 text-lg rounded-2xl hover:bg-[#2f2f2f]"
            onClick={() => router.push("/studio")}
          >
            Build with Me
          </Button>
          <Button
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] px-6 py-3 text-lg rounded-2xl hover:bg-[#2f2f2f]"
            onClick={() => router.push("/clothing")}
          >
            Wear the Message
          </Button>
        </div>

        {/* Brand Story */}
        <section className="mt-16 text-center max-w-2xl text-gray-300">
          <h2 className="text-2xl font-semibold text-[#D4AF37] mb-4">
            The Remy Leo Story
          </h2>
          <p className="mb-4">
            Remy Leo is more than a brand — it’s a tale of a guardian from the
            future, stranded in our time. Armed with adaptive tech and an
            unbreakable spirit, his mission is survival — and to awaken others
            to their hidden power.
          </p>
          <p>
            Each garment and digital product we create is infused with that
            same energy: resilience, innovation, and legacy. Whether you're
            coding your next idea or repping your truth through what you wear —
            you're part of something greater.
          </p>

          {/* Lore Link */}
          <Button
            variant="outline"
            className="mt-6 text-sm text-[#D4AF37] hover:text-[#D4AF37] underline"
            onClick={() => router.push("/lore")}
          >
            Read the Full Origin
          </Button>
        </section>
   

      {/* Footer */}
      <footer className="w-full bg-[#111111] text-gray-200 text-sm text-center py-6 mt-12 border-t border-[#D4AF37]">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Remy Leo. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-6">
            <button onClick={() => router.push("/studio")} className="hover:text-[#D4AF37] transition-colors">
              Studio
            </button>
            <button onClick={() => router.push("/clothing")} className="hover:text-[#D4AF37] transition-colors">
              Apparel
            </button>
            <button onClick={() => router.push("/lore")} className="hover:text-[#D4AF37] transition-colors">
              Origin Story
            </button>
          </div>
        </div>
      </footer>
         </main>
    </>
  );
}
