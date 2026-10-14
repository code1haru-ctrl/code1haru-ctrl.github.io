import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}

/** A link-button that gently pulls toward the cursor when it gets close. */
export default function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
}: MagneticButtonProps) {
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-aurora-violet to-aurora-cyan text-ink-950 shadow-[0_0_30px_-5px_rgba(139,92,246,0.7)]"
      : "border border-white/15 text-white hover:border-aurora-cyan/60 hover:bg-white/5";

  return (
    <motion.a
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors ${styles}`}
    >
      {children}
    </motion.a>
  );
}
