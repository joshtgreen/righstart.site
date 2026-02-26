import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1a2744] overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Warm gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" aria-hidden="true"
        style={{
          background: "radial-gradient(circle, #2a7d6e 0%, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Mobile: headline + photo side by side */}
            <div className="lg:hidden flex items-center gap-5 mb-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.08] tracking-tight flex-1">
                Senior
                <br />
                <span className="text-[#3dbda5]">leadership,</span>
                <br />
                without the full-time commitment.
              </h1>
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0">
                <div className="absolute inset-0 rounded-full border-2 border-[#2a7d6e]/40 scale-110" aria-hidden="true" />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[#2a7d6e]/30">
                  <Image
                    src="/josh-headshot.jpg"
                    alt="Josh Green"
                    fill
                    className="object-cover"
                    priority
                    sizes="128px"
                  />
                </div>
              </div>
            </div>

            {/* Desktop headline */}
            <h1 className="hidden lg:block text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Senior
              <br />
              <span className="text-[#3dbda5]">leadership,</span>
              <br />
              without the full-time commitment.
            </h1>

            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-lg mb-10">
              I support mission-driven organizations when they
              need senior leadership without a full-time hire. I step in as{" "}
              <span className="text-[#3dbda5] font-medium">
                fractional/interim COO or CFO
              </span>
              , project lead, or trusted advisor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-[#2a7d6e] text-white hover:bg-[#236b5e] transition-all hover:shadow-lg hover:shadow-teal-900/30 hover:-translate-y-0.5"
              >
                Book a Call
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base border border-white/25 text-white/90 hover:bg-white/10 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="hidden lg:flex lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#2a7d6e]/40 scale-110" aria-hidden="true" />
              <div className="absolute inset-0 rounded-full border border-white/10 scale-125" aria-hidden="true" />

              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[#2a7d6e]/30">
                <Image
                  src="/josh-headshot.jpg"
                  alt="Josh Green, Fractional COO and Strategic Advisor at RightStart"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
