import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the very top that fills as you scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-aurora-violet via-aurora-cyan to-aurora-pink"
    />
  );
}
