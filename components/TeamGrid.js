import TeamCard from "@/components/TeamCard";

export default function TeamGrid({
  members,
  showIntro = false,
  headingLevel = "h3",
  className = "",
}) {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 ${className}`}
    >
      {members.map((member) => (
        <TeamCard
          key={member.slug}
          member={member}
          showIntro={showIntro}
          headingLevel={headingLevel}
        />
      ))}
    </div>
  );
}
