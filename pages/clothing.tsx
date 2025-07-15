import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

export default function ClothingPage() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const products = [
    {
      id: "guardian",
      title: "The Guardian",
      description: "Dripcut Vest. Includes wearable lore card. Limited preorder now open.",
      image: "/dripcut.jpg",
    },
    {
      id: "signal-hoodie",
      title: "Signal Hoodie",
      description: "Glitch-inspired embroidery. Made for the unseen and the unheard.",
      image: "/hoodie.jpg",
    },
    {
      id: "phase-shift-tee",
      title: "Phase Shift Tee",
      description: "Quantum weave tee. Ultra-light, coded for resilience.",
      image: "/shirt.jpg",
    },
  ];

  const openModal = (productId: string) => {
    setSelectedProduct(productId);
    setModalOpen(true);
    setMessage("");
    setName("");
    setEmail("");
    setSize("");
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setMessage("");
  };

  const handleSubmit = async () => {
    if (!name || !email || !size) {
      setMessage("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          size,
          product: products.find((p) => p.id === selectedProduct)?.title || "Unknown",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setName("");
        setEmail("");
        setSize("");
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">Remy Leo Clothing</h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-12">
          Every piece is a coded message — future-proof, protective, and power-giving. You don’t just wear fashion. You wear purpose.
        </p>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Drop</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map(({ id, title, description, image }) => (
              <div key={id} className="bg-[#1A1A1A] p-6 rounded-2xl shadow-xl flex flex-col">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg mb-4">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <Button
                  variant="outline"
                  className="border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-2xl hover:bg-[#2f2f2f] mt-auto"
                  onClick={() => openModal(id)}
                >
                  Notify Me
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-20">
          <div className="w-full max-w-2xl mx-auto aspect-[16/9] relative rounded-2xl overflow-hidden shadow-md mb-6">
            <Image src="/rlvoid.jpg" alt="Lore Teaser" fill className="object-cover" />
          </div>
          <Button
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-2xl hover:bg-[#2f2f2f]"
            onClick={() => router.push("/lore")}
          >
            Discover the Origin
          </Button>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Remy Leo. Crafted with future intent.
      </footer>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#0E0E0E] p-8 rounded-3xl w-full max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Notify Me – {products.find((p) => p.id === selectedProduct)?.title}
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333] mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333] mb-4"
            />
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333] mb-4"
            >
              <option value="">Select Size</option>
              {sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {message && (
              <p className="text-sm text-gray-400 mb-4">{message}</p>
            )}

            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl border border-gray-600 text-gray-400 hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[#D4AF37] text-black font-semibold px-6 py-2 rounded-xl hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
