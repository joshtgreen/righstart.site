import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ServicesGhostNumbers from "@/components/ServicesGhostNumbers";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// A page-level openGraph replaces the layout's whole block, so restate it here.
// The home page keeps the generated /opengraph-image from app/opengraph-image.tsx.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Josh Green | Fractional COO/CFO and Advisor | RightStart",
    description:
      "Fractional COO/CFO and advisor for nonprofits and mission-driven startups. Clients include aiEDU and Designing Justice + Designing Spaces.",
    url: "/",
    siteName: "RightStart",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://rightstart.co/#website",
      "url": "https://rightstart.co/",
      "name": "RightStart",
      "alternateName": "Josh Green",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://rightstart.co/#organization"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://rightstart.co/#organization",
      "name": "RightStart",
      "url": "https://rightstart.co/",
      "description": "Josh Green (RightStart) is a fractional COO/CFO and advisor for nonprofits and mission-driven startups. Clients include aiEDU and Designing Justice + Designing Spaces.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rightstart.co/logos/rightstart.png",
        "contentUrl": "https://rightstart.co/logos/rightstart.png",
        "width": 891,
        "height": 182
      },
      "image": "https://rightstart.co/opengraph-image",
      "email": "josh@rightstart.co",
      "foundingDate": "2021",
      "founder": {
        "@id": "https://rightstart.co/#josh-green"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "What RightStart offers",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interim/Fractional Executive",
              "description": "Embedded COO or CFO leadership — without the full-time overhead. 10–30 hrs/week · 3–12 month engagements."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Project-Based Consulting",
              "description": "Scoped help for a specific challenge — compliance, hiring, launch readiness. Defined scope · Typically 1–4 months."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Advising",
              "description": "Rigorous, honest thought partnership on an ongoing basis via regular calls. 2–4 hrs/month · Ongoing."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Open Office Hours",
              "description": "Free, no-pitch calls to troubleshoot and think out loud. Free · No commitment."
            }
          }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://rightstart.co/#josh-green",
      "name": "Josh Green",
      "jobTitle": "Fractional COO/CFO and Advisor",
      "description": "Josh Green (RightStart) is a fractional COO/CFO and advisor for nonprofits and mission-driven startups. Clients include aiEDU and Designing Justice + Designing Spaces.",
      "url": "https://rightstart.co/",
      "image": "https://rightstart.co/josh-headshot.jpg",
      "email": "josh@rightstart.co",
      "sameAs": [
        "https://www.linkedin.com/in/joshuatgreen/",
        "https://www.joshgreen.me/"
      ],
      "worksFor": {
        "@id": "https://rightstart.co/#organization"
      },
      "knowsAbout": [
        "Operations",
        "Compliance",
        "Hiring",
        "Finance",
        "Strategic planning",
        "Launch readiness"
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        <Hero />
        <WaveDivider direction="down" fillColor="var(--navy)" className="bg-white" />
        <Testimonials />
        <WaveDivider direction="up" fillColor="var(--navy)" className="bg-white" />
        <About />
        <WaveDivider direction="down" fillColor="var(--navy)" className="bg-[var(--cream)]" />
        <ServicesGhostNumbers />
        <WaveDivider direction="up" fillColor="var(--navy)" className="bg-[var(--cream)]" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
