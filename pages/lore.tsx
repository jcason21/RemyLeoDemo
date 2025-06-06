import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

 
export default function LorePage() {
  return (
     <>
        <Navbar/>
    <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37] mb-10">
        REMY LEO: ORIGIN FILES
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          In the year 3022, during the collapse of the Lunar Equilibrium Treaty, a bio-armored guardian named REMY LEO was thrown back through a rift in time...
        </p>

        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image src="/rlvoid.jpg" alt="Remy Leo Lore" fill className="object-cover" />
        </div>

        <p className="text-gray-400 text-md leading-relaxed">
          Trapped in a primitive age, his adaptive suit began to merge with cultural textiles — evolving into protection-wear. REMY LEO now encodes future data into fashion...
        </p>

        <p className="text-[#D4AF37] text-xl font-bold text-center pt-8">
          The next chapter is stitched in every drop.
        </p>
      </div>
    </main></>
  );
}
