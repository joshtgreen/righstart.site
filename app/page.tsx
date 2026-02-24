import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGhostNumbers from "@/components/ServicesGhostNumbers";
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
        <ServicesGhostNumbers />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
