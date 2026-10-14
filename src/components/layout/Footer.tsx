import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind.
        </p>
        <a href="#home" className="transition-colors hover:text-aurora-cyan">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
