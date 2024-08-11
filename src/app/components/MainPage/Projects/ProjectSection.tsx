import React, { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "./Projects";

const typeLabels: Record<string, string> = {
  all: "All",
  webDev: "Software",
  game: "Games",
  moCap: "Motion Capture",
};

export const ProjectSection = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState<any>([]);
  const [fadeOut, setFadeOut] = useState(false);

  const handleFilterChange = (type: string) => {
    if (type !== selectedType) {
      setSelectedType(type); // Update filter type
    }
  };

  useEffect(() => {
    const filteredProjects =
      selectedType === "all"
        ? Projects
        : Projects.filter((project: any) => project.type === selectedType);
    setVisibleProjects(filteredProjects);
  }, [selectedType]);

  return (
    <section id="section-projects" className="flex flex-col py-[40px] gap-5 ">
      <div className="text-xl md:text-6xl">Projects</div>

      <div className="flex flex-wrap gap-2  mb-6">
        {["all", "webDev", "game", "moCap"].map((type) => (
          <button
            key={type}
            onClick={() => handleFilterChange(type)}
            className={`p-2 transition-all duration-150 ${
              selectedType === type ? "text-ds-main-accent" : ""
            }`}
          >
            {typeLabels[type]}
          </button>
        ))}
      </div>

      <div
        className={`grid gap-5  sm:grid-cols-2 lg:grid-cols-3  ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {visibleProjects.length === 0 ? (
          <div>No projects found</div>
        ) : (
          visibleProjects.map((project: any, i: React.Key) => (
            <ProjectCard
              key={i}
              teamSize={project.teamSize}
              tags={project.tags}
              icon={project.icon}
              year={project.year}
              coverImage={project.coverImage}
              title={project.title}
              link={project.link}
              engine={project.engine}
              role={project.role}
              blurb={project.blurb}
              type={typeLabels[project.type]}
            />
          ))
        )}
      </div>
    </section>
  );
};
