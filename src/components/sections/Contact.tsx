import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import MagneticButton from "../ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <SectionHeading index="05" eyebrow="Contact" title="Let's talk" />

      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, #8b5cf6, transparent, #22d3ee, transparent)",
              filter: "blur(80px)",
            }}
          />
          <div className="relative">
            <p className="mx-auto max-w-lg text-lg text-slate-300">
              Have an idea, a project, or just want to say hi? My inbox is open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="gradient-text mt-6 inline-block font-display text-2xl font-semibold md:text-4xl"
            >
              {profile.email}
            </a>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href={`mailto:${profile.email}`}>Send an email</MagneticButton>
              {profile.socials
                .filter((s) => s.label !== "Email")
                .map((social) => (
                  <MagneticButton key={social.label} href={social.href} variant="ghost" external>
                    {social.label} ↗
                  </MagneticButton>
                ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
