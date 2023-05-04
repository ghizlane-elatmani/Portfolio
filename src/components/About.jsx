import React from "react";
import Slider from "./Slider";

const About = () => {
  return (
    <section
      name="about"
      className=" text-slate-900 dark:bg-amber-800 dark:text-amber-50"
    >
      <Slider />
      <div className="container m-auto max-w-5xl p-2">
        <h3
          className="mb-4 text-lg font-light uppercase tracking-wide text-amber-900 
        dark:text-amber-200 md:text-xl"
        >
          About me
        </h3>

        <h2 className="mb-6 text-xl md:text-2xl">Hello, I'm Ghizlane</h2>

        <p className="mb-[4rem] indent-4 text-base md:text-lg">
          I'm passionate about building things for the web. I started my journey
          as an android developer after high school and lately, I've discovered
          my passion for the world of web development and the beauty behind
          building useful websites like the one you will find in this portfolio.
          I'm now looking for a junior dev position to finally kick start my
          career and learn among professionals.
        </p>
      </div>
    </section>
  );
};

export default About;
