// pages/liondesk/contact.tsx

import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import LiondeskNavbar from "../../components/LiondeskNavbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Here you’d normally send data to backend or Zapier etc.
    setSubmitted(true);
  };

  return (
    <>
      <LiondeskNavbar />
      <main className="min-h-screen bg-[#0D3B66] text-[#FAF0CA] px-8 py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Request a Demo</h1>

        {submitted ? (
          <div className="bg-[#144972] p-6 rounded-xl text-center text-[#E0B84E] font-semibold shadow-lg">
            Thank you for reaching out! We’ll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`w-full rounded-lg p-3 text-[#0D3B66] ${
                  errors.name ? "border-2 border-red-500" : "border border-[#E0B84E]"
                }`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`w-full rounded-lg p-3 text-[#0D3B66] ${
                  errors.email ? "border-2 border-red-500" : "border border-[#E0B84E]"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className={`w-full rounded-lg p-3 text-[#0D3B66] ${
                  errors.message ? "border-2 border-red-500" : "border border-[#E0B84E]"
                }`}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="outline"
              className="bg-[#E0B84E] text-[#E0B84E] font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#c2a739] hover:text-[#0D3B66] transition-colors"
            >
              Send Request
            </Button>
          </form>
        )}
      </main>
    </>
  );
}
