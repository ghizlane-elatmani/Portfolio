import React from "react";
import { languages } from "../data/languages";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Slider = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="bg-neutral-200 dark:bg-neutral-700">
      <div className="container m-auto max-w-4xl py-10 lg:max-w-5xl">
        <h2 className="mb-4 text-center text-xl dark:text-neutral-50 ">
          My Skills
        </h2>
        <div className="relative flex items-center">
          <BsChevronLeft
            className="cursor-pointer opacity-50 hover:opacity-100 dark:text-neutral-50"
            onClick={slideLeft}
            size={30}
          />
          <div
            id="slider"
            className="scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
          >
            {languages.map((item) => (
              <img
                className="inline-block w-[140px] cursor-pointer rounded-xl p-2  duration-300 ease-in-out "
                src={item.img}
                alt="/"
              />
            ))}
          </div>
          <BsChevronRight
            className="cursor-pointer opacity-50 hover:opacity-100 dark:text-neutral-50"
            onClick={slideRight}
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
