import { useState } from "react";
import logo from "../assets/logo.png";
import { BsList, BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-[60px] items-center justify-between px-2 text-white sm:px-4">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-[30px]" />
      </div>

      <nav className="hidden sm:block">
        <ul className="flex items-center gap-5 font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Projects</li>
          <li className="btn-cta cursor-pointer rounded-lg px-4 py-2 font-bold">
            Contact me
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

      {open && (
        <nav className="absolute top-0 left-0 flex h-full w-full flex-col bg-black">
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
        </nav>
      )}
    </div>
  );
};

export default Navbar;
