import { Box } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import Typewriter from "typewriter-effect";

const TypeEffect = ({ text }: { text: string }) => {
  const [isTyping, setIsTyping] = useState(false);
  const texts = useMemo(() => text.split("|"), [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      w={["220px", "275px", "320px", "400px"]}
      h="100px"
      sx={{
        ".Typewriter": {
          fontSize: [16, 18, 20, 22],
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
            texts.forEach((text, index) => {
              typewriter.typeString(text).pauseFor(2000);

              if (index < texts.length - 1) {
                typewriter.deleteAll();
              }
            });

            typewriter.start();
          }}
        />
      )}{" "}
    </Box>
  );
};

export default TypeEffect;

