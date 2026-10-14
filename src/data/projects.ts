import type { Project } from "../types";

// ✏️ Add one object per website or game. The page sorts by date automatically.
// These are sample entries. Replace them with your real work.
export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "Personal Portfolio",
    category: "website",
    date: "2026-10",
    description:
      "This site: a React + TypeScript portfolio with scroll-driven motion, built to track everything I make.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "sample-platformer",
    title: "Sample 2D Platformer",
    category: "game",
    date: "2026-07",
    description:
      "A short platformer with three levels, made to learn collision handling and simple state machines.",
    tags: ["Unity", "C#"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "sample-landing-page",
    title: "Sample Landing Page",
    category: "website",
    date: "2026-03",
    description:
      "A responsive single-page site for a fictional small business, focused on shipping something end to end.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "sample-puzzle-game",
    title: "Sample Puzzle Game",
    category: "game",
    date: "2025-12",
    description:
      "A small browser puzzle game exploring grid logic, score tracking, and game feel.",
    tags: ["JavaScript", "Canvas"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
