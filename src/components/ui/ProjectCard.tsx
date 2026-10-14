import type { Project } from "../../types";
import { formatDate } from "../../lib/formatDate";
import TiltCard from "./TiltCard";

interface ProjectCardProps {
  project: Project;
}

const CATEGORY_STYLES: Record<Project["category"], string> = {
  website: "bg-aurora-cyan/15 text-aurora-cyan",
  game: "bg-aurora-pink/15 text-aurora-pink",
};

function isReal(url: string): boolean {
  return url !== "" && url !== "#";
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard className="h-full">
      <article className="flex h-full flex-col p-7">
        <div className="mb-5 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${CATEGORY_STYLES[project.category]}`}
          >
            {project.category}
          </span>
          <span className="font-mono text-xs text-slate-500">{formatDate(project.date)}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-5 text-sm font-medium">
          {isReal(project.liveUrl) && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-aurora-cyan transition-colors hover:text-white"
            >
              {project.category === "game" ? "Play" : "Live site"} ↗
            </a>
          )}
          {isReal(project.repoUrl) && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Code ↗
            </a>
          )}
        </div>
      </article>
    </TiltCard>
  );
}
