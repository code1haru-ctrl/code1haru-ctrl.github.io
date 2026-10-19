import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "portfolio-site",
    title: "Website Portfolio",
    category: "website",
    date: "2026-10",
    description:
      "The site you're on: a React and TypeScript portfolio with scroll-driven motion that tracks my projects, games, and certificates.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "#",
    repoUrl: "https://github.com/code1haru-ctrl/codeharu-ctrl.github.io",
  },
  {
    id: "brother-bean-pos",
    title: "Brother Bean POS",
    category: "website",
    date: "2026-05",
    description:
      "A cashier and admin system for a café, built by a team of 3. Cashiers enter customer orders, print receipts, and use the other tools needed to run a counter smoothly. The owner can see how much the café earns per day, week, and month, view analytics, and browse stored copies of receipts.",
    tags: ["JavaScript", "Firebase"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "car-game",
    title: "Basic Car Game",
    category: "game",
    date: "2026-05",
    description:
      "A basic car game built in Java by a team of 4 for a school project. It runs on an Apache server and isn't published online.",
    tags: ["Java", "Apache"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "currency-converter",
    title: "World Currency Converter",
    category: "program",
    description:
      "A currency converter covering currencies from around the world, built in C++ by a team of 4 for a school project. It runs only in the terminal and isn't published.",
    tags: ["C++"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
