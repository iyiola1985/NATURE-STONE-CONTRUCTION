"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Process"
          title="Disciplined delivery from consultation to support"
          subtitle="Six synchronized stages engineered for transparency—mirroring international OEM programs while staying agile for Nigerian construction timelines."
        />

        <div className="relative">
          <div className="absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 via-zinc-200 to-transparent dark:via-white/10 md:block" />

          <div className="space-y-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="relative grid gap-6 md:grid-cols-[120px_1fr]"
              >
                <div className="flex items-start gap-4 md:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-sm font-semibold text-white shadow-lg ring-4 ring-gold/25 dark:bg-white dark:text-charcoal">
                    {step.step}
                  </div>
                  <div className="hidden md:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Phase {step.step}</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8">
                  <h3 className="font-heading text-2xl font-semibold text-zinc-900 dark:text-white">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
