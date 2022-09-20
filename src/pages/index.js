import Head from 'next/head'
import Image from 'next/image'
import WelcomeContainer from "../containers/WelcomeContainer";
import {useState, useEffect} from "react";
import Header from "../containers/Header";
import ThemeContext from "../context/themeContext";
import About from '../containers/About'
import Projects from '../containers/Projects'
import Contact from '../containers/Contact'
import Footer from '../containers/Footer'

const theme = Math.floor(Math.random() * 5) + 1;

export default function Home() {
  const [fs, setFs] = useState(false);

useEffect(() => {
setTimeout(() => {
setFs(true);
}, 3100);
});
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <Head>
        <title>Parsa Asadpour Portfolio</title>
        <meta name="description" content="Parsa Asadpour | Young Web Developer and UI/UX Designer from Iran" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Web Developer, Portfolio, Parsa Asadpour, Parsa, Asadpour, Asadpoor, Next.js, Developer, React, React.js, UI, UX"></meta>
        <meta name="author" content="Parsa"></meta>
        <meta name="theme-color" content={theme} />
      </Head>

    <div>
      <WelcomeContainer />
      {fs ? <>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      </>
       : <></>}
    </div>
    </div>
    </ThemeContext.Provider>
  )
}
