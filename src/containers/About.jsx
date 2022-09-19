import React from "react";
import AboutContent from "../components/About/AboutContent";
import Experience from "../components/About/Experience";
import SectionTitle from "../components/common/SectionTitle";

const About = () => {
  return (
    <div id="about">
    <SectionTitle title="About"></SectionTitle>
    <AboutContent></AboutContent>
    <Experience />
    </div>
  );
};

export default About;
