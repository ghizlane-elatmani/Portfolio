import React from "react";
import { BiWindowAlt, BiCode } from "react-icons/bi";
import { projectList } from "../data/projects";

const Projects = () => {
  return (
    <section name="projects" className="bg-slate-100 dark:bg-slate-800">
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

        <ul className="grid gap-5 grid-cols-fluid">
          {projectList.map((project) => {
            return (
              <li
                key={project.id}
                className="bg-slate-300 dark:bg-slate-900 rounded-lg p-2
                text-slate-900 dark:text-amber-50
                hover:scale-105 duration-75
                shadow-lg shadow-slate-200/40 hover:shadow-indigo-200/40
                dark:shadow-lg dark:shadow-slate-900/40 dark:hover:shadow-indigo-900/40"
              >
                <img
                  src={project.picture}
                  className="rounded-lg mx-auto"
                  alt=""
                />

                <p className="font-bold px-4 pt-4">{project.name}</p>

                <p className=" px-4 pt-2">{project.desc}</p>

                <div className="flex gap-2 mx-4 mt-6 mb-3">
                  <a
                    href={project.urlSite}
                    className="flex flex-row justify-center items-center gap-2 px-6 py-1 rounded-[50px] 
                    bg-amber-400 hover:bg-amber-500 duration
                    dark:bg-amber-600 dark:hover:bg-amber-700"
                  >
                    <BiWindowAlt />
                    Site
                  </a>

                  <a
                    href={project.urlCode}
                    className="flex flex-row justify-center items-center gap-2 px-6 py-1 rounded-[50px] 
                    bg-indigo-300 hover:bg-indigo-400 dark:bg-indigo-700 dark:hover:bg-indigo-800"
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
