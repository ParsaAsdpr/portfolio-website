import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Motion from "../common/Motion";
import HeroContainer from "./HeroContainer";

const Hero = () => {
  return (
    <Box position="relative" width="100vw" height="100vh" overflow="hidden">
      {[0, 1].map((i) => (
        <Motion
          key={i}
          initial={{ translateX: `${i === 0 ? "-" : ""}100%` }}
          animate={{ translateX: 0 }}
          // transition={{delay: 4.7, duration: 0.7, ease: "easeOut" }}
          style={{ width: "100%", height: "50%", backgroundColor: "#f8e179" }}
        ></Motion>
      ))}
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: 1,
        }}
      >
        <Text
          fontWeight="bold"
          fontSize={350}
          fontFamily="anton"
          lineHeight={1.2}
          transform="translate(-50%, -50%)"
          userSelect="none"
          color="#ffffff18"
        >
          HELLO
        </Text>
      </Motion>

      <HeroContainer />
    </Box>
  );
};

export default Hero;
