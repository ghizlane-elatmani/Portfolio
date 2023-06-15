"use client";

import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const navbarVariants = {
  initial: { y: "-100px", opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const pathVariants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut", delay: 0.3 },
  },
};

const Back = () => {
  return (
    <motion.div
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className="bg-white w-full shadow-sm "
    >
      <div className="flex h-[70px] items-center justify-between px-2 text-slate-950 sm:px-4 lg:max-w-screen-2xl max-w-7xl m-auto">
        <div className="flex items-center gap-3">
          <motion.svg
            width="50"
            height="50"
            viewBox="0 0 133 128"
            fill="none"
            strokeWidth="5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              x="34.5"
              y="1.5"
              width="97"
              height="97"
              rx="8.5"
              stroke="black"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.rect
              x="83.3554"
              y="83.5893"
              width="47"
              height="47"
              rx="8.5"
              transform="rotate(-135 83.3554 83.5893)"
              fill="black"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.rect
              x="22.2337"
              y="62.9996"
              width="47"
              height="47"
              rx="8.5"
              transform="rotate(25.5 22.2337 62.9996)"
              stroke="black"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
          </motion.svg>
          <p className="text-slate-950 font-semibold uppercase">Ghizlane</p>
        </div>

        <nav className="cursor-pointer text-slate-950 rounded-lg px-4 py-2 font-bold hover:scale-105 duration-100 hover:bg-neutral-100">
          <Link href="/" className="flex items-center justify-center gap-3">
            <BsArrowLeft /> <p>Back</p>
          </Link>
        </nav>
      </div>
    </motion.div>
  );
};

export default Back;
