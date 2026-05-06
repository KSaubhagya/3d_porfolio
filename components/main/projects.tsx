import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h2 className="text-white text-4xl font-bold py-20">My Projects</h2>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
