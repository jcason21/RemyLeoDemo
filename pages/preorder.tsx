import React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import Countdown from "../components/Countdown";
import Navbar from "../components/Navbar";

export default function PreorderPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
            Limited Preorder Drop: The Guardian Vest
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Forged with lore. Cut with precision. This is survivalwear reimagined. Early access now open.
          </p>
        </section>

        {/* Product Image */}
        <div className="w-full max-w-md mx-auto aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl mb-12">
          <Image
            src="/dripcut.jpg"
            alt="Remy Leo Dripcut Vest"
            fill
            className="object-cover"
          />
        </div>

        {/* Product Features */}
        <section className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Included in this Drop
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>✔ Dripcut Vest with encrypted tech-lore patch</li>
            <li>✔ Collector's wearable lore card</li>
            <li>✔ Protective lightweight fabric blend</li>
            <li>✔ Serial number for future unlockables</li>
          </ul>
        </section>

        {/* Countdown Timer */}
        <section className="text-center mb-12">
          <p className="text-gray-400 mb-2">Drop closes in:</p>
          <Countdown targetDate="2025-07-01T00:00:00" />
        </section>

        {/* Preorder Form */}
        <section className="text-center">
          <form className="max-w-lg mx-auto text-left space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333]"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="size" className="block text-gray-300 mb-1">
                Size
              </label>
              <select
                id="size"
                required
                className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333]"
              >
                <option value="">Select Size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-gray-300 mb-1">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                min={1}
                defaultValue={1}
                className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-black font-semibold py-3 rounded-xl hover:opacity-90"
            >
              Submit Preorder
            </button>
          </form>

          <p className="text-gray-500 mt-4 text-sm">
            Ships Fall 2025 • Limited Units • Secure Checkout
          </p>
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
