import React from "react";
import ThemeContext from "../../context/themeContext";

const HeaderAnim = () => {
  return (
    <ThemeContext.Consumer>
      {(themeContext) => (
        <div className="h-screen w-full overflow-hidden">
          <div
            className={`w-screen h-1/2 bg-${themeContext} header-above`}
          ></div>
          <div
            className={`w-screen h-1/2 bg-${themeContext} header-below`}
          ></div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default HeaderAnim;
