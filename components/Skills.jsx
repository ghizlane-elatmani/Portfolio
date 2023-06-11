"use client";
import { motion } from "framer-motion";
import Feature from "./Feature";

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

const Skills = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="bg-blue-950 text-white py-[5rem]"
    >
      <motion.h2
        variants={childVariants}
        className="text-center font-bold text-xl mb-2 sm:text-4xl"
      >
        My Services
      </motion.h2>

      <motion.p
        variants={childVariants}
        className="text-center uppercase text-sm text-purple-400 mb-12"
      >
        What I do for you
      </motion.p>

      <motion.div
        variants={childVariants}
        className="flex gap-10 flex-wrap justify-center max-w-5xl m-auto"
      >
        <Feature
          icon="/features/icons8-design-100.png"
          title="Web Design"
          description="I can build a template Figma with your instruction."
          color="white"
        />

        <Feature
          icon="/features/icons8-la-programmation-100.png"
          title="Web Development"
          description="I can developed a website with Next.js, Tailwind CSS and Framer Motion."
          color="purple"
        />

        <Feature
          icon="/features/icons8-iphone-100.png"
          title="App Development"
          description="I can code an Android Application with Java."
          color="white"
        />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
