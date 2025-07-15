import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";


export default function ArcPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleWaitlistJoin = async () => {
    if (!name || !email) {
      setMessage("Please enter your name and email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-16">
        <section className="max-w-5xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
              A.R.C. – Automated Resource Creator
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your digital co-pilot for launching big ideas. Create custom project roadmaps, branded assets, and even complete digital products with our no-code platform, <strong>The Drop</strong>.
            </p>
            <div ref={formRef} className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#1A1A1A] border border-[#333] p-3 rounded-xl w-full sm:w-auto"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1A1A1A] border border-[#333] p-3 rounded-xl w-full sm:w-auto"
              />
              <button
                onClick={handleWaitlistJoin}
                disabled={loading}
                className="bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:opacity-90"
              >
                {loading ? "Joining..." : "Join the Waitlist"}
              </button>
            </div>
            {message && (
              <p className="text-sm text-gray-400 mt-2">{message}</p>
            )}
          </div>

          {/* Features */}
          <div className="space-y-10">
            <h2 className="text-3xl font-semibold text-[#D4AF37] text-center">What You Can Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg space-y-3">
                <h3 className="text-xl font-semibold text-[#D4AF37]">Instant Roadmaps</h3>
                <p className="text-gray-300">
                  Generate project plans, timelines, and funding strategies in seconds—tailored to your goals.
                </p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg space-y-3">
                <h3 className="text-xl font-semibold text-[#D4AF37]">Branded Assets</h3>
                <p className="text-gray-300">
                  Produce pitch decks, proposals, and marketing materials—all professionally designed and ready to share.
                </p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg space-y-3">
                <h3 className="text-xl font-semibold text-[#D4AF37]">The Drop No-Code Builder</h3>
                <p className="text-gray-300">
                  Drag and drop your way to complete websites, landing pages, and digital MVPs—no coding required.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#D4AF37] text-center">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 max-w-3xl mx-auto">
              <li>
                Answer a few questions about your project and brand.
              </li>
              <li>
                Instantly generate a customized roadmap, brand kit, or product blueprint.
              </li>
              <li>
                Use <strong>The Drop</strong> to visually build and launch your site or MVP.
              </li>
              <li>
                Download your resources or share them directly with investors and collaborators.
              </li>
            </ol>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-[#D4AF37]">
              Ready to transform your ideas into reality?
            </h3>
            <p className="text-gray-300 max-w-xl mx-auto">
              Be the first to access A.R.C. and The Drop—and reimagine how you plan, build, and launch.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:opacity-90"
            >
              Join the Waitlist
            </button>
          </div>
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
