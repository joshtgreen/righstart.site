export default function CTA() {
  return (
    <section id="contact" className="bg-[#1a2744] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#3dbda5]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3dbda5]">
                Get in Touch
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Let&apos;s build what works.
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-4">
              If you&apos;re building something ambitious and need clarity,
              structure, or a trusted partner to figure it out together,
              I&apos;d love to talk. I&apos;m based in San Francisco and work
              with founders across the country.
            </p>
            <p className="text-base text-white/60 leading-relaxed mb-10">
              If you&apos;d like to brainstorm, troubleshoot, or find out what
              it would look like to work together — book time during office
              hours and we&apos;ll dive in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://rightstart.co/book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-[#2a7d6e] text-white hover:bg-[#3dbda5] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/30"
              >
                Let&apos;s Jam
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
              <a
                href="mailto:josh@rightstart.co?subject=Interested%20in%20Working%20Together&body=Hi%20Josh%2C%0A%0AI%20came%20across%20your%20site%20and%20wanted%20to%20reach%20out."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base border border-white/25 text-white/90 hover:bg-white/10 transition-all"
              >
                Reach Out via Email
              </a>
            </div>
          </div>

          {/* Right: contact card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick ways to connect
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2a7d6e]/20 flex items-center justify-center text-[#3dbda5]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wide font-medium mb-0.5">Email</div>
                  <a
                    href="mailto:josh@rightstart.co"
                    className="text-white text-sm font-medium hover:text-[#3dbda5] transition-colors"
                  >
                    josh@rightstart.co
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2a7d6e]/20 flex items-center justify-center text-[#3dbda5]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wide font-medium mb-0.5">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/joshuatgreen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium hover:text-[#3dbda5] transition-colors"
                  >
                    linkedin.com/in/joshuatgreen
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2a7d6e]/20 flex items-center justify-center text-[#3dbda5]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wide font-medium mb-0.5">Location</div>
                  <span className="text-white text-sm font-medium">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
