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
              At Remy Leo, our mission is to fuse cutting-edge technology with bold fashion to create wearable stories that empower, protect, and inspire. We design apparel that carries purpose and build digital tools to help visionaries launch their ideas into the world.
            </p>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-3xl font-semibold text-[#D4AF37] mb-4">Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a future where technology and fashion are inseparable—where clothing is experienced as an extension of your story. Remy Leo aims to lead this movement by delivering smart, resilient apparel and digital innovation that spark creativity and new possibilities.
            </p>
          </section>

          {/* Rollout & Milestones */}
          <section>
            <h2 className="text-3xl font-semibold text-[#D4AF37] mb-4">Rollout & Milestones</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <strong>August 2025:</strong> Preorder launch of the first wearable tech collection:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li><em>The Guardian Vest</em> – advanced protective outerwear blending performance and story.</li>
                  <li><em>The Signal Hoodie</em> – lightweight smart fabric hoodie for everyday adaptability.</li>
                  <li><em>The Phase Shift Tee</em> – engineered for comfort, durability, and responsive design.</li>
                </ul>
              </li>
              <li>
                <strong>August 2025:</strong> Submission of Y Combinator application to secure funding and mentorship for scaling wearable technology and digital innovation.
              </li>
              <li>
                <strong>September 2025:</strong> Public release of the <em>A.R.C.</em> (Automated Resource Creator), empowering creators and small businesses to generate custom project roadmaps, proposals, and brand assets instantly.
              </li>
              <li>
                <strong>September 2025:</strong> Shyndig MVP fully available, providing an interactive platform for collaborative playlist creation, event music curation, and social engagement.
              </li>
              <li>
                <strong>October 2025:</strong> Expansion of digital MVP and prototype services to help founders and brands launch quickly.
              </li>
              <li>
                <strong>December 2025:</strong> Launch of the Remy Leo Companion App, connecting wearables with real-time updates, customization, and community features.
              </li>
              <li>
                <strong>February 2026:</strong> AI-powered apparel customization platform for designing unique garments with adaptive smart fabrics.
              </li>
              <li>
                <strong>April 2026:</strong> Community hub launch to bring together customers, designers, and storytellers to co-create and share their visions.
              </li>
              <li>
                <strong>Summer 2026:</strong> Special Edition Capsule inspired by the Remy Leo Universe—wearable art meets interactive storytelling.
              </li>
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
                  Founder &amp; Creative Director of Remy Leo. Driven by a passion to blend innovation with style, J leads the mission to create wearable tech and digital experiences that tell powerful stories.
                </p>
                <p className="text-gray-400 italic">
                  “Remy Leo isn’t just a brand—it’s a movement to design the future we want to live in.”
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
