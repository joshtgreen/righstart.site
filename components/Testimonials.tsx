"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Josh brought clarity and structure to a moment when we desperately needed both. He stepped in without missing a beat, built trust with the team immediately, and helped us make decisions we'd been stuck on for months. He's the kind of leader who makes everyone around him better.",
    name: "[Name]",
    title: "[Title]",
    org: "[Organization]",
    photo: "",
  },
  {
    quote:
      "Working with Josh transformed how we operate. He understands both the operational and financial sides of an organization, and he never loses sight of the mission. What impressed me most was how quickly he got up to speed and how thoughtfully he engaged with our team.",
    name: "[Name]",
    title: "[Title]",
    org: "[Organization]",
    photo: "",
  },
  {
    quote:
      "Josh is the rare person who can step into a leadership vacuum, earn trust quickly, and actually move the needle. He brought rigor and calm to a chaotic period and left us in a significantly stronger position. We wouldn't be where we are without him.",
    name: "[Name]",
    title: "[Title]",
    org: "[Organization]",
    photo: "",
  },
];

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
  const [direction, setDirection] = useState<"next" | "prev">("next");

  function goTo(index: number, dir: "next" | "prev") {
    setDirection(dir);
    setActive(index);
  }

  function prev() {
    goTo((active - 1 + testimonials.length) % testimonials.length, "prev");
  }

  function next() {
    goTo((active + 1) % testimonials.length, "next");
  }

  const t = testimonials[active];
  const initials = getInitials(t.name);
  const animClass =
    direction === "next" ? "animate-slide-from-right" : "animate-slide-from-left";

  return (
    <section className="bg-[#faf9f7] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-10">
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

        {/* Carousel */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex-shrink-0 w-11 h-11 rounded-full border border-[#e5e2dc] bg-white hover:bg-[#f3f1ee] transition-colors flex items-center justify-center text-[#1a2744]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card */}
          <div className="flex-1 max-w-3xl mx-auto">
            <div
              key={active}
              className={`bg-white rounded-2xl border border-[#e5e2dc] p-8 lg:p-10 shadow-sm ${animClass}`}
            >
              {/* Decorative quote mark */}
              <div className="text-5xl leading-none text-[#3dbda5] font-serif mb-3 select-none">
                &ldquo;
              </div>

              {/* Quote body */}
              <p className="text-lg lg:text-xl text-[#4a5568] leading-relaxed">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="border-t border-[#e5e2dc] mt-5 pt-5 flex items-center gap-4">
                {/* Photo / avatar */}
                {t.photo ? (
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#e5e2dc]">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1a2744] flex items-center justify-center ring-2 ring-[#e5e2dc]">
                    <span className="text-white text-lg font-bold">{initials}</span>
                  </div>
                )}

                {/* Name + role */}
                <div>
                  <div className="font-bold text-[#1a2744]">{t.name}</div>
                  <div className="text-sm text-[#718096] mt-0.5">
                    {t.title} · {t.org}
                  </div>
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? "next" : "prev")}
                  aria-label={`Go to testimonial ${i + 1}`}
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
            className="flex-shrink-0 w-11 h-11 rounded-full border border-[#e5e2dc] bg-white hover:bg-[#f3f1ee] transition-colors flex items-center justify-center text-[#1a2744]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
