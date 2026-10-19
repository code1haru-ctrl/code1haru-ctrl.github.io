import Reveal from "./Reveal";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10">
      <h2 className="font-display text-3xl font-medium lowercase tracking-tight text-white">
        {title}
      </h2>
    </Reveal>
  );
}
