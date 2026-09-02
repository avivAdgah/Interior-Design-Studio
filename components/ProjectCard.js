import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function ProjectCard({ project, headingLevel = "h3" }) {
  const HeadingTag = headingLevel;
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-4"
    >
      <PlaceholderImage
        src={project.cardImage.src}
        alt={project.cardImage.alt}
        sizes="(min-width: 1024px) 45vw, 100vw"
        aspect="aspect-[4/3]"
        className="transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <HeadingTag className="font-display text-xl md:text-2xl group-hover:text-bronze-deep transition-colors">
            {project.title}
          </HeadingTag>
          <p className="font-sans text-sm text-stone mt-1">
            {project.categoryLabel}
          </p>
          <p className="font-sans text-sm text-stone">{project.location}</p>
        </div>
        <span className="font-sans text-xs text-stone tracking-wide uppercase whitespace-nowrap mt-1">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
