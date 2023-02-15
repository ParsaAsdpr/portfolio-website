import Head from "next/head";
import Image from "next/image";
import WelcomeContainer from "../containers/WelcomeContainer";
import { useState, useEffect } from "react";
import Header from "../containers/Header";
import ThemeContext from "../context/themeContext";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";

export default function Home() {
  const [fs, setFs] = useState(false);
  const [theme, setTheme] = useState()
  
  useEffect(() => {
    fetch('/api/theme')
      .then((res) => res.json())
      .then((data) => {
        setTheme(data.theme)
      })
    setTimeout(() => {
      setFs(true);
    }, 3400);
  }, []);
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Head>
          <title>Parsa Asadpour Portfolio</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="utf-8" />
          <meta name="og:site_name" content="Parsa Asadpour Portfolio" />
          <meta
            name="og:description"
            content="Parsa Asadpour | Young Web Developer and UI/UX Designer from Iran"
          />
          <meta name="og:image" content="/Logo.png" />

          <meta
            name="description"
            content="Parsa Asadpour | Young Web Developer and UI/UX Designer from Iran"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="keywords"
            content="Web Developer, Portfolio, Parsa Asadpour, Parsa, Asadpour, Asadpoor, Next.js, Developer, React, React.js, UI, UX"
          ></meta>
          <meta name="author" content="Parsa"></meta>
          <meta name="theme-color" content="#F8E179" />
          <meta name="robots" content="index, follow" />

          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon image_src" href="/Logo.png" />
        </Head>

        <div>
          <WelcomeContainer />
            <div className={fs ? 'block' : 'hidden'}>
              <Header></Header>
              <About></About>
              <Projects></Projects>
              <Contact></Contact>
              <Footer></Footer>
            </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
