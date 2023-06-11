"use client";

import { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <motion.div
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className="bg-white fixed w-full z-50 shadow-sm"
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

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-7 font-semibold">
            <li className="relative cursor-pointer hover:scale-105 duration-100 before:hidden hover:before:block before:bottom-0 before:absolute before:bg-neon-blue before:w-full before:h-[3px]">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:scale-105 duration-100 before:hidden hover:before:block before:bottom-0 before:absolute before:bg-neon-blue before:w-full before:h-[3px]">
              <Link href="/">Projects</Link>
            </li>
            <li className="btn-cta cursor-pointer text-white rounded-lg px-4 py-2 font-bold hover:scale-105 duration-100">
              <Link href="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="flex items-center sm:hidden"
          onClick={() => handleClick()}
        >
          <BsList size={32} />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="menu"
            >
              <div className="flex justify-end items-center p-5">
                <button
                  type="button"
                  className="flex justify-center items-center"
                  onClick={() => setOpen(false)}
                >
                  <BsXLg size={32} />
                </button>
              </div>

              <div className="flex flex-1 items-center justify-center p-5">
                <ul className="flex flex-col items-center gap-5 text-xl">
                  <li>Home</li>
                  <li>Projects</li>
                  <li>Contact me</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
