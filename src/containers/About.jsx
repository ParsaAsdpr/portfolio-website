import React from "react";
import AboutContent from "../components/About/AboutContent";
import Experience from "../components/About/Experience";
import SectionTitle from "../components/common/SectionTitle";

const About = () => {
  return (
    <section id="about">
    <SectionTitle title="About"></SectionTitle>
    <AboutContent></AboutContent>
    <Experience />
    </section>
  );
};

export default About;
