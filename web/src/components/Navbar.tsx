"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-matte/15 bg-concrete/30 text-matte transition hover:border-gold/40 hover:text-gold dark:border-gold/15 dark:bg-white/5 dark:text-zinc-200"
      aria-label="Toggle color theme"
    >
      {isDark ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 14.5A8.5 8.5 0 019.5 3 8.5 8.5 0 0012 21a8.5 8.5 0 009-6.5z" />
        </svg>
      )}
    </button>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 24);
  });

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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8 lg:px-10">
          <Link href="#hero" className="group flex items-center gap-3">
            <div className="relative h-11 w-36 md:h-12 md:w-40">
              <Image
                src="/images/logo.png"
                alt={`${SITE.legalName} logo`}
                fill
                className="object-contain dark:brightness-110 dark:contrast-110"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2.5 text-[13px] font-medium uppercase tracking-[0.22em] text-stone-gray-deep transition hover:text-industrial dark:text-stone-gray-muted dark:hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="hidden rounded-full border border-matte/15 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-matte transition hover:border-gold/40 hover:text-gold lg:inline-flex dark:border-gold/15 dark:text-concrete-dim"
            >
              Call now
            </a>
            <a
              href="#contact"
              className="cta-glow inline-flex rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-charcoal shadow-sm transition hover:bg-gold-bright"
            >
              Get quotation
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-matte/20 p-2 text-matte dark:border-gold/15 dark:text-concrete lg:hidden"
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
                <div className="mt-2 flex items-center gap-2 border-t border-matte/10 pt-3 dark:border-gold/10">
                  <ThemeToggle />
                  <a href="#contact" className="cta-glow flex-1 rounded-full bg-gold py-2 text-center text-sm font-semibold text-charcoal" onClick={() => setOpen(false)}>
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
