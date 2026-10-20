import type { Certificate } from "../types";

// ✏️ Add one object per certificate. Put images in /public/certificates/.
// These are sample entries. Replace them with your real certificates.
export const certificates: Certificate[] = [
  {
    id: "sample-web-dev",
    title: "JavaScript Essential 1",
    issuer: "DICT-ITU DTC Initiative",
    date: "2026-06",
    credentialUrl: "#",
  },
  {
    id: "sample-javascript",
    title: "JavaScript Algorithms",
    issuer: "Sample Platform",
    date: "2025-10",
    credentialUrl: "#",
  },
  {
    id: "sample-game-dev",
    title: "Intro to Game Development",
    issuer: "Sample Institute",
    date: "2025-06",
    credentialUrl: "#",
  },
];
