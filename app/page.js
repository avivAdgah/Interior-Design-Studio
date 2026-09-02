import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";
import ProjectGrid from "@/components/ProjectGrid";
import TeamGrid from "@/components/TeamGrid";
import CTASection from "@/components/CTASection";
import { getFeaturedProjects } from "@/lib/projects";
import { TEAM } from "@/lib/team";
import { pexels } from "@/lib/images";

const SERVICES_PREVIEW = [
  {
    title: "Architecture",
    description:
      "Thoughtful architectural solutions shaped around context, function, and everyday life.",
  },
  {
    title: "Interior Design",
    description:
      "Interior environments designed around material, atmosphere, movement, and comfort.",
  },
  {
    title: "Renovation",
    description:
      "Transformation of existing spaces through careful planning and design.",
  },
  {
    title: "3D Visualization",
    description:
      "Interactive and visual tools that help clients understand spaces before they are built.",
  },
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const teamPreview = TEAM.slice(0, 4);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section>
        <Container className="pt-16 pb-24 md:pt-20 md:pb-32">
          <SectionHeader
            eyebrow="Architecture / Interiors / Experience"
            heading="We Design Spaces for the Way People Live."
            headingLevel="h1"
            description="Northline Studio creates thoughtful architecture and interior environments shaped by context, function, material, and the people who inhabit them."
          />
          <div className="flex flex-wrap gap-4 mt-10">
            <Button href="/projects" variant="primary">
              Explore Our Work
            </Button>
            <Button href="/contact" variant="secondary">
              Start a Project
            </Button>
          </div>
          <PlaceholderImage
            src={pexels(8134745, 1920)}
            alt="Featured Northline Studio architecture project — modern house with swimming pool"
            sizes="100vw"
            priority
            aspect="aspect-[16/9]"
            className="mt-16"
          />
        </Container>
      </section>

      {/* Introduction */}
      <section className="border-t border-ink/10">
        <Container className="py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="The Studio" heading="Spaces With Purpose." />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-8">
            <p className="font-sans text-base md:text-lg text-stone leading-relaxed max-w-xl">
              We believe meaningful design begins with understanding how a
              space will be experienced. From architecture to interiors,
              every decision is guided by function, proportion, material,
              light, and human interaction.
            </p>
            <Button href="/about" variant="ghost" className="w-fit">
              About Northline
            </Button>
          </div>
        </Container>
      </section>

      {/* Selected Projects */}
      <section className="border-t border-ink/10">
        <Container className="py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeader eyebrow="Selected Work" heading="Projects" />
            <Button href="/projects" variant="secondary" className="w-fit shrink-0">
              View All Projects
            </Button>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </Container>
      </section>

      {/* Services Preview */}
      <section className="border-t border-ink/10 bg-charcoal text-cream">
        <Container className="py-24 md:py-32">
          <SectionHeader
            tone="dark"
            eyebrow="What We Do"
            heading="From First Idea to Finished Space"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mt-16">
            {SERVICES_PREVIEW.map((service, i) => (
              <div key={service.title} className="flex flex-col gap-4">
                <span className="font-display text-bronze text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-cream/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <Button href="/services" variant="inverse" className="mt-16 w-fit">
            Explore Our Services
          </Button>
        </Container>
      </section>

      {/* 3D Experience Preview */}
      <section className="border-t border-ink/10">
        <Container className="py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SectionHeader
              eyebrow="Interactive Experience"
              heading="Step Inside the Design."
              description="Explore selected spaces through an interactive 3D experience and understand the design from an entirely different perspective."
            />
            <Button href="/3d-experience" variant="primary" className="w-fit">
              Explore in 3D
            </Button>
          </div>
          <div className="lg:col-span-7">
            <PlaceholderImage
              src={pexels(209630, 1400)}
              alt="Interactive 3D architectural visualization preview"
              sizes="(min-width: 1024px) 55vw, 100vw"
              aspect="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      {/* Team Preview */}
      <section className="border-t border-ink/10">
        <Container className="py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeader
              eyebrow="The People"
              heading="Meet the People Behind the Spaces."
              description="Architecture is collaborative. Meet the designers, architects, and project professionals behind Northline Studio."
            />
            <Button href="/team" variant="secondary" className="w-fit shrink-0">
              Meet the Team
            </Button>
          </div>
          <TeamGrid members={teamPreview} />
        </Container>
      </section>

      {/* Final CTA */}
      <CTASection
        heading="Have a Space in Mind?"
        text="Tell us about your project and let's explore what it could become."
        ctaLabel="Start a Conversation"
        ctaHref="/contact"
      />
    </main>
  );
}
