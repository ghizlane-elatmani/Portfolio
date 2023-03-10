import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="bg-amber-500 dark:bg-amber-800 py-[5rem] xl:py-[8rem] text-slate-900 dark:text-amber-50"
    >
      <div className="container max-w-4xl m-auto p-2">
        <h3
          className="md:text-xl text-lg mb-4 uppercase tracking-wide text-amber-900 
        dark:text-amber-200 font-light"
        >
          About me
        </h3>

        <h2 className="md:text-2xl text-xl mb-6">Hello, I'm Ghizlane</h2>

        <p className="text-base md:text-lg indent-4 mb-[4rem]">
          I'm passionate about building things for the web. I started my journey
          as an android developer after high school and lately, I've discovered
          my passion for the world of web development and the beauty behind
          building useful websites like the one you will find in this portfolio.
          I'm now looking for a junior dev position to finally kick start my
          career and learn among professionals.
        </p>

        <div className="flex gap-4 flex-col md:flex-row text-base md:text-lg">
          <div
            className="bg-slate-200 dark:bg-slate-900 rounded-lg p-4 flex-1
          shadow-lg shadow-slate-200/40 hover:shadow-indigo-200/40
          dark:shadow-lg dark:shadow-slate-900/40 dark:hover:shadow-indigo-900/40"
          >
            <ul className="grid grid-cols-2 gap-4 justify-items-center">
              <li> Java</li>
              <li>Javascript</li>
              <li>Html</li>
              <li>Css</li>
              <li>ReactJS</li>
              <li>Spring</li>
              <li>NextJs</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div
            className="bg-slate-200 dark:bg-slate-900 rounded-lg p-4 flex-1
          shadow-lg shadow-slate-200/40 hover:shadow-indigo-200/40
          dark:shadow-lg dark:shadow-slate-900/40 dark:hover:shadow-indigo-900/40"
          >
            <ul className="grid grid-cols-2 gap-4  justify-items-center">
              <li>Tailwindcss</li>
              <li>Bootstrap</li>
              <li>Figma</li>
              <li>MS Office</li>

              <li>Git</li>
              <li>Github</li>
              <li>VSCode</li>
              <li>IntelliJ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
