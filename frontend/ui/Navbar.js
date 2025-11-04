
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "../constants/constants";
import { checkAuth, logout as apiLogout } from "../utils/api";
import authEvents from "../utils/authEvents";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  // Check for user authentication (cookie-based)
  useEffect(() => {
    const loadUser = async () => {
      try {
        const me = await checkAuth();
        setUser(me);
      } catch (_) {
        setUser(null);
      }
      setAuthLoaded(true);
    };

    loadUser();

    const handleLogin = (e) => {
      setUser(e?.detail || null);
      setAuthLoaded(true);
    };
    const handleLogoutEvent = () => {
      setUser(null);
      setAuthLoaded(true);
    };

    authEvents.subscribe('loginSuccess', handleLogin);
    authEvents.subscribe('logoutSuccess', handleLogoutEvent);

    return () => {
      authEvents.unsubscribe('loginSuccess', handleLogin);
      authEvents.unsubscribe('logoutSuccess', handleLogoutEvent);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await apiLogout();
      setUser(null);
      setIsProfileOpen(false);
      authEvents.dispatch('logoutSuccess');
      router.push('/');
    } catch (e) {
     
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] border-b border-[#083b7a] ">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Branding */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-[#e6f0ff] transition-colors"
            aria-label="Company Logo - Home"
          >
            CrinfoGlobal
          </Link>
          
          {/* Desktop NavLinks */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {navLinks
                .filter((link) => {
                  if (!link.requiresRole) return true;
                  if (!authLoaded) return false;
                  return user && user.role === link.requiresRole;
                })
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                      isActive(link.href)
                        ? "bg-white text-[#083b7a] shadow-sm font-semibold"
                        : "text-white hover:bg-white/10 hover:shadow-sm"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
          
          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-2">
            {!authLoaded ? (
              <div className="w-32 h-8 rounded bg-white/10 animate-pulse" />
            ) : (
              user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span>{user.userName || user.email}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 border border-gray-100 py-2">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/signin">
                  <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-white/70 text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/60">
                    Sign In
                  </button>
                </Link>
                <Link href="/auth/signup">
                  <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-white text-[#083b7a] hover:bg-[#e6f0ff] border border-white/0 transition-colors shadow-sm">
                    Sign Up
                  </button>
                </Link>
              </>
            )
            )}
          </div>
          
          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/60"
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
          <div className="md:hidden bg-gradient-to-r from-[#083b7a] to-[#0a4ea3] border-t border-[#083b7a] px-3 pt-3 pb-4 shadow-md/40">
            {/* Mobile NavLinks */}
            <div className="flex flex-col items-stretch space-y-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-white text-[#083b7a] shadow-sm font-semibold"
                      : "text-white hover:bg-white/10 hover:shadow-sm"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Mobile Auth Section */}
            <div className="flex flex-col items-center space-y-2">
              {!authLoaded ? (
                <div className="w-48 h-8 rounded bg-white/10 animate-pulse" />
              ) : user ? (
                <>
                  <div className="text-white text-sm mb-2">
                    Welcome, {user.userName || user.email}
                  </div>
                  <div className="flex space-x-2">
                    <Link href="/profile" onClick={() => setIsOpen(false)}>
                      <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-white/70 text-white hover:bg-white/10">
                        Profile
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 text-sm font-semibold rounded-lg bg-white text-[#083b7a] hover:bg-[#e6f0ff] shadow-sm"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex space-x-2">
                  <Link href="/auth/signin" onClick={() => setIsOpen(false)}>
                    <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-white/70 text-white hover:bg-white/10">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-white text-[#083b7a] hover:bg-[#e6f0ff] shadow-sm">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
