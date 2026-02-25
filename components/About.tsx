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

        {/* Decorative graphic */}
        <div className="mt-14 lg:mt-16" aria-hidden>
          <svg
            viewBox="0 0 960 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Horizontal spine */}
            <line x1="0" y1="60" x2="960" y2="60" stroke="#e5e2dc" strokeWidth="1" />

            {/* Large teal circle — left */}
            <circle cx="140" cy="60" r="48" stroke="#2a7d6e" strokeWidth="1.5" opacity="0.18" />
            <circle cx="140" cy="60" r="32" fill="#2a7d6e" opacity="0.06" />

            {/* Cluster — left-center */}
            <circle cx="300" cy="52" r="18" stroke="#1a2744" strokeWidth="1" opacity="0.10" />
            <circle cx="320" cy="68" r="12" fill="#2a7d6e" opacity="0.10" />
            <circle cx="288" cy="70" r="6" fill="#2a7d6e" opacity="0.15" />

            {/* Arc sweep — center */}
            <path
              d="M 420 90 A 50 50 0 0 1 520 90"
              stroke="#2a7d6e"
              strokeWidth="1.5"
              opacity="0.20"
              fill="none"
            />
            <path
              d="M 440 30 A 40 40 0 0 0 520 30"
              stroke="#1a2744"
              strokeWidth="1"
              opacity="0.08"
              fill="none"
            />
            <circle cx="470" cy="60" r="4" fill="#2a7d6e" opacity="0.25" />

            {/* Dotted accent — right-center */}
            <circle cx="600" cy="60" r="2.5" fill="#2a7d6e" opacity="0.30" />
            <circle cx="620" cy="60" r="2.5" fill="#2a7d6e" opacity="0.22" />
            <circle cx="640" cy="60" r="2.5" fill="#2a7d6e" opacity="0.14" />

            {/* Ring pair — right */}
            <circle cx="740" cy="48" r="28" stroke="#2a7d6e" strokeWidth="1.5" opacity="0.14" />
            <circle cx="770" cy="68" r="22" stroke="#1a2744" strokeWidth="1" opacity="0.08" />
            <circle cx="755" cy="58" r="8" fill="#2a7d6e" opacity="0.08" />

            {/* Small accent — far right */}
            <circle cx="880" cy="54" r="14" stroke="#e5e2dc" strokeWidth="1.5" />
            <circle cx="880" cy="54" r="5" fill="#2a7d6e" opacity="0.12" />

            {/* Short teal accent lines */}
            <line x1="50" y1="60" x2="80" y2="60" stroke="#2a7d6e" strokeWidth="2" opacity="0.25" />
            <line x1="900" y1="60" x2="940" y2="60" stroke="#2a7d6e" strokeWidth="2" opacity="0.20" />
          </svg>
        </div>

      </div>
    </section>
  );
}
