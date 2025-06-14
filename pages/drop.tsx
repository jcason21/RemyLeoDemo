import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function DropsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
          Remy Leo Drops
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-12">
          Every drop is a message — future-proof, protective, and power-giving. You don’t just wear fashion. You wear purpose.
        </p>

        {/* Featured Drop Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Drop</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">The Guardian</h3>
              <p className="text-gray-300 mb-4">
                Dripcut Vest. Includes wearable lore card. Limited preorder now open.
              </p>
              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg mb-4">
                <Image src="/dripcut.jpg" alt="Dripcut Vest" fill className="object-cover" />
              </div>
              <button className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-2xl hover:bg-[#2f2f2f] w-full">
                Preorder Now
              </button>
            </div>

            {/* Item 2 */}
            <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Signal Hoodie</h3>
              <p className="text-gray-300 mb-4">
                Glitch-inspired embroidery. Made for the unseen and the unheard.
              </p>
              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg mb-4">
                <Image src="/hoodie.jpg" alt="Signal Hoodie" fill className="object-cover" />
              </div>
              <button className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-2xl hover:bg-[#2f2f2f] w-full">
                Notify Me
              </button>
            </div>

            {/* Item 3 */}
            <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Phase Shift Tee</h3>
              <p className="text-gray-300 mb-4">
                Quantum weave tee. Ultra-light, coded for resilience.
              </p>
              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg mb-4">
                <Image src="/shirt.jpg" alt="Phase Shift Tee" fill className="object-cover" />
              </div>
              <button className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-2xl hover:bg-[#2f2f2f] w-full">
                Coming Soon
              </button>
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-4">Brand Story</h2>
          <p className="text-gray-400 max-w-3xl">
            A guardian from the future is trapped in time — his adaptive armor reshapes into wearable protection, embedding stories into each stitch. REMY LEO is the interface between survival and self-expression.
          </p>
        </section>

        {/* Follow the Lore Section */}
        <section className="text-center mb-20">
          <h2 className="text-2xl font-semibold text-white mb-4">Follow the Lore</h2>
          <p className="text-gray-400 mb-6">
            Unlock new drops, tech reveals, and behind-the-scenes missions.
          </p>
          <div className="w-full max-w-2xl mx-auto mb-6 aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md">
            <Image src="/rlvoid.jpg" alt="Lore Teaser" fill className="object-cover" />
          </div>
          <button className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-2xl hover:bg-[#2f2f2f]">
            Join the Network
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Remy Leo. Crafted with future intent.
      </footer>
    </>
  );
}
