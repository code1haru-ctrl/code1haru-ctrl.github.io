import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/projects";
import type { ProjectCategory } from "../../types";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";

type Filter = "all" | ProjectCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "all" },
  { id: "website", label: "websites" },
  { id: "game", label: "games" },
  { id: "program", label: "programs" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      [...projects]
        .filter((p) => filter === "all" || p.category === filter)
        .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "")),
    [filter],
  );

  return (
    <section id="projects" className="section-wrap">
      <SectionHeading title="projects" />

      <Reveal className="mb-10">
        <div
          role="tablist"
          aria-label="Filter projects"
          className="flex flex-wrap gap-6 border-b border-white/10"
        >
          {FILTERS.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`relative pb-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                filter === item.id ? "text-white" : "text-slate-500 hover:text-white"
              }`}
            >
              {filter === item.id && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute inset-x-0 bottom-0 h-px bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
