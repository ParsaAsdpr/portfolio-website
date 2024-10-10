import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Motion from "../common/Motion";
import Navbar from "./Navbar";
import Socials from "./Socials";

const HeroContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box position="absolute" width="100%" height="100%" top="0%" right="0%" zIndex={10}>
      <Box
        position="relative"
        width="85%"
        height="85%"
        transform={`translate(${85 / 10}%,${85 / 10}%)`}
      >
        {[1, 2].map((i) => (
          <Motion
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", height: "100%", opacity: 1 }}
            transition={{ delay: 5.8, duration: 1.8 }}
            key={i}
            style={{
              position: "absolute",
              [i === 1 ? "right" : "left"]: 0,
              [i === 1 ? "top" : "bottom"]: 0,
            }}
          >
            <Box
              width="100%"
              height="100%"
              border="solid #222"
              borderLeft={i === 1 ? "none" : "1px"}
              borderBottom={i === 1 ? "none" : "1px"}
              borderRight={i === 1 ? "1px" : "none"}
              borderTop={i === 1 ? "1px" : "none"}
            ></Box>
          </Motion>
        ))}
        <Navbar />
        <Socials />
        {children}
      </Box>
    </Box>
  );
};

export default HeroContainer;
