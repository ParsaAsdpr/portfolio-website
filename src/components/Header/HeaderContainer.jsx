import React from "react";
import ThemeContext from "../../context/themeContext";
import Navlink from "../common/navlink";
import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaPhoneSquareAlt } from "react-icons/fa";
import SocialMedia from "../common/socialMedia";
import Typewriter from "typewriter-effect";
import { stringToArray } from "../../utils/helper/stringToArray.helpers";
import ScrollButton from "./ResumeButton";

import navlinks from '../../constants/navlinks.json'

const HeaderContainer = () => {
  const socialMedia = [
    {
      name: "Telegram",
      element: <BsTelegram />,
      href: "https://telegram.me/BChatBot?start=sc-683486-4zWlnrG",
    },
    {
      name: "LinkedIn",
      element: <BsLinkedin />,
      href: "https://www.linkedin.com/in/parsa-asadpour-42014322b",
    },
    {
      name: "Github",
      element: <BsGithub />,
      href: "https://github.com/ParsaAsdpr",
    },
    { name: "Phone", element: <FaPhoneSquareAlt />, href: "tel:+989939604178" },
  ];


  const brand = stringToArray("Parsa Asadpour");

  return (
    <ThemeContext.Consumer>
      {(themeContext) => (
        <header
          className={`w-full h-screen bg-${themeContext} header-container outline-none border-0 relative flex justify-center items-center overflow-hidden`}
        >
          <div className="border-container relative">
            <nav className="w-3/4 sm:w-3/4 md:w-2/3 lg:w-1/2 left-1/2 -translate-x-1/2 z-10 absolute -top-3 sm:-top-4 md:-top-5 text-[9pt] sm:text-sm md:text-xl flex flex-row justify-around">
              {navlinks.map((nav, index) => (
                <Navlink
                  text={nav.text}
                  url={nav.url}
                  key={index}
                  theme={themeContext}
                  duration={`${0.3 - index / 4 + 2}s`}
                ></Navlink>
              ))}
            </nav>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute text-[6rem] sm:text-[13rem] md:text-[20rem] lg:text-[26rem] hello text-white opacity-[0.15] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              HELLO
            </motion.h3>
            <div className="h-full pl-[5%] sm:pl-[10%] md:pl-[15%] lg:pl-[20%] float-left flex items-center">
              <main>
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-stone-900">
                  {brand.map((letter, index) => (
                    <span
                      className="relative"
                      key={index}
                      style={{
                        animationName: `titleAnim`,
                        animationDuration: `${2 + (index / 10) * 0.9}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(600)
                      .changeDelay(90)
                      .typeString(
                        "Junior Web Developer and <br /> UI/UX Designer from Iran"
                      )
                      .start();
                  }}
                />
                <ScrollButton />
              </main>
            </div>

            <div className=" absolute flex flex-col justify-center items-center gap-6 -right-4 z-10 -translate-y-1/2 top-1/2">
              {socialMedia.map((social, index) => (
                <SocialMedia key={index} title={social.name} url={social.href} theme={themeContext}>
                  {social.element}
                </SocialMedia>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 3 }}
              className="rounded-full border-dashed border-8 border-black opacity-5 absolute p-[600px] -top-[500px] -right-[800px] dashed-circle"
            ></motion.div>
          </div>
        </header>
      )}
    </ThemeContext.Consumer>
  );
};

export default HeaderContainer;
