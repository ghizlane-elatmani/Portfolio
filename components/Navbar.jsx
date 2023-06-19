"use client";

import { useEffect, useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { navVariants, pathVariants, menuVariants } from "../utils/motion";
import styles from "../styles/index.js";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  function handleClick() {
    setOpen(!open);
  }

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${
        colorChange ? "bg-white shadow-sm" : "bg-transparent"
      } w-full fixed z-10 duration-75`}
    >
      <div className="flex h-[70px] items-center justify-between px-2 sm:px-4 lg:max-w-screen-xl max-w-7xl m-auto">
        <div className="flex items-center gap-3">
          <motion.svg
            width="40"
            height="40"
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
              stroke={`${colorChange ? "#2272ff" : "#fff"}`}
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
              fill={`${colorChange ? "#2272ff" : "#fff"}`}
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
              stroke={`${colorChange ? "#2272ff" : "#fff"}`}
              variants={pathVariants}
              initial="hidden"
              animate="show"
            />
          </motion.svg>
          <p
            className={`${
              colorChange ? "text-neon-blue" : "text-white"
            }  font-bold uppercase`}
          >
            Ghizlane
          </p>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-5 font-semibold">
            <li
              className={`${styles.navLinks} ${
                colorChange ? "text-neon-blue" : "text-white"
              }`}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`${styles.navLinks} ${
                colorChange ? "text-neon-blue" : "text-white"
              }`}
            >
              <a href="#services">Services</a>
            </li>
            <li
              className={`${styles.navLinks} ${
                colorChange ? "text-neon-blue" : "text-white"
              }`}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className={`${styles.navLinksCTA} ${
                colorChange
                  ? "text-neon-blue border-neon-blue hover:text-white hover:bg-neon-blue"
                  : "text-white border-white hover:text-neon-blue hover:bg-white"
              }`}
            >
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className={`${
            colorChange ? "text-neon-blue" : "text-white"
          } flex items-center sm:hidden`}
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
              className="absolute top-[70px] right-0 bg-white rounded-lg text-neon-blue my-shadow"
            >
              <div className="flex items-center justify-center py-10 px-12 rounded-bl-lg">
                <ul className="flex flex-col items-center gap-5 text-xl">
                  <li className={`${styles.navLinks} font-medium`}>
                    <a href="#home" onClick={() => setOpen(false)}>
                      Home
                    </a>
                  </li>
                  <li className={`${styles.navLinks} font-medium`}>
                    <a href="#services" onClick={() => setOpen(false)}>
                      Services
                    </a>
                  </li>
                  <li className={`${styles.navLinks} font-medium`}>
                    <a href="#projects" onClick={() => setOpen(false)}>
                      Projects
                    </a>
                  </li>
                  <li
                    className={`${styles.navLinksCTA} border-neon-blue hover:bg-neon-blue hover:text-white `}
                  >
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
