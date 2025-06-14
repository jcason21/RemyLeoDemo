import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";

export default function NetworkPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    // Placeholder for actual API integration
    setStatus("success");
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-20 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37] mb-6"
        >
          Connect to the Core
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-300 text-center max-w-xl mb-10"
        >
          Unlock encrypted drops, mission briefings, and exclusive lore. The signal only reaches the tuned-in.
        </motion.p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@remyleo.net"
            className="w-full p-3 mb-4 rounded-lg bg-[#0E0E0E] border border-[#D4AF37] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <Button type="submit" className="w-full bg-[#D4AF37] text-black hover:bg-[#bfa134]">
            Join the Network
          </Button>

          {status === "success" && (
            <p className="mt-4 text-green-400">You're in. Transmission pending...</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400">Enter a valid email to connect.</p>
          )}
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 w-full max-w-md h-64 bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] rounded-xl flex items-center justify-center shadow-xl"
        >
          <p className="text-sm text-gray-500 italic">
            Visual signal sync coming soon...
          </p>
        </motion.div>
      </main>
    </>
  );
}
