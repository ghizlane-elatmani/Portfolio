"use client";

import { useState } from "react";
import Ticker from "./Ticker";
import Image from "next/image";

const Skills = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const skills = [
    "/skills/nextjs.png",
    "/skills/react.png",
    "/skills/javascript.png",
    "/skills/tailwind.png",
    "/skills/framer.png",
    "/skills/html.png",
    "/skills/css.png",
    "/skills/java.png",
    "/skills/spring.png",
  ];

  return (
    <div className="bg-black py-[5rem]">
      <Ticker
        duration={10}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        isPlaying={isPlaying}
      >
        {skills.map((item, index) => (
          <div key={index} className="card">
            <Image src={item} width={200} height={300} />
          </div>
        ))}
      </Ticker>
    </div>
  );
};

export default Skills;
