"use client";

import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";
import { logosVariants } from "../utils/motion";
import styles from "../styles/index.js";

const Logos = () => {
  const logos = [
    "/logos/nextjs.png",
    "/logos/react.png",
    "/logos/tailwind.png",
    "/logos/motion.png",
    "/logos/javascript.png",
    "/logos/html.png",
    "/logos/css.png",
    "/logos/android.png",
  ];

  return (
    <motion.div
      className="h-[100px] bg-white"
      variants={logosVariants}
      initial="hidden"
      whileInView="show"
    >
      <div
        className="max-w-4xl m-auto relative before:absolute before:w-[100px] before:h-[100px] before:z-10 
      before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0
      after:w-[100px] after:h-[100px] after:z-10 after:bg-gradient-to-l after:from-white after:to-transparent"
      >
        <Ticker duration={20}>
          {logos.map((item, index) => (
            <div
              key={index}
              className="m-5 w-[60px] h-[60px] overflow-hidden flex items-center justify-center"
            >
              <img
                src={item}
                alt="logo"
                className="object-scale-down h-[50px] "
              />
            </div>
          ))}
        </Ticker>
      </div>
    </motion.div>
  );
};

export default Logos;
