import { pexels } from "@/lib/images";

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
    heroImage: {
      src: pexels(8134821, 1920),
      alt: "Riverside House — contemporary stone and glass residential architecture",
    },
    cardImage: {
      src: pexels(8134821, 1200),
      alt: "Riverside House exterior",
    },
    overviewHeading: "A Home Shaped Around Light and Movement",
    description: [
      "Riverside House explores the relationship between open living spaces, natural light, privacy, and the surrounding landscape.",
      "The design organizes the home around a series of connected spaces that transition gradually between shared and private areas.",
    ],
    services: ["Architecture", "Interior Design", "3D Visualization"],
    gallery: [
      { src: pexels(8134821, 1400), alt: "Riverside House exterior view" },
      { src: pexels(12285892, 1400), alt: "Riverside House living area" },
      { src: pexels(10827396, 1400), alt: "Riverside House kitchen" },
      { src: pexels(19836795, 1400), alt: "Riverside House bedroom" },
      { src: pexels(14652792, 1400), alt: "Riverside House staircase detail" },
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
    heroImage: {
      src: pexels(28991200, 1920),
      alt: "Oak Residence — warm minimalist living room interior",
    },
    cardImage: {
      src: pexels(28991200, 1200),
      alt: "Oak Residence interior",
    },
    overviewHeading: "An Interior Built Around Material and Warmth",
    description: [
      "Oak Residence reimagines a family home's interior through material honesty, texture, and considered lighting.",
      "Each room is treated as its own atmosphere while remaining part of a coherent material language throughout the home.",
    ],
    services: ["Interior Design", "Lighting Concepts", "Furniture Direction"],
    gallery: [
      { src: pexels(28991200, 1400), alt: "Oak Residence living room" },
      { src: pexels(30399204, 1400), alt: "Oak Residence lounge area" },
      { src: pexels(6035312, 1400), alt: "Oak Residence kitchen" },
      { src: pexels(28536695, 1400), alt: "Oak Residence bedroom" },
      { src: pexels(15758635, 1400), alt: "Oak Residence staircase detail" },
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
    heroImage: {
      src: pexels(18033178, 1920),
      alt: "Horizon Offices — modern open-plan office interior",
    },
    cardImage: {
      src: pexels(18033178, 1200),
      alt: "Horizon Offices interior",
    },
    overviewHeading: "A Workplace Designed Around Focus and Collaboration",
    description: [
      "Horizon Offices balances open collaborative areas with quieter, focused workspaces across a converted industrial floor plate.",
      "Material choices and daylighting strategy work together to create a calm, considered working environment.",
    ],
    services: ["Architecture", "Interior Design", "Space Planning"],
    gallery: [
      { src: pexels(18033178, 1400), alt: "Horizon Offices open workspace" },
      { src: pexels(8606292, 1400), alt: "Horizon Offices meeting area" },
      { src: pexels(6794929, 1400), alt: "Horizon Offices corridor detail" },
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
    heroImage: {
      src: pexels(30484316, 1920),
      alt: "Courtyard House — minimalist concrete and wood facade with walled garden",
    },
    cardImage: {
      src: pexels(30484316, 1200),
      alt: "Courtyard House exterior",
    },
    overviewHeading: "A House Organized Around a Private Courtyard",
    description: [
      "Courtyard House is arranged around a central outdoor space that brings light and air into every room of the home.",
      "The plan blurs the line between inside and outside, letting the courtyard function as an additional living space.",
    ],
    services: ["Architecture", "Interior Design", "Material Direction"],
    gallery: [
      { src: pexels(30484316, 1400), alt: "Courtyard House exterior facade" },
      { src: pexels(19836798, 1400), alt: "Courtyard House living area" },
      { src: pexels(29923543, 1400), alt: "Courtyard House kitchen" },
      { src: pexels(6284232, 1400), alt: "Courtyard House bedroom" },
      { src: pexels(8134804, 1400), alt: "Courtyard House staircase detail" },
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
    heroImage: {
      src: pexels(7587827, 1920),
      alt: "Elmwood Renovation — living room with original brick wall",
    },
    cardImage: {
      src: pexels(7587827, 1200),
      alt: "Elmwood Renovation interior",
    },
    overviewHeading: "Transforming a Period Home for Contemporary Life",
    description: [
      "Elmwood Renovation reworks a period terrace home, opening up the ground floor while respecting its original character.",
      "The design carefully balances new interventions with the building's existing constraints and detailing.",
    ],
    services: ["Renovation", "Interior Design"],
    gallery: [
      { src: pexels(7587827, 1400), alt: "Elmwood Renovation exposed brick living room" },
      { src: pexels(8092189, 1400), alt: "Elmwood Renovation living area" },
      { src: pexels(15252124, 1400), alt: "Elmwood Renovation original staircase detail" },
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
    heroImage: {
      src: pexels(34038197, 1920),
      alt: "Meadow Pavilion — wooden garden pavilion in sunlight",
    },
    cardImage: {
      src: pexels(34038197, 1200),
      alt: "Meadow Pavilion exterior",
    },
    overviewHeading: "A Garden Pavilion Framed by Its Landscape",
    description: [
      "Meadow Pavilion is a standalone garden structure designed to frame views of the surrounding countryside.",
      "An interactive 3D model was used throughout the design process to communicate scale and proportion to the client.",
    ],
    services: ["Architecture", "3D Visualization"],
    gallery: [
      { src: pexels(34038197, 1400), alt: "Meadow Pavilion exterior view" },
      { src: pexels(9618453, 1400), alt: "Architectural model study for Meadow Pavilion" },
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
