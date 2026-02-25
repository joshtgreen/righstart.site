"use client";

import { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="bg-[#faf9f7] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-[#2a7d6e]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2a7d6e]">
            Meet Josh
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-snug mb-10">
          I&apos;m here to help people doing{" "}
          <em className="font-serif font-semibold not-italic tracking-tight text-[#2a7d6e]">
            good work.
          </em>
        </h2>

        {/* Bio */}
        <div className="text-[#4a5568] leading-relaxed text-lg">
          {/* Paragraph 1 — always visible */}
          <p>
            I spent the early part of my career as a{" "}
            <strong className="text-[#1a2744]">
              first employee at multiple startups
            </strong>{" "}
            — building operations from scratch, navigating compliance, hiring
            teams, and figuring out what needed to exist so the company could
            grow.{" "}
            <strong className="text-[#1a2744]">
              Two of those companies were acquired
            </strong>
            , and each one taught me what it takes to build systems that actually
            work when the stakes are high and the resources are limited.
          </p>

          {/* Spacer between paragraphs */}
          <div className={`my-6 ${expanded ? "block" : "hidden lg:block"}`} />

          {/* Paragraphs 2 & 3 — hidden on mobile until expanded, always visible on desktop */}
          <div className={`${expanded ? "block" : "hidden lg:block"}`}>
            <p>
              In 2021, I started RightStart to bring that same energy to
              organizations doing work I believe in. I&apos;ve stepped in as an{" "}
              <strong className="text-[#1a2744]">
                interim or fractional COO and CFO
              </strong>{" "}
              for nonprofits, health-focused organizations, and mission-driven
              ventures — including{" "}
              <strong className="text-[#1a2744]">
                <a href="https://www.aiedu.org/" target="_blank" rel="noopener noreferrer" className="text-[#2a7d6e] underline decoration-[#2a7d6e]/40 hover:decoration-[#2a7d6e] transition-colors">aiEDU</a>
              </strong>
              , which brings AI literacy to students across the country, and{" "}
              <strong className="text-[#1a2744]">
                <a href="https://designingjustice.org/" target="_blank" rel="noopener noreferrer" className="text-[#2a7d6e] underline decoration-[#2a7d6e]/40 hover:decoration-[#2a7d6e] transition-colors">Designing Justice + Designing Spaces</a>
              </strong>
              , which uses architecture and development to address the root causes
              of mass incarceration.
            </p>

            {/* Spacer */}
            <div className="my-6" />

            <p>
              What I love about this work is pretty simple:{" "}
              <strong className="text-[#1a2744]">
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
            className="lg:hidden mt-5 inline-flex items-center gap-1.5 text-[#2a7d6e] font-medium text-base hover:text-[#236b5e] transition-colors"
          >
            {expanded ? "Read less" : "Read more"}
            <svg
              className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
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
