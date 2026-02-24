"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f7]/95 backdrop-blur-md shadow-sm border-b border-[#e5e2dc]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="RightStart home"
          >
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-[#1a2744]" : "text-white"
              }`}
            >
              RightStart
            </span>
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
              href="https://rightstart.co/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#2a7d6e] text-white hover:bg-[#236b5e] transition-colors"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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
        <div className="md:hidden bg-[#faf9f7] border-t border-[#e5e2dc] px-6 py-4 flex flex-col gap-4">
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
            href="https://rightstart.co/book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[#2a7d6e] text-white hover:bg-[#236b5e] transition-colors"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
