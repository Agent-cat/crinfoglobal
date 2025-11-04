"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const links = [
  { href: "/overview", label: "Journal Overview" },
  { href: "/indexing", label: "Indexing & Abstracting" },
  { href: "/editorial-board", label: "Editorial Board" },
  { href: "/instructions", label: "Instructions for Authors" },
  { href: "/apc", label: "Article Processing Charge" },
  { href: "/ethics", label: "Publication Ethics" },
  { href: "/contact", label: "Contact Information" },
  { href: "/special-issues", label: "Open Special Issues" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/refunds", label: "Cancellations & Refunds" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="hidden md:block relative">
      {/* Toggle Button - Always Visible */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`fixed top-20 z-50 w-10 h-10 rounded-full bg-[#083b7a] text-white flex items-center justify-center shadow-lg hover:bg-[#0a4ea3] transition-all duration-300 ${
          isCollapsed ? 'left-2' : 'left-[17rem]'
        }`}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight className="w-5 h-5" />
        ) : (
          <ChevronLeft className="w-5 h-5" />
        )}
      </button>

      {/* Sidebar */}
      <aside 
        className={`shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-[#083b7a]/20 bg-white transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-0 border-0' : 'w-72'
        }`}
      >
        {/* Sidebar Content */}
        <div className={`p-4 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="mb-3 px-3 py-2 rounded-lg bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] text-white font-semibold">
            Journal Navigation
          </div>
          <nav className="space-y-1">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-[#e6f0ff] text-[#083b7a] border border-[#0a4ea3]/30"
                    : "text-[#083b7a] hover:bg-[#e6f0ff]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;


