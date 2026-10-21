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

      <div className="space-y-12">
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="space-y-6 text-base leading-relaxed text-slate-300 md:col-span-3">
            {profile.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} className="flex items-center justify-center md:col-span-2">
            <img
              src="/assets/webprofile-removebg-preview.png"
              alt={`${profile.name} profile picture`}
              className="h-auto w-full max-h-72 object-contain md:max-h-80"
            />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12} className="h-full">
              <div className="h-full rounded-md border border-white/10 bg-white/[0.02] p-6">
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
