import React from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      projectType: form.projectType.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("There was a problem sending your message.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37] mb-10">
          Get in Touch
        </h1>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Have a question, idea, or opportunity? Let’s build or create something powerful together. Fill out the form below and we’ll get back to you within 24–48 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
        >
          <div>
            <label className="block text-gray-400 mb-1">Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Project Type</label>
            <select
              name="projectType"
              required
              className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333]"
            >
              <option value="">Select a project type</option>
              <option>Web App</option>
              <option>Brand Design</option>
              <option>Consultation</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-[#1A1A1A] text-white p-3 rounded-xl border border-[#333]"
              placeholder="What can we help you with?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black font-semibold py-3 rounded-xl hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
