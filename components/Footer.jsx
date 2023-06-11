import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-black min-h-[150px] flex items-center justify-center px-2">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between w-full max-w-5xl m-auto border-t border-t-neutral-700 pt-5">
        <p className="text-white">&copy; 2023, Ghizlane EL ATMANI</p>

        <div className="flex gap-4">
          <button type="button">
            <Link href="/">
              <BsLinkedin size={24} className="text-white" />
            </Link>
          </button>

          <button type="button">
            <Link href="/">
              <BsGithub size={24} className="text-white" />
            </Link>
          </button>

          <button type="button">
            <Link href="/">
              <img src="/group.svg" className="text-white h-[24px]" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
