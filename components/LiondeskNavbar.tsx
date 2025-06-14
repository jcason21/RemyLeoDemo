import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Home,
  CalendarDays,
  FileText,
  Users,
  BarChart2,
  Settings,
  Bell,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/liondesk/dashboard", icon: Home },
  { name: "Appointments", href: "/liondesk/appointments", icon: CalendarDays },
  { name: "Invoicing", href: "/liondesk/invoicing", icon: FileText },
  { name: "Clients", href: "/liondesk/client-management", icon: Users },
  { name: "Reporting", href: "/liondesk/reporting", icon: BarChart2 },
  { name: "Settings", href: "/liondesk/settings", icon: Settings },
  { name: "Notifications", href: "/liondesk/notifications", icon: Bell },
];

export default function LiondeskNavbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
         <span className="text-xl font-semibold tracking-wider">LionDesk</span>
   <Link href="/liondesk" className="flex items-center gap-3">
  <div className="w-16 h-16 relative">
  </div>
 
</Link>



        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href}>
              <div
                className={`flex items-center gap-2 hover:text-blue-400 transition ${
                  router.pathname === href ? "text-blue-400" : "text-white"
                }`}
              >
                <Icon size={18} />
                <span>{name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href}>
              <div
                className={`flex items-center gap-2 hover:text-blue-400 transition ${
                  router.pathname === href ? "text-blue-400" : "text-white"
                }`}
              >
                <Icon size={18} />
                <span>{name}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
