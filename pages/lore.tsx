import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Head from "next/head";

export default function LorePage() {
  return (
    <>
      <Head>
        <title>Remy Leo: Origin Files</title>
        <meta
          name="description"
          content="Explore the origin of Remy Leo through immersive storytelling and visuals."
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37] mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          REMY LEO: ORIGIN FILES
        </motion.h1>

        <section className="max-w-4xl mx-auto space-y-20">
          {[
            {
              src: "/panel1.png",
              alt: "Panel 1",
              caption:
                "The year is 3022. The Lunar Equilibrium Treaty collapses. Chaos erupts across the galaxy.",
            },
            {
              src: "/panel2.png",
              alt: "Panel 2",
              caption:
                "In the midst of the collapse, a bio-armored guardian named REMY LEO is cast through a rift in time.",
            },
            {
              src: "/panel3.png",
              alt: "Panel 3",
              caption:
                "Trapped in our primitive era, his suit begins to fuse with cultural textiles—evolving into protection-wear.",
            },
            {
              src: "/rlvoid.jpg",
              alt: "Panel 4",
              caption:
                "Each piece of clothing becomes a vessel—encoded with power, legacy, and survival.",
            },
            {
              src: "/rlvoid.jpg",
              alt: "Panel 5",
              caption:
                "Now, REMY LEO empowers others—those who wear the message—to awaken hidden potential.",
            },
            {
              src: "/rlvoid.jpg",
              alt: "Final Panel",
              caption: "The next chapter is stitched in every drop.",
            },
          ].map((panel, index) => (
            <div key={index} className="space-y-6">
              <motion.div
                className="relative w-full h-[28rem] rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.p
                className={`text-lg ${
                  index === 5
                    ? "text-[#D4AF37] font-bold"
                    : "text-gray-300"
                } text-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                {panel.caption}
              </motion.p>
            </div>
          ))}

          <motion.div
            className="text-center pt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="/clothing"
              className="inline-block px-8 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-2xl hover:bg-[#2f2f2f] transition-all"
            >
              Continue the Lore
            </a>
          </motion.div>
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
