import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";

// Wrap Next.js Image with motion
const MotionImage = motion(Image);

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#1A1A1A] flex flex-col justify-center items-center text-white px-6">
      <div className="relative mb-6">
        <div className="absolute inset-0 blur-2xl opacity-40 bg-[#D4AF37] rounded-full animate-ping"></div>
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

      <h1 className="text-4xl md:text-6xl font-bold text-[#D4AF37] text-center mb-4">
        The Future is Stitched & Scripted
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-xl mb-10">
        Remy Leo is where creative technology meets wearable storytelling. Choose your path — build digital tools or wear the message.
      </p>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="bg-[#D4AF37] text-[#D4AF37] px-6 py-3 text-lg rounded-2xl shadow-xl hover:opacity-90"
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
    </main>
  );
}
