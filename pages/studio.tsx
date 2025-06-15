import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function StudioPage() {
  const router = useRouter();

  const projects = [
    {
      title: "Shyndig",
      description:
        "AI-powered music platform that generates playlists, boosts discovery, and adds a social spark to listening.",
      link: "/shyndig",
      internal: true,
    },
    {
      title: "Liondesk",
      description:
        "A lightweight CRM for freelancers and creatives—track clients, invoices, and appointments in one place.",
      link: "/liondesk",
      internal: true,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
          Remy Leo Studio
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-12">
          I design and develop tools that help creators and small businesses
          thrive — blending brand storytelling, smart tech, and user-first
          design.
        </p>

        {/* Updated What I Offer Section with pricing & packages */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center">
            💼 What I Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Starter Brand Site */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 space-y-4">
              <h3 className="text-2xl font-semibold">🔹 Starter Brand Site</h3>
              <p className="text-lg text-gray-400">$499 – Perfect for solo creators or simple portfolios.</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>1–3 Responsive Pages</li>
                <li>Mobile-first Custom Design</li>
                <li>Contact Form + Email Setup</li>
                <li>Hosting & Basic SEO</li>
              </ul>
              <p className="text-xs text-gray-500">Delivery: 5–7 days</p>
            </div>

            {/* MVP Launch Package */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 space-y-4">
              <h3 className="text-2xl font-semibold">⚡ MVP Launch Package</h3>
              <p className="text-lg text-gray-400">Starting at $999 – For startups and product launches.</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Up to 6 Custom Pages</li>
                <li>Frontend + Backend (MERN/Next.js)</li>
                <li>User Auth & Dashboard</li>
                <li>Database + Analytics</li>
              </ul>
              <p className="text-xs text-gray-500">Delivery: 10–14 days</p>
            </div>

            {/* Custom Web App */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 space-y-4">
              <h3 className="text-2xl font-semibold">🚀 Custom Web App / SaaS</h3>
              <p className="text-lg text-gray-400">Inquire for Quote – Tailored builds for unique needs.</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Booking / E-Commerce / AI</li>
                <li>Stripe or API Integrations</li>
                <li>Admin Panels + Dashboards</li>
                <li>Advanced Features & Automation</li>
              </ul>
              <p className="text-xs text-gray-500">Custom quote based on scope</p>
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
            <h4 className="text-xl font-semibold mb-2">✨ Add-Ons</h4>
            <ul className="grid gap-1 text-sm text-gray-300 sm:grid-cols-2 md:grid-cols-4">
              <li>🎨 Logo + Brand Kit – $199</li>
              <li>🔧 Monthly Maintenance – $99/mo</li>
              <li>📬 Email/Newsletter Setup – $149</li>
              <li>✍️ Copywriting – $100/page</li>
            </ul>
          </div>
        </section>

        {/* Sample Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Sample Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-[#1A1A1A] p-6 rounded-2xl shadow-xl flex flex-col justify-between"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
                <Button
                  variant="outline"
                  className="border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-xl hover:bg-[#2f2f2f] w-fit"
                  onClick={() =>
                    project.internal
                      ? router.push(project.link)
                      : window.open(project.link, "_blank")
                  }
                >
                  View Project
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ready to Build?
          </h2>
          <p className="text-gray-400 mb-6">
            Let’s bring your idea to life with clarity and craft.
          </p>
          <Button
            variant="outline"
            className="bg-[#D4AF37] text-[#D4AF37] font-semibold px-6 py-3 rounded-2xl text-lg shadow-lg hover:opacity-90"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </Button>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#111111] text-gray-200 text-sm text-center py-6 mt-12 border-t border-[#D4AF37]">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Remy Leo. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-6">
              <button
                onClick={() => router.push("/studio")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Studio
              </button>
              <button
                onClick={() => router.push("/clothing")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Apparel
              </button>
              <button
                onClick={() => router.push("/lore")}
                className="hover:text-[#D4AF37] transition-colors"
              >
                Origin Story
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
