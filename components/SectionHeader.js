export default function SectionHeader({
  eyebrow,
  heading,
  headingLevel = "h2",
  description,
  align = "left",
  tone = "light",
  className = "",
}) {
  const HeadingTag = headingLevel;
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const bronzeClass = tone === "dark" ? "text-bronze" : "text-bronze-deep";

  return (
    <div className={`flex flex-col gap-5 ${alignClass} ${className}`}>
      {eyebrow ? (
        <span className={`font-sans text-xs md:text-sm tracking-[0.2em] uppercase ${bronzeClass}`}>
          {eyebrow}
        </span>
      ) : null}
      {heading ? (
        <HeadingTag className="font-display font-normal text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl">
          {heading}
        </HeadingTag>
      ) : null}
      {description ? (
        <p className="font-sans text-base md:text-lg text-stone max-w-xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
