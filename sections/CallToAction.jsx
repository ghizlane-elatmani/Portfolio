"use client";

import Button from "@components/Button";
import { childVariants, containerVariants } from "@utils/motion";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className=" bg-gradient-to-b from-blue-700 to-cyan-400 flex items-center justify-center min-h-[500px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-col w-full items-center justify-center text-white font-extrabold text-2xl py-[5rem] sm:text-5xl sm:py-[8rem] 2xl:py-[10rem]"
      >
        <motion.p variants={childVariants} className="mb-1 sm:mb-2">
          Ready to start ?
        </motion.p>
        <motion.p variants={childVariants}>Send me a message.</motion.p>

        <motion.div
          variants={childVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-5 mt-7 sm:mt-10"
        >
          <Button
            text="Contact me"
            size="sm"
            type="bg-white text-slate-950"
            goTo="/contact"
          />
          <Button
            text="Learn More"
            size="sm"
            type="bg-white/25 text-white"
            goTo="#projects"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
