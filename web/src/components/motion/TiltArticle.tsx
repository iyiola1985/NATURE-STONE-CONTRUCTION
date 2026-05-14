"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"article">;

export function TiltArticle({ children, className = "", style, ...rest }: Props) {
  return (
    <motion.article
      className={className}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d", ...style }}
      whileHover={{
        rotateX: -4,
        rotateY: 5,
        transition: { type: "spring", stiffness: 360, damping: 24 },
      }}
      {...rest}
    >
      {children}
    </motion.article>
  );
}
