export default function MidCTA() {
  return (
    <section className="bg-[var(--navy)] py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xl lg:text-2xl font-semibold text-white mb-6">
          Wondering if this is the right fit?
        </p>
        <a
          href="/book"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base bg-[var(--teal)] text-white hover:bg-[#236b5e] transition-all hover:shadow-lg hover:shadow-teal-900/30 hover:-translate-y-0.5"
        >
          Book a Quick Intro Call
        </a>
        <p className="mt-4 text-sm text-white/50">
          No pitch, no pressure — just a conversation.
        </p>
      </div>
    </section>
  );
}
