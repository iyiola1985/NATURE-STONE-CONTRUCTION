"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FeaturedMachine } from "@/components/FeaturedMachine";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { VideoSection } from "@/components/VideoSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedMachine />
        <Products />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
