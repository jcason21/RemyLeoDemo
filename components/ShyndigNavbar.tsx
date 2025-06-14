import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ShyndigNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: "/shyndig", label: "Home" },
    { href: "/shyndig/feed", label: "Feed" },
    { href: "/shyndig/explore", label: "Explore" },
    { href: "/shyndig/create", label: "Create" },
    { href: "/shyndig/notifications", label: "Notifications" },
    { href: "/shyndig/user/me", label: "Profile" },
    { href: "/shyndig/settings", label: "Settings" },
  ];

const isActive = (href: string) => {
  if (href === "/shyndig") {
    return router.pathname === href; // only highlight exactly on home
  }
  return router.pathname.startsWith(href); // highlight all subpaths
};

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Shyndig
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-semibold hover:text-blue-700 ${
                isActive(href) ? "text-blue-700" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block font-semibold ${
                isActive(href) ? "text-blue-700" : "text-gray-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
