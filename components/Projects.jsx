"use client";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Ticker from "framer-motion-ticker";
import Link from "next/link";

const Projects = () => {
  const skills = [
    "🇯🇵",
    "🇰🇷",
    "🇩🇪",
    "🇨🇳",
    "🇺🇸",
    "🇫🇷",
    "🇪🇸",
    "🇮🇹",
    "🇷🇺",
    "🇬🇧",
    "🇲🇦",
  ];

  return (
    <section className="py-[5rem] px-5 sm:px-10 md:py-[10rem] max-w-7xl m-auto">
      <div>
        <h2 className="text-center text-white font-bold text-xl sm:text-4xl mb-12">
          My Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 cursor-pointer">
          {/* ============ WEATHER APP ============*/}
          <Link href={"https://weather-app-ge.netlify.app/"}>
            <div className="group bg-blue-gradient rounded-lg px-7 pt-7 shadow-lg">
              <div className="flex justify-between items-center text-white font-bold text-xl mb-2">
                <p>Weather App</p>
                <BsFillArrowRightCircleFill className="text-neutral-300 group-hover:translate-x-1 group-hover:text-white duration-100" />
              </div>

              <p className="text-white text-sm mb-7 font-semibold">
                Application web developped with React and using the famous API,
                openWeatherMap.
              </p>

              <div className="flex justify-center items-center px-5">
                <img
                  src="/projects/weather.svg"
                  className="max-w-[190px]"
                  alt=""
                />
              </div>
            </div>
          </Link>

          {/* ============ COUNTRY QUIZ ============ */}
          <Link
            href={"https://country-quiz-ge.netlify.app/"}
            className="md:col-span-2"
          >
            <div className="group bg-purple-gradient rounded-lg px-7 py-7 shadow-lg">
              <div className="flex justify-between items-center text-white font-bold text-xl mb-2">
                <p>Country Quiz</p>
                <BsFillArrowRightCircleFill className="text-neutral-300 group-hover:translate-x-1 group-hover:text-white duration-100" />
              </div>

              <p className="text-white text-sm mb-7 font-semibold">
                Country Quiz is an application web developped with <br /> React
                and using the famous API rest country.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-end">
                <Ticker duration={10} isPlaying={true}>
                  {skills.map((item, index) => (
                    <div
                      key={index}
                      className="text-xl sm:text-5xl w-[24px] h-[24px] sm:w-[60px] sm:h-[60px] m-2"
                    >
                      {item}
                    </div>
                  ))}
                </Ticker>
                <img
                  src="/projects/country-quiz.svg"
                  className="w-full max-w-[350px] border border-slate-700 rounded-lg shadow-md"
                  alt=""
                />
              </div>
            </div>
          </Link>

          {/* ============ AIRBNB ============ */}
          <Link
            href={"https://windbnb-ge.netlify.app/"}
            className=" md:col-span-2"
          >
            <div className="group bg-silver-gradient rounded-lg pt-7 shadow-lg ">
              <div className="flex justify-between items-center text-slate-900 px-7 font-bold text-xl mb-2">
                <p>Windbnb</p>
                <BsFillArrowRightCircleFill className="text-neutral-600 group-hover:translate-x-1 group-hover:text-slate-900 duration-100" />
              </div>

              <p className="px-7 text-slate-900 text-sm mb-7 font-semibold">
                Windbnb is an application web developped with React.
              </p>

              <img
                src="/projects/windbnb.svg"
                className="max-w-[90%] max-h-[350px]"
                alt=""
              />
            </div>
          </Link>

          {/* ============ TODO APP ============ */}
          <Link href={"https://todo-app-ge.netlify.app/"}>
            <div className="group bg-blue-2-gradient overflow-hidden rounded-lg pt-7 shadow-lg">
              <div className="flex justify-between items-center text-white font-bold text-xl mb-2 px-7">
                <p>Todo App</p>
                <BsFillArrowRightCircleFill className="text-neutral-300 group-hover:translate-x-1 group-hover:text-white duration-100" />
              </div>

              <p className="text-white text-sm mb-7 font-semibold px-7">
                Todo App is a task management application developped with React.
              </p>

              <div className="max-h-[330px] overflow-hidden ">
                <img src="/projects/group.svg" className="object-top" alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
