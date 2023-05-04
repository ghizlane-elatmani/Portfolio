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
    <div className="bg-neutral-200 dark:bg-neutral-800">
      <div className="container m-auto mb-[5rem] max-w-4xl py-10 lg:max-w-5xl">
        <h2 className="mb-4 text-center text-xl">My Skills</h2>
        <div className="relative flex items-center">
          <BsChevronLeft
            className="cursor-pointer opacity-50 hover:opacity-100"
            onClick={slideLeft}
            size={30}
          />
          <div
            id="slider"
            className="scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
          >
            {languages.map((item) => (
              <img
                className="inline-block w-[160px] cursor-pointer rounded-xl p-2 grayscale duration-300 ease-in-out hover:grayscale-0"
                src={item.img}
                alt="/"
              />
            ))}
          </div>
          <BsChevronRight
            className="cursor-pointer opacity-50 hover:opacity-100"
            onClick={slideRight}
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
