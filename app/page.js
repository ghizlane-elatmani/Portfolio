import Navbar from "@components/Navbar";
import Hero from "@sections/Hero";
import AboutMe from "@sections/AboutMe";
import Projects from "@sections/Projects";
import CallToAction from "@sections/CallToAction";
import Footer from "@components/Footer";
import Logos from "@sections/Logos";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Logos />
      <Projects />
      <CallToAction />
      <Footer />
    </>
  );
}
