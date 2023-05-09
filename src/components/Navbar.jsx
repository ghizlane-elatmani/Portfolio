import { useState } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsFillMoonStarsFill,
  BsSunFill,
  BsX,
  BsList,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = ({ theme, handleThemeSwitch }) => {
  let links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/" },
    { name: "Projects", url: "/" },
    { name: "Contact", url: "/" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-slate-30 fixed z-40 w-full bg-white/50 drop-shadow-lg backdrop-blur-md dark:bg-slate-900/50">
      <nav className="m-auto max-w-5xl">
        <div className="items-center justify-between py-4 px-6 md:flex md:px-10 ">
          <div className="cursor-pointer text-lg font-bold tracking-wider text-blue-700">
            Ghizlane.js
          </div>

          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="absolute right-8 top-5 cursor-pointer text-2xl text-neutral-500 hover:text-blue-500 dark:text-blue-50 dark:hover:text-blue-500 md:hidden"
          >
            {openMenu ? <BsX /> : <BsList />}
          </div>

          <ul
            className={`duration absolute left-0 top-[3.5rem] z-[-1] w-full pb-12 pl-8 transition-all md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
              openMenu
                ? "min-h-screen bg-white opacity-100 dark:bg-slate-900 md:min-h-0"
                : "right-[-490px] opacity-0 md:opacity-100"
            }`}
          >
            {links.map((link, index) => {
              return (
                <li key={index} className="my-7 md:my-0 md:ml-8">
                  <Link
                    to={link.name.toLowerCase()}
                    smooth={true}
                    duration={500}
                    onClick={() => setOpenMenu(false)}
                    className="duration cursor-pointer text-base text-neutral-900 hover:text-blue-500 dark:text-neutral-50 dark:hover:text-blue-500"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            <li className="mb-7 md:mb-0 md:ml-8">
              <button
                className=" flex items-center text-neutral-900 hover:text-blue-700 dark:text-neutral-50 dark:hover:border-amber-500 dark:hover:text-blue-500"
                onClick={() => handleThemeSwitch()}
              >
                {theme === "light" ? <BsSunFill /> : <BsFillMoonStarsFill />}
              </button>
            </li>

            <li className="mb-7 md:mb-0 md:ml-3">
              <a
                href="https://github.com/ghizlane-elatmani"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className=" duration text-neutral-900 transition-all hover:text-blue-700 hover:text-amber-500 dark:text-neutral-50 dark:hover:text-blue-500" />
              </a>
            </li>

            <li className="md:ml-3">
              <a
                href="https://www.linkedin.com/in/ghizlane-el-atmani-a91732214/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="duration text-neutral-900 transition-all hover:text-blue-700 hover:text-amber-500 dark:text-neutral-50 dark:hover:text-blue-500" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
