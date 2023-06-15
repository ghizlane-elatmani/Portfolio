"use client";

import { motion } from "framer-motion";
import { containerVariants, childVariants } from "../utils/motion";
import styles from "../styles/index.js";
import Button from "@components//Button";

const Hero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.flexCenter} w-full min-h-screen flex-col p-4`}
    >
      <motion.h1 variants={childVariants} className={`${styles.heading1}`}>
        A Flawless <span className="text-gradient">Design.</span>
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

      <motion.div
        variants={childVariants}
        className="flex flex-wrap justify-center gap-2 sm:gap-5 2xl:gap-7 mb-12"
      >
        <Button
          text="Contact me"
          size="lg"
          type="bg-gradient-to-r from-cyan-custom to-purple-custom text-white"
          goTo="/contact"
        />
        <Button
          text="Learn More"
          size="lg"
          type="bg-white/25 text-slate-800"
          goTo="#projects"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
