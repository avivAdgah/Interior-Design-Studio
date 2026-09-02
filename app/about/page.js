import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";
import { pexels } from "@/lib/images";

export const metadata = {
  title: "About",
  description:
    "Northline Studio is an architecture and interior design practice focused on creating thoughtful spaces that balance function, atmosphere, and human experience.",
};

const VALUES = [
  {
    title: "Context",
    description: "Every project begins with its surroundings.",
  },
  {
    title: "Function",
    description: "Beautiful spaces must work beautifully.",
  },
  {
    title: "Material",
    description: "Materials shape both atmosphere and experience.",
  },
  {
    title: "People",
    description: "Ultimately, architecture exists for the people who use it.",
  },
];

const PROCESS_STEPS = [
  "Discover",
  "Define",
  "Design",
  "Develop",
  "Deliver",
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section>
        <Container className="pt-16 pb-24 md:pt-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="About Northline"
              heading="Designing With Purpose."
              headingLevel="h1"
              description="Northline Studio is an architecture and interior design practice focused on creating thoughtful spaces that balance function, atmosphere, and human experience."
            />
          </div>
        </Container>
        <Container>
          <PlaceholderImage
            src={pexels(6615095, 1920)}
            alt="Northline Studio team reviewing architectural blueprints"
            sizes="100vw"
            priority
            aspect="aspect-[21/9]"
          />
        </Container>
      </section>

      {/* Philosophy */}
      <section className="border-t border-ink/10">
        <Container className="py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="font-display font-normal text-3xl md:text-4xl leading-[1.15]">
              Our Approach
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-6">
            <p className="font-sans text-base md:text-lg text-stone leading-relaxed">
              We approach every project as a conversation between people,
              place, material, and purpose.
            </p>
            <p className="font-sans text-base md:text-lg text-stone leading-relaxed">
              Rather than applying a predetermined style, we begin by
              understanding how the space needs to work, how it should feel,
              and how it will evolve over time.
            </p>
            <p className="font-sans text-base md:text-lg text-stone leading-relaxed">
              The result is architecture that feels considered rather than
              imposed.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-ink/10 bg-charcoal text-cream">
        <Container className="py-24 md:py-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {VALUES.map((value, i) => (
              <div key={value.title} className="flex flex-col gap-4">
                <span className="font-display text-bronze text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl">
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-cream/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Preview */}
      <section className="border-t border-ink/10">
        <Container className="py-24 md:py-32">
          <div className="flex flex-col divide-y divide-ink/10 border-t border-b border-ink/10">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step}
                className="flex items-baseline gap-6 py-6 md:py-8"
              >
                <span className="font-display text-bronze-deep text-sm md:text-base w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl md:text-4xl">
                  {step}
                </span>
              </div>
            ))}
          </div>
          <Button href="/services" variant="secondary" className="mt-16 w-fit">
            Explore Our Services
          </Button>
        </Container>
      </section>
    </main>
  );
}
