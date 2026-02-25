const highlights = [
  {
    number: "2",
    label: "Acquisitions",
    detail: "First employee at startups that were successfully acquired",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    number: "'21",
    label: "Founded RightStart",
    detail: "Bringing startup energy to mission-driven organizations",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    number: "COO",
    label: "& CFO",
    detail: "Fractional and interim executive leadership",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#faf9f7] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-8 h-px bg-[#2a7d6e]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2a7d6e]">
            Meet Josh
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-start">
          {/* Left: text content */}
          <div>
            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-snug mb-10">
              I&apos;m here to support people doing{" "}
              <em className="font-serif font-semibold not-italic tracking-tight text-[#2a7d6e]">
                good work.
              </em>
            </h2>

            {/* Bio */}
            <div className="space-y-5 text-[#4a5568] leading-relaxed text-lg">
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

              <p>
                In 2021, I started RightStart to bring that same energy to
                organizations doing work I believe in. I&apos;ve stepped in as an{" "}
                <strong className="text-[#1a2744]">
                  interim or fractional COO and CFO
                </strong>{" "}
                for nonprofits, health-focused organizations, and mission-driven
                ventures — including{" "}
                <strong className="text-[#1a2744]">
                  <a href="https://www.aiedu.org/" target="_blank" rel="noopener noreferrer">aiEDU</a>
                </strong>
                , which brings AI literacy to students across the country, and{" "}
                <strong className="text-[#1a2744]">
                  <a href="https://designingjustice.org/" target="_blank" rel="noopener noreferrer">Designing Justice + Designing Spaces</a>
                </strong>
                , which uses architecture and development to address the root causes
                of mass incarceration.
              </p>

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
          </div>

          {/* Right: highlight cards */}
          <div className="hidden lg:flex flex-col gap-4 w-72 pt-4">
            {/* Decorative element */}
            <div className="relative">
              {/* Background glow */}
              <div
                className="absolute -top-12 -right-8 w-48 h-48 rounded-full opacity-[0.07]"
                style={{
                  background: "radial-gradient(circle, #2a7d6e 0%, transparent 70%)",
                }}
              />

              {/* Cards */}
              <div className="relative space-y-3">
                {highlights.map((h, i) => (
                  <div
                    key={h.label}
                    className="relative rounded-2xl border border-[#e5e2dc] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    style={{ marginLeft: i === 1 ? "1.5rem" : "0" }}
                  >
                    {/* Ghost number */}
                    <span
                      className="absolute -top-2 right-3 text-6xl font-black leading-none text-[#1a2744]/[0.04] select-none pointer-events-none"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2a7d6e]/10 flex items-center justify-center text-[#2a7d6e]">
                        {h.icon}
                      </div>

                      <div className="min-w-0">
                        {/* Number + Label */}
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-bold text-[#1a2744] leading-none">
                            {h.number}
                          </span>
                          <span className="text-sm font-semibold text-[#1a2744]">
                            {h.label}
                          </span>
                        </div>

                        {/* Detail */}
                        <p className="mt-1 text-xs text-[#4a5568]/80 leading-relaxed">
                          {h.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative rings (echoes Hero section) */}
            <div className="relative h-16 mt-2">
              <div className="absolute right-4 top-0 w-12 h-12 rounded-full border border-[#2a7d6e]/20" />
              <div className="absolute right-8 top-2 w-8 h-8 rounded-full border border-[#e5e2dc]" />
              <div className="absolute right-1 top-6 w-4 h-4 rounded-full bg-[#2a7d6e]/10" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
