"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0E0E0E] text-white border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#D4AF37]">
          
          <img src="/logonav.png" alt="Logo" style={{ height: 50 }} />
        
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-[#D4AF37]">About</Link>
          <Link href="/arc" className="hover:text-[#D4AF37]">A.R.C (coming soon) </Link>
          <Link href="/clothing" className="hover:text-[#D4AF37]">Clothing</Link>
          <Link href="/lore" className="hover:text-[#D4AF37]">Lore</Link>
          <Link href="/studio" className="hover:text-[#D4AF37]">Studio</Link>

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link href="/clothing" className="block hover:text-[#D4AF37]">Clothing</Link>
          <Link href="/preorder" className="block hover:text-[#D4AF37]">Preorder</Link>
          <Link href="/lore" className="block hover:text-[#D4AF37]">Lore</Link>
        </div>
      )}
    </nav>
  );
}
