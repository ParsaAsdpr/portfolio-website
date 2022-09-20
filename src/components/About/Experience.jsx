import React from "react";
import ExpCard from "./ExpCard";
import { Parallax } from "react-parallax";

const Experience = () => {
  const [exp] = React.useState([
    {
      color: 1,
      company: "Sepehr Academy",
      date: "April 2020 - February 2021",
      position: "Frontend Developer",
      desc: "I was frontend developer in developing an ecommerce web app for Sepehr academy. i managed a team of 3 people to build the frontend for the webapp. we used React.js to build the frontend.",
    },
    {
      color: 3,
      company: "DadeKav",
      date: "October 2021 - May 2022",
      position: "Frontend Developer",
      desc: "Worked as frontend developer to develop a nationwide agricultural management system and utilized React and Next.js",
    },
  ]);

  return (
    <div className="mt-32 mx-auto mb-10">
      <Parallax
      style={{overflow: 'visible'}}
        strength={100}
        renderLayer={(precentage) => (
          <h1
            className={`text-2xl sm:text-5xl lg:text-6xl text-center parallax font-bold text-stone-800 duration-700 ${
              precentage > 0.25 ? "show" : "hide"
            }`}
          >
            My Experience
          </h1>
        )}
      ></Parallax>
      <div className="pt-20">
        {/* {exp.map((item, index) => ( */}
        <ExpCard
          color={exp[0].color}
          company={exp[0].company}
          date={exp[0].date}
          position={exp[0].position}
          desc={exp[0].desc}
          perc={0.4}
        />
        <ExpCard
          color={exp[1].color}
          company={exp[1].company}
          date={exp[1].date}
          position={exp[1].position}
          desc={exp[1].desc}
          perc={0.49}
        />

        {/* ))} */}
      </div>
    </div>
  );
};

export default Experience;
