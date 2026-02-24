"use client";

import { useState } from "react";

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Fractional/Interim COO or CFO",
    tagline: "Embedded operational and financial leadership — without the full-time overhead.",
    results: [
      "Helped define strategic goals and hire executive leaders at an AI education nonprofit",
      "Scaled a telehealth organization to 50 states and quadrupled patient volume in 3 months",
      "Developed internal systems supporting growth, retention, and team culture at a national nonprofit",
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Project-Based Consulting",
    tagline: "Short-term support for complex, high-stakes initiatives.",
    results: [
      "Led HIPAA compliance and launch readiness for a virtual care organization",
      "Built a provider hiring pipeline for a nutrition therapy platform",
      "Designed and implemented automations for an orthodontic healthtech venture",
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Advising",
    tagline: "Ongoing support, honest feedback, and clarity-focused guidance.",
    results: [
      "A space to think clearly, ask the hard questions, and move things forward",
      "Weekly calls or check-ins to stay grounded, focused, and accountable",
      "Real-time support tailored to what's actually happening on the ground",
    ],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Open Office Hours",
    tagline: "Free, no-pitch calls to jam, troubleshoot, or think out loud.",
    results: [
      "A low-stakes way to talk through what's working (or not)",
      "Space to clear a block, gut-check an idea, or sketch next steps",
      "Open to leaders, operators, and curious collaborators",
    ],
    highlight: true,
  },
];

export default function ServicesGhostNumbers() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section id="services" className="bg-[#f3f1ee] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Temp label */}
        <div className="inline-block mb-6 px-3 py-1 rounded-full bg-[#1a2744] text-white text-xs font-semibold tracking-wide">
          Option 1 — Ghost Numbers
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

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left nav */}
          <div className="lg:w-72 lg:flex-shrink-0">
            <ul className="divide-y divide-[#e5e2dc]">
              {services.map((s, i) => {
                const isActive = active === i;
                return (
                  <li
                    key={s.title}
                    onClick={() => setActive(i)}
                    className="relative cursor-pointer py-5 pl-5 pr-2 select-none overflow-hidden"
                  >
                    {/* Active left bar */}
                    <span
                      className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r transition-all duration-200 ${
                        isActive ? "bg-[#2a7d6e]" : "bg-transparent"
                      }`}
                    />

                    {/* Ghost number */}
                    <span
                      className={`absolute -top-3 left-1 text-[7rem] font-black leading-none select-none pointer-events-none transition-colors duration-200 ${
                        isActive ? "text-[#2a7d6e]/[0.10]" : "text-[#1a2744]/[0.04]"
                      }`}
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div className="relative z-10">
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-[#2a7d6e]/60 mb-1">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p
                        className={`text-base font-semibold leading-snug transition-colors duration-150 ${
                          isActive ? "text-[#1a2744]" : "text-[#4a5568]"
                        }`}
                      >
                        {s.title}
                      </p>
                      <p className="text-xs text-[#9ca3af] leading-snug mt-1 pr-2">
                        {s.tagline}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
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
