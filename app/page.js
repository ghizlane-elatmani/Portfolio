import Navbar from "@components/Navbar";
import Hero from "@sections/Hero";
import Services from "@sections/Services";
import Projects from "@sections/Projects";
import CallToAction from "@sections/CallToAction";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <CallToAction />
      <Footer />
    </>
  );
}
