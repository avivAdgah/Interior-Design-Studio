import Container from "@/components/Container";
import Button from "@/components/Button";

export default function CTASection({
  heading,
  text,
  ctaLabel,
  ctaHref,
  tone = "dark",
}) {
  const isDark = tone === "dark";
  return (
    <section className={isDark ? "bg-ink text-cream" : "bg-cream text-ink"}>
      <Container className="py-24 md:py-32 flex flex-col items-center text-center gap-6">
        <h2 className="font-display font-normal text-3xl md:text-5xl leading-[1.15] max-w-2xl">
          {heading}
        </h2>
        {text ? (
          <p
            className={`font-sans text-base md:text-lg max-w-xl leading-relaxed ${
              isDark ? "text-cream/70" : "text-stone"
            }`}
          >
            {text}
          </p>
        ) : null}
        <Button href={ctaHref} variant={isDark ? "inverse" : "primary"} className="mt-4">
          {ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
