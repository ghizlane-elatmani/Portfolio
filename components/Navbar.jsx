"use client";

import Image from "next/image";
import { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-[60px] sm:h-[70px] items-center justify-between px-2 text-white sm:px-4">
      <div className="flex items-center">
        <Image src="/slash.png" width={170} height={90} alt="Logo" />
      </div>

      <nav className="hidden sm:block">
        <ul className="flex items-center gap-5 font-semibold">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Projects</Link>
          </li>
          <li className="btn-cta cursor-pointer rounded-lg px-4 py-2 font-bold">
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="flex items-center sm:hidden"
        onClick={() => setOpen(true)}
      >
        <BsList size={32} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="box"
            initial={{ x: "110%" }}
            animate={{ x: "0%" }}
            exit={{ x: "110%" }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 flex h-full w-full flex-col bg-black"
          >
            <button
              type="button"
              className="flex justify-end p-5"
              onClick={() => setOpen(false)}
            >
              <BsXLg size={32} />
            </button>

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
  );
};

export default Navbar;
