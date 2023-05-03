import { BiCloudDownload, BiDownArrowAlt } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <section
      name="home"
      className="flex min-h-screen min-w-full items-center justify-center bg-neutral-50 p-3 dark:bg-slate-900 xl:min-h-max xl:py-[15rem]"
    >
      <div className="text-center">
        <h1 className="font-smibold mb-2 text-2xl text-neutral-800 dark:text-neutral-50 md:text-4xl">
          Ghizlane EL ATMANI
        </h1>

        <h3 className="mb-4 text-xl font-light uppercase tracking-wide text-blue-500 md:text-2xl">
          - Web Developer -
        </h3>

        <p className="mb-6 max-w-prose text-base text-neutral-600 dark:text-neutral-300 md:w-[50ch] md:text-lg">
          I'm a web developer based in Rabat (Morocco), and I'm very passionate
          and dedicated to my work.
        </p>

        <div className="flex justify-center gap-2">
          <a
            href={resume}
            download="ghizlane-elatmani"
            className="flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-3 py-1 text-sm font-medium text-neutral-50 shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 md:px-5 md:py-2 md:text-base"
          >
            <BiCloudDownload />
            Resume
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="duration easy-in flex cursor-pointer items-center justify-center gap-1 rounded-lg border-2 border-slate-100 px-3 py-1 text-sm text-neutral-900 transition-all hover:border-blue-500 hover:text-blue-500 dark:border-slate-900 dark:text-neutral-50 dark:hover:border-blue-500 dark:hover:text-blue-500 md:px-5 md:py-2 md:text-base"
          >
            <BiDownArrowAlt className="animate-bounce" />
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
