"use client";

import { motion } from "framer-motion";

const containerVariants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const Hero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="hero flex w-full flex-col items-center justify-center p-4 text-white"
    >
      <motion.p
        variants={childVariants}
        className="mb-2 text-4xl font-semibold sm:text-8xl 2xl:text-9xl"
      >
        A Flawless <span className="text-gradiant">Design</span>.
      </motion.p>

      <motion.p
        variants={childVariants}
        className="text-xl sm:text-2xl 2xl:text-4xl mb-5"
      >
        Ghizlane EL ATMANI
      </motion.p>

      <motion.p
        variants={childVariants}
        className="text-desc text-center text-base text-white sm:text-lg 2xl:text-xl mb-10"
      >
        I'm a web developer based in Rabat (Morocco), and I'm very passionate
        and dedicated to my work. I develope with Next.js and I will love to
        create your website.
      </motion.p>

      <motion.button
        variants={childVariants}
        type="button"
        className="p-5 text-2xl text-white font-bold bg-blue-500 rounded-xl"
      >
        Contact me
      </motion.button>
    </motion.section>
  );
};

export default Hero;
