import React from "react";
import { projectList } from "../data/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <section name="projects" className="bg-neutral-50 dark:bg-slate-900">
      <div className="container m-auto max-w-4xl p-2 py-[5rem] xl:py-[8rem]">
        <h3 className="mb-10 text-center text-lg uppercase tracking-wide text-purple-900 dark:text-purple-400 md:text-xl">
          Projects
        </h3>

        <ul className="flex flex-col gap-[5rem]">
          {projectList.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
