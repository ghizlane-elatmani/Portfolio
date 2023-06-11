import Hero from "@components/Hero";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import CallToAction from "@components/CallToAction";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <CallToAction />
      <Footer />
    </>
  );
}
