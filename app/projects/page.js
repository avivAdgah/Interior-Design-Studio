import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { PROJECTS } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description:
    "A collection of residential, commercial, interior, and architectural work by Northline Studio.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Container className="pt-16 pb-16 md:pt-20 md:pb-20">
        <SectionHeader
          eyebrow="Our Work"
          heading="Selected Projects"
          headingLevel="h1"
          description="A collection of residential, commercial, interior, and architectural work by Northline Studio."
        />
      </Container>
      <Container className="pb-24 md:pb-32">
        <ProjectsExplorer projects={PROJECTS} />
      </Container>
    </main>
  );
}
