import React from "react";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";
import LiondeskNavbar from "../components/LiondeskNavbar";

export default function LiondeskPage() {
  const router = useRouter();

  const features = [
    {
      title: "Custom CRM Dashboard",
      description: "Manage your clients and leads efficiently with an intuitive dashboard.",
    },
    {
      title: "Appointment Scheduling",
      description: "Easy-to-use scheduling tools to keep your calendar organized.",
    },
    {
      title: "Invoicing & Payments",
      description: "Generate invoices and track payments seamlessly in one place.",
    },
    {
      title: "Secure User Login",
      description: "Keep your data safe with secure authentication and user roles.",
    },
  ];

  return (
    <>
      <LiondeskNavbar />
      <main className="min-h-screen bg-[#0D3B66] text-[#FAF0CA] px-8 py-16 max-w-7xl mx-auto">
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            LionDesk CRM
          </h1>
          <p className="text-lg text-[#F0E8D8] mb-8 leading-relaxed">
            A powerful client management platform designed for smooth scheduling,
            invoicing, and keeping your business organized.
          </p>
          {/*<Button
            variant="outline"
            className="bg-[#E0B84E] text-[#E0B84E] font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#c2a739] hover:text-[#0D3B66] transition-colors"
            onClick={() => router.push("liondesk/contact")}
          >
            Request Demo Access
          </Button>*/}
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-10 text-center drop-shadow-md">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {features.map(({ title, description }) => (
              <div
                key={title}
                className="bg-[#144972] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-default"
              >
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-[#FAF0CA]/90 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center">
          <Button
            variant="outline"
            className="border-[#E0B84E] text-[#E0B84E] px-10 py-3 rounded-xl font-semibold hover:bg-[#c2a739] hover:text-[#0D3B66] transition-colors"
            onClick={() => router.push("/studio")}
          >
            ← Back to Studio
          </Button>
        </section>
      </main>
    </>
  );
}
