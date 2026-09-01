"use client";

import { useState } from "react";
import ProjectGrid from "@/components/ProjectGrid";
import { PROJECT_FILTERS } from "@/lib/projects";

export default function ProjectsExplorer({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-3 mb-16"
      >
        {PROJECT_FILTERS.map((filter) => {
          const active = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={active}
              className={`font-sans text-sm tracking-wide uppercase px-5 py-2.5 border transition-colors min-h-11 ${
                active
                  ? "bg-ink text-cream border-ink"
                  : "bg-transparent text-ink border-ink/20 hover:border-ink"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <ProjectGrid projects={filtered} headingLevel="h2" />
    </div>
  );
}
