import React, { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { Projects } from "./Projects";
import { SectionHeader } from "../../core/SectionHeader";

const typeLabels: Record<string, string> = {
  all: "All",
  webDev: "Software",
  game: "Video Games",
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
    <section
      id="section-projects"
      className="flex items-center justify-center py-[40px] px-4 xl:px-0   "
    >
      <div className="flex flex-col items-center justify-center gap-5 xl:max-w-[85%]">
        <SectionHeader one={"Recent"} two={"Projects"} />

        <div className="flex  flex-wrap gap-2 mb-6 w-fit">
          {["all", "webDev", "game", "moCap"].map((type) => (
            <button
              key={type}
              onClick={() => handleFilterChange(type)}
              className={`p-2 text-sm sm:text-lg transition-all duration-150 ${
                selectedType === type ? "text-ds-main-accent" : ""
              }`}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>

        <div
          className={`grid gap-6  md:grid-cols-2  xl:grid-cols-3  ${
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
      </div>
    </section>
  );
};
