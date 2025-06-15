// pages/lore.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";

const panels = [
  {
    src: "/images/lore1.jpg",
    alt: "Remy Leo Origin Panel 1",
    caption: "The beginning of the journey in a future dystopia.",
  },
  {
    src: "/images/lore2.jpg",
    alt: "Remy Leo Origin Panel 2",
    caption: "The guardian discovers his powers.",
  },
  {
    src: "/images/lore3.jpg",
    alt: "Remy Leo Origin Panel 3",
    caption: "A glimpse into the survival-adaptive force field.",
  },
  {
    src: "/images/lore4.jpg",
    alt: "Remy Leo Origin Panel 4",
    caption: "Thrown back through time, stranded in a new world.",
  },
  {
    src: "/images/lore5.jpg",
    alt: "Remy Leo Origin Panel 5",
    caption: "The force field mimics attacks to protect and empower.",
  },
  {
    src: "/images/lore6.jpg",
    alt: "Remy Leo Origin Panel 6",
    caption: "The hidden message behind the Remy Leo apparel.",
  },
];

export default function LorePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-10">
        <h1 className="text-5xl font-bold text-[#D4AF37] mb-12 text-center">
          Remy Leo Origin Story
        </h1>

        <section className="max-w-4xl mx-auto space-y-20">
          {panels.map((panel, index) => (
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
                  priority={index === 0} // load first image with priority
                />
              </motion.div>
              <motion.p
                className={`text-lg ${
                  index === 5 ? "text-[#D4AF37] font-bold" : "text-gray-300"
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
        </section>
      </main>
    </>
  );
}
