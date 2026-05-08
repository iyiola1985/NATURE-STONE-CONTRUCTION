"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeading } from "@/components/SectionHeading";

const milestones = [
  { year: "2014", label: "Industrial paving expansion across Lagos corridors." },
  { year: "2017", label: "Hydraulic line commissioning with PLC-controlled cycles." },
  { year: "2021", label: "Nationwide logistics network for block and paver delivery." },
  { year: "2024", label: "QT4-20 flagship production for hollow and interlock demand." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-zinc-100 py-24 dark:bg-charcoal">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[length:48px_48px] opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="Engineering Durable Infrastructure Across Nigeria"
          subtitle="Nature Stone Construction has remained dedicated to the growth and advancement of Nigeria's infrastructure. We specialize in high-quality paving solutions, hydraulic block machinery, and durable construction systems that combine strength, aesthetics, and long-term performance."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
          >
            <p>
              We deliver customized solutions tailored to every client&apos;s project needs while maintaining consistency, reliability, and exceptional manufacturing quality.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">Daily capability</p>
                <p className="mt-3 font-heading text-4xl font-semibold text-zinc-900 dark:text-white">
                  <AnimatedCounter value={12500} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Hollow blocks per day at optimized feed rates.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">Compaction</p>
                <p className="mt-3 font-heading text-4xl font-semibold text-zinc-900 dark:text-white">
                  <AnimatedCounter value={80} suffix=" kN" />
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Industrial vibration platform engineered for density.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">Cycle window</p>
                <p className="mt-3 font-heading text-4xl font-semibold text-zinc-900 dark:text-white">15–25s</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Molding cadence tuned for throughput and finish.</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-900">
              <div className="grid md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[280px]">
                  <Image src="/images/project-2.png" alt="Leadership and site operations" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute bottom-6 left-6 max-w-xs">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Leadership</p>
                    <p className="mt-2 font-heading text-xl text-white">Precision-led execution from quarry to pavement.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">Mission</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      Advance Nigeria&apos;s built environment with hydraulic systems that pair engineering discipline with refined aesthetics.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">Vision</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      Become the reference industrial partner for premium blocks, pavers, and infrastructure surfacing nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div className="sticky top-28 rounded-3xl border border-black/10 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Timeline</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-zinc-900 dark:text-white">Built for scale</h3>
              <div className="relative mt-8 space-y-8 border-l border-zinc-200 pl-6 dark:border-white/10">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    <span className="absolute -left-[29px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-gold shadow-[0_0_0_6px_rgba(201,162,39,0.15)]" />
                    <p className="text-sm font-semibold text-industrial">{m.year}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
