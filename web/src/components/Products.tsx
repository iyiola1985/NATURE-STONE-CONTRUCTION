"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PRODUCT_CARDS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100/80 via-transparent to-zinc-100/80 dark:from-charcoal dark:to-charcoal" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Catalog"
          title="Premium concrete systems"
          subtitle="Industrial-grade hollow blocks, pavers, interlock, bricks, and curb stones—engineered for Nigerian aggregates and climate cycles."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCT_CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-zinc-50 shadow-lg dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 transition group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Industrial grade</p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-200">{card.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
