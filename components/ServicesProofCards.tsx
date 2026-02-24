"use client";

import { useState } from "react";

const services = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Fractional/Interim COO or CFO",
    proof: "50 states, 3 months",
    tagline: "Embedded operational and financial leadership — without the full-time overhead.",
    results: [
      "Helped define strategic goals and hire executive leaders at an AI education nonprofit",
      "Scaled a telehealth organization to 50 states and quadrupled patient volume in 3 months",
      "Developed internal systems supporting growth, retention, and team culture at a national nonprofit",
    ],
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Project-Based Consulting",
    proof: "HIPAA-ready launch",
    tagline: "Short-term support for complex, high-stakes initiatives.",
    results: [
      "Led HIPAA compliance and launch readiness for a virtual care organization",
      "Built a provider hiring pipeline for a nutrition therapy platform",
      "Designed and implemented automations for an orthodontic healthtech venture",
    ],
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Advising",
    proof: "Weekly, no retainer",
    tagline: "Ongoing support, honest feedback, and clarity-focused guidance.",
    results: [
      "A space to think clearly, ask the hard questions, and move things forward",
      "Weekly calls or check-ins to stay grounded, focused, and accountable",
      "Real-time support tailored to what's actually happening on the ground",
    ],
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Open Office Hours",
    proof: "Free — no pitch",
    tagline: "Free, no-pitch calls to jam, troubleshoot, or think out loud.",
    results: [
      "A low-stakes way to talk through what's working (or not)",
      "Space to clear a block, gut-check an idea, or sketch next steps",
      "Open to leaders, operators, and curious collaborators",
    ],
    highlight: true,
  },
];

export default function ServicesProofCards() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section id="services-proof" className="bg-[#f3f1ee] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Temp label */}
        <div className="inline-block mb-6 px-3 py-1 rounded-full bg-[#1a2744] text-white text-xs font-semibold tracking-wide">
          Option 3 — Proof Cards
        </div>

        {/* Section header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#2a7d6e]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2a7d6e]">
              How I Can Help
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight">
            The right support, for where you are.
          </h2>
          <p className="mt-4 text-lg text-[#4a5568] leading-relaxed">
            Whether you need embedded executive leadership, help getting a
            complex initiative across the finish line, or just someone to think
            with — there&apos;s a way to work together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left nav — proof cards */}
          <div className="lg:w-72 lg:flex-shrink-0 flex flex-col gap-2">
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`relative text-left p-4 rounded-2xl border transition-all overflow-hidden ${
                    isActive
                      ? s.highlight
                        ? "bg-[#1a2744] border-[#2d3f6b] shadow-md"
                        : "bg-white border-[#2a7d6e] shadow-md"
                      : "bg-white border-[#e5e2dc] hover:border-[#c5c0b8] hover:shadow-sm"
                  }`}
                >
                  {/* Active left border accent */}
                  {isActive && !s.highlight && (
                    <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r bg-[#2a7d6e]" />
                  )}

                  {/* Top row: icon + title */}
                  <div className="flex items-start gap-2.5 mb-2">
                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg mt-0.5 ${
                        isActive
                          ? s.highlight
                            ? "bg-[#2a7d6e]/40 text-[#3dbda5]"
                            : "bg-[#2a7d6e]/15 text-[#2a7d6e]"
                          : "bg-[#f3f1ee] text-[#9ca3af]"
                      }`}
                    >
                      {s.icon}
                    </div>
                    <span
                      className={`text-sm font-bold leading-snug ${
                        isActive
                          ? s.highlight
                            ? "text-white"
                            : "text-[#1a2744]"
                          : "text-[#1a2744]"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>

                  {/* Proof point */}
                  <p
                    className={`text-xs font-semibold pl-[2.375rem] ${
                      isActive
                        ? s.highlight
                          ? "text-[#3dbda5]"
                          : "text-[#2a7d6e]"
                        : "text-[#9ca3af]"
                    }`}
                  >
                    {s.proof}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right content panel */}
          <div className="flex-1">
            <div
              key={active}
              className={`rounded-2xl p-8 lg:p-10 border h-full animate-slide-from-right ${
                service.highlight
                  ? "bg-[#1a2744] border-[#2d3f6b]"
                  : "bg-white border-[#e5e2dc]"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  service.highlight
                    ? "bg-[#2a7d6e]/30 text-[#3dbda5]"
                    : "bg-[#2a7d6e]/10 text-[#2a7d6e]"
                }`}
              >
                {service.icon}
              </div>

              <h3
                className={`text-xl font-bold mb-1 ${
                  service.highlight ? "text-white" : "text-[#1a2744]"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm font-medium mb-6 ${
                  service.highlight ? "text-[#3dbda5]" : "text-[#2a7d6e]"
                }`}
              >
                {service.tagline}
              </p>

              <ul className="space-y-3">
                {service.results.map((r) => (
                  <li
                    key={r}
                    className={`flex gap-3 text-sm leading-relaxed ${
                      service.highlight ? "text-white/75" : "text-[#4a5568]"
                    }`}
                  >
                    <span
                      className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${
                        service.highlight ? "bg-[#3dbda5]" : "bg-[#2a7d6e]"
                      }`}
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
