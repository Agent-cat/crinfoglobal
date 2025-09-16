"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/overview", label: "Journal Overview" },
  { href: "/indexing", label: "Indexing & Abstracting" },
  { href: "/editorial-board", label: "Editorial Board" },
  { href: "/instructions", label: "Instructions for Authors" },
  { href: "/apc", label: "Article Processing Charge" },
  { href: "/ethics", label: "Publication Ethics" },
  { href: "/contact", label: "Contact Information" },
  { href: "/special-issues", label: "Open Special Issues" },
];

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="hidden md:block w-72 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-[#083b7a]/20 bg-white">
      <div className="p-4">
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
  );
};

export default Sidebar;


