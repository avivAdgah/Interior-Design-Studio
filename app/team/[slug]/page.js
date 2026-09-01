import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProjectGrid from "@/components/ProjectGrid";
import { TEAM, getTeamMember } from "@/lib/team";
import { getProjectsByTeamMember } from "@/lib/projects";

export function generateStaticParams() {
  return TEAM.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return { title: "Team Member Not Found" };
  return {
    title: member.name,
    description: member.bio,
  };
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const projects = getProjectsByTeamMember(member.slug);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section>
        <Container className="pt-16 pb-24 md:pt-20 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <PlaceholderImage
              label={member.portraitLabel}
              alt={`Portrait of ${member.name}`}
              aspect="aspect-[3/4]"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-6">
            <h1 className="font-display font-normal text-4xl md:text-5xl leading-[1.1]">
              {member.name}
            </h1>
            <p className="font-sans text-sm md:text-base tracking-wide uppercase text-bronze-deep">
              {member.role}
            </p>
            <p className="font-sans text-base md:text-lg text-stone leading-relaxed max-w-lg">
              {member.bio}
            </p>

            <div className="mt-4">
              <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-bronze-deep">
                Focus
              </span>
              <ul className="flex flex-wrap gap-x-8 gap-y-2 mt-4">
                {member.focus.map((item) => (
                  <li key={item} className="font-sans text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Work */}
      {projects.length ? (
        <section className="border-t border-ink/10">
          <Container className="py-20 md:py-28">
            <h2 className="font-display font-normal text-3xl md:text-4xl leading-[1.15] mb-16">
              Selected Work
            </h2>
            <ProjectGrid projects={projects} />
          </Container>
        </section>
      ) : null}
    </main>
  );
}
