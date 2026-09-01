import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-ink text-cream border border-ink hover:bg-transparent hover:text-ink",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  inverse:
    "bg-cream text-ink border border-cream hover:bg-transparent hover:text-cream",
  ghost:
    "bg-transparent text-ink border border-transparent hover:border-bronze-deep px-0",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-wide uppercase transition-colors duration-300 min-h-11";
  const classes = `${base} ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
