import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/projects";
import type { ProjectCategory } from "../../types";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";

type Filter = "all" | ProjectCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "website", label: "Websites" },
  { id: "game", label: "Games" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      [...projects]
        .filter((p) => filter === "all" || p.category === filter)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [filter],
  );

  return (
    <section id="projects" className="section-wrap">
      <SectionHeading index="03" eyebrow="Projects" title="Things I've built" />

      <Reveal className="mb-10">
        <div role="tablist" aria-label="Filter projects" className="glass inline-flex rounded-full p-1">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === item.id ? "text-ink-950" : "text-slate-400 hover:text-white"
              }`}
            >
              {filter === item.id && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-10 text-slate-500">Nothing here yet. Check back soon.</p>
      )}
    </section>
  );
}
