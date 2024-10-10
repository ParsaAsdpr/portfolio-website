"use client";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Motion from "../common/Motion";
import HeroContainer from "./HeroContainer";
import TypeEffect from "./TypeEffect";
import Button from "../common/Button";
import { LuArrowDown } from "react-icons/lu";

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

      <HeroContainer>
        <VStack
          paddingLeft="20%"
          justifyContent="center"
          alignItems="start"
          height="100%"
          zIndex={20}
          position="relative"
        >
          <Text fontFamily="dancing" fontSize={75}>
            Parsa Asadpour
          </Text>
          <TypeEffect />

          <Button href="/My CV.pdf" download isExternal>
            <HStack>
              <Text >Download CV</Text>
              <Icon as={LuArrowDown} transform='translateX(50%)' />
            </HStack>
          </Button>
        </VStack>
      </HeroContainer>
    </Box>
  );
};

export default Hero;
