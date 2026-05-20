"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS, TESTIMONIALS, type PortfolioCategory } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [testimonial, setTestimonial] = useState(0);

  const filtered = useMemo(() => {
    if (filter === "All") return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((p) => p.category === filter);
  }, [filter]);

  const activeImage = lightbox !== null ? PORTFOLIO_ITEMS[lightbox] : null;

  return (
    <section id="portfolio" className="relative overflow-hidden bg-section-concrete py-24 md:py-28 dark:bg-section-matte">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade-light bg-[length:52px_52px] opacity-[0.25] dark:bg-grid-fade dark:opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects engineered for permanence"
            subtitle="Roadways, residential estates, commercial cores, and industrial paving delivered with cinematic precision—documented here with real site photography."
          />

          <div className="mb-10 flex flex-wrap gap-2">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`type-perk rounded-full px-4 py-2 transition ${
                filter === f
                  ? "border border-industrial/40 bg-industrial/15 text-industrial shadow-glow-border dark:bg-industrial/20 dark:text-industrial dark:shadow-[0_0_24px_rgba(232,93,4,0.2)]"
                  : "panel-glass-subtle border-matte/10 text-stone-gray-deep hover:border-gold/35 dark:border-gold/10 dark:text-stone-gray-muted dark:hover:border-gold/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 gap-6 md:columns-2 xl:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const globalIndex = PORTFOLIO_ITEMS.indexOf(item);
              return (
                <motion.button
                  layout
                  key={item.title + item.image}
                  type="button"
                  style={{ transformPerspective: 1100, transformStyle: "preserve-3d" }}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{
                    rotateX: -4,
                    rotateY: 4,
                    transition: { type: "spring", stiffness: 380, damping: 24 },
                  }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setLightbox(globalIndex)}
                  className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-matte/10 bg-gradient-to-b from-concrete/90 to-concrete-dim/75 text-left shadow-glass-soft backdrop-blur-sm dark:border-gold/10 dark:from-slate-900 dark:to-deep-charcoal dark:shadow-glass-dark"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-90 transition group-hover:opacity-100" />
                    <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                      {item.category}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="type-title text-white">{item.title}</p>
                      <p className="mt-2 text-sm text-zinc-200">{item.caption}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid gap-6 lg:grid-cols-2"
        >
          <div className="overflow-hidden rounded-3xl border border-matte/10 bg-gradient-to-b from-concrete/95 to-concrete-dim/85 shadow-glow-border dark:border-gold/12 dark:from-slate-900 dark:to-deep-charcoal dark:shadow-glow-border-dark">
            <ParallaxLayer className="relative aspect-[4/3]" range={10}>
              <div data-parallax-target className="absolute inset-0 h-[118%] w-full -top-[9%]">
                <Image src="/images/project-2.png" alt="Industrial paving project — preparation phase" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
              <span className="type-perk absolute left-4 top-4 z-[1] rounded-full bg-black/55 px-3 py-1 text-white backdrop-blur-md">
                Before · staging
              </span>
            </ParallaxLayer>
            <p className="p-5 text-sm leading-relaxed text-stone-gray dark:text-stone-gray-muted">
              Material staging, QC checkpoints, and bedding alignment before lock-up paving cycles.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-matte/10 bg-gradient-to-b from-concrete/95 to-concrete-dim/85 shadow-glow-border dark:border-gold/12 dark:from-slate-900 dark:to-deep-charcoal dark:shadow-glow-border-dark">
            <ParallaxLayer className="relative aspect-[4/3]" range={10}>
              <div data-parallax-target className="absolute inset-0 h-[118%] w-full -top-[9%]">
                <Image src="/images/project-3.png" alt="Industrial paving project — completed surface" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
              <span className="type-perk absolute left-4 top-4 z-[1] rounded-full bg-gold/95 px-3 py-1 text-charcoal backdrop-blur-md">
                After · finished pavement
              </span>
            </ParallaxLayer>
            <p className="p-5 text-sm leading-relaxed text-stone-gray dark:text-stone-gray-muted">
              Herringbone surfacing married to precision curbs— engineered for sustained industrial loads.
            </p>
          </div>
        </motion.div>

        <div className="panel-glass mt-16 p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="type-badge">Client voices</p>
              <h3 className="type-title mt-3 text-matte dark:text-concrete">Trusted on Nigeria&apos;s biggest sites</h3>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="rounded-full border border-matte/15 p-2 transition hover:border-industrial/40 dark:border-gold/15 dark:hover:border-gold/40"
                onClick={() => setTestimonial((t) => (t - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="rounded-full border border-matte/15 p-2 transition hover:border-industrial/40 dark:border-gold/15 dark:hover:border-gold/40"
                onClick={() => setTestimonial((t) => (t + 1) % TESTIMONIALS.length)}
              >
                ›
              </button>
            </div>
          </div>
          <motion.div
            key={testimonial}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8 border-t border-matte/10 pt-8 dark:border-gold/10"
          >
            <p className="text-lg leading-relaxed text-stone-gray-deep dark:text-concrete-dim">&ldquo;{TESTIMONIALS[testimonial].quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-industrial/60 to-gold/50" />
              <div>
                <p className="font-semibold text-matte dark:text-concrete">{TESTIMONIALS[testimonial].name}</p>
                <p className="text-sm text-stone-gray">{TESTIMONIALS[testimonial].role}</p>
              </div>
            </div>
          </motion.div>
        </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {activeImage && lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={activeImage.image} alt={activeImage.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="border-t border-white/10 bg-zinc-950/90 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{activeImage.category}</p>
                <h4 className="type-title mt-2 text-white">{activeImage.title}</h4>
                <p className="mt-2 text-sm text-zinc-400">{activeImage.caption}</p>
              </div>
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-md"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
