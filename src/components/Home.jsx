import Social from "./Social";

const Home = () => {
  return (
    <section className="home-section">
      <div className="container flex-center">
        <div className="home-content">
          <Social />
          <div className="home-data">
            <h1 className="heading-1 mb-sm">Ghizlane EL ATMANI</h1>

            <h3 className="subtitle mb-md">Web Developer</h3>

            <p className="home-desc">
              I'm a web developer based in Rabat (Morocco), and I'm very
              passionate and dedicated to my work
            </p>

            <a href="#contact" className="btn btn-flex">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
