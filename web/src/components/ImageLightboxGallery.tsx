"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
  className?: string;
};

type Props = {
  images: LightboxImage[];
  gridClassName?: string;
};

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5M20 8V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5M20 16v4m0 0h-4m4 0l-5-5" />
    </svg>
  );
}

export function ImageLightboxGallery({ images, gridClassName = "" }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);
  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, goNext, goPrev]);

  return (
    <>
      <div className={gridClassName}>
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative min-h-[120px] cursor-zoom-in overflow-hidden rounded-xl border border-matte/10 bg-matte/5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold dark:border-gold/15 sm:min-h-[140px] ${img.className ?? ""}`}
            aria-label={`View larger: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <span className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25" />
            <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <ExpandIcon className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 px-4 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))]">
              <p className="type-subtitle line-clamp-2 min-w-0 flex-1 text-concrete">{active.alt}</p>
              <p className="type-perk shrink-0 text-stone-gray-muted">
                {activeIndex + 1} / {images.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="type-cta shrink-0 rounded-full border border-gold/30 bg-black/60 px-4 py-2 text-gold backdrop-blur-sm transition hover:bg-gold hover:text-charcoal"
                aria-label="Close image view"
              >
                Close
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
              onClick={close}
            >
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white backdrop-blur-sm transition hover:border-gold/50 sm:left-4 sm:h-12 sm:w-12"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              <motion.div
                key={active.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full max-h-[calc(100dvh-5rem)] max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white backdrop-blur-sm transition hover:border-gold/50 sm:right-4 sm:h-12 sm:w-12"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
