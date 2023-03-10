import { BiCloudDownload, BiDownArrowAlt } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <section
      name="home"
      className="min-w-full p-3 min-h-screen xl:min-h-max xl:py-[15rem] flex justify-center items-center text-slate-900 
    bg-slate-100 dark:bg-slate-800 dark:text-amber-50"
    >
      <div className="flex gap-5 ">
        {/* ===== SOCIAL ===== */}
        <div className="flex flex-col gap-2 justify-center">
          <a
            href="https://www.linkedin.com/in/ghizlane-el-atmani-a91732214/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#222",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            <FaLinkedin
              className="md:text-3xl text-slate-900 dark:text-amber-50 hover:text-amber-500 
              dark:hover:text-amber-500 transition-all duration"
            />
          </a>
          <a
            href="https://github.com/ghizlane-elatmani"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#222",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            <FaGithubSquare
              className="md:text-3xl text-slate-900 dark:text-amber-50 
            hover:text-amber-500 dark:hover:text-amber-500 transition-all duration"
            />
          </a>
        </div>

        {/* ===== DESCRIPTION ===== */}
        <div className="">
          <h1 className="md:text-4xl text-2xl mb-2">Ghizlane EL ATMANI</h1>

          <h3 className="md:text-2xl text-xl mb-4 uppercase tracking-wide text-amber-500 font-light">
            Web Developer
          </h3>

          <p className="md:text-lg text-base mb-6 md:w-[50ch] max-w-prose">
            I'm a web developer based in Rabat (Morocco), and I'm very
            passionate and dedicated to my work
          </p>

          <div className="flex gap-2">
            <a
              href={resume}
              download="ghizlane-elatmani"
              className="text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br 
              focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 
              dark:shadow-lg dark:shadow-amber-800/80 font-medium rounded-lg md:text-lg text-base px-3 py-2 text-sm
              md:px-5 md:py-2.5 text-center flex items-center justify-center gap-1"
            >
              <BiCloudDownload />
              Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="md:text-lg text-base rounded-lg border-2 border-slate-100 dark:border-slate-800
              dark:hover:border-amber-500 hover:border-amber-500 text-slate-900 dark:text-amber-50 px-3 py-1
              dark:hover:text-amber-500 hover:text-amber-500 transition-all duration easy-in flex items-center 
              justify-center gap-1 md:text-lg text-base px-3 py-2 text-sm md:px-5 md:py-2.5 cursor-pointer"
            >
              <BiDownArrowAlt />
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
