import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Direction the element slides in from. */
  from?: "up" | "left" | "right" | "none";
  className?: string;
}

const OFFSETS = {
  up: { x: 0, y: 40 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
  none: { x: 0, y: 0 },
} as const;

/** Fades and slides its children into view once, when they scroll on screen. */
export default function Reveal({ children, delay = 0, from = "up", className }: RevealProps) {
  const { x, y } = OFFSETS[from];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
