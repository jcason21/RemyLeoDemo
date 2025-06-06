import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LiondeskNavbar() {
  const router = useRouter();

  const navItems = [
    { label: "Studio", href: "/studio" },
    { label: "Shyndig", href: "/shyndig" },
    { label: "Liondesk", href: "/liondesk" },
  ];

  return (
    <nav className="bg-[#0D3B66] px-8 py-4 shadow-lg flex justify-between items-center">
      <div
        onClick={() => router.push("/liondesk")}
        className="text-[#FAF0CA] text-3xl font-extrabold cursor-pointer select-none"
      >
        Liondesk
      </div>

      <ul className="flex space-x-8 text-[#FAF0CA] font-semibold text-lg">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-[#E0B84E] transition-colors ${
                router.pathname === href ? "text-[#E0B84E]" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
