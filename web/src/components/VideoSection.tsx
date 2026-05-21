"use client";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FactoryVideoPlayer } from "@/components/FactoryVideoPlayer";
import { SectionHeading } from "@/components/SectionHeading";

export function VideoSection() {
  return (
    <section id="videos" className="relative overflow-hidden bg-section-matte py-24 md:py-28 text-concrete">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(201,162,39,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="See it in action"
            title="Watch our block machine & fleet on site"
            subtitle="Real footage from Nature Stone operations—hydraulic cycling, production rhythm, and trucks ready for nationwide delivery."
          />

          <FactoryVideoPlayer
            variant="dark"
            badge="Live factory preview"
            title="Block machine operation · Production line · Delivery fleet"
            hint="Tap or click anywhere on the preview to open the full-screen reel with audio."
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
