import React from "react";
import ThemeContext from "../context/themeContext";
import HeaderAnim from "../components/Header/HeaderAnim";
import HeaderContainer from "../components/Header/HeaderContainer"

const Header = () => {
  const [ss, setSs] = React.useState(false);

  setTimeout(() => {
    setSs(true);
  }, 1800);

  return (
    <ThemeContext.Consumer>
      {(themeContext) => 
        <>
          {ss ? <HeaderContainer></HeaderContainer> : <HeaderAnim></HeaderAnim>}
        </>
      }
    </ThemeContext.Consumer>
  );
};

export default Header;
