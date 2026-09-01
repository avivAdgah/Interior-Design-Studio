import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid({ projects, headingLevel = "h3", className = "" }) {
  if (!projects.length) {
    return (
      <p className="font-sans text-stone py-16 text-center">
        No projects match this filter yet.
      </p>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-14 ${className}`}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} headingLevel={headingLevel} />
      ))}
    </div>
  );
}
