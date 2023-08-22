import Navbar from "@components/Navbar";
import Hero from "@sections/Hero";
import AboutMe from "@sections/AboutMe";
import Projects from "@sections/Projects";
import CallToAction from "@sections/CallToAction";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <CallToAction />
      <Footer />
    </>
  );
}
