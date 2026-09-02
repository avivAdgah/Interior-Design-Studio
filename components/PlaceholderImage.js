import Image from "next/image";

export default function PlaceholderImage({
  label,
  src,
  aspect = "aspect-[4/5]",
  className = "",
  alt,
  sizes = "100vw",
  priority = false,
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden bg-mist ${aspect} ${className}`}
      >
        <Image
          src={src}
          alt={alt || label || ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt || label}
      className={`relative flex items-center justify-center overflow-hidden bg-mist border border-ink/10 ${aspect} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(45deg,#111_25%,transparent_25%),linear-gradient(-45deg,#111_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#111_75%),linear-gradient(-45deg,transparent_75%,#111_75%)] [background-size:24px_24px]" />
      <span className="relative font-sans text-[11px] md:text-xs tracking-[0.15em] uppercase text-stone text-center px-6">
        {label}
      </span>
    </div>
  );
}
