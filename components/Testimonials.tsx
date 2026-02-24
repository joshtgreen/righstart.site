const testimonials = [
  {
    quote:
      "Josh brought clarity and structure to a moment when we desperately needed both. He's the kind of leader who makes everyone around him better.",
    name: "[Name]",
    title: "[Title]",
    org: "[Organization]",
  },
  {
    quote:
      "Working with Josh transformed how we operate. He understands both the operational and financial sides, and he never loses sight of the mission.",
    name: "[Name]",
    title: "[Title]",
    org: "[Organization]",
  },
  {
    quote:
      "Josh is the rare person who can step into a leadership vacuum, earn trust quickly, and actually move the needle. We wouldn't be where we are without him.",
    name: "[Name]",
    title: "[Title]",
    org: "[Organization]",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#faf9f7] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#2a7d6e]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2a7d6e]">
              What People Say
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight">
            Trusted by the teams I work with.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#e5e2dc] p-8 shadow-sm flex flex-col"
            >
              <div className="text-5xl leading-none text-[#3dbda5] font-serif mb-4">
                &ldquo;
              </div>
              <p className="text-[#4a5568] leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div className="border-t border-[#e5e2dc] pt-5">
                <div className="font-semibold text-[#1a2744] text-sm">{t.name}</div>
                <div className="text-[#718096] text-sm mt-0.5">
                  {t.title} · {t.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
