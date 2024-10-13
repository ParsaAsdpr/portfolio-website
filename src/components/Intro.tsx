import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Motion from "./common/Motion";

const Intro = () => {
  return (
    <Motion
      initial={{ top: 0 }}
      animate={{ top: "-200%" }}
      transition={{delay: 4, duration: 1.1, ease: "easeOut"}}
      style={{ position: "fixed", left: 0, width: "100%", height: "100%", zIndex: 99 }}
    >
      <Flex
        h="100vh"
        w="100wh"
        bg="#f8e179"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Box width="160px" textAlign="center" overflow="hidden">
          <Motion
            initial={{ translateX: "100%" }}
            animate={{ translateX: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
          >
            <Text
              fontWeight="bold"
              fontSize={[50, 60, 70]}
              fontFamily="anton"
              lineHeight={1.2}
              color="#1A202C"
            >
              HELLO
            </Text>
          </Motion>
        </Box>

        <Motion
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          style={{ overflow: "hidden" }}
          transition={{ delay: 1.4, duration: 0.4, ease: "easeInOut" }}
        >
          <Divider orientation="vertical" borderColor="#444" h="3.5rem" />
        </Motion>

        <Motion
          initial={{ translateY: "-100%", height: 0 }}
          animate={{ translateY: 0, height: "auto" }}
          style={{ overflow: "hidden" }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
        >
          <Text
            fontSize={[70, 80, 90, 100]}
            fontFamily="dancing"
            color="#fff"
            fontWeight="900"
            lineHeight={1.1}
          >
            Welcome
          </Text>
        </Motion>
      </Flex>
    </Motion>
  );
};

export default Intro;
