import React from 'react';

const AboutDetails = props => {
    return (
        <div>
             <div>
                <h4
                  className={`duration-1000 text-base sm:text-lg md:text-xl about-text text-stone-800 font-semibold py-3 ${
                    props.perc > 0.55 ? "show" : "hide"
                  }`}
                >
                  {props.title}
                </h4>
                <p className={`duration-1000 text-base sm:text-lg md:text-xl text-stone-700 about-text ${
                    props.perc > 0.55 ? "show" : "hide"
                  }`}>
                  {props.desc}
                </p>
              </div>
        </div>
    );
};

export default AboutDetails;