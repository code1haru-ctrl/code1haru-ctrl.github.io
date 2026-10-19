import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { useTypewriter } from "../../hooks/useTypewriter";

export default function Hero() {
  const word = useTypewriter(profile.roles);

  return (
    <section id="home" className="mx-auto w-full max-w-3xl px-6 pb-20 pt-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="font-display text-5xl font-medium lowercase leading-none tracking-tight text-white sm:text-7xl">
          {profile.name.toLowerCase()}
        </h1>

        <p className="mt-6 font-display text-xl text-slate-300 sm:text-2xl">
          I build {word}
          <span className="ml-0.5 animate-blink text-slate-500">|</span>
        </p>

        <p className="mt-4 max-w-xl text-base text-slate-500">{profile.tagline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-md border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-white/30 hover:text-white"
          >
            see my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-white/30 hover:text-white"
          >
            get in touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
