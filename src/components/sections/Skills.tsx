import { skillGroups } from "../../data/skills";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading title="tech stack" />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1} className="h-full">
            <div className="h-full rounded-md border border-white/10 bg-white/[0.02] p-6">
              <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const tooltip = group.tooltips?.[item];
                  return (
                    <li
                      key={item}
                      className="group relative rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-slate-300"
                    >
                      {item}
                      {tooltip && (
                        <span
                          role="tooltip"
                          className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0B0B0D] px-2.5 py-1.5 font-mono text-[11px] text-slate-400 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"
                        >
                          {tooltip}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
