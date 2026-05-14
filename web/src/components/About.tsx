"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { SectionHeading } from "@/components/SectionHeading";

const milestones = [
  { year: "2014", label: "Industrial paving expansion across Lagos corridors." },
  { year: "2017", label: "Hydraulic line commissioning with PLC-controlled cycles." },
  { year: "2021", label: "Nationwide logistics network for block and paver delivery." },
  { year: "2024", label: "QT4-20 flagship production for hollow and interlock demand." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-section-concrete py-24 md:py-28 dark:bg-section-matte">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade-light bg-[length:48px_48px] opacity-[0.35] dark:bg-grid-fade dark:opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-industrial/[0.03] to-transparent dark:via-gold/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering Durable Infrastructure Across Nigeria"
            subtitle="Nature Stone Construction has remained dedicated to the growth and advancement of Nigeria's infrastructure. We specialize in high-quality paving solutions, hydraulic block machinery, and durable construction systems that combine strength, aesthetics, and long-term performance."
          />

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-stone-gray-deep dark:text-concrete-dim">
              <p>
                We deliver customized solutions tailored to every client&apos;s project needs while maintaining consistency, reliability, and exceptional manufacturing quality.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <TiltCard className="panel-glass-subtle rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">Daily capability</p>
                  <p className="mt-3 font-heading text-4xl font-semibold text-matte dark:text-concrete">
                    <AnimatedCounter value={12500} suffix="+" />
                  </p>
                  <p className="mt-2 text-sm text-stone-gray dark:text-stone-gray-muted">Hollow blocks per day at optimized feed rates.</p>
                </TiltCard>
                <TiltCard className="panel-glass-subtle rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">Compaction</p>
                  <p className="mt-3 font-heading text-4xl font-semibold text-matte dark:text-concrete">
                    <AnimatedCounter value={80} suffix=" kN" />
                  </p>
                  <p className="mt-2 text-sm text-stone-gray dark:text-stone-gray-muted">Industrial vibration platform engineered for density.</p>
                </TiltCard>
                <TiltCard className="panel-glass-subtle rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">Cycle window</p>
                  <p className="mt-3 font-heading text-4xl font-semibold text-matte dark:text-concrete">15–25s</p>
                  <p className="mt-2 text-sm text-stone-gray dark:text-stone-gray-muted">Molding cadence tuned for throughput and finish.</p>
                </TiltCard>
              </div>

              <div className="panel-glass relative overflow-hidden rounded-3xl shadow-glow-border dark:shadow-glow-border-dark">
                <div className="grid md:grid-cols-[1.1fr_0.9fr]">
                  <ParallaxLayer className="relative min-h-[280px] overflow-hidden md:min-h-[320px]" range={14}>
                    <div data-parallax-target className="absolute inset-0 h-[122%] w-full -top-[11%]">
                      <Image src="/images/project-2.png" alt="Leadership and site operations" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-r" />
                    <div className="absolute bottom-6 left-6 z-[1] max-w-xs">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Leadership</p>
                      <p className="mt-2 font-heading text-xl text-white">Precision-led execution from quarry to pavement.</p>
                    </div>
                  </ParallaxLayer>
                  <div className="flex flex-col gap-6 p-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold">Mission</p>
                      <p className="mt-3 text-sm leading-relaxed text-stone-gray-deep dark:text-stone-gray-muted">
                        Advance Nigeria&apos;s built environment with hydraulic systems that pair engineering discipline with refined aesthetics.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold">Vision</p>
                      <p className="mt-3 text-sm leading-relaxed text-stone-gray-deep dark:text-stone-gray-muted">
                        Become the reference industrial partner for premium blocks, pavers, and infrastructure surfacing nationwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <TiltCard className="panel-glass sticky top-28 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Timeline</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-matte dark:text-concrete">Built for scale</h3>
                <div className="relative mt-8 space-y-8 border-l border-matte/15 pl-6 dark:border-gold/20">
                  {milestones.map((m) => (
                    <div key={m.year} className="relative">
                      <span className="absolute -left-[29px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-gold shadow-[0_0_0_6px_rgba(201,162,39,0.15)]" />
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
