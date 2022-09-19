import Welcome from "../components/Welcome";
import React from "react";
import ThemeContext from "../context/themeContext";

const WelcomeContainer = () => {
  const [isActive, setActive] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 3000);
  });

  return (
    <ThemeContext.Consumer>
      { 
      themeContext =>
        <div
          className={`welcomeContainer ${
            isActive ? "scrolled" : ""
          } absolute duration-500 top-0 bg-${themeContext} h-screen w-full flex justify-center items-center flex-col`}
        >
          <Welcome />
        </div>
      }
    </ThemeContext.Consumer>
  );
};

export default WelcomeContainer;
