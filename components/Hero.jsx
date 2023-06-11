"use client";

import { motion } from "framer-motion";
import Button from "./Button";

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
      className="min-h-screen flex w-full flex-col items-center justify-center p-4 text-slate-950"
    >
      <motion.p
        variants={childVariants}
        className="mb-2 text-4xl text-center font-extrabold sm:text-6xl md:text-7xl 2xl:text-9xl"
      >
        A Flawless <span className="text-gradiant">Design</span>.
      </motion.p>

      <motion.p
        variants={childVariants}
        className="text-xl sm:text-2xl 2xl:text-4xl mb-5 text-slate-950/70 "
      >
        Ghizlane EL ATMANI
      </motion.p>

      <motion.p
        variants={childVariants}
        className="text-desc text-center text-sm text-neutral-500 sm:text-lg 2xl:text-xl mb-10 font-semibold"
      >
        I'm a web developer, and I'm very passionate and dedicated to my work. I
        will love to create your website.
      </motion.p>

      <motion.div
        variants={childVariants}
        className="flex flex-wrap justify-center gap-2 sm:gap-5 2xl:gap-7"
      >
        <Button
          text="Contact me"
          size="lg"
          type="btn-cta text-white"
          goTo="/"
        />
        <Button
          text="Learn More"
          size="lg"
          type="bg-white/25 text-slate-950"
          goTo="/"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
