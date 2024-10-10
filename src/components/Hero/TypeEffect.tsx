import { Box } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <Box
      sx={{
        ".Typewriter": {
          fontSize: 22,
          width: "400px",
        },
      }}
    >
      <Typewriter
        options={{
          loop: true,
          autoStart: true,
          deleteSpeed: 10,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Junior Fullstack Developer and UI/UX Designer from Iran"
            )
            .pauseFor(2500)
            .deleteAll()
            .typeString("Open to collaboration and exciting projects.")
            .pauseFor(2000)
            .start();
        }}
      />
    </Box>
  );
};

export default TypeEffect;
