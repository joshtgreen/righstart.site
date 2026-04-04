"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  { name: "Nonprofit Comp Benchmarking", href: "https://comp.rightstart.co" },
  { name: "WageProof", href: "https://wageproof.com" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close projects dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (projectsOpen) setProjectsOpen(false);
        if (menuOpen) {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }
      }
    },
    [menuOpen, projectsOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Rightstart home"
          >
            <div className="relative h-8 w-36">
              <Image
                src="/logos/rightstart font white.png"
                alt="Rightstart"
                fill
                className={`object-contain object-left transition-opacity duration-300 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
                priority
              />
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  scrolled ? "text-[var(--navy)]" : "text-white/90"
                }`}
              >
                {item}
              </a>
            ))}

            {/* Projects dropdown */}
            <div
              ref={projectsRef}
              className="relative"
              onMouseEnter={() => {
                if (projectsTimeout.current) clearTimeout(projectsTimeout.current);
                setProjectsOpen(true);
              }}
              onMouseLeave={() => {
                projectsTimeout.current = setTimeout(() => setProjectsOpen(false), 150);
              }}
            >
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                aria-expanded={projectsOpen}
                aria-haspopup="true"
                className={`text-sm font-medium transition-colors hover:opacity-70 inline-flex items-center gap-1 ${
                  scrolled ? "text-[var(--navy)]" : "text-white/90"
                }`}
              >
                Projects
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              {projectsOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[var(--border)] py-2 animate-slide-from-right">
                  {projects.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-[var(--navy)] hover:bg-[var(--cream)] transition-colors"
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/book"
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-[var(--teal)] text-white hover:bg-[#236b5e] transition-colors"
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
                scrolled ? "bg-[var(--navy)]" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 mb-1.5 transition-all ${
                scrolled ? "bg-[var(--navy)]" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all ${
                scrolled ? "bg-[var(--navy)]" : "bg-white"
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
          className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4"
        >
          {["About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[var(--navy)] py-1"
            >
              {item}
            </a>
          ))}

          {/* Mobile projects accordion */}
          <button
            onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
            aria-expanded={mobileProjectsOpen}
            className="text-sm font-medium text-[var(--navy)] py-1 inline-flex items-center gap-1 text-left"
          >
            Projects
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileProjectsOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </button>
          {mobileProjectsOpen && (
            <div className="flex flex-col gap-3 pl-4 border-l-2 border-[var(--teal)]/30">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[var(--navy)]/70 hover:text-[var(--navy)] transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
          )}
          <a
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold bg-[var(--teal)] text-white hover:bg-[#236b5e] transition-colors"
          >
            Book a Call
          </a>
        </nav>
      )}
    </header>
  );
}
