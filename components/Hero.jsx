import React from "react";

const Hero = () => {
  return (
    <section className="hero flex w-full flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col text-center text-white">
        <p className="mb-2 text-4xl font-semibold sm:text-8xl 2xl:text-9xl">
          A Flawless <span className="text-gradiant">Design</span>.
        </p>

        <p className="text-xl sm:text-2xl 2xl:text-4xl">Ghizlane EL ATMANI</p>
      </div>

      <p className="text-desc text-center text-base text-white sm:text-lg 2xl:text-xl">
        I'm a web developer based in Rabat (Morocco), and I'm very passionate
        and dedicated to my work. I develope with Next.js and I will love to
        create your website.
      </p>
    </section>
  );
};

export default Hero;
