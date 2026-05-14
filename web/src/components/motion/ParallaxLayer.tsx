"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
  /** Vertical travel as % of element height (subtle luxury drift). */
  range?: number;
};

export function ParallaxLayer({ children, className = "", range = 12 }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const target = root.querySelector("[data-parallax-target]") as HTMLElement | null;
    if (!target) return;

    const half = range / 2;
    const tween = gsap.fromTo(
      target,
      { yPercent: -half },
      {
        yPercent: half,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.65,
        },
      }
    );

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [range]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
