import React from "react";
import { Parallax } from "react-parallax";

const ExpCard = (props) => {
  return (
    <Parallax
      strength={100}
      renderLayer={(precentage) => (
        <div className="flex flex-col max-w-7xl mx-auto">
          <div
            className={`rounded-full border-2 border-stone-400 p-1 md:p-2 mx-auto duration-200 ease-out ${
              precentage > props.perc - 0.1 ? "scale-100" : "scale-0"
            }`}
          >
            <div className={`p-2 md:p-3 rounded-full bg-${props.color}`}></div>
          </div>
          <div
            className={`flex-row flex overflow-hidden exp  ${
              precentage > props.perc ? "show" : "hide"
            }`}
          >
            <div className="w-1/2 pl-3 sm:pl-16 md:pl-32 lg:pl-52">
              <h4
                className={`text-lg md:text-2xl lg:text-3xl font-bold text-stone-700 parallax duration-700 delay-500 ${
                  precentage > props.perc ? "show" : "hide"
                }`}
              >
                {props.company}
              </h4>
              <p
                className={`text-stone-500 mt-3 italic text-xs sm:text-sm md:text-base parallax duration-700 delay-700 ${
                  precentage > props.perc ? "show" : "hide"
                }`}
              >
                {props.date}
              </p>
            </div>

            <div className="w-1/2 border-l-2 border-stone-400 border-dashed pl-8 sm:pl-10 md:pl-20 pb-5">
              <h4
                className={`text-lg md:text-2xl lg:text-3xl font-bold text-stone-700 parallax duration-700 delay-500 ${
                  precentage > props.perc ? "show" : "hide"
                }`}
              >
                {props.position}
              </h4>
              <p
                className={`mt-4 text-stone-600 text-xs md:text-base lg:text-lg pr-4 parallax desc duration-700 delay-700 ${
                  precentage > props.perc ? "show" : "hide"
                }`}
              >
                {props.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    ></Parallax>
  );
};

export default ExpCard;
