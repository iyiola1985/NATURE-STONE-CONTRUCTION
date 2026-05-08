"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
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
    <section id="portfolio" className="relative overflow-hidden bg-zinc-100 py-24 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grid-fade bg-[length:52px_52px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
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
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                filter === f
                  ? "bg-charcoal text-white shadow-lg dark:bg-white dark:text-charcoal"
                  : "border border-black/10 bg-white/70 text-zinc-700 hover:border-gold/40 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
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
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setLightbox(globalIndex)}
                  className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-black/5 bg-white text-left shadow-xl dark:border-white/10 dark:bg-zinc-900"
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
                      <p className="font-heading text-lg font-semibold text-white">{item.title}</p>
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
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-900">
            <div className="relative aspect-[4/3]">
              <Image src="/images/project-2.png" alt="Industrial paving project — preparation phase" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                Before · staging
              </span>
            </div>
            <p className="p-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Material staging, QC checkpoints, and bedding alignment before lock-up paving cycles.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-900">
            <div className="relative aspect-[4/3]">
              <Image src="/images/project-3.png" alt="Industrial paving project — completed surface" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <span className="absolute left-4 top-4 rounded-full bg-gold/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal backdrop-blur-md">
                After · finished pavement
              </span>
            </div>
            <p className="p-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Herringbone surfacing married to precision curbs— engineered for sustained industrial loads.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 rounded-3xl border border-black/5 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-white/5 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Client voices</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-zinc-900 dark:text-white">Trusted on Nigeria&apos;s biggest sites</h3>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="rounded-full border border-black/10 p-2 dark:border-white/15"
                onClick={() => setTestimonial((t) => (t - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="rounded-full border border-black/10 p-2 dark:border-white/15"
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
            className="mt-8 border-t border-black/5 pt-8 dark:border-white/10"
          >
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">&ldquo;{TESTIMONIALS[testimonial].quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold/70 to-industrial/70" />
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">{TESTIMONIALS[testimonial].name}</p>
                <p className="text-sm text-zinc-500">{TESTIMONIALS[testimonial].role}</p>
              </div>
            </div>
          </motion.div>
        </div>
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
                <h4 className="mt-2 font-heading text-2xl text-white">{activeImage.title}</h4>
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
