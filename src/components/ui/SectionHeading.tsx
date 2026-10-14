import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-aurora-cyan">
        <span className="text-slate-500">{index}</span>
        <span className="h-px w-10 bg-aurora-cyan/50" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
