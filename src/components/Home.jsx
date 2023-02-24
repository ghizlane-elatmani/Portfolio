import { BiCloudDownload, BiDownArrowAlt } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-w-full p-3 min-h-screen flex justify-center items-center text-amber-50 bg-slate-600">
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
            <FaLinkedin className="md:text-3xl text-amber-50 hover:text-amber-500 transition-all duration-500" />
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
            <FaGithubSquare className="md:text-3xl text-amber-50 hover:text-amber-500 transition-all duration-500" />
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
              href="#contact"
              className="md:text-lg text-base rounded-full border-2 border-amber-500 text-amber-50 bg-amber-500 px-3 py-1
            hover:bg-amber-600 hover:border-amber-600 transition-all duration-500 easy-in flex items-center justify-center gap-1 "
            >
              <BiCloudDownload />
              Resume
            </a>
            <a
              href="#contact"
              className="md:text-lg text-base rounded-full border-2 border-amber-500 text-amber-500 px-3 py-1
            hover:bg-amber-500 hover:text-amber-50 transition-all duration-500 easy-in flex items-center justify-center gap-1 "
            >
              <BiDownArrowAlt />
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
