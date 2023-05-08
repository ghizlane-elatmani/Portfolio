import React from "react";
import { languages } from "../data/languages";

const Slider = () => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-700">
      <div className="container m-auto max-w-4xl py-10 lg:max-w-5xl">
        <h2 className="mb-4 text-center text-lg uppercase tracking-wide  dark:text-neutral-50 md:text-xl ">
          My Skills
        </h2>
        <div
          className="logos before: relative overflow-hidden whitespace-nowrap py-8 before:absolute 
        before:top-0 before:left-0 before:z-[2] before:h-full before:w-[80px] before:bg-gradient-to-r before:from-neutral-200 before:to-transparent before:content-[''] after:absolute  after:top-0  after:right-0
        after:z-[2] after:h-full after:w-[80px] after:bg-gradient-to-r after:from-transparent after:to-neutral-200 after:content-[''] dark:before:from-neutral-700 dark:after:to-neutral-700 md:py-10 md:before:w-[150px]  md:after:w-[150px]  "
        >
          <div className="logos-slide">
            {languages.map((item) => (
              <img
                key={item.id}
                className=" mx-2.5 inline-block h-[90px] rounded-lg md:h-[110px]"
                src={item.img}
                alt="/"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
