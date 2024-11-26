"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import Motion from "../common/Motion";

const ScrollButton = () => {
  return (
    <Motion
      initial={{ opacity: 0, y: "0" }}
      animate={{ opacity: 1, y: "-50%" }}
      transition={{
        delay: 8,
        duration: 1,
      }}
      style={{
        position: "absolute",
        bottom: "5%",
        right: "50%",
        transform: "translateX(50%)",
        zIndex: 99
      }}
    >
      <Box
        position="relative"
        bottom="3%"
        border="1px solid #111"
        rounded="full"
        p={"0.5rem"}
        h={9}
        cursor="pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <Motion
          initial={{ opacity: 1, top: "0%" }}
          animate={{ opacity: 0, top: "90%" }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
          style={{
            width: "0.25rem",
            height: "0.25rem",
            borderRadius: "99999px",
            background: "#111",
            position: "relative",
            top: "0%",
          }}
        ></Motion>
      </Box>
    </Motion>
  );
};

export default ScrollButton;
