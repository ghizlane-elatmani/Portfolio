"use client";

import { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { navVariants, pathVariants, menuVariants } from "../utils/motion";
import styles from "../styles/index.js";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className=" w-full fixed z-10"
    >
      <div className="flex h-[90px] items-center justify-between px-2 sm:px-4 lg:max-w-screen-xl max-w-7xl m-auto">
        <div className="flex items-center gap-3">
          <motion.svg
            width="50"
            height="50"
            viewBox="0 0 133 128"
            fill="none"
            strokeWidth="5"
            xmlns="http://www.w3.org/2000/svg"
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.7}
          >
            <motion.rect
              x="34.5"
              y="1.5"
              width="97"
              height="97"
              rx="8.5"
              stroke="#fff"
              variants={pathVariants}
              initial="hidden"
              animate="show"
            />
            <motion.rect
              x="83.3554"
              y="83.5893"
              width="47"
              height="47"
              rx="8.5"
              transform="rotate(-135 83.3554 83.5893)"
              fill="#fff"
              variants={pathVariants}
              initial="hidden"
              animate="show"
            />
            <motion.rect
              x="22.2337"
              y="62.9996"
              width="47"
              height="47"
              rx="8.5"
              transform="rotate(25.5 22.2337 62.9996)"
              stroke="#fff"
              variants={pathVariants}
              initial="hidden"
              animate="show"
            />
          </motion.svg>
          <p className="text-white font-semibold uppercase">Ghizlane</p>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-5 font-semibold">
            <li className={`${styles.navLinks}`}>
              <a href="#home">Home</a>
            </li>
            <li className={`${styles.navLinks}`}>
              <a href="#services">Services</a>
            </li>
            <li className={`${styles.navLinks}`}>
              <a href="#projects">Projects</a>
            </li>
            <li className={`${styles.navLinksCTA}`}>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="flex items-center sm:hidden"
          onClick={() => handleClick()}
        >
          {open ? <BsXLg size={32} /> : <BsList size={32} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="animate"
              exit="exit"
              className="absolute top-[70px] right-0 bg-white"
            >
              <div className="flex items-center justify-center py-10 px-12 rounded-bl-lg">
                <ul className="flex flex-col items-center gap-5 text-xl">
                  <li className={`${styles.navLinks}`}>
                    <a href="#home" onClick={() => setOpen(false)}>
                      Home
                    </a>
                  </li>
                  <li className={`${styles.navLinks}`}>
                    <a href="#services" onClick={() => setOpen(false)}>
                      Services
                    </a>
                  </li>
                  <li className={`${styles.navLinks}`}>
                    <a href="#projects" onClick={() => setOpen(false)}>
                      Projects
                    </a>
                  </li>
                  <li className={`${styles.navLinksGradient}`}>
                    <a href="#contact" onClick={() => setOpen(false)}>
                      Contact Me
                    </a>
                  </li>
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
