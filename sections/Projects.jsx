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
      className="overflow-hidden bg-gradient-to-b from-blue-900 to-blue-600"
      id="projects"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-[5rem] px-5 sm:px-10 md:py-[10rem] max-w-5xl m-auto"
      >
        <motion.p
          variants={textContainer}
          className={`${styles.heading4} text-white`}
        >
          {Array.from("My Work").map((letter, index) => (
            <motion.span variants={textVariants2} key={index}>
              {letter}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          variants={textVariants3}
          className={`${styles.subtitle} text-indigo-700`}
        >
          Projects
        </motion.p>

        <motion.div className="flex flex-col gap-5 cursor-pointer ">
          <Project
            title="Weather App"
            desc="Application web developped with React and using the famous API,
            openWeatherMap."
            url="https://weather-app-ge.netlify.app/"
            image="/projects/weather.svg"
            tags={[
              { id: 1, title: "React" },
              { id: 2, title: "Tailwind CSS" },
              { id: 3, title: "API: Openweathermap" },
              { id: 4, title: "Javascript" },
              { id: 5, title: "HTML" },
              { id: 6, title: "CSS" },
            ]}
            index={1}
            direction="right"
          />

          <Project
            title="Country Quiz"
            desc="Country Quiz is web application developped with React and using the famous API rest countries."
            url="https://country-quiz-ge.netlify.app/"
            image="/projects/country-quiz.svg"
            tags={[
              { id: 1, title: "React" },
              { id: 2, title: "API: Restcountries" },
              { id: 3, title: "Javascript" },
              { id: 4, title: "HTML" },
              { id: 5, title: "CSS" },
            ]}
            index={2}
            direction="right"
          />

          <Project
            title="Windbnb"
            desc="Windbnb is an application web developped with React."
            url="https://windbnb-ge.netlify.app/"
            image="/projects/windbnb.svg"
            tags={[
              { id: 1, title: "React" },
              { id: 2, title: "Javascript" },
              { id: 3, title: "HTML" },
              { id: 4, title: "CSS" },
            ]}
            index={3}
            direction="right"
          />

          <Project
            title="Todo App"
            desc="Todo App is a task management application developped with React."
            url="https://todo-app-ge.netlify.app/"
            image="/projects/group.svg"
            tags={[
              { id: 1, title: "React" },
              { id: 2, title: "Javascript" },
              { id: 3, title: "HTML" },
              { id: 4, title: "CSS" },
            ]}
            index={4}
            direction="right"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
