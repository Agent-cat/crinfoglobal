"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-500 border-b border-blue-700 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Branding */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-blue-100 transition-all"
            aria-label="Company Logo - Home"
          >
            crinfoglobal
          </Link>
          {/* Centered NavLinks */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-white text-blue-700 shadow font-bold"
                      : "text-white hover:bg-blue-700"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Right Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Link href="/auth/signin">
              <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-400 text-white hover:bg-white hover:text-blue-700 border border-blue-300 transition-all duration-200">
                Sign In
              </button>
            </Link>
            <Link href="/auth/signup">
              <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-white text-blue-700 hover:bg-blue-100 transition-all duration-200">
                Sign Up
              </button>
            </Link>
          </div>
          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white hover:bg-blue-700 transition"
            aria-label="Open main menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-blue-500 border-t border-blue-700 px-2 pt-2 pb-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-white text-blue-700 shadow font-bold"
                    : "text-white hover:bg-blue-700"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 mt-4">
              <Link href="/auth/signin">
                <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-400 text-white hover:bg-white hover:text-blue-700 border border-blue-300">
                  Sign In
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-white text-blue-700 hover:bg-blue-100">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
