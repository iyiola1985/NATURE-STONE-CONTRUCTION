"use client";

import { motion } from "framer-motion";
import { WHY_FEATURES } from "@/lib/constants";
import { WhyIcon } from "@/components/icons/IndustrialIcons";
import { SectionHeading } from "@/components/SectionHeading";

export function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-charcoal py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,93,4,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(201,162,39,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Why Nature Stone"
          title="Engineering partnership from mold to pavement"
          subtitle="Industrial reliability with luxury presentation—every engagement is backed by hydraulic expertise, logistics discipline, and responsive technical support."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {WHY_FEATURES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl transition hover:border-gold/40 hover:shadow-[0_20px_80px_rgba(201,162,39,0.12)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-industrial/10" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/15 to-white/5 text-gold ring-1 ring-white/10 transition group-hover:text-gold-bright">
                  <WhyIcon name={item.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Precision workflows tuned for Nigerian sites—from Lagos humidity to northern haul distances.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
