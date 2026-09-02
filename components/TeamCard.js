import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function TeamCard({ member, showIntro = false, headingLevel = "h3" }) {
  const HeadingTag = headingLevel;
  return (
    <Link href={`/team/${member.slug}`} className="group flex flex-col gap-4">
      <PlaceholderImage
        src={member.portrait.src}
        alt={member.portrait.alt}
        sizes="(min-width: 1024px) 23vw, 45vw"
        aspect="aspect-[3/4]"
        className="transition-opacity duration-300 group-hover:opacity-80"
      />
      <div>
        <HeadingTag className="font-display text-lg md:text-xl group-hover:text-bronze-deep transition-colors">
          {member.name}
        </HeadingTag>
        <p className="font-sans text-sm text-stone mt-1">{member.role}</p>
        {showIntro ? (
          <p className="font-sans text-sm text-stone mt-3 leading-relaxed">
            {member.intro}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
