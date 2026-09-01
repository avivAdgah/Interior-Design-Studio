import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import TeamGrid from "@/components/TeamGrid";
import { TEAM } from "@/lib/team";

export const metadata = {
  title: "Team",
  description:
    "Our work is shaped by collaboration between architects, designers, and project professionals.",
};

export default function TeamPage() {
  return (
    <main className="flex-1">
      <Container className="pt-16 pb-16 md:pt-20 md:pb-20">
        <SectionHeader
          eyebrow="The Team"
          heading="The People Behind Northline."
          headingLevel="h1"
          description="Our work is shaped by collaboration between architects, designers, and project professionals."
        />
      </Container>
      <Container className="pb-24 md:pb-32">
        <TeamGrid members={TEAM} showIntro headingLevel="h2" />
      </Container>
    </main>
  );
}
