const credentials = [
  { stat: "3×", label: "First ops hire at startups that went on to be acquired" },
  { stat: "50 states", label: "Scaled telehealth nationwide in under 3 months" },
  { stat: "COO + CFO", label: "Fractional and interim executive leadership" },
  { stat: "SF-based", label: "Works with organizations across the country" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#faf9f7] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-8 h-px bg-[#2a7d6e]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2a7d6e]">
            Meet Josh
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight mb-10 max-w-3xl">
          At the heart of what I do is a deep belief in{" "}
          <em className="font-serif not-italic text-[#2a7d6e]">
            supporting the people committed to doing good work.
          </em>
        </h2>

        {/* Bio */}
        <div className="max-w-3xl space-y-5 text-[#4a5568] leading-relaxed text-lg">
          <p>
            I&apos;ve been in the thick of it — the high-stakes decisions, the
            systems that don&apos;t quite hold, the moments when everything
            feels urgent and nothing is clear. That&apos;s why I&apos;m drawn
            to working with{" "}
            <strong className="text-[#1a2744]">
              teams doing meaningful work with real constraints
            </strong>
            — helping them move through complexity and make progress without
            burning out.
          </p>

          <p>
            I&apos;ve served as the first ops hire at multiple organizations
            that went on to be acquired. Today I step in as a{" "}
            <strong className="text-[#1a2744]">
              fractional or interim COO or CFO
            </strong>{" "}
            — bringing calm structure, creative problem-solving, and steady
            momentum to whatever comes next.
          </p>

          <p>
            I&apos;m especially drawn to{" "}
            <strong className="text-[#1a2744]">
              nonprofits, health-focused organizations, and mission-driven
              ventures
            </strong>{" "}
            working to improve systems that impact people when it matters most.
          </p>

          <p className="text-base text-[#718096] italic border-l-2 border-[#e5e2dc] pl-4">
            And if it helps to know who you&apos;re talking to: I&apos;m based
            in San Francisco, I sing (badly and joyfully) in the gay men&apos;s
            chorus, and I believe the best work starts with honesty, warmth,
            and a genuine desire to help others succeed.
          </p>
        </div>

        {/* Credential bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e2dc] rounded-2xl overflow-hidden">
          {credentials.map((c) => (
            <div key={c.stat} className="bg-white px-8 py-7">
              <div className="text-2xl font-bold text-[#1a2744] mb-1">{c.stat}</div>
              <div className="text-sm text-[#718096] leading-snug">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
