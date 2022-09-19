import React from "react";
import { Parallax } from "react-parallax";

const AboutText = () => {
  return (
    <div className="flex flex-col gap-y-20 md:py-10">
      <div className="w-full md:w-2/3 text-stone-800 mx-auto">
        <Parallax
          strength={100}
          renderLayer={(precentage) => (
            <p
              className={`about-text text-base sm:text-lg md:text-xl lg:text-2xl duration-1000 ${
                precentage > 0.35 ? "show" : "hide"
              }`}
            >
              &quot;I&lsquo;m a frontend developer and UI/UX designer with 3 years of
              experience currently studying computer engineering in Islamic Azad
              University. I love learning and using the latest web technologies
              and improving my skills.&quot;
            </p>
          )}
        ></Parallax>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 about-subs`}>
        <div>
          <h4 className="text-xl text-stone-800 font-semibold py-3">
            Lorem, ipsum.
          </h4>
          <p className="text-lg text-stone-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis
            id voluptatibus distinctio rem voluptatem explicabo molestias
            corporis doloremque dicta.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-stone-800 font-semibold py-3">
            Lorem, ipsum.
          </h4>
          <p className="text-lg text-stone-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis
            id voluptatibus distinctio rem voluptatem explicabo molestias
            corporis doloremque dicta.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-stone-800 font-semibold py-3">
            Lorem, ipsum.
          </h4>
          <p className="text-lg text-stone-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis
            id voluptatibus distinctio rem voluptatem explicabo molestias
            corporis doloremque dicta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
