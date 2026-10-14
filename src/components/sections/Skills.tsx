import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 18 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading index="02" eyebrow="Skills" title="Tools I work with" />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1}>
            <div className="glass h-full rounded-2xl p-7 transition-colors hover:border-aurora-violet/40">
              <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-aurora-cyan">
                {group.title}
              </h3>
              <motion.ul
                variants={chipContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-wrap gap-3"
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={chip}
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="cursor-default rounded-xl border border-white/10 bg-ink-700/60 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
