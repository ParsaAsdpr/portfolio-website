import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      w="400px"
      h="100px"
      sx={{
        ".Typewriter": {
          fontSize: 22,
        },
      }}
    >
      {isTyping && (
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            deleteSpeed: 10,
            delay: 95,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(
                "Junior Fullstack Developer and UI/UX Designer from Iran"
              )
              .pauseFor(2500)
              .deleteAll()
              .typeString("Open to collaboration and exciting projects.")
              .start();
          }}
        />
      )}{" "}
    </Box>
  );
};

export default TypeEffect;
