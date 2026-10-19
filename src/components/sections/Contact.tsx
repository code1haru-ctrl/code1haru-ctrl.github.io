import { profile } from "../../data/profile";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <SectionHeading title="contact" />

      <Reveal>
        <div>
          <p className="max-w-lg text-base text-slate-300">
            Have an idea, a project, or just want to say hi? My inbox is open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block font-display text-xl font-medium text-white underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-white sm:text-2xl"
          >
            {profile.email}
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-white/30 hover:text-white"
            >
              send an email
            </a>
            {profile.socials
              .filter((s) => s.label !== "Email")
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  {social.label.toLowerCase()} ↗
                </a>
              ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
