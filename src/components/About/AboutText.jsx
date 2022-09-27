import React from "react";
import { Parallax } from "react-parallax";
import AboutDetails from "./AboutDetails";

import about from '../../constants/about.json'

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
                &quot;I&lsquo;m a frontend developer and UI/UX designer with 3
                years of experience currently studying computer engineering in
                Islamic Azad University. I love learning and using the latest
                web technologies and improving my skills.&quot;
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
