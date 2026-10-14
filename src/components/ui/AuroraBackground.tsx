import { motion, useScroll, useTransform } from "framer-motion";

/** Fixed, slowly drifting colour blobs that also shift as the page scrolls. */
export default function AuroraBackground() {
  const { scrollYProgress } = useScroll();
  const shiftA = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const shiftB = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: shiftA }}
        className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-drift rounded-full bg-aurora-violet/25 blur-[120px]"
      />
      <motion.div
        style={{ y: shiftB }}
        className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] animate-drift rounded-full bg-aurora-cyan/20 blur-[120px] [animation-delay:-6s]"
      />
      <motion.div
        style={{ y: shiftA }}
        className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] animate-drift rounded-full bg-aurora-pink/15 blur-[120px] [animation-delay:-12s]"
      />
      {/* faint grid that fades toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
