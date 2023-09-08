"use client";

import Skills from "@components/Skills";

const AboutMe = () => {
  return (
    <section id="about" className="my-section bg-base-100">
      <div className="max-w-4xl m-auto flex items-center flex-col text-center">
        <h2 className="heading-2">About me</h2>

        <div className="w-[150px] h-[150px] rounded-full bg-white mb-4">
          <img src="/avatar.png" alt="avatar logo" className="w-full h-full" />
        </div>

        <p div className="max-w-xl mb-10">
          Graduate web developer at the private institution OpenClassrooms.
          Autonomous, dynamic and always at the forefront of new technologies, I
          like to meet the challenges and make a point of honor to deliver
          applications efficiently that satisfy the customer needs.
        </p>

        <div className="flex flex-wrap gap-5 justify-center sm:grid sm:grid-cols-2 sm:gap-8">
          <Skills title="Javascript" value="70" />
          <Skills title="React" value="70" />
          <Skills title="Next.js" value="80" />
          <Skills title="Tailwind CSS" value="100" />
          <Skills title="Java" value="70" />
          <Skills title="Android" value="100" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
