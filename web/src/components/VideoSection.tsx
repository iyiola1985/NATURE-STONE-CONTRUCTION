"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="videos" className="relative overflow-hidden bg-section-matte py-24 md:py-28 text-concrete">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Factory operations"
            title="Machine demonstrations & plant cinematography"
            subtitle="Preview hydraulic cycling, vibration compaction, and logistics choreography captured with cinematic lighting—ideal for investor decks and technical committees."
          />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl"
          >
            <ParallaxLayer className="relative aspect-[21/9] min-h-[280px]" range={9}>
              <div data-parallax-target className="absolute inset-0 h-[118%] w-full -top-[9%]">
                <Image src="/images/project-3.png" alt="Factory paving operations" fill className="object-cover" sizes="100vw" priority={false} />
              </div>
            </ParallaxLayer>
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group absolute inset-0 z-[2] flex items-center justify-center"
              aria-label="Play overview video"
            >
              <span className="cta-glow flex h-20 w-20 items-center justify-center rounded-full border border-gold/20 bg-deep-charcoal/60 text-concrete shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md transition group-hover:scale-105 group-hover:bg-gold group-hover:text-charcoal">
                <svg className="ml-1 h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
            <div className="pointer-events-none absolute bottom-8 left-8 z-[2] max-w-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">Cinematic briefing</p>
              <p className="mt-3 font-heading text-2xl font-semibold leading-tight tracking-tight text-concrete md:text-3xl lg:text-4xl">
                Hydraulic rhythm · PLC telemetry · Nationwide logistics
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-gold/15 bg-deep-charcoal shadow-glow-border-dark"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full bg-black">
                {/* Set VIDEO_EMBED_URL to your YouTube embed or hosted MP4 */}
                <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <p className="text-sm text-stone-gray-muted">Factory reel placeholder</p>
                  <p className="max-w-md text-xs text-stone-gray">
                    Drop in a YouTube embed URL or <code className="rounded border border-gold/10 bg-matte/50 px-1 text-concrete-dim">video</code> element pointing at your hosted MP4 for the QT4-20 line.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full border border-gold/20 bg-matte/80 px-3 py-1 text-sm text-concrete backdrop-blur-sm"
                onClick={() => setOpen(false)}
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
