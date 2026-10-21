import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "../../hooks/useActiveSection";
import { profile } from "../../data/profile";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "tech stack" },
  { id: "projects", label: "projects" },
  { id: "certificates", label: "certificates" },
  { id: "contact", label: "contact" },
];

const SECTION_IDS = ["home", ...NAV_ITEMS.map((item) => item.id)];

export default function Navbar() {
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-colors duration-150 ${open ? "bg-[#0B0B0D]" : "bg-[#0B0B0D]/90 backdrop-blur-md"
        }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4"
      >
        <a href="#home" className="font-display text-lg font-medium lowercase text-white">
          {profile.name.toLowerCase()}
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${active === item.id
                  ? "border-b border-white pb-0.5 text-white"
                  : "border-b border-transparent pb-0.5 text-slate-500 hover:text-white"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md outline-none focus-visible:ring-1 focus-visible:ring-white md:hidden"
        >
          <span
            className={`h-px w-5 bg-white transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
          />
          <span
            className={`h-px w-5 bg-white transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full flex transform-gpu flex-col gap-4 border-b border-white/10 bg-[#0B0B0D] px-6 py-6 shadow-2xl will-change-transform md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${active === item.id ? "text-white" : "text-slate-500 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
