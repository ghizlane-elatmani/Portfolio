import React from "react";

const Projects = () => {
  let projectList = [
    {
      id: "1",
      name: "CountryQuiz",
      urlSite: "https://country-quiz-ge.netlify.app/",
      urlCode: "https://github.com/ghizlane-elatmani/Country-quiz",
      picture: "../img/quiz-country.png",
    },
    {
      id: "1",
      name: "CountryQuiz",
      urlSite: "https://country-quiz-ge.netlify.app/",
      urlCode: "https://github.com/ghizlane-elatmani/Country-quiz",
      picture: "",
    },
  ];
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

        <ul className="grid grid-cols-3 gap-4">
          {projectList.map((project) => {
            return (
              <li
                key={project.id}
                className="bg-slate-300 dark:bg-slate-900 rounded-lg p-2"
              >
                <img src="../assets/quiz-country" />

                <div className="">
                  <p>{project.name}</p>
                  <p>{project.desc}</p>
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
