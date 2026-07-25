"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { LazySection } from "@/components/LazySection";
import { Navbar } from "@/components/Navbar";

const About = dynamic(() => import("@/components/About").then((m) => ({ default: m.About })));
const FeaturedMachine = dynamic(() => import("@/components/FeaturedMachine").then((m) => ({ default: m.FeaturedMachine })));
const Products = dynamic(() => import("@/components/Products").then((m) => ({ default: m.Products })));
const Portfolio = dynamic(() => import("@/components/Portfolio").then((m) => ({ default: m.Portfolio })));
const Properties = dynamic(() => import("@/components/Properties").then((m) => ({ default: m.Properties })));
const HireFleet = dynamic(() => import("@/components/HireFleet").then((m) => ({ default: m.HireFleet })));
const Process = dynamic(() => import("@/components/Process").then((m) => ({ default: m.Process })));
const Contact = dynamic(() => import("@/components/Contact").then((m) => ({ default: m.Contact })));
const Footer = dynamic(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat").then((m) => ({ default: m.WhatsAppFloat })));

export function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-w-0 overflow-x-clip">
        <Hero />
        <LazySection minHeight="480px">
          <About />
        </LazySection>
        <LazySection minHeight="520px">
          <FeaturedMachine />
        </LazySection>
        <LazySection minHeight="400px">
          <Products />
        </LazySection>
        <LazySection minHeight="400px">
          <Portfolio />
        </LazySection>
        <LazySection minHeight="280px">
          <Properties />
        </LazySection>
        <LazySection minHeight="520px">
          <HireFleet />
        </LazySection>
        <LazySection minHeight="360px">
          <Process />
        </LazySection>
        <LazySection minHeight="400px">
          <Contact />
        </LazySection>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
