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

        </div>

      </div>
    </section>
  );
}
