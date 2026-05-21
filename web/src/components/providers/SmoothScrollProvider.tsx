"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    let lenis: Lenis | null = null;

    const onResize = () => {
      lenis?.resize();
      ScrollTrigger.refresh();
    };

    const ticker = (time: number) => {
      lenis?.raf(time * 1000);
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const useNativeScroll =
      prefersReducedMotion ||
      window.matchMedia("(max-width: 1023px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (useNativeScroll) return;

    try {
      lenis = new Lenis({
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
        anchors: true,
      });

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (!lenis) return 0;
          if (arguments.length) {
            lenis.scrollTo(value as number, { immediate: true });
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            right: window.innerWidth,
            bottom: window.innerHeight,
          };
        },
        pinType: document.documentElement.style.transform ? "transform" : "fixed",
      });

      lenis.on("scroll", ScrollTrigger.update);
      window.addEventListener("resize", onResize);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();
    } catch (err) {
      console.warn("[SmoothScrollProvider] Lenis / ScrollTrigger init failed — using native scroll.", err);
      return;
    }

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(ticker);
      try {
        lenis?.destroy();
      } catch {
        /* ignore */
      }
      lenis = null;
      try {
        ScrollTrigger.scrollerProxy(document.documentElement);
      } catch {
        /* ignore */
      }
    };
  }, []);

  return <>{children}</>;
}
