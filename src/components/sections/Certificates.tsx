import { motion } from "framer-motion";
import { certificates } from "../../data/certificates";
import { formatDate } from "../../lib/formatDate";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Certificates() {
  const sorted = [...certificates].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="certificates" className="section-wrap">
      <SectionHeading index="04" eyebrow="Certificates" title="What I've earned" />

      <ol className="relative space-y-6 border-l border-white/10 pl-8">
        {sorted.map((cert, i) => (
          <li key={cert.id} className="relative">
            <motion.span
              aria-hidden
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.1 }}
              className="absolute -left-[2.45rem] top-6 h-3 w-3 rounded-full bg-aurora-lime shadow-[0_0_14px_#a3e635]"
            />
            <Reveal delay={i * 0.08} from="left">
              <motion.div
                whileHover={{ x: 8 }}
                className="glass flex flex-col gap-3 rounded-2xl p-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs text-slate-500">{formatDate(cert.date)}</span>
                  {cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-aurora-cyan transition-colors hover:text-white"
                    >
                      View ↗
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
