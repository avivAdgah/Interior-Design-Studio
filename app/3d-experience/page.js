import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ThreeDViewerLoader from "@/components/ThreeDViewerLoader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Interactive 3D Experience",
  description:
    "Explore an architectural environment directly from your browser and experience its layout, scale, and spatial relationships from different perspectives.",
};

const FEATURES = [
  {
    title: "Free Exploration",
    description: "Navigate the space at your own pace.",
  },
  {
    title: "Multiple Perspectives",
    description: "View the project from different angles.",
  },
  {
    title: "Spatial Understanding",
    description:
      "Understand the relationship between rooms and circulation.",
  },
  {
    title: "Design Clarity",
    description: "Experience important design decisions before construction.",
  },
];

export default function ThreeDExperiencePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section>
        <Container className="pt-16 pb-16 md:pt-20 md:pb-20">
          <SectionHeader
            eyebrow="Interactive Design"
            heading="Experience the Space Before It's Built."
            headingLevel="h1"
            description="Explore an architectural environment directly from your browser and experience its layout, scale, and spatial relationships from different perspectives."
          />
        </Container>
      </section>

      {/* Viewer */}
      <section>
        <Container>
          <ThreeDViewerLoader />
          <p className="font-sans text-xs text-stone mt-4">
            Drag to rotate &middot; Scroll to zoom &middot; Use the controls
            below the viewer to reset the view or enter fullscreen. A full
            walking tour of the suite is coming soon.
          </p>
        </Container>
      </section>

      {/* Information */}
      <section className="border-t border-ink/10 mt-16 md:mt-20">
        <Container className="py-24 md:py-32">
          <SectionHeader
            eyebrow="Explore Freely"
            heading="Understand the Space From Every Angle."
            description="Interactive visualization helps communicate scale, circulation, proportion, and spatial relationships in ways that static drawings cannot."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mt-16">
            {FEATURES.map((feature, i) => (
              <div key={feature.title} className="flex flex-col gap-4">
                <span className="font-display text-bronze-deep text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        heading="Imagine Your Project Before It's Built."
        text="Interactive visualization can help turn drawings and concepts into experiences that are easier to understand."
        ctaLabel="Start a Project"
        ctaHref="/contact"
      />
    </main>
  );
}
