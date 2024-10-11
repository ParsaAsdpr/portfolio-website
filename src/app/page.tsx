import About from "@/components/About";
import Contact from "@/components/Contact/Contact";
import Experiences from "@/components/Experiences/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
