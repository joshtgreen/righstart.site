"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type QuoteSegment = string | { text: string; highlight: true };

const testimonials: {
  quote: QuoteSegment[];
  name: string;
  title: string;
  org: string;
  orgUrl: string;
  photo: string;
}[] = [
  {
    quote: [
      "Josh joined at a pivotal moment for aiEDU — right when AI went from a niche concern to a national conversation, and the work we'd been building for years suddenly had the whole world's attention. We were growing fast, but we weren't built to sustain it. He ",
      { text: "helped us professionalize the organization, led us through developing our first strategic plan, and then helped us hire the executive leadership team", highlight: true },
      " to run it. That arc, from scattered to structured to staffed, wouldn't have happened without him. He's ",
      { text: "one of the sharpest strategic thinkers I've worked with", highlight: true },
      ", and the kind of steady, senior presence that fundamentally changes how an organization operates. He wasn't a typical consultant. He was a genuine partner who cared about the mission as much as we did.",
    ],
    name: "Alex Kotran",
    title: "CEO",
    org: "aiEDU",
    orgUrl: "https://www.aiedu.org/",
    photo: "/testimonials/aiEDU_Team_Alex_Kotran.webp",
  },
  {
    quote: [
      "Josh came to us at a moment when a lot of organizations doing this work were either shutting down or barely holding on. The philanthropic landscape had shifted — commitments that felt real suddenly weren't, and we were trying to keep critical work alive. He came in with no background in architecture or the specific world we operate in, and ",
      { text: "got up to speed faster than I would have thought possible", highlight: true },
      ". What struck me was how much he genuinely cared about what we were doing, not just the operational problem in front of him. He ",
      { text: "stabilized the organization, helped us build toward long-term sustainability", highlight: true },
      ", and the foundation we have now is one we could not have built without him.",
    ],
    name: "Deanna van Buren",
    title: "Executive Director",
    org: "Designing Justice + Designing Spaces",
    orgUrl: "https://designingjustice.org/",
    photo: "/testimonials/1753300060791.jpeg",
  },
  {
    quote: [
      { text: "Josh is the reason I have this job.", highlight: true },
      " He ran ops here before there was an ops function, and then hired me to take it over. So I'm maybe not the most objective reference, but that's also kind of the point: I've seen his work up close in a way most people haven't. When growth slowed a few years later, he came back and helped us scale again, ",
      { text: "taking us from providing care in six states to all fifty", highlight: true },
      ". You can tell a lot about someone by what they leave behind. Both times, ",
      { text: "he left us in a better place than he found us", highlight: true },
      ".",
    ],
    name: "Kate O'Connor",
    title: "VP of Operations",
    org: "Revero",
    orgUrl: "https://www.revero.com/",
    photo: "/testimonials/1645800566487.jpeg",
  },
];

