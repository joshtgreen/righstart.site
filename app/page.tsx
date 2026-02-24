import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesTabbed from "@/components/ServicesTabbed";
import ServicesSidePanel from "@/components/ServicesSidePanel";
import ServicesAccordion from "@/components/ServicesAccordion";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ServicesTabbed />
        <ServicesSidePanel />
        <ServicesAccordion />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
