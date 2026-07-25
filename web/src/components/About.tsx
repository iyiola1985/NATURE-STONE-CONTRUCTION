"use client";

import { ImageLightboxGallery, type LightboxImage } from "@/components/ImageLightboxGallery";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { SectionHeading } from "@/components/SectionHeading";

const ABOUT_BLOCK_IMAGES: LightboxImage[] = [
  {
    src: "/images/about/interlock-range.png",
    alt: "Interlock pavers in red, grey, and black",
    className: "col-span-2 min-h-[160px] sm:min-h-[200px] md:col-span-2 md:row-span-2 md:min-h-[240px]",
  },
  { src: "/images/about/interlock-2.png", alt: "Stacked concrete paving blocks ready for installation" },
  { src: "/images/about/interlock-3.png", alt: "Craftsman laying interlock pavers on site" },
  { src: "/images/about/interlock-1.png", alt: "Finished herringbone paver surface" },
  { src: "/images/about/interlock-4.png", alt: "Premium grey interlock pavement" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-section-concrete dark:bg-section-matte">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade-light bg-[length:48px_48px] opacity-[0.35] dark:bg-grid-fade dark:opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-industrial/[0.03] to-transparent dark:via-gold/[0.04]" />

      <div className="section-wrap">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering Durable Infrastructure Across Nigeria"
            subtitle="Nature Stone Construction has remained dedicated to the growth and advancement of Nigeria's infrastructure. We specialize in high-quality paving solutions, hydraulic block machinery, and durable construction systems that combine strength, aesthetics, and long-term performance."
          />

          <div className="grid min-w-0 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
            <div className="min-w-0">
              <div className="panel-glass relative overflow-hidden rounded-2xl shadow-glow-border sm:rounded-3xl dark:shadow-glow-border-dark">
                <div className="grid min-w-0 gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                  <ImageLightboxGallery
                    images={ABOUT_BLOCK_IMAGES}
                    gridClassName="grid grid-cols-2 gap-1.5 p-2.5 sm:gap-3 sm:p-4 md:grid-cols-3 md:p-5"
                  />

                  <div className="flex min-w-0 flex-col justify-center gap-5 border-t border-matte/10 p-4 sm:gap-6 sm:p-8 lg:border-l lg:border-t-0 dark:border-gold/15">
                    <div>
                      <p className="type-badge">Our blocks</p>
                      <p className="type-subtitle mt-2 text-matte dark:text-concrete">
                        Tap any photo for a full view — I-Type, interlock, and kerb systems for Nigerian sites.
                      </p>
                    </div>
                    <div>
                      <p className="type-perk text-gold">Mission</p>
                      <p className="type-body mt-2 text-sm text-stone-gray-deep sm:mt-3 dark:text-stone-gray-muted">
                        Advance Nigeria&apos;s built environment with hydraulic systems that pair engineering discipline with
                        refined aesthetics.
                      </p>
                    </div>
                    <div>
                      <p className="type-perk text-gold">Vision</p>
                      <p className="type-body mt-2 text-sm text-stone-gray-deep sm:mt-3 dark:text-stone-gray-muted">
                        Become the reference industrial partner for premium blocks, pavers, and infrastructure surfacing
                        nationwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <TiltCard className="panel-glass p-5 sm:p-8 lg:sticky lg:top-28">
                <p className="type-badge">Established</p>
                <h3 className="type-title mt-3 text-matte dark:text-concrete">We started in 2023</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-gray dark:text-stone-gray-muted">
                  Founded in 2023 to deliver hydraulic block machinery, premium paving systems, and durable
                  infrastructure solutions across Nigeria.
                </p>
              </TiltCard>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
