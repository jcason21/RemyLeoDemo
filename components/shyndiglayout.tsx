import React from "react";
import Head from "next/head";
import ShyndigNavbar from "./ShyndigNavbar";
import Link from "next/link";

export default function ShyndigLayout({
  children,
  title = "Shyndig | Where Music Lovers Connect",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ShyndigNavbar />

      <main className="pt-28 px-6 md:px-12 max-w-7xl mx-auto">{children}</main>

      <footer className="bg-gray-900 text-gray-300 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm select-none">
            &copy; {new Date().getFullYear()} Shyndig. All rights reserved.
          </p>
          <div className="flex gap-10 text-sm font-semibold">
            <Link href="/shyndig/terms" className="hover:text-indigo-400 transition">
              Terms
            </Link>
            <Link href="/shyndig/privacy" className="hover:text-indigo-400 transition">
              Privacy
            </Link>
            <Link href="/shyndig/contact" className="hover:text-indigo-400 transition">
              Contact
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .text-gradient-primary {
          background: linear-gradient(90deg, #7c3aed, #4338ca);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}
