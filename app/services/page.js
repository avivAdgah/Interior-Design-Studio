import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ServiceSection from "@/components/ServiceSection";
import { pexels } from "@/lib/images";

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
        imageSrc={pexels(19541342, 1400)}
        imageAlt="Geometric modern architecture facade"
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
        imageSrc={pexels(20390760, 1400)}
        imageAlt="Elegant modern minimalist interior"
        reverse
      />

      <ServiceSection
        heading="Renovation"
        description="We help transform existing buildings and interiors while respecting their constraints, opportunities, and character."
        imageSrc={pexels(7045945, 1400)}
        imageAlt="Renovated loft-style apartment interior"
      />

      <ServiceSection
        heading="3D Visualization"
        description="Visualize the project before construction begins through architectural models, spatial visualization, and interactive experiences."
        imageSrc={pexels(9618450, 1400)}
        imageAlt="Architect working with an architectural model"
        reverse
        ctaLabel="Experience a Project in 3D"
        ctaHref="/3d-experience"
      />
    </main>
  );
}
