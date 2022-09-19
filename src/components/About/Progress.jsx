import React from "react";
import Progressbar from "react-js-progressbar";
import ThemeContext from "../../context/themeContext";
import {Parallax} from "react-parallax" 

const Progress = (props) => {
  const [themes] = React.useState([
    "#f8e179",
    "#c3ee92",
    "#9be2c1",
    "#f7928b",
    "#f79bd8",
  ]);
  return (
    <ThemeContext.Consumer>
      {(themeContext) => (
        <Parallax
          strength={100}
          renderLayer={(precentage) => (
            <div className={`skill duration-500 ${precentage > 0.3 ? "show" : "hide"}`} style={{transitionDelay: props.duration}}>
              <Progressbar
                input={props.value}
                pathWidth={10}
                pathColor={themes[themeContext - 1]}
                trailWidth={20}
                pathShadow="none"
                trailColor="#eeeeee"
                textStyle={{ fill: "#111111" }}
              ></Progressbar>
              <p className="text-lg font-semibold text-center relative -top-2">
                {props.text}
              </p>
            </div>
          )}
        ></Parallax>
      )}
    </ThemeContext.Consumer>
  );
};

export default Progress;
