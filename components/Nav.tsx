"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape and return focus to toggle
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    },
    [menuOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Move focus into menu when it opens
  useEffect(() => {
    if (menuOpen) {
      const firstLink = menuRef.current?.querySelector("a");
      firstLink?.focus();
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-clip ${
        scrolled
          ? "bg-[#f0ede8]/95 backdrop-blur-md shadow-sm border-b border-[#e5e2dc]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Rightstart home"
          >
            <div className="relative h-8 w-36">
              {/* White logo — shown on dark/transparent nav */}
              <Image
                src="/logos/rightstart font white.png"
                alt="Rightstart"
                fill
                className={`object-contain object-left transition-opacity duration-300 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
                priority
              />
              {/* Dark logo — shown when nav is scrolled/light */}
              <Image
                src="/logos/rightstart.png"
                alt="Rightstart"
                fill
                className={`object-contain object-left transition-opacity duration-300 ${
                  scrolled ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  scrolled ? "text-[#1a2744]" : "text-white/90"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="/book"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#2a7d6e] text-white hover:bg-[#236b5e] transition-colors"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            ref={toggleRef}
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span
              className={`block w-5 h-0.5 mb-1.5 transition-all ${
                scrolled ? "bg-[#1a2744]" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 mb-1.5 transition-all ${
                scrolled ? "bg-[#1a2744]" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all ${
                scrolled ? "bg-[#1a2744]" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          ref={menuRef}
          className="md:hidden bg-[#f0ede8] border-t border-[#e5e2dc] px-6 py-4 flex flex-col gap-4"
        >
          {["About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#1a2744] py-1"
            >
              {item}
            </a>
          ))}
          <a
            href="/book"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#2a7d6e] text-white hover:bg-[#236b5e] transition-colors"
          >
            Book a Call
          </a>
        </nav>
      )}
    </header>
  );
}
