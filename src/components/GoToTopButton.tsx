"use client";
import Button from "./common/Button";
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

      <Button
        py={2.5}
        px={3}
        transform={`rotate(270deg) translateX(${isVisible ? "0%" : "-50%"})`}
        position="fixed"
        bottom="5%"
        right="5%"
        isLink
        href="#hero"
        opacity={isVisible ? 1 : 0}
        visibility={isVisible ? "visible" : "hidden"}
        transition="all 0.3s"
      >
        <IoIosArrowRoundForward fontSize={30} />
      </Button>
  );
};

export default GoToTopButton;
