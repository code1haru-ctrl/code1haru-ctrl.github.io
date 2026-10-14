interface MarqueeProps {
  items: string[];
}

/** Endless horizontally-scrolling strip of words. Duplicated once so the loop is seamless. */
export default function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-5"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 font-display text-2xl font-semibold text-slate-500"
          >
            {item}
            <span className="text-aurora-violet">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
