import Container from "@/components/Container";
import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";

export default function ServiceSection({
  eyebrow,
  heading,
  description,
  scope,
  imageSrc,
  imageAlt,
  reverse = false,
  ctaLabel,
  ctaHref,
}) {
  return (
    <section className="border-t border-ink/10">
      <Container className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div
          className={`lg:col-span-5 flex flex-col gap-6 ${
            reverse ? "lg:order-2 lg:col-start-8" : ""
          }`}
        >
          {eyebrow ? (
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-bronze-deep">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-display font-normal text-3xl md:text-4xl leading-[1.15]">
            {heading}
          </h2>
          <p className="font-sans text-base text-stone leading-relaxed max-w-md">
            {description}
          </p>
          {scope?.length ? (
            <ul className="flex flex-col gap-2 mt-2">
              {scope.map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-ink flex items-center gap-3"
                >
                  <span className="h-px w-4 bg-bronze shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {ctaLabel && ctaHref ? (
            <Button href={ctaHref} variant="secondary" className="w-fit mt-2">
              {ctaLabel}
            </Button>
          ) : null}
        </div>
        <div className={`lg:col-span-6 ${reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
          <PlaceholderImage
            src={imageSrc}
            alt={imageAlt}
            sizes="(min-width: 1024px) 50vw, 100vw"
            aspect="aspect-[4/3]"
          />
        </div>
      </Container>
    </section>
  );
}
