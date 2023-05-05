import React from "react";
import Slider from "./Slider";

const About = () => {
  return (
    <section
      name="about"
      className=" bg-neutral-50 text-slate-900 dark:bg-slate-900 "
    >
      <Slider />
      <div className="container m-auto max-w-3xl p-2 py-[5rem] md:py-[7rem]">
        <h3
          className="mb-4 text-center text-lg font-light uppercase tracking-wide 
        text-purple-900 dark:text-purple-400 md:text-xl"
        >
          About me
        </h3>

        <p className=" text-center text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
          Hello, I'm Ghizlane! I'm passionate about building things for the web.
          I started my journey as an android developer after high school and
          lately, I've discovered my passion for the world of web development
          and the beauty behind building useful websites like the one you will
          find in this portfolio. I'm now looking for a junior dev position to
          finally kick start my career and learn among professionals.
        </p>
      </div>
    </section>
  );
};

export default About;
