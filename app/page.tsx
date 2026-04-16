import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WhyDerux from "@/components/WhyDerux";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import FunnelCta from "@/components/FunnelCta";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Awareness */}
        <Hero />
        <Marquee />

        {/* Interest */}
        <Services />
        <WhyDerux />

        {/* Desire */}
        <Process />
        <Industries />
        <FunnelCta />
        <About />

        {/* Action */}
        <Faq />
        <Contact />
        <Map />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
