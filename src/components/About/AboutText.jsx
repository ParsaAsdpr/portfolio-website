import React from "react";
import { Parallax } from "react-parallax";
import AboutDetails from "./AboutDetails";

import about from "../../constants/about.json";

const AboutText = () => {
  return (
    <div className="flex flex-col gap-y-20 md:py-10">
      <Parallax
        strength={100}
        renderLayer={(precentage) => (
          <>
            <div className="w-full md:w-2/3 text-stone-800 mx-auto">
              <p
                className={`about-text text-base sm:text-lg md:text-xl lg:text-2xl duration-1000 ${
                  precentage > 0.45 ? "show" : "hide"
                }`}
              >
                I am a Frontend Developer and UI/UX Designer with 3 years of web development experience, including a year working with React.js and Next.js. Currently studying Computer Engineering at Islamic Azad University, I&lsquo;m passionate about developing dynamic, user-friendly websites and continuously learning the latest web technologies. I approach my work with creativity and a proactive mindset, always aiming to improve my skills.
              </p>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 sm:mt-14 md:mt-20 lg:mt-24 about-subs`}
            >
              {about.map((item, index) => (
                <AboutDetails
                  perc={precentage}
                  key={index}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </>
        )}
      ></Parallax>
    </div>
  );
};

export default AboutText;
