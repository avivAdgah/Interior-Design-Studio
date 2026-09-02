import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import PlaceholderImage from "@/components/PlaceholderImage";
import { PROJECTS, getProject, getNextProject } from "@/lib/projects";
import { getTeamMembersByProject } from "@/lib/team";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description[0],
  };
}

const INFO_ROWS = [
  { key: "type", label: "Type" },
  { key: "scope", label: "Scope" },
  { key: "location", label: "Location" },
  { key: "year", label: "Year" },
  { key: "status", label: "Status" },
];

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const team = getTeamMembersByProject(project.slug);
  const nextProject = getNextProject(project.slug);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section>
        <Container className="pt-16 pb-10 md:pt-20 md:pb-12">
          <h1 className="font-display font-normal text-4xl md:text-6xl leading-[1.1] max-w-3xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 font-sans text-sm text-stone uppercase tracking-wide">
            <span>{project.categoryLabel}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
        </Container>
        <Container>
          <PlaceholderImage
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            sizes="100vw"
            priority
            aspect="aspect-[16/9]"
          />
        </Container>
      </section>

      {/* Overview */}
      <section className="border-t border-ink/10">
        <Container className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-display font-normal text-2xl md:text-4xl leading-[1.2]">
              {project.overviewHeading}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
            {project.description.map((paragraph) => (
              <p
                key={paragraph}
                className="font-sans text-base md:text-lg text-stone leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Information */}
      <section className="border-t border-ink/10 bg-charcoal text-cream">
        <Container className="py-16 md:py-20">
          <dl className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {INFO_ROWS.map((row) => (
              <div key={row.key} className="flex flex-col gap-2">
                <dt className="font-sans text-xs tracking-[0.2em] uppercase text-bronze">
                  {row.label}
                </dt>
                <dd className="font-display text-lg md:text-xl">
                  {project[row.key]}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Gallery */}
      <section className="border-t border-ink/10">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((image) => (
              <PlaceholderImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 768px) 45vw, 100vw"
                aspect="aspect-[4/3]"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      {team.length ? (
        <section className="border-t border-ink/10">
          <Container className="py-20 md:py-28">
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-bronze-deep">
              Project Team
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
              {team.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="font-display text-xl md:text-2xl hover:text-bronze-deep transition-colors"
                >
                  {member.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Next Project */}
      <section className="border-t border-ink/10">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block"
        >
          <Container className="py-20 md:py-28 flex flex-col gap-4">
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-bronze-deep">
              Next Project
            </span>
            <span className="font-display text-3xl md:text-5xl group-hover:text-bronze-deep transition-colors">
              {nextProject.title} &rarr;
            </span>
          </Container>
        </Link>
      </section>
    </main>
  );
}
