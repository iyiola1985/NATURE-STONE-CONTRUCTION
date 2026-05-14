"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(t);
  }, []);

  if (unmounted) return null;

  return (
    <AnimatePresence onExitComplete={() => setUnmounted(true)}>
      {visible && (
        <motion.div
          key="nsc-loading-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-matte"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative h-20 w-44 md:h-24 md:w-52">
              <Image src="/images/logo.png" alt="Nature Stone Construction" fill className="object-contain" priority />
            </div>
            <div className="h-0.5 w-40 overflow-hidden rounded-full bg-deep-charcoal">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-gold-dim via-gold to-gold-bright"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-stone-gray-muted">Precision industrial systems</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
