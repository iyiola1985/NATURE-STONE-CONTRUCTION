"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={`mb-12 max-w-3xl space-y-3 md:mb-16 ${alignClass}`}
    >
      {eyebrow && <p className="type-badge">{eyebrow}</p>}
      <h2 className="type-title text-zinc-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="type-subtitle text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      )}
    </motion.header>
  );
}
