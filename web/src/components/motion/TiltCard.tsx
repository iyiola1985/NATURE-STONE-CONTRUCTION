"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div">;

export function TiltCard({ children, className = "", style, ...rest }: Props) {
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d", ...style }}
      whileHover={{
        rotateX: -5,
        rotateY: 5,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
