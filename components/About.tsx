const highlights = [
  { label: "First ops hire at multiple acquired startups" },
  { label: "Scaled telehealth to 50 states in 3 months" },
  { label: "Navigated HIPAA & health-tech compliance" },
  { label: "Based in San Francisco, works nationwide" },
];

const focusAreas = [
  {
    title: "Launching OKRs & MVP pilots",
    desc: "That actually get used — not just documented.",
  },
  {
    title: "Building hiring pipelines",
    desc: "That grow with the company, not just fill seats.",
  },
  {
    title: "Navigating compliance",
    desc: "Like HIPAA — without losing speed.",
  },
  {
    title: "Bridging communication",
    desc: "Between founders, funders, and teams.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#faf9f7] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-[#2a7d6e]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2a7d6e]">
            Meet Josh
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: main bio */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight mb-6">
              At the heart of what I do is a deep belief in{" "}
              <em className="font-serif not-italic text-[#2a7d6e]">
                supporting the people brave enough to build.
              </em>
            </h2>

            <div className="space-y-5 text-[#4a5568] leading-relaxed">
              <p>
                I&apos;ve been at that early stage. It&apos;s intense,
                high-stakes, and messy. The decisions are complex, the systems
                don&apos;t always make sense, and it&apos;s easy to feel
                overwhelmed. That&apos;s why I&apos;m drawn to working with{" "}
                <strong className="text-[#1a2744]">
                  early-stage teams doing a lot with limited resources
                </strong>
                , helping them move through uncertainty and gain{" "}
                <strong className="text-[#1a2744]">
                  real traction without burning out.
                </strong>
              </p>

              <p>
                I&apos;ve been the first ops hire at multiple startups that went
                on to be acquired. These days, I work with founders as a
                fractional COO, advisor, or project lead — bringing calm
                structure, creative problem-solving, and steady momentum to
                whatever comes next.
              </p>

              <p>
                I&apos;m especially drawn to{" "}
                <strong className="text-[#1a2744]">
                  health tech and mission-driven startups
                </strong>{" "}
                working to improve systems that impact people when it matters
                most.
              </p>

              <p className="text-sm text-[#718096] italic border-l-2 border-[#e5e2dc] pl-4">
                And if it helps to know who you&apos;re talking to: I&apos;m
                based in San Francisco, I sing (badly and joyfully) in the gay
                men&apos;s chorus, and I believe the best work starts with
                honesty, warmth, and a genuine desire to help others succeed.
              </p>
            </div>

            {/* Highlight pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#2a7d6e]/10 text-[#2a7d6e] border border-[#2a7d6e]/20"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2a7d6e]" />
                  {h.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: focus areas + office hours callout */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e5e2dc] p-8 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#2a7d6e] mb-5">
                What I Focus On
              </h3>
              <ul className="space-y-5">
                {focusAreas.map((area) => (
                  <li key={area.title} className="flex gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#2a7d6e]/15 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2a7d6e]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#1a2744] text-sm">
                        {area.title}
                      </span>
                      <span className="text-[#718096] text-sm">
                        {" "}
                        — {area.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office hours callout */}
            <div className="bg-[#1a2744] rounded-2xl p-8 text-white">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2a7d6e]/30 text-[#3dbda5] text-xs font-semibold uppercase tracking-wide mb-4">
                Twice a Week
              </div>
              <h3 className="text-xl font-bold mb-2">Open Office Hours</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                No pitch. Just space to jam, troubleshoot, or think out loud.
                Sometimes we unblock something. Sometimes we build a roadmap.
                Sometimes you send that email you&apos;ve been avoiding, right
                on the call.
              </p>
              <a
                href="https://rightstart.co/book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-[#2a7d6e] text-white hover:bg-[#236b5e] transition-colors"
              >
                Grab a Spot
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
