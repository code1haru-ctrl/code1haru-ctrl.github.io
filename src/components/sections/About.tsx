import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import { certificates } from "../../data/certificates";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";
import Marquee from "../ui/Marquee";

const STATS = [
  { label: "Websites", value: projects.filter((p) => p.category === "website").length },
  { label: "Games", value: projects.filter((p) => p.category === "game").length },
  { label: "Certificates", value: certificates.length },
];

export default function About() {
  return (
    <>
      <Marquee items={["Websites", "Games", "Certificates", "Interfaces", "Motion", "Ideas"]} />

      <section id="about" className="section-wrap">
        <SectionHeading index="01" eyebrow="About" title="A little about me" />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-6 text-lg leading-relaxed text-slate-400 md:col-span-3">
            {profile.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.12} from="left">
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 md:col-span-2 md:grid-cols-1">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.12} from="right">
                <div className="glass rounded-2xl p-6">
                  <p className="font-display text-5xl font-bold text-white">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
