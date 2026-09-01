export const PROJECT_FILTERS = [
  "All",
  "Residential",
  "Architecture",
  "Interiors",
  "Commercial",
  "Renovation",
];

export const PROJECTS = [
  {
    slug: "riverside-house",
    title: "Riverside House",
    categoryLabel: "Residential Architecture",
    categories: ["Residential", "Architecture"],
    location: "London, UK",
    year: "2026",
    status: "Concept Project",
    type: "Residential",
    scope: "Architecture + Interiors",
    featured: true,
    heroImage: "[RIVERSIDE HOUSE HERO IMAGE]",
    cardImage: "[RIVERSIDE HOUSE IMAGE]",
    overviewHeading: "A Home Shaped Around Light and Movement",
    description: [
      "Riverside House explores the relationship between open living spaces, natural light, privacy, and the surrounding landscape.",
      "The design organizes the home around a series of connected spaces that transition gradually between shared and private areas.",
    ],
    services: ["Architecture", "Interior Design", "3D Visualization"],
    gallery: [
      "[PROJECT EXTERIOR IMAGE]",
      "[LIVING AREA IMAGE]",
      "[KITCHEN IMAGE]",
      "[BEDROOM IMAGE]",
      "[DETAIL IMAGE]",
    ],
    team: ["emma-north", "daniel-reed"],
  },
  {
    slug: "oak-residence",
    title: "Oak Residence",
    categoryLabel: "Interior Design",
    categories: ["Residential", "Interiors"],
    location: "Bath, UK",
    year: "2026",
    status: "Concept Project",
    type: "Residential",
    scope: "Interior Design",
    featured: true,
    heroImage: "[OAK RESIDENCE HERO IMAGE]",
    cardImage: "[OAK RESIDENCE IMAGE]",
    overviewHeading: "An Interior Built Around Material and Warmth",
    description: [
      "Oak Residence reimagines a family home's interior through material honesty, texture, and considered lighting.",
      "Each room is treated as its own atmosphere while remaining part of a coherent material language throughout the home.",
    ],
    services: ["Interior Design", "Lighting Concepts", "Furniture Direction"],
    gallery: [
      "[PROJECT EXTERIOR IMAGE]",
      "[LIVING AREA IMAGE]",
      "[KITCHEN IMAGE]",
      "[BEDROOM IMAGE]",
      "[DETAIL IMAGE]",
    ],
    team: ["sophie-carter"],
  },
  {
    slug: "horizon-offices",
    title: "Horizon Offices",
    categoryLabel: "Workplace Design",
    categories: ["Commercial"],
    location: "Manchester, UK",
    year: "2025",
    status: "Concept Project",
    type: "Commercial",
    scope: "Architecture + Interiors",
    featured: true,
    heroImage: "[HORIZON OFFICES HERO IMAGE]",
    cardImage: "[HORIZON OFFICES IMAGE]",
    overviewHeading: "A Workplace Designed Around Focus and Collaboration",
    description: [
      "Horizon Offices balances open collaborative areas with quieter, focused workspaces across a converted industrial floor plate.",
      "Material choices and daylighting strategy work together to create a calm, considered working environment.",
    ],
    services: ["Architecture", "Interior Design", "Space Planning"],
    gallery: [
      "[PROJECT EXTERIOR IMAGE]",
      "[LIVING AREA IMAGE]",
      "[DETAIL IMAGE]",
    ],
    team: ["daniel-reed", "james-holloway"],
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    categoryLabel: "Architecture + Interiors",
    categories: ["Residential", "Architecture", "Interiors"],
    location: "Oxford, UK",
    year: "2026",
    status: "Concept Project",
    type: "Residential",
    scope: "Architecture + Interiors",
    featured: true,
    heroImage: "[COURTYARD HOUSE HERO IMAGE]",
    cardImage: "[COURTYARD HOUSE IMAGE]",
    overviewHeading: "A House Organized Around a Private Courtyard",
    description: [
      "Courtyard House is arranged around a central outdoor space that brings light and air into every room of the home.",
      "The plan blurs the line between inside and outside, letting the courtyard function as an additional living space.",
    ],
    services: ["Architecture", "Interior Design", "Material Direction"],
    gallery: [
      "[PROJECT EXTERIOR IMAGE]",
      "[LIVING AREA IMAGE]",
      "[KITCHEN IMAGE]",
      "[BEDROOM IMAGE]",
      "[DETAIL IMAGE]",
    ],
    team: ["emma-north", "maya-brooks"],
  },
  {
    slug: "elmwood-renovation",
    title: "Elmwood Renovation",
    categoryLabel: "Residential Renovation",
    categories: ["Residential", "Renovation"],
    location: "Bristol, UK",
    year: "2025",
    status: "Concept Project",
    type: "Residential",
    scope: "Renovation",
    featured: false,
    heroImage: "[ELMWOOD RENOVATION HERO IMAGE]",
    cardImage: "[ELMWOOD RENOVATION IMAGE]",
    overviewHeading: "Transforming a Period Home for Contemporary Life",
    description: [
      "Elmwood Renovation reworks a period terrace home, opening up the ground floor while respecting its original character.",
      "The design carefully balances new interventions with the building's existing constraints and detailing.",
    ],
    services: ["Renovation", "Interior Design"],
    gallery: [
      "[PROJECT EXTERIOR IMAGE]",
      "[LIVING AREA IMAGE]",
      "[DETAIL IMAGE]",
    ],
    team: ["maya-brooks", "james-holloway"],
  },
  {
    slug: "meadow-pavilion",
    title: "Meadow Pavilion",
    categoryLabel: "Architecture",
    categories: ["Architecture"],
    location: "Cotswolds, UK",
    year: "2025",
    status: "Concept Project",
    type: "Residential",
    scope: "Architecture + 3D Visualization",
    featured: false,
    heroImage: "[MEADOW PAVILION HERO IMAGE]",
    cardImage: "[MEADOW PAVILION IMAGE]",
    overviewHeading: "A Garden Pavilion Framed by Its Landscape",
    description: [
      "Meadow Pavilion is a standalone garden structure designed to frame views of the surrounding countryside.",
      "An interactive 3D model was used throughout the design process to communicate scale and proportion to the client.",
    ],
    services: ["Architecture", "3D Visualization"],
    gallery: [
      "[PROJECT EXTERIOR IMAGE]",
      "[DETAIL IMAGE]",
    ],
    team: ["daniel-reed", "oliver-grant"],
  },
];

export function getProject(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return PROJECTS.filter((project) => project.featured);
}

export function getNextProject(slug) {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) return PROJECTS[0];
  return PROJECTS[(index + 1) % PROJECTS.length];
}

export function getProjectsByTeamMember(memberSlug) {
  return PROJECTS.filter((project) => project.team.includes(memberSlug));
}
