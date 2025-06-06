// pages/index.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

const MotionImage = motion(Image);

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#1A1A1A] flex flex-col justify-center items-center text-white px-6">
      <div className="relative">
        <div className="absolute inset-0 blur-2xl opacity-40 bg-[#D4AF37] rounded-full animate-ping" />
        <MotionImage
          src="/logo.png"
          alt="Remy Leo Logo"
          width={192}
          height={192}
          className="w-48 h-48"
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
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
      <h1 className="text-4xl mt-6 font-bold text-center">Welcome to Remy Leo</h1>
      <p className="text-lg text-center mt-2 max-w-xl">
        The fusion of fashion, function, and futuristic design.
      </p>
      <button
        onClick={() => router.push("/studio")}
        className="mt-8 px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-yellow-500 transition"
      >
        Enter Studio
      </button>
    </main>
  );
}
