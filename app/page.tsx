import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGhostNumbers from "@/components/ServicesGhostNumbers";
import ServicesProgressBar from "@/components/ServicesProgressBar";
import ServicesProofCards from "@/components/ServicesProofCards";
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
        <ServicesProgressBar />
        <ServicesProofCards />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
