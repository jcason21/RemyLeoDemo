// pages/index.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

const MotionImage = motion(Image);

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#1A1A1A] flex flex-col justify-center items-center text-white px-6 relative">
      {/* Pulsing glow behind logo */}
      <div className="absolute inset-0 blur-2xl opacity-40 bg-[#D4AF37] rounded-full animate-ping" />

      {/* Animated logo */}
      <MotionImage
        src="/logo.png"
        alt="Remy Leo Logo"
        width={192}
        height={192}
        className="w-48 h-48 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 0px #D4AF37",
            "0 0 20px #D4AF37",
            "0 0 0px #D4AF37",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <h1 className="mt-12 text-4xl font-bold">Welcome to Remy Leo</h1>
      <p className="mt-4 max-w-xl text-center text-lg text-gray-300">
        The future of streetwear meets wearable tech.
      </p>

      <button
        onClick={() => router.push("/studio")}
        className="mt-8 rounded bg-[#D4AF37] px-6 py-3 font-semibold text-black hover:bg-[#b68f2f] transition"
      >
        Explore Studio
      </button>
    </main>
  );
}
