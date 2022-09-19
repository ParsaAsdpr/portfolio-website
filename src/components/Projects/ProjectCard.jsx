import React from "react";
import { FaShare } from "react-icons/fa";
import Image from "next/image";

const ProjectCard = (props) => {
  let del;

  if (props.duration > 0) del = props.duration / 10 + 0.1;
  return (
    <div
      className={`flex flex-col project-card w-[400px] sm:w-[300px] md:w-[340px] lg:w-[330px] xl:w-[400px] duration-700 ${
        props.perc > 0.8
          ? "opacity-1 translate-x-0"
          : "opacity-0 translate-x-full"
      }`}
      style={{ transitionDelay: `${del}s` }}
    >
      <div className="w-full project-container h-[250px] sm:h-[200px] md:h-[210px] lg:h-[200px] xl:h-[240px] rounded-md border border-black overflow-hidden cursor-pointer project-image">
        <div className="project-mask">
          <div className="flex flex-row justify-between px-5">
            <FaShare
              color="#ffffff"
              opacity="0.8"
              className="border border-white rounded-full p-1 text-2xl"
            />
          </div>
        </div>
        <Image
          src={props.img}
          alt="Project preview"
          draggable={false}
          className="w-full hover:scale-[1.03] duration-700"
        />
      </div>
      <div className="flex flex-row pt-5 sm:pt-8 md:pt-10 relative px-1 sm:px-2 md:px-3 items-center">
        <h4 className=" text-base sm:text-lg md:text-xl lg:text-2xl font-bold pr-4 bg-white absolute top-1/2">
          {props.title}
        </h4>
        <div className="border-t border-black w-full"></div>
      </div>
      <p className=" mt-5 sm:mt-6 px-1 sm:px-2 md:px-3 text-xs sm:text-sm md:text-base">
        {props.desc}
      </p>
    </div>
  );
};

export default ProjectCard;
