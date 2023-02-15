import React from "react";
import ExpCard from "./ExpCard";
import { Parallax } from "react-parallax";

import experience from "../../constants/experience.json"

const Experience = () => {
  return (
    <div className="mt-32 mx-auto mb-10">
      <Parallax
      style={{overflow: 'visible'}}
        strength={100}
        renderLayer={(precentage) => (
          <h2
            className={`text-2xl sm:text-5xl lg:text-6xl text-center parallax font-bold text-stone-800 duration-700 ${
              precentage > 0.25 ? "show" : "hide"
            }`}
          >
            My Experience
          </h2>
        )}
      ></Parallax>
      <div className="pt-20">
        {/* {experience.map((item, index) => ( */}
        <ExpCard
          color={experience[0].color}
          company={experience[0].company}
          date={experience[0].date}
          position={experience[0].position}
          desc={experience[0].desc}
          perc={0.4}
        />
        <ExpCard
          color={experience[1].color}
          company={experience[1].company}
          date={experience[1].date}
          position={experience[1].position}
          desc={experience[1].desc}
          perc={0.49}
        />

        {/* ))} */}
      </div>
    </div>
  );
};

export default Experience;
