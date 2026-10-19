import type { Project } from "../../types";
import { formatDate } from "../../lib/formatDate";

interface ProjectCardProps {
  project: Project;
}

function isReal(url: string): boolean {
  return url !== "" && url !== "#";
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-md border border-white/10 bg-white/[0.02] p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
          {project.category}
        </span>
        {project.date && (
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {formatDate(project.date)}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-medium text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-slate-400"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-5 text-sm">
        {isReal(project.liveUrl) && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
          >
            {project.category === "game" ? "play" : "live site"} ↗
          </a>
        )}
        {isReal(project.repoUrl) && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
          >
            code ↗
          </a>
        )}
      </div>
    </article>
  );
}