function renderQuote(segments: QuoteSegment[]) {
  return segments.map((seg, i) =>
    typeof seg === "string" ? (
      <span key={i}>{seg}</span>
    ) : (
      <span key={i} className="font-semibold text-[#1a2744]">
        {seg.text}
      </span>
    )
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((p) => p.length > 1)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileActive, setMobileActive] = useState(0);

  function handleMobileScroll() {
    const el = mobileScrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.offsetWidth;
    const index = Math.round((el.scrollLeft / maxScroll) * (testimonials.length - 1));
    setMobileActive(Math.max(0, Math.min(index, testimonials.length - 1)));
  }

  function prev() {
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setActive((a) => (a + 1) % testimonials.length);
  }

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#2a7d6e]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1f6356]">
              What People Say
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight">
            From people I&apos;ve worked with.
          </h2>
        </div>

        {/* Mobile: horizontal scroll snap */}
        <div className="lg:hidden overflow-x-clip" role="region" aria-label="Testimonials">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 -mx-6 px-6 pb-4"
          >
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center flex-shrink-0 w-[85vw]">
                <div className="flex flex-col bg-[#f9fafb] rounded-2xl border border-[#e5e2dc] border-l-4 border-l-[#2a7d6e] p-8 shadow-md h-full">
                  <div className="text-5xl leading-none text-[#3dbda5] font-serif mb-3 select-none" aria-hidden="true">&ldquo;</div>
                  <blockquote className="flex-1 text-base text-[#4a5568] leading-relaxed">{renderQuote(t.quote)}</blockquote>
                  <div className="border-t border-[#e5e2dc] mt-5 pt-5 flex items-center gap-4">
                    {t.photo ? (
                      <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#e5e2dc]">
                        <Image src={t.photo} alt={t.name} width={56} height={56} loading="eager" className="object-cover w-full h-full" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1a2744] flex items-center justify-center ring-2 ring-[#e5e2dc]">
                        <span className="text-white text-lg font-bold">{getInitials(t.name)}</span>
                      </div>
                    )}
                    <div>
                      <div className="text-base font-bold text-[#1a2744]">{t.name}</div>
                      <div className="text-sm text-[#718096] mt-0.5">
                        {t.title} ·{" "}
                        <a href={t.orgUrl} target="_blank" rel="noopener noreferrer"
                          className="text-[#2a7d6e] font-medium underline underline-offset-2 decoration-[#2a7d6e]/40 hover:decoration-[#2a7d6e] transition-colors">
                          {t.org}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Testimonial indicators">
            {testimonials.map((t, i) => (
              <div
                key={i}
                role="tab"
                aria-selected={i === mobileActive}
                aria-label={`Testimonial from ${t.name}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === mobileActive ? "bg-[#2a7d6e]" : "bg-[#e5e2dc]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: arrow carousel */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-8" role="region" aria-label="Testimonials">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex-shrink-0 w-11 h-11 rounded-full border border-[#e5e2dc] bg-white hover:bg-[#eef0f2] transition-colors flex items-center justify-center text-[#1a2744]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card stack — all cards rendered in the same grid cell so height
              is always determined by the tallest card, never jumps */}
          <div className="flex-1 max-w-3xl mx-auto">
            <div className="grid" aria-live="polite">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{ gridArea: "1 / 1" }}
                  aria-hidden={i !== active}
                  className={`flex flex-col bg-[#f9fafb] rounded-2xl border border-[#e5e2dc] border-l-4 border-l-[#2a7d6e] p-8 lg:p-10 shadow-md transition-opacity duration-300 ease-in-out ${
                    i === active
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Decorative quote mark */}
                  <div className="text-5xl leading-none text-[#3dbda5] font-serif mb-3 select-none" aria-hidden="true">
                    &ldquo;
                  </div>

                  {/* Quote body */}
                  <blockquote className="flex-1 text-sm lg:text-base text-[#4a5568] leading-relaxed">
                    {renderQuote(t.quote)}
                  </blockquote>

                  {/* Attribution */}
                  <div className="border-t border-[#e5e2dc] mt-5 pt-5 flex items-center gap-5">
                    {/* Photo / avatar */}
                    {t.photo ? (
                      <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#e5e2dc]">
                        <Image
                          src={t.photo}
                          alt={t.name}
                          width={80}
                          height={80}
                          loading="eager"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#1a2744] flex items-center justify-center ring-2 ring-[#e5e2dc]">
                        <span className="text-white text-xl font-bold">{getInitials(t.name)}</span>
                      </div>
                    )}

                    {/* Name + role */}
                    <div>
                      <div className="text-xl font-bold text-[#1a2744]">{t.name}</div>
                      <div className="text-base text-[#718096] mt-1">
                        {t.title} ·{" "}
                        <a
                          href={t.orgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2a7d6e] font-medium underline underline-offset-2 decoration-[#2a7d6e]/40 hover:decoration-[#2a7d6e] transition-colors"
                        >
                          {t.org}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial from ${t.name}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === active ? "bg-[#2a7d6e]" : "bg-[#e5e2dc]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex-shrink-0 w-11 h-11 rounded-full border border-[#e5e2dc] bg-white hover:bg-[#eef0f2] transition-colors flex items-center justify-center text-[#1a2744]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
