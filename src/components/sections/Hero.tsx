import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../../data/profile";
import { useTypewriter } from "../../hooks/useTypewriter";
import MagneticButton from "../ui/MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
};

const letter = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // parallax: layers move at different speeds as you scroll away
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 160]);

  const word = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* floating decorative layers */}
      <motion.div
        aria-hidden
        style={{ y: orbY, rotate: ringRotate }}
        className="absolute right-[8%] top-[22%] hidden h-64 w-64 rounded-full border border-aurora-cyan/30 md:block"
      >
        <div className="absolute inset-6 rounded-full border border-dashed border-aurora-violet/40" />
        <div className="absolute -right-2 top-1/2 h-4 w-4 animate-float rounded-full bg-aurora-cyan shadow-[0_0_20px_#22d3ee]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: orbY }}
        className="absolute bottom-[18%] left-[8%] hidden h-24 w-24 animate-float rounded-3xl border border-aurora-pink/30 bg-aurora-pink/5 backdrop-blur-sm [animation-delay:-3s] md:block"
      />

      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora-lime opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora-lime" />
          </span>
          {profile.role} · {profile.location}
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          aria-label={profile.name}
          className="font-display text-6xl font-bold leading-none tracking-tight text-white [perspective:600px] sm:text-8xl md:text-9xl"
        >
          {profile.name.split("").map((char, i) => (
            <motion.span key={i} variants={letter} className="inline-block" aria-hidden>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 font-display text-2xl text-slate-300 md:text-3xl"
        >
          I build <span className="gradient-text font-semibold">{word}</span>
          <span className="ml-0.5 animate-blink text-aurora-cyan">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mx-auto mt-5 max-w-xl text-base text-slate-400 md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#projects">See my work →</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Get in touch
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/25 pt-2">
          <motion.span
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
