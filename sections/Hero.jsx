"use client";

import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../utils/motion";
import styles from "../styles/index.js";
import Button from "@components//Button";

const Hero = () => {
  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className={`flex items-center  w-full min-h-screen flex-col p-4`}
    >
      <motion.h1
        variants={childVariants}
        className={`${styles.heading1} mt-[7rem] sm:mt-[9rem] 2xl:mt-[15rem]`}
      >
        A Flawless Design.
      </motion.h1>

      <motion.h3 variants={childVariants} className={`${styles.heading3}`}>
        Ghizlane EL ATMANI
      </motion.h3>

      <motion.p
        variants={childVariants}
        className={`${styles.heading2} max-w-[45ch]`}
      >
        I'm a web developer, and I'm very passionate and dedicated to my work. I
        will love to create your website.
      </motion.p>

      <motion.div variants={childVariants} className="">
        <Button
          text="Contact me"
          size="lg"
          type="border border-white text-white hover:bg-white hover:text-neon-blue"
          goTo="#contact"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
