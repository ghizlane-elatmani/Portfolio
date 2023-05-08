import React from "react";
import { BiWindowAlt, BiCode } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import Chips from "./Chips";

const Project = ({ project }) => {
  return (
    <li className="text-slate-950 flex flex-col items-center gap-5 dark:text-slate-50 md:flex-row md:gap-2">
      <div className="flex-1">
        <h2 className="mb-2 text-xl font-semibold">{project.name}</h2>
        <Chips chips={project.chips} />

        <ul className="mb-5">
          {project.desc.map((str) => (
            <li key={str.id} className="flex items-center gap-2">
              <BsCheck />
              {str.title}
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <a
            href={project.urlSite}
            className="duration flex flex-row items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-1 font-semibold text-blue-50 hover:bg-blue-600"
          >
            <BiWindowAlt />
            Site
          </a>

          <a
            href={project.urlCode}
            className="duration flex flex-row items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-200 px-6 py-1 hover:border-neutral-700 dark:border-neutral-700 dark:bg-slate-800 dark:hover:border-blue-50"
          >
            <BiCode />
            Code
          </a>
        </div>
      </div>

      <img
        src={project.picture}
        className="order-first mx-auto rounded-lg md:order-last"
        alt=""
      />
    </li>
  );
};

export default Project;
