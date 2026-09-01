export const TEAM = [
  {
    slug: "emma-north",
    name: "Emma North",
    role: "Founder & Creative Director",
    intro:
      "Emma leads the creative direction of Northline Studio, focusing on the relationship between architecture, interiors, material, and human experience.",
    bio: "Emma leads the creative direction of Northline Studio, focusing on the relationship between architecture, interiors, material, and human experience.",
    focus: [
      "Architecture",
      "Interior Direction",
      "Concept Development",
      "Material Strategy",
    ],
    portraitLabel: "[PORTRAIT — EMMA NORTH]",
    projects: ["riverside-house", "courtyard-house"],
  },
  {
    slug: "daniel-reed",
    name: "Daniel Reed",
    role: "Lead Architect",
    intro:
      "Daniel oversees architectural design and technical delivery, shaping projects around context, structure, and everyday function.",
    bio: "Daniel oversees architectural design and technical delivery, shaping projects around context, structure, and everyday function.",
    focus: [
      "Architectural Design",
      "Spatial Planning",
      "Technical Coordination",
      "Design Development",
    ],
    portraitLabel: "[PORTRAIT — DANIEL REED]",
    projects: ["riverside-house", "horizon-offices", "meadow-pavilion"],
  },
  {
    slug: "sophie-carter",
    name: "Sophie Carter",
    role: "Interior Designer",
    intro:
      "Sophie shapes interior atmospheres through material, lighting, and furniture direction, balancing comfort with considered design.",
    bio: "Sophie shapes interior atmospheres through material, lighting, and furniture direction, balancing comfort with considered design.",
    focus: [
      "Interior Design",
      "Material Selection",
      "Lighting Concepts",
      "Styling",
    ],
    portraitLabel: "[PORTRAIT — SOPHIE CARTER]",
    projects: ["oak-residence"],
  },
  {
    slug: "james-holloway",
    name: "James Holloway",
    role: "Project Manager",
    intro:
      "James coordinates projects from concept through delivery, keeping design intent, timelines, and client communication aligned.",
    bio: "James coordinates projects from concept through delivery, keeping design intent, timelines, and client communication aligned.",
    focus: [
      "Project Coordination",
      "Client Communication",
      "Scheduling",
      "Delivery",
    ],
    portraitLabel: "[PORTRAIT — JAMES HOLLOWAY]",
    projects: ["horizon-offices", "elmwood-renovation"],
  },
  {
    slug: "maya-brooks",
    name: "Maya Brooks",
    role: "Architectural Designer",
    intro:
      "Maya develops architectural concepts and spatial studies, translating early ideas into coherent, buildable designs.",
    bio: "Maya develops architectural concepts and spatial studies, translating early ideas into coherent, buildable designs.",
    focus: [
      "Concept Design",
      "Spatial Studies",
      "Renovation Planning",
      "Design Documentation",
    ],
    portraitLabel: "[PORTRAIT — MAYA BROOKS]",
    projects: ["courtyard-house", "elmwood-renovation"],
  },
  {
    slug: "oliver-grant",
    name: "Oliver Grant",
    role: "3D Visualization Artist",
    intro:
      "Oliver builds the visual and interactive models that help clients understand a project's scale and atmosphere before it is built.",
    bio: "Oliver builds the visual and interactive models that help clients understand a project's scale and atmosphere before it is built.",
    focus: [
      "3D Visualization",
      "Interactive Models",
      "Lighting Studies",
      "Walkthrough Design",
    ],
    portraitLabel: "[PORTRAIT — OLIVER GRANT]",
    projects: ["meadow-pavilion"],
  },
];

export function getTeamMember(slug) {
  return TEAM.find((member) => member.slug === slug);
}

export function getTeamMembersByProject(projectSlug) {
  return TEAM.filter((member) => member.projects.includes(projectSlug));
}
