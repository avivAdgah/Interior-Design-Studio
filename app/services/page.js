import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ServiceSection from "@/components/ServiceSection";

export const metadata = {
  title: "Services",
  description:
    "We work across architecture, interiors, renovation, planning, and visualization to create coherent spaces from the first idea through delivery.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section>
        <Container className="pt-16 pb-16 md:pt-20 md:pb-20">
          <SectionHeader
            eyebrow="Services"
            heading="From Concept to Completion."
            headingLevel="h1"
            description="We work across architecture, interiors, renovation, planning, and visualization to create coherent spaces from the first idea through delivery."
          />
        </Container>
      </section>

      <ServiceSection
        heading="Architecture"
        description="We design residential and commercial architecture around context, proportion, light, movement, and function."
        scope={[
          "Concept development",
          "Spatial planning",
          "Architectural design",
          "Design development",
          "Material direction",
          "Coordination",
        ]}
        imageLabel="[ARCHITECTURE SERVICE IMAGE]"
      />

      <ServiceSection
        heading="Interior Design"
        description="We create interior environments that balance aesthetics, functionality, material, lighting, and everyday experience."
        scope={[
          "Space planning",
          "Material selection",
          "Lighting concepts",
          "Furniture direction",
          "Custom elements",
          "Styling",
        ]}
        imageLabel="[INTERIOR DESIGN IMAGE]"
        reverse
      />

      <ServiceSection
        heading="Renovation"
        description="We help transform existing buildings and interiors while respecting their constraints, opportunities, and character."
        imageLabel="[RENOVATION PROJECT IMAGE]"
      />

      <ServiceSection
        heading="3D Visualization"
        description="Visualize the project before construction begins through architectural models, spatial visualization, and interactive experiences."
        imageLabel="[INTERACTIVE 3D PREVIEW]"
        reverse
        ctaLabel="Experience a Project in 3D"
        ctaHref="/3d-experience"
      />
    </main>
  );
}
