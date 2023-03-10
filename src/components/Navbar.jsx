import { useState } from "react";
import { BiGridAlt, BiX, BiMoon, BiSun } from "react-icons/bi";
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
    <nav
      className="z-40 bg-slate-300 dark:bg-slate-900 shadow-lg shadow-slate-300/50 dark:shadow-slate-900/50
       w-11/12 rounded-[100px] fixed top-4 left-1/2 -translate-x-1/2 trantion-all duration"
    >
      <div className="md:flex items-center justify-between py-4 px-6 md:px-10 ">
        {/* ===== LOGO ===== */}
        <div
          className="text-amber-500 text-lg font-semibold tracking-wider 
        cursor-pointer"
        >
          Ghizlane
        </div>

        {/* ===== HAMBURGER MENU ===== */}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-slate-900 dark:text-amber-50 hover:text-amber-500 text-2xl 
          cursor-pointer absolute right-8 top-5 md:hidden"
        >
          {openMenu ? <BiX /> : <BiGridAlt />}
        </div>

        {/* ===== MENU ===== */}
        <ul
          className={`md:flex md:items-center md:w-auto md:pb-0 md:pl-0 pb-12 absolute md:static 
        bg-slate-300 dark:bg-slate-900 md:z-auto z-[-1] right-0 top-[4rem] w-3/5 pl-8 rounded-[13px] 
        transition-all duration 
        ${
          openMenu ? "opacity-100" : "right-[-490px] md:opacity-100 opacity-0"
        }`}
        >
          {links.map((link, index) => {
            return (
              <li key={index} className="md:ml-8 md:my-0 my-7">
                <Link
                  to={link.name.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => setOpenMenu(false)}
                  className="text-slate-900 dark:text-amber-50 text-lg hover:text-amber-500 duration 
                  dark:hover:border-amber-500 dark:hover:text-amber-500 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          <button
            className="md:ml-8 p-2 border-2 border-slate-900 rounded-full 
            dark:border-amber-50 dark:text-amber-50 hover:border-amber-500 hover:text-amber-500
            dark:hover:border-amber-500 dark:hover:text-amber-500"
            onClick={() => handleThemeSwitch()}
          >
            {theme === "light" ? <BiMoon /> : <BiSun />}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
