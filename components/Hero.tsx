import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen sm:portrait:min-h-[70svh] flex items-center bg-[var(--navy)] overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0" aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blurred gradient orb */}
      <div className="pointer-events-none absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full bg-[var(--teal)]/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-15%] w-[50%] h-[60%] rounded-full bg-[var(--navy-light)]/30 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid sm:grid-cols-[1fr_auto] lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Headline (the page's only h1). Below sm it sits beside the small photo; at sm the wrapper becomes a plain block. */}
            <div className="flex items-center gap-6 mb-6 sm:block sm:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-white leading-[1.08] tracking-tight flex-1 min-w-0 sm:mb-6">
                Senior
                <br />
                <span className="text-[var(--teal-light)]">leadership,</span>
                <br />
                when you need <span className="whitespace-nowrap">it most.</span>
              </h1>
              <div className="sm:hidden relative w-24 h-24 min-[375px]:w-28 min-[375px]:h-28 shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-inset ring-[var(--teal)]/30">
                  <Image
                    src="/josh-headshot.jpg"
                    alt="Josh Green, Fractional COO/CFO and Advisor at RightStart"
                    fill
                    className="object-cover"
                    priority
                    sizes="112px"
                  />
                </div>
              </div>
            </div>

            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-lg mb-10">
              I support mission-driven organizations when a moment
              calls for experienced leadership without a full-time hire. I step in as{" "}
              <span className="text-[var(--teal-light)] font-medium font-sans">
                fractional/interim COO or CFO
              </span>
              , project lead, or trusted advisor, until the job is done.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-[var(--teal)] text-white hover:bg-[#236b5e] transition-all hover:shadow-lg hover:shadow-teal-900/30 hover:-translate-y-0.5"
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
          <div className="hidden sm:flex sm:justify-end">
            <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-96 lg:h-96">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[var(--teal)]/40 scale-110" aria-hidden="true" />
              <div className="absolute inset-0 rounded-full border border-white/10 scale-125" aria-hidden="true" />

              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[var(--teal)]/30">
                <Image
                  src="/josh-headshot.jpg"
                  alt="Josh Green, Fractional COO/CFO and Advisor at RightStart"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 767px) 192px, (max-width: 1023px) 240px, 384px"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
