"use client";

import { useState } from "react";

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
    title: "Interim/Fractional Executive",
    tagline: "Embedded COO or CFO leadership — without the full-time overhead.",
    description:
      "I embed directly into your team as an operational or financial leader — owning the day-to-day so you can focus on the mission. That usually means building the systems, processes, and teams an organization needs to grow without breaking.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Project-Based Consulting",
    tagline: "Short-term support for complex, high-stakes initiatives.",
    description:
      "Sometimes you don't need a fractional executive — you need someone to come in, solve a specific problem, and hand it back clean. Scoped, focused, and built to last after I leave.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Advising",
    tagline: "Ongoing support, honest feedback, and clarity-focused guidance.",
    description:
      "Not every organization needs someone in the seat — sometimes you just need a sharp, honest thought partner to help think through hard decisions and stay focused on what actually matters.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Open Office Hours",
    tagline: "Free, no-pitch calls to jam, troubleshoot, or think out loud.",
    description:
      "Whether you're stuck on a hiring decision, navigating a board conversation, or just need to talk something through — grab a slot. No agenda required, no strings attached.",
  },
];

export default function ServicesGhostNumbers() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="bg-[var(--warm-gray)] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[var(--teal)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1f6356]">
              How I Can Help
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight">
            The right support, for where you are.
          </h2>
          <p className="mt-4 text-lg text-[#4a5568] leading-relaxed max-w-2xl">
            Whether you need embedded executive leadership, help getting a
            complex initiative across the finish line, or just someone to think
            with — there&apos;s a way to work together.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const isExpanded = expanded === i;
            return (
              <div
                key={s.title}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className="group bg-white rounded-2xl border border-[var(--border)] p-7 lg:p-8 transition-all duration-200 hover:shadow-md hover:border-[var(--teal)]/30 cursor-pointer lg:cursor-default"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] shrink-0 mt-0.5">
                    {s.icon}
                  </div>

                  <div className="min-w-0">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[var(--navy)] leading-snug">
                      {s.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-[#4a5568] mt-1">
                      {s.tagline}
                    </p>
                  </div>
                </div>

                {/* Description — expands on tap (mobile) or hover (desktop) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                  } lg:max-h-0 lg:opacity-0 lg:mt-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-hover:mt-4`}
                >
                  <p className="text-sm leading-relaxed text-[#4a5568] border-t border-[var(--border)] pt-4">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
