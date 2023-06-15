"use client";

import Project from "@components/Project";
import styles from "@styles";
import {
  staggerContainer,
  textContainer,
  textVariants2,
  textVariants3,
} from "@utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      className="py-[5rem] px-5 sm:px-10 md:py-[10rem] max-w-7xl m-auto overflow-hidden"
      id="projects"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.p
          variants={textContainer}
          className={`${styles.heading4} text-slate-800`}
        >
          {Array.from("My Work").map((letter, index) => (
            <motion.span variants={textVariants2} key={index}>
              {letter}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          variants={textVariants3}
          className={`${styles.subtitle} text-violet-800`}
        >
          Projects
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-7  cursor-pointer items-stretch">
          <Project
            title="Weather App"
            desc="Application web developped with React and using the famous API,
            openWeatherMap."
            url="https://weather-app-ge.netlify.app/"
            style="bg-gradient-to-r from-slate-900 to-blue-900 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-800 text-white"
            iconStyle="text-neutral-300 group-hover:text-white"
            image="/projects/weather.svg"
            imageContainerStyle="flex items-center justify-center px-5"
            imageStyle="max-w-[190px]"
            index={1}
            direction="right"
          />

          <Project
            linkStyle="md:col-span-2 "
            title="Country Quiz"
            desc="Country Quiz is an application web developped with React and using the famous API rest country."
            url="https://country-quiz-ge.netlify.app/"
            style="bg-gradient-to-r from-violet-600 to-purple-400 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-400 text-white"
            iconStyle="text-neutral-300 group-hover:text-white"
            image="/projects/country-quiz.svg"
            imageContainerStyle="flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-end px-7 pb-7"
            imageStyle="w-full max-w-[350px] border border-slate-700 rounded-lg shadow-md"
            tickerOn={true}
            index={2}
            direction="left"
          />

          <Project
            linkStyle="md:col-span-2"
            title="Windbnb"
            desc="Windbnb is an application web developped with React."
            url="https://windbnb-ge.netlify.app/"
            style="bg-gradient-to-r from-zinc-300 to-neutral-200 hover:bg-gradient-to-r hover:from-zinc-200 hover:to-neutral-100 text-slate-800"
            iconStyle="text-slate-400 group-hover:text-slate-800"
            image="/projects/windbnb.svg"
            imageStyle="max-w-[90%] max-h-[350px]"
            index={3}
            direction="right"
          />

          <Project
            title="Todo App"
            desc="Todo App is a task management application developped with React."
            url="https://todo-app-ge.netlify.app/"
            style="bg-gradient-to-r from-sky-500 to-cyan-500 hover:bg-gradient-to-r hover:from-sky-400 hover:to-cyan-400 text-white"
            iconStyle="text-neutral-300 group-hover:text-white"
            image="/projects/group.svg"
            imageContainerStyle="overflow-hidden w-full"
            imageStyle="max-h-[330px] w-full object-cover object-top"
            index={4}
            direction="left"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
