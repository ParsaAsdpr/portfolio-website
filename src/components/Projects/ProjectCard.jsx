import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";


const ProjectCard = (props) => {
  const button = [
    { title: "Github", link: props.github, icon: <FiGithub /> },
    { title: "Redirect", link: props.link, icon: <FiLink /> },
  ];
  let del;

  if (props.duration > 0) del = props.duration / 10 + 0.1;
  return (
    <div
      className={`flex flex-col project-card w-[400px] sm:w-[300px] md:w-[340px] lg:w-[330px] xl:w-[400px] duration-700 ${
        props.perc > 0.44
          ? "opacity-1 translate-x-0"
          : "opacity-0 translate-x-full"
      }`}
      style={{ transitionDelay: `${del}s` }}
    >
      <div className="w-full project-container h-[250px] sm:h-[200px] md:h-[210px] lg:h-[200px] xl:h-[240px] rounded-md border border-black overflow-hidden cursor-pointer project-image">
        <div className="absolute project-mask w-full h-full duration-700 hover:backdrop-blur-sm bottom-0 right-0 z-10">
          <div className="flex flex-row justify-center gap-16 items-center w-full h-full duration-1000 opacity-0">
            {button.map((btn, index) => (
              <a
                className={`p-3 text-2xl ${props.isDark ? 'text-white border-white hover:bg-white hover:text-stone-800' : 'text-stone-800 border-stone-800 hover:bg-stone-800 hover:text-white'} cursor-pointer duration-300 rounded-full border-2`}
                title={btn.title}
                key={index}
                href={btn.link}
                rel="noreferrer"
                target="_blank"
              >{btn.icon}</a>
            ))}
          </div>
        </div>
        <img
          src={props.img}
          alt="Project preview"
          draggable={false}
          className="project-img duration-1000"
          
        />
      </div>
      <div className="flex flex-row pt-5 sm:pt-8 md:pt-10 relative px-1 sm:px-2 md:px-3 items-center">
        <h4 className=" text-base sm:text-lg md:text-xl lg:text-2xl font-bold pr-4 bg-white absolute top-1/2">
          {props.title}
        </h4>
        <div className="border-t border-black w-full"></div>
      </div>
      <p className=" mt-5 sm:mt-6 px-1 sm:px-2 md:px-3 text-xs sm:text-sm md:text-base">
        {props.desc} ( Hover on preview )
      </p>
    </div>
  );
};

export default ProjectCard;
