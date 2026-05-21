"use client";

import { motion } from "framer-motion";
import { FactoryVideoPlayer } from "@/components/FactoryVideoPlayer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PROJECTS_VIDEO_SRC } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

const PROJECT_HIGHLIGHTS = [
  "Materials collected on site",
  "Paving laid to specification",
  "Finished surfaces handed over",
];

const PROJECT_PHASES = [
  {
    step: "01",
    title: "Collect & stage",
    detail: "Aggregates, blocks, and curbs brought in and aligned before the paving cycle begins.",
  },
  {
    step: "02",
    title: "Build & compact",
    detail: "Crews lock patterns, vibration, and joints so every course meets engineering load targets.",
  },
  {
    step: "03",
    title: "Complete & deliver",
    detail: "Finished roads, yards, and estates ready for traffic—the result you see in this reel.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad relative overflow-hidden bg-section-concrete dark:bg-section-matte">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade-light bg-[length:52px_52px] opacity-[0.25] dark:bg-grid-fade dark:opacity-[0.06]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(232,93,4,0.08),transparent_50%),radial-gradient(ellipse_70%_40%_at_100%_80%,rgba(201,162,39,0.1),transparent_55%)]" />

      <div className="section-wrap">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Projects"
            title="From site collection to completed pavement"
            subtitle="Watch how Nature Stone gathers materials on site, executes the paving program, and hands over finished surfaces—documented in one continuous project reel."
          />

          <div className="mb-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mb-10 lg:grid-cols-3">
            {PROJECT_PHASES.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="panel-glass-subtle rounded-2xl border border-matte/10 p-6 dark:border-gold/12"
              >
                <p className="type-perk text-gold">{phase.step}</p>
                <h3 className="type-title mt-3 text-matte dark:text-concrete">{phase.title}</h3>
                <p className="type-body mt-3 text-sm text-stone-gray-deep dark:text-stone-gray-muted">{phase.detail}</p>
              </motion.div>
            ))}
          </div>

          <FactoryVideoPlayer
            variant="light"
            videoSrc={PROJECTS_VIDEO_SRC}
            posterSrc="/images/project-1.png"
            badge="Project reel · on site"
            title="See the full collect → pave → complete journey"
            highlights={PROJECT_HIGHLIGHTS}
            playLabel="Play project footage with sound"
            hint="Tap the preview to watch how we collect on site and deliver the finished pavement."
            ariaLabel="Play Nature Stone projects video — collection through completion"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
