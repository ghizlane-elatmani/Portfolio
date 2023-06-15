"use client";
import { motion } from "framer-motion";
import Service from "@components/Service";
import styles from "@styles";
import {
  textContainer,
  textVariants2,
  textVariants3,
  staggerContainer,
} from "@utils/motion";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-violet-700 to-transparent text-white py-[5rem] sm:py-[8rem] 2xl:py-[12rem] px-2">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.p
          variants={textContainer}
          className={`${styles.heading4} text-slate-50`}
        >
          {Array.from("My Services").map((letter, index) => (
            <motion.span variants={textVariants2} key={index}>
              {letter}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          variants={textVariants3}
          className={`${styles.subtitle} text-violet-100`}
        >
          What I do for you
        </motion.p>

        <motion.div className="flex flex-wrap gap-10 justify-center max-w-6xl m-auto">
          <Service
            icon="/features/ux-ui.png"
            title="Web Design"
            description="I can build a template Figma with your instruction."
            color="white"
            index={1}
          />

          <Service
            icon="/features/code.png"
            title="Web Development"
            description="I can develope a website with Next.js, Tailwind CSS and Framer Motion."
            color="purple"
            index={2}
          />

          <Service
            icon="/features/iphone.png"
            title="App Development"
            description="I can code an Android Application with Java."
            color="white"
            index={3}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
