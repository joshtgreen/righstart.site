import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGhostNumbers from "@/components/ServicesGhostNumbers";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "RightStart",
      url: "https://rightstart.co",
      description:
        "Strategic operations leadership for nonprofits, health-focused ventures, and mission-driven organizations.",
      founder: { "@id": "https://rightstart.co/#josh-green" },
      areaServed: "US",
      serviceType: [
        "Fractional COO",
        "Fractional CFO",
        "Operations Consulting",
        "Strategic Advisory",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://rightstart.co/#josh-green",
      name: "Josh Green",
      jobTitle: "Fractional COO/CFO and Advisor",
      url: "https://rightstart.co",
      sameAs: ["https://www.linkedin.com/in/joshtgreen/"],
      worksFor: {
        "@type": "Organization",
        name: "RightStart",
      },
      knowsAbout: [
        "Operations Management",
        "Financial Management",
        "Nonprofit Leadership",
        "Startup Operations",
      ],
    },
  ],
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
        <About />
        <ServicesGhostNumbers />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
