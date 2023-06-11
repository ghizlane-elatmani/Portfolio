"use client";

import Button from "./Button";

const CallToAction = () => {
  return (
    <section className=" bg-gradient-to-b from-blue-700 to-cyan-400 flex items-center justify-center min-h-[500px]">
      <div className="flex flex-col w-full items-center justify-center text-white font-extrabold text-2xl py-[5rem] sm:text-5xl sm:py-[8rem] 2xl:py-[10rem]">
        <p className="mb-1 sm:mb-2">Ready to start ?</p>
        <p>Send me a message.</p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-5 mt-7 sm:mt-10">
          <Button
            text="Contact me"
            size="sm"
            type="bg-white text-slate-950"
            goTo="/"
          />
          <Button
            text="Learn More"
            size="sm"
            type="bg-white/25 text-white"
            goTo="/"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
