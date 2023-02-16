import { useEffect, useState } from "react";
import "../assets/styles/index.css";
import ThemeContext from "../context/themeContext";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(1)
  // useEffect(() => {
  //   fetch("/api/theme")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTheme(data.theme);
  //     });
  // });
  return (
    <ThemeContext.Provider value={theme}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
