import React from "react";
import { BiWindowAlt, BiCode } from "react-icons/bi";
import { projectList } from "../data/projects";

const Projects = () => {
  return (
    <section className="bg-slate-100 dark:bg-slate-800">
      <div className="container max-w-5xl m-auto p-2 py-[5rem] xl:py-[8rem]">
        <h3
          className="md:text-xl text-lg mb-4 uppercase tracking-wide text-amber-900 
        dark:text-amber-200 font-light"
        >
          Projects
        </h3>

        <h2 className="md:text-2xl text-xl mb-6 text-slate-900 dark:text-amber-50">
          My recent work
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectList.map((project) => {
            return (
              <li
                key={project.id}
                className="relative z-0 bg-slate-300 dark:bg-slate-900 rounded-lg overflow-hidden
                shadow-lg shadow-slate-200/40 hover:shadow-indigo-200/40
                dark:shadow-lg dark:shadow-slate-900/40 dark:hover:shadow-indigo-900/40
                border boder-slate-500 dark:border-slate-900"
              >
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                bg-amber-50 p-2 rounded-lg dark:bg-slate-900 dark:text-amber-50 cursor-default
                "
                >
                  {project.name}
                </div>

                <img src={project.picture} alt="" />

                <div className="flex">
                  <a
                    href={project.urlSite}
                    className="flex-1 flex justify-center items-center gap-2 p-2 rounded-bl-lg text-lg uppercase
                    border-2 border-amber-50 bg-amber-50 text-slate-900 
                    dark:bg-amber-700 dark:text-amber-50 dark:border-amber-700 
                    dark:hover:bg-amber-600 dark:hover:border-amber-600
                    hover:border-amber-500 hover:text-amber-500"
                  >
                    <BiWindowAlt />
                    Site
                  </a>

                  <a
                    href={project.urlCode}
                    className="flex-1 flex justify-center items-center gap-2 p-2 text-lg uppercase
                    rounded-br-lg border-2 border-slate-300
                    bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-amber-50 
                    hover:border-slate-400 hover:bg-slate-400
                    dark:border-slate-900 dark:hover:border-amber-500 dark:hover:text-amber-500"
                  >
                    <BiCode />
                    Code
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
