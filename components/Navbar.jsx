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

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/"}>About me</Link>
            </li>

            <li>
              <Link href={"/"}>Projects</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-accent">Ghizlane</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/"}>About me</Link>
          </li>

          <li>
            <Link href={"/"}>Projects</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact me</a>
      </div>
    </div>
  );
};

export default Navbar;
