import Link from "next/link";

export default function Logo({ className = "", tone = "ink" }) {
  const toneClass = tone === "cream" ? "text-cream" : "text-ink";
  const bronzeClass = tone === "cream" ? "text-bronze" : "text-bronze-deep";
  return (
    <Link
      href="/"
      className={`inline-flex flex-col leading-none font-display ${toneClass} ${className}`}
      aria-label="Northline Studio — Home"
    >
      <span className="text-lg md:text-xl tracking-[0.08em]">NORTHLINE</span>
      <span className={`text-[10px] md:text-[11px] tracking-[0.35em] ${bronzeClass} font-sans mt-1`}>
        STUDIO
      </span>
    </Link>
  );
}
