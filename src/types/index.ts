export type ProjectCategory = "website" | "game" | "program" | "pwa";

export interface Profile {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  /** Rotating words shown in the hero ("I build ___"). */
  roles: string[];
  location: string;
  bio: string[];
  resumeUrl: string;
  email: string;
  socials: SocialLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
  /** Hover tooltip text keyed by skill name. */
  tooltips?: Record<string, string>;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  /** Format: YYYY-MM. Omit if unknown. */
  date?: string;
  description: string;
  tags: string[];
  /** Live site / playable build. Use "#" if there isn't one yet. */
  liveUrl: string;
  /** Source code repository. Use "#" if private or not published. */
  repoUrl: string;
  /** Optional image inside /public, e.g. "/images/my-project.png". */
  image?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  /** Format: YYYY-MM */
  date: string;
  credentialUrl: string;
  /** Optional image inside /public, e.g. "/certificates/my-cert.png". */
  image?: string;
}
