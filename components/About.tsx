"use client";

import { useRef, useState, useEffect } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver(() => {
      setContentHeight(contentRef.current?.scrollHeight ?? 0);
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative bg-[var(--navy)] py-16 lg:py-20 overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0" aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blurred gradient orbs */}
      <div className="pointer-events-none absolute bottom-[-30%] left-[-15%] w-[50%] h-[60%] rounded-full bg-[var(--teal)]/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[var(--navy-light)]/30 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-[var(--teal-light)]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--teal-light)]">
            Meet Josh
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-white leading-snug mb-10">
          I&apos;m here to help people doing{" "}
          <em className="not-italic text-[var(--teal-light)]">
            good work.
          </em>
        </h2>

        {/* Bio */}
        <div className="text-white/70 leading-relaxed text-lg max-w-3xl">
          {/* Paragraph 1 — always visible */}
          <p>
            I spent the early part of my career as a{" "}
            <strong className="text-white">
              first employee at multiple startups
            </strong>{" "}
            — building operations from scratch, navigating compliance, hiring
            teams, and figuring out what needed to exist so the company could
            grow.{" "}
            <strong className="text-white">
              Two of those companies were acquired
            </strong>
            , and each one taught me what it takes to build systems that actually
            work when the stakes are high and the resources are limited.
          </p>

          {/* Collapsible content — animated on mobile, always visible on desktop */}
          <div
            ref={contentRef}
            className="lg:!max-h-none overflow-hidden transition-[max-height] duration-500 ease-in-out"
            style={{ maxHeight: expanded ? `${contentHeight}px` : "0px" }}
          >
            <div className="mt-6" />

            <p>
              In 2021, I started RightStart to bring that same energy to
              organizations doing work I believe in. I&apos;ve stepped in as an{" "}
              <strong className="text-white">
                interim or fractional COO and CFO
              </strong>{" "}
              for nonprofits, health-focused organizations, and mission-driven
              ventures — including{" "}
              <strong className="text-white">
                <a href="https://www.aiedu.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--teal-light)] underline decoration-[var(--teal-light)]/40 hover:decoration-[var(--teal-light)] transition-colors">aiEDU</a>
              </strong>
              , which brings AI literacy to students across the country, and{" "}
              <strong className="text-white">
                <a href="https://designingjustice.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--teal-light)] underline decoration-[var(--teal-light)]/40 hover:decoration-[var(--teal-light)] transition-colors">Designing Justice + Designing Spaces</a>
              </strong>
              , which uses architecture and development to address the root causes
              of mass incarceration.
            </p>

            <div className="my-6" />

            <p>
              What I love about this work is pretty simple:{" "}
              <strong className="text-white">
                I get to make life easier for people doing important things.
              </strong>{" "}
              Whether that means untangling finances, building a hiring process, or
              just being a calm voice when everything feels urgent — that&apos;s
              where I&apos;m most useful and most fulfilled.
            </p>
          </div>

          {/* Read more / Read less toggle — mobile only */}
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="lg:hidden mt-5 inline-flex items-center gap-1.5 text-[var(--teal-light)] font-medium text-base hover:text-[var(--teal)] transition-colors"
          >
            {expanded ? "Read less" : "Read more"}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
