"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 24);
  });

  const linkTone = solid
    ? "text-stone-gray-deep hover:text-industrial dark:text-stone-gray-muted dark:hover:text-gold"
    : "text-white/90 hover:text-gold dark:text-white/85 dark:hover:text-gold";

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid
            ? "border-b border-matte/10 bg-gradient-to-b from-concrete/92 to-concrete-dim/88 shadow-glass-soft backdrop-blur-xl dark:border-gold/10 dark:from-deep-charcoal/92 dark:to-matte/95 dark:shadow-glow-border-dark"
            : "border-b border-transparent bg-gradient-to-b from-black/55 to-transparent"
        }`}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex min-w-0 max-w-7xl items-center gap-2 px-3 py-3 sm:px-4 md:gap-3 md:px-6 lg:gap-4 lg:px-8 xl:px-10">
          <Link href="#hero" className="group flex shrink-0 items-center">
            <div className="relative h-10 w-[7.25rem] sm:h-11 sm:w-32 md:h-12 md:w-36 lg:w-[9rem]">
              <Image
                src="/images/logo.png"
                alt={`${SITE.legalName} logo`}
                fill
                className="object-contain dark:brightness-110 dark:contrast-110"
                priority
              />
            </div>
          </Link>

          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <nav className="flex max-w-full flex-wrap items-center justify-center gap-x-0.5 gap-y-1 px-1" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`type-perk inline-flex shrink-0 rounded-full px-2 py-1.5 transition sm:px-2.5 md:px-2.5 xl:px-3 ${linkTone}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
            <a
              href="#contact"
              aria-label="Get quotation"
              className="type-cta hidden items-center justify-center rounded-full border border-gold/35 bg-white/[0.07] px-2.5 py-2 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition hover:border-gold/55 hover:bg-gold/10 hover:text-gold-bright dark:border-gold/25 dark:bg-white/[0.06] sm:px-3 md:inline-flex md:px-3.5 md:py-2.5 xl:px-4"
            >
              <span className="hidden xl:inline">Get quotation</span>
              <span className="xl:hidden">Quote</span>
            </a>
            <button
              type="button"
              className={`inline-flex rounded-full border p-2 lg:hidden ${
                solid
                  ? "border-matte/20 text-matte dark:border-gold/15 dark:text-concrete"
                  : "border-white/30 text-white shadow-[0_1px_3px_rgba(0,0,0,0.65)] dark:border-white/25 dark:text-white"
              }`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-matte/10 bg-gradient-to-b from-concrete/95 to-concrete-dim/90 backdrop-blur-xl dark:border-gold/10 dark:from-deep-charcoal/95 dark:to-matte lg:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-matte dark:text-concrete"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 border-t border-matte/10 pt-3 dark:border-gold/10">
                  <a
                    href="#contact"
                    className="type-cta block w-full rounded-full border border-gold/40 bg-gold/10 py-3 text-center text-gold backdrop-blur-sm transition hover:bg-gold/15 dark:border-gold/30 dark:bg-white/[0.06]"
                    onClick={() => setOpen(false)}
                  >
                    Get quotation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
