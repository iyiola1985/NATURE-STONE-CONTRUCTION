"use client";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ImageLightboxGallery, type LightboxImage } from "@/components/ImageLightboxGallery";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { SectionHeading } from "@/components/SectionHeading";

const ABOUT_BLOCK_IMAGES: LightboxImage[] = [
  {
    src: "/images/about/interlock-range.png",
    alt: "Interlock pavers in red, grey, and black",
    className: "md:col-span-2 md:row-span-2 min-h-[200px] sm:min-h-[240px]",
  },
  { src: "/images/about/interlock-2.png", alt: "Stacked concrete paving blocks ready for installation" },
  { src: "/images/about/interlock-3.png", alt: "Craftsman laying interlock pavers on site" },
  { src: "/images/about/interlock-1.png", alt: "Finished herringbone paver surface" },
  { src: "/images/about/interlock-4.png", alt: "Premium grey interlock pavement" },
];

const milestones = [
  { year: "2014", label: "Industrial paving expansion across Lagos corridors." },
  { year: "2017", label: "Hydraulic line commissioning with PLC-controlled cycles." },
  { year: "2021", label: "Nationwide logistics network for block and paver delivery." },
  { year: "2024", label: "QT4-20 flagship production for hollow and interlock demand." },
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

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6">
              <p className="type-body text-stone-gray-deep dark:text-concrete-dim">
                We deliver customized solutions tailored to every client&apos;s project needs while maintaining consistency,
                reliability, and exceptional manufacturing quality.
              </p>

              <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
                <TiltCard className="panel-glass-subtle rounded-2xl p-6">
                  <p className="type-perk text-gold">Daily capability</p>
                  <p className="type-stat mt-3 text-matte dark:text-concrete">
                    <AnimatedCounter value={12500} suffix="+" />
                  </p>
                  <p className="type-body mt-2 text-sm text-stone-gray dark:text-stone-gray-muted">
                    Hollow blocks per day at optimized feed rates.
                  </p>
                </TiltCard>
                <TiltCard className="panel-glass-subtle rounded-2xl p-6">
                  <p className="type-perk text-gold">Compaction</p>
                  <p className="type-stat mt-3 text-matte dark:text-concrete">
                    <AnimatedCounter value={80} suffix=" kN" />
                  </p>
                  <p className="mt-2 text-sm text-stone-gray dark:text-stone-gray-muted">
                    Industrial vibration platform engineered for density.
                  </p>
                </TiltCard>
                <TiltCard className="panel-glass-subtle rounded-2xl p-6">
                  <p className="type-perk text-gold">Cycle window</p>
                  <p className="type-stat mt-3 text-matte dark:text-concrete">15–25s</p>
                  <p className="mt-2 text-sm text-stone-gray dark:text-stone-gray-muted">
                    Molding cadence tuned for throughput and finish.
                  </p>
                </TiltCard>
              </div>

              <div className="panel-glass relative overflow-hidden rounded-3xl shadow-glow-border dark:shadow-glow-border-dark">
                <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                  <ImageLightboxGallery
                    images={ABOUT_BLOCK_IMAGES}
                    gridClassName="grid grid-cols-2 gap-2 p-3 sm:gap-3 sm:p-4 md:grid-cols-3 md:p-5"
                  />

                  <div className="flex flex-col justify-center gap-6 border-t border-matte/10 p-6 sm:p-8 lg:border-l lg:border-t-0 dark:border-gold/15">
                    <div>
                      <p className="type-badge">Our blocks</p>
                      <p className="type-subtitle mt-2 text-matte dark:text-concrete">
                        From factory floor to finished pavement — tap any photo to view full size. I-Type, interlock, and kerb
                        systems built for Nigerian sites.
                      </p>
                    </div>
                    <div>
                      <p className="type-perk text-gold">Mission</p>
                      <p className="type-body mt-3 text-sm text-stone-gray-deep dark:text-stone-gray-muted">
                        Advance Nigeria&apos;s built environment with hydraulic systems that pair engineering discipline with
                        refined aesthetics.
                      </p>
                    </div>
                    <div>
                      <p className="type-perk text-gold">Vision</p>
                      <p className="type-body mt-3 text-sm text-stone-gray-deep dark:text-stone-gray-muted">
                        Become the reference industrial partner for premium blocks, pavers, and infrastructure surfacing
                        nationwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <TiltCard className="panel-glass p-6 sm:p-8 lg:sticky lg:top-28">
                <p className="type-badge">Timeline</p>
                <h3 className="type-title mt-3 text-matte dark:text-concrete">Built for scale</h3>
                <div className="relative mt-8 space-y-8 border-l border-matte/15 pl-5 sm:pl-6 dark:border-gold/20">
                  {milestones.map((m) => (
                    <div key={m.year} className="relative min-w-0">
                      <span className="absolute -left-[22px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-gold shadow-[0_0_0_6px_rgba(201,162,39,0.15)] sm:-left-[29px]" />
                      <p className="text-sm font-semibold text-industrial">{m.year}</p>
                      <p className="mt-2 text-sm leading-relaxed text-stone-gray dark:text-stone-gray-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
