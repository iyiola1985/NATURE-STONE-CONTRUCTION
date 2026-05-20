"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { HERO_STATS } from "@/lib/constants";

function Particles() {
  const dots = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    delay: (i % 8) * 0.15,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute h-1 w-1 rounded-full bg-white/25"
          style={{ left: d.left, top: d.top }}
          animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -6, 0] }}
          transition={{ duration: 5 + (d.id % 5), repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[100svh] overflow-hidden bg-charcoal">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-1.png"
          alt="Industrial paving and construction excellence"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />
      </motion.div>

      <Particles />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-28 pt-28 md:px-8 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="type-badge mb-4 inline-flex items-center gap-2"
        >
          <span className="h-px w-10 bg-gold/70" />
          Nature Stone Construction
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="type-hero-title max-w-4xl text-balance text-white"
        >
          Building{" "}
          <span className="text-gold [text-shadow:0_0_42px_rgba(201,162,39,0.28)]">Nigeria&apos;s</span> Future With{" "}
          <span className="bg-gradient-to-r from-gold via-industrial to-gold-bright bg-clip-text text-transparent">
            Precision Block Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="type-subtitle mt-6 max-w-2xl text-zinc-200/95"
        >
          High-efficiency hydraulic block machines and premium paving solutions engineered for durability, speed, and performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="#machine"
            className="type-cta cta-glow inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-charcoal shadow-lg shadow-black/30 transition hover:bg-gold-bright"
          >
            Explore machines
          </Link>
          <Link
            href="#contact"
            className="type-cta inline-flex items-center justify-center rounded-full border border-gold/35 bg-white/[0.07] px-8 py-3 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition hover:border-gold/55 hover:bg-gold/10 hover:text-gold-bright dark:border-gold/25 dark:bg-white/[0.06]"
          >
            Get quotation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 + i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-glass backdrop-blur-xl"
            >
              <p className="type-perk text-zinc-400">{stat.label}</p>
              <p className="type-stat mt-2 text-white">
                {stat.label === "Vibration force" ? (
                  <>
                    <AnimatedCounter value={80} duration={1.8} />
                    <span className="ml-1 text-base font-normal text-zinc-400">{stat.unit}</span>
                  </>
                ) : (
                  <>
                    {stat.value}
                    <span className="ml-1 text-base font-normal text-zinc-400">{stat.unit}</span>
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} className="h-10 w-6 rounded-full border border-white/25">
          <div className="mx-auto mt-2 h-1.5 w-1 rounded-full bg-white/70" />
        </motion.div>
      </div>
    </section>
  );
}
