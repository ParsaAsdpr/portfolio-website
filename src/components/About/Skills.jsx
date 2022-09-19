import React from "react";
import Progress from "./Progress";

const Skills = () => {
  const [skills1] = React.useState([
    { value: 70, text: "React.js" },
    { value: 90, text: "HTML" },
    { value: 85, text: "Sass" },
  ]);

  const [skills2] = React.useState([
    { value: 40, text: "C#" },
    { value: 60, text: "node.js" },
    { value: 55, text: "ASP.Net" },
  ]);
  return (
    <div className="w-full md:w-1/3 px-16 md:px-0 grid grid-cols-2 md:grid-cols-3 gap-7">
      {skills1.map((skill, index) => (
        <Progress value={skill.value} text={skill.text} key={index} duration={`${index*0.15}s`}></Progress>
      ))}
      {skills2.map((skill, index) => (
        <Progress value={skill.value} text={skill.text} key={index} duration={`${index*0.15}s`}></Progress>
      ))}
    </div>
  );
};

export default Skills;
