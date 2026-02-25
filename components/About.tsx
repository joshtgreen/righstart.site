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

      </div>
    </section>
  );
}
