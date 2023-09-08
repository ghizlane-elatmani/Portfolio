"use client";

import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenu size={24} />
          </label>

          {/* === MOBILE NAVIGATION === */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="py-4">
              <Link href={"/#home"}>Home</Link>
            </li>

            <li className="py-4">
              <Link href={"/#about"}>About me</Link>
            </li>

            <li className="py-4">
              <Link href={"/#projects"}>Projects</Link>
            </li>
            <li className="py-4 btn btn-primary">
              <Link href={"/#contact-me"}>Contact Me</Link>
            </li>
          </ul>
        </div>

        {/* === LOGO === */}
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-accent">Ghizlane</span>
        </a>
      </div>

      {/* === DESKTOP NAVIGATION === */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/#hero"}>Home</Link>
          </li>

          <li>
            <Link href={"/#about"}>About me</Link>
          </li>

          <li>
            <Link href={"/#projects"}>Projects</Link>
          </li>
        </ul>
      </div>

      <div className="hidden sm:flex sm:navbar-end">
        <Link href={"/#contact-me"} className="btn btn-outline btn-primary">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
