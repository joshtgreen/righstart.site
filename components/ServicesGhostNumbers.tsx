export default function ServicesGhostNumbers() {
  const services = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      ),
      title: "Interim/Fractional Executive",
      tagline: "Embedded COO or CFO leadership — without the full-time overhead.",
      detail: "10–20 hrs/week · 3–12 month engagements",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: "Project-Based Consulting",
      tagline: "Scoped help for a specific challenge — compliance, hiring, launch readiness.",
      detail: "Defined scope · Typically 1–4 months",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Advising",
      tagline: "A sharp, honest thought partner on an ongoing basis via regular calls.",
      detail: "2–4 hrs/month · Ongoing",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Open Office Hours",
      tagline: "Free, no-pitch calls to jam, troubleshoot, or think out loud.",
      detail: "Free · No commitment",
    },
  ];

  return (
    <section id="services" className="bg-white py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[var(--teal)]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1f6356]">
              How I Can Help
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight">
            The right support, for where you are.
          </h2>
          <p className="mt-4 text-lg text-[#4a5568] leading-relaxed max-w-2xl">
            Whether you need embedded executive leadership, help getting a
            complex initiative across the finish line, or just someone to think
            with — there&apos;s a way to work together.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[var(--cream)] rounded-2xl border border-[var(--border)] p-7 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] shrink-0 mt-0.5">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--navy)] leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#4a5568] mt-1">
                    {s.tagline}
                  </p>
                  <p className="text-xs font-medium text-[var(--teal)] mt-2">
                    {s.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
