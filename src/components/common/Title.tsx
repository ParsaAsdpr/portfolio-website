"use client";
import { Divider, HStack, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import Motion from "./Motion";

const Title = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const view = useInView(ref, { amount: 0.8, once: true });

  return (
    <HStack position="relative" width="100%" justifyContent="center" ref={ref}>
      <Divider
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        w={view ? "50%" : "0"}
        borderColor="#333"
        transition="1s"
        zIndex={-1}
      />
      <Motion
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text
          fontWeight={700}
          fontSize={[26, 27, 28, 29, 30]}
          className="verdana"
          bg="white"
          px={3}
          color="#333"
        >
          {children}
        </Text>
      </Motion>
      <Divider
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(50%)"
        w={view ? "50%" : "0"}
        borderColor="#333"
        transition="1s"
        zIndex={-1}
      />
    </HStack>
  );
};

export default Title;
