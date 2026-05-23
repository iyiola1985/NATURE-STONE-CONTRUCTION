"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-section-concrete dark:bg-section-matte">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-industrial/35 to-transparent" />

      <div className="section-wrap">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Process"
            title="Disciplined delivery from design to support"
            subtitle="Five synchronized stages engineered for transparency—mirroring international OEM programs while staying agile for Nigerian construction timelines."
          />

          <div className="relative">
            <div className="absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-industrial/50 via-matte/20 to-transparent dark:from-industrial/40 dark:via-gold/15 dark:to-transparent md:block" />

            <div className="space-y-10">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative grid gap-6 md:grid-cols-[120px_1fr]"
                >
                  <div className="flex items-start gap-4 md:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-matte text-sm font-semibold text-concrete shadow-lg ring-4 ring-industrial/25 dark:bg-deep-charcoal dark:text-concrete dark:ring-gold/25">
                      {step.step}
                    </div>
                    <div className="hidden md:block">
                      <p className="type-badge">Phase {step.step}</p>
                    </div>
                  </div>
                  <TiltCard className="panel-glass-subtle min-w-0 rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-8">
                    <h3 className="type-title text-matte dark:text-concrete">{step.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-stone-gray dark:text-stone-gray-muted">{step.detail}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
