"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useState } from "react";

type Props = HTMLMotionProps<"div">;

export function TiltCard({ children, className = "", style, ...rest }: Props) {
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanTilt(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d", ...style }}
      whileHover={
        canTilt
          ? {
              rotateX: -5,
              rotateY: 5,
              transition: { type: "spring", stiffness: 340, damping: 22 },
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}
