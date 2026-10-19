import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { certificates } from "../../data/certificates";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";

const STATS = [
  { label: "Websites", value: projects.filter((p) => p.category === "website").length },
  { label: "Games", value: projects.filter((p) => p.category === "game").length },
  { label: "Certificates", value: certificates.length },
];

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <SectionHeading title="about" />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-6 text-base leading-relaxed text-slate-300 md:col-span-3">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 md:col-span-2 md:grid-cols-1">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <div className="rounded-md border border-white/10 bg-white/[0.02] p-6">
                <p className="font-display text-4xl font-medium text-white">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
