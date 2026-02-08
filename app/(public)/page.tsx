import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import DomainPricingSliderSection from "@/components/DomainPricingSliderSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DomainPricingSliderSection />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
