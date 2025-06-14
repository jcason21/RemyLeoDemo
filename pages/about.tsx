import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-16">
        <section className="max-w-4xl mx-auto space-y-10">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37] mb-12">
            About Remy Leo
          </h1>

          {/* Mission */}
          <section>
            <h2 className="text-3xl font-semibold text-[#D4AF37] mb-4">Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Remy Leo, our mission is to fuse cutting-edge technology with bold fashion to create wearable stories that empower and protect. We build innovative MVPs and prototypes for small to medium businesses, while designing apparel that carries a powerful narrative and functional durability.
            </p>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-3xl font-semibold text-[#D4AF37] mb-4">Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a future where technology and fashion are inseparable, where clothing is not just worn but experienced. Remy Leo aims to lead this revolution by delivering smart, stylish, and resilient apparel combined with digital innovation that inspires communities and drives new possibilities.
            </p>
          </section>

          {/* Roadmap */}
          <section>
            <h2 className="text-3xl font-semibold text-[#D4AF37] mb-4">Roadmap</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>2025 Q2: Launch of first wearable tech collection - The Guardian Vest</li>
              <li>2025 Q3: Expand digital MVP & prototype services for small to medium businesses</li>
              <li>2025 Q4: Develop companion mobile app for wearable tech interaction and updates</li>
              <li>2026 Q1: Introduce AI-powered customization and smart fabric integration</li>
              <li>2026 Q2: Build community platform for customers and creators to share stories and designs</li>
            </ul>
          </section>

          {/* Founder Section */}
          <section className="mt-16 px-6 py-12 bg-[#1A1A1A] rounded-2xl shadow-lg text-white">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 text-center">Meet the Founder</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/founder.png"
                alt="Founder - J Cason"
                className="w-40 h-40 rounded-full object-cover shadow-md mx-auto md:mx-0"
              />
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">J Cason</h3>
                <p className="text-gray-300 mb-4">
                  Founder &amp; Creative Director of Remy Leo. With a passion for blending technology and fashion, J leads the vision of creating innovative wearable tech and digital experiences that tell unique stories.
                </p>
                <p className="text-gray-400 italic">
                  “Remy Leo is more than a brand; it’s a future stitched with purpose and crafted with care.”
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
