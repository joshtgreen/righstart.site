import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ReclaimEmbed from "@/components/ReclaimEmbed";

export const metadata: Metadata = {
  title: "Book a Call | Josh Green",
  description:
    "Schedule a time to connect with Josh Green, Fractional COO and advisor for early-stage startups and nonprofits.",
};

export default function BookPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero strip */}
        <section className="bg-[#1a2744] pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Let&apos;s Talk
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-4 max-w-2xl">
              Need a sounding board? Want help talking through what&apos;s next?
              Whether it&apos;s a one-off challenge or something longer-term,
              I&apos;m happy to connect and see what we can figure out together.
              Pick a time that works for you below.
            </p>

            <p className="text-base text-white/50 leading-relaxed">
              Not sure this is the right step? No pressure — feel free to{" "}
              <a
                href="mailto:josh@rightstart.co?subject=Let's%20Chat"
                className="text-[#3dbda5] hover:text-[#2a7d6e] underline underline-offset-2 transition-colors"
              >
                reach out
              </a>{" "}
              with a quick note instead.
            </p>

            <p className="mt-3 text-sm text-[#3dbda5]">josh@rightstart.co</p>
          </div>
        </section>

        {/* Scheduling embed */}
        <section className="bg-[#eef0f2] py-16 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ReclaimEmbed />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
