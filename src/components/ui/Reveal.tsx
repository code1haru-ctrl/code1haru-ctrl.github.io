import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Direction the element slides in from. */
  from?: "up" | "left" | "right" | "none";
  className?: string;
}

const OFFSETS = {
  up: { x: 0, y: 20 },
  left: { x: -20, y: 0 },
  right: { x: 20, y: 0 },
  none: { x: 0, y: 0 },
} as const;

/** Fades and slides its children into view once, when they scroll on screen. */
export default function Reveal({ children, delay = 0, from = "up", className }: RevealProps) {
  const reducedMotion = usePrefersReducedMotion();
  const { x, y } = OFFSETS[from];

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
