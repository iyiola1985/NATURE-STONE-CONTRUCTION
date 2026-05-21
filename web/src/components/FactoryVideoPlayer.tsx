"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FACTORY_VIDEO_SRC } from "@/lib/constants";

const POSTER_SRC = "/images/project-3.png";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export type FactoryVideoPlayerProps = {
  variant?: "dark" | "light";
  badge?: string;
  title?: string;
  highlights?: string[];
  playLabel?: string;
  hint?: string;
  ariaLabel?: string;
  className?: string;
  videoSrc?: string;
  posterSrc?: string;
};

const DEFAULT_HIGHLIGHTS = [
  "Hydraulic block machine in production",
  "On-site operation & material flow",
  "Fleet-ready logistics",
];

export function FactoryVideoPlayer({
  variant = "dark",
  badge = "Nature Stone on site",
  title = "Block machine operation · Production line · Delivery fleet",
  highlights = DEFAULT_HIGHLIGHTS,
  playLabel = "Play full video with sound",
  hint,
  ariaLabel = "Play factory operations video — block machine in production",
  className = "",
  videoSrc = FACTORY_VIDEO_SRC,
  posterSrc = POSTER_SRC,
}: FactoryVideoPlayerProps) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const shellRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const isLight = variant === "light";

  const frameClass = isLight
    ? "border-matte/12 shadow-glow-border dark:border-gold/20 dark:shadow-glow-border-dark"
    : "border-gold/20 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(201,162,39,0.12)]";

  const focusRing = isLight
    ? "focus-visible:ring-gold focus-visible:ring-offset-concrete dark:focus-visible:ring-offset-matte"
    : "focus-visible:ring-gold focus-visible:ring-offset-charcoal";

  useEffect(() => {
    const node = shellRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setInView(visible);
        if (visible) setShouldLoad(true);
      },
      { threshold: 0.12, rootMargin: "64px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview || !shouldLoad) return;

    if (inView) {
      void preview.play().catch(() => {});
    } else {
      preview.pause();
    }
  }, [inView, shouldLoad]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  useEffect(() => {
    const el = modalVideoRef.current;
    if (!el) return;
    if (open) {
      el.currentTime = 0;
      void el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [open]);

  const showVideo = shouldLoad && !videoFailed;
  const showPoster = !videoReady || videoFailed;

  return (
    <>
      <div className={className} ref={shellRef}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`group relative overflow-hidden rounded-2xl border sm:rounded-[28px] ${frameClass}`}
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 ${focusRing}`}
            aria-label={ariaLabel}
          >
            <div className="relative aspect-[16/9] min-h-[180px] w-full overflow-hidden bg-charcoal sm:min-h-[240px] md:min-h-[280px]">
              <Image
                src={posterSrc}
                alt=""
                fill
                className={`object-cover transition duration-700 ${showPoster ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={false}
              />

              {showVideo && (
                <video
                  ref={previewRef}
                  src={videoSrc}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onLoadedData={() => setVideoReady(true)}
                  onError={() => setVideoFailed(true)}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                    videoReady ? (hovered ? "scale-[1.04] brightness-110 opacity-100" : "scale-100 brightness-[0.88] opacity-100") : "opacity-0"
                  }`}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

              <span className="type-perk absolute left-3 top-3 z-[2] inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 truncate rounded-full border border-gold/30 bg-black/50 px-2.5 py-1 text-gold backdrop-blur-md sm:left-6 sm:top-6 sm:max-w-none sm:gap-2 sm:px-3 sm:py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {badge}
              </span>

              <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-2 px-3 sm:gap-4 sm:px-4">
                <div className="relative">
                  <motion.span
                    className="absolute inset-0 hidden rounded-full border-2 border-gold/40 sm:block"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute inset-0 hidden rounded-full border border-gold/25 sm:block"
                    animate={{ scale: [1, 1.55, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.35 }}
                  />
                  <span
                    className={`cta-glow relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/50 bg-gold text-charcoal shadow-[0_0_40px_rgba(201,162,39,0.4)] transition duration-300 sm:h-20 sm:w-20 ${
                      hovered ? "scale-110 shadow-[0_0_56px_rgba(201,162,39,0.55)]" : "scale-100"
                    }`}
                  >
                    <PlayIcon className="ml-0.5 h-7 w-7 sm:h-9 sm:w-9" />
                  </span>
                </div>
                <span className="type-cta max-w-[90%] truncate rounded-full bg-gold/95 px-3 py-1.5 text-center text-charcoal shadow-lg transition group-hover:bg-gold-bright sm:max-w-none sm:px-5 sm:py-2.5">
                  <span className="sm:hidden">Tap to play</span>
                  <span className="hidden sm:inline">{playLabel}</span>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-[2] hidden p-4 sm:block sm:p-6">
                <p className="type-title max-w-xl text-white">{title}</p>
                {highlights.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {highlights.map((label) => (
                      <li
                        key={label}
                        className="type-perk rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-concrete-dim backdrop-blur-sm sm:px-3 sm:py-1"
                      >
                        {label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </button>

          <div
            className={`space-y-2 px-4 pb-4 pt-3 sm:hidden ${
              isLight ? "text-matte dark:text-concrete" : "border-t border-white/10"
            }`}
          >
            <p className={`type-title ${isLight ? "text-matte dark:text-concrete" : "text-white"}`}>{title}</p>
            {highlights.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {highlights.map((label) => (
                  <li
                    key={label}
                    className={`type-perk rounded-full border px-2 py-0.5 ${
                      isLight
                        ? "border-matte/15 bg-matte/5 text-stone-gray-deep dark:border-gold/15 dark:bg-white/5 dark:text-stone-gray-muted"
                        : "border-white/15 bg-white/10 text-concrete-dim"
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>

        {hint && (
          <p
            className={`type-body mt-3 ${isLight ? "text-stone-gray dark:text-stone-gray-muted" : "text-center text-stone-gray-muted"}`}
          >
            {hint}
          </p>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center bg-black/90 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative max-h-[92dvh] w-full max-w-5xl overflow-hidden rounded-2xl border border-gold/25 bg-deep-charcoal shadow-glow-border-dark sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full bg-black">
                <video
                  ref={modalVideoRef}
                  src={videoSrc}
                  controls
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gold/15 px-5 py-4">
                <p className="type-subtitle text-concrete-dim">{title}</p>
                <button
                  type="button"
                  className="type-cta rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-gold transition hover:bg-gold hover:text-charcoal"
                  onClick={close}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
