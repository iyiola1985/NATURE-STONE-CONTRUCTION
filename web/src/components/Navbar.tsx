"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

function ThemeToggle({ overHero = false }: { overHero?: boolean }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = resolvedTheme === "dark";
  const surface = overHero
    ? "border-white/30 bg-black/25 text-white hover:border-gold/50 hover:text-gold"
    : "border-matte/15 bg-concrete/30 text-matte hover:border-gold/40 hover:text-gold dark:border-gold/15 dark:bg-white/5 dark:text-zinc-200";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${surface}`}
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
        <div className="mx-auto flex min-w-0 max-w-7xl items-center gap-2 px-4 py-3.5 md:gap-3 md:px-8 lg:px-10">
          <Link href="#hero" className="group flex shrink-0 items-center gap-3">
            <div className="relative h-11 w-32 sm:w-36 md:h-12 md:w-40">
              <Image
                src="/images/logo.png"
                alt={`${SITE.legalName} logo`}
                fill
                className="object-contain dark:brightness-110 dark:contrast-110"
                priority
              />
            </div>
          </Link>

          <div className="relative z-0 min-w-0 flex-1 overflow-hidden lg:px-1">
            <nav className="hidden w-full min-w-0 max-w-full justify-center gap-0.5 overflow-x-auto overscroll-x-contain py-1 lg:flex [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gold/20">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition sm:px-3 sm:text-[12px] sm:tracking-[0.16em] xl:px-3.5 xl:text-[13px] xl:tracking-[0.2em] ${
                    solid
                      ? "text-stone-gray-deep hover:text-industrial dark:text-stone-gray-muted dark:hover:text-gold"
                      : "text-white/90 hover:text-gold dark:text-white/85 dark:hover:text-gold"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="relative z-10 ml-auto hidden shrink-0 items-center gap-2 md:flex md:gap-2.5">
            <ThemeToggle overHero={!solid} />
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="hidden rounded-full border border-matte/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-matte transition hover:border-gold/40 hover:text-gold xl:inline-flex dark:border-gold/15 dark:text-concrete-dim xl:px-5 xl:py-2.5 xl:text-[13px]"
            >
              Call now
            </a>
            <a
              href="#contact"
              aria-label="Get quotation"
              className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-white/[0.07] px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition hover:border-gold/55 hover:bg-gold/10 hover:text-gold-bright dark:border-gold/25 dark:bg-white/[0.06] md:px-4 md:py-2.5 md:text-xs xl:text-[13px]"
            >
              <span className="hidden xl:inline">Get quotation</span>
              <span className="xl:hidden">Quote</span>
            </a>
          </div>

          <button
            type="button"
            className={`relative z-10 inline-flex shrink-0 rounded-full border p-2 lg:hidden ${
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
                  <ThemeToggle overHero={false} />
                  <a
                    href="#contact"
                    className="flex-1 rounded-full border border-gold/40 bg-gold/10 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-gold backdrop-blur-sm transition hover:bg-gold/15 dark:border-gold/30 dark:bg-white/[0.06]"
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
