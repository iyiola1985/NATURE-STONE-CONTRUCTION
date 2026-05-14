"use client";

import gsap from "gsap";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2, className = "" }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const proxy = { n: 0 };
    const tween = gsap.to(proxy, {
      n: value,
      duration,
      ease: "expo.out",
      onUpdate: () => setDisplay(Math.round(proxy.n)),
      onComplete: () => setDisplay(value),
    });
    return () => {
      tween.kill();
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
