import { certificates } from "../../data/certificates";
import { formatDate } from "../../lib/formatDate";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Certificates() {
  const sorted = [...certificates].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="certificates" className="section-wrap">
      <SectionHeading title="certificates" />

      <ol className="space-y-4">
        {sorted.map((cert, i) => (
          <li key={cert.id}>
            <Reveal delay={i * 0.08}>
              <div className="flex flex-col gap-3 rounded-md border border-white/10 bg-white/[0.02] p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-lg font-medium text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    {formatDate(cert.date)}
                  </span>
                  {cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
                    >
                      view ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
