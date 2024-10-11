import About from "@/components/About";
import Experiences from "@/components/Experiences/Experiences";
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
    </>
  );
}
