"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltArticle } from "@/components/motion/TiltArticle";
import { PRODUCT_CARDS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-section-concrete py-24 md:py-28 dark:bg-section-matte">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-concrete/50 via-transparent to-concrete-dim/40 dark:from-deep-charcoal/40 dark:via-transparent dark:to-matte" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Catalog"
            title="Premium concrete systems"
            subtitle="Industrial-grade hollow blocks, pavers, interlock, bricks, and curb stones—engineered for Nigerian aggregates and climate cycles."
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCT_CARDS.map((card, i) => (
              <TiltArticle
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-matte/10 bg-gradient-to-b from-concrete/95 to-concrete-dim/80 shadow-glass-soft backdrop-blur-md dark:border-gold/12 dark:from-slate-900 dark:to-deep-charcoal dark:shadow-glass-dark"
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
              </TiltArticle>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
