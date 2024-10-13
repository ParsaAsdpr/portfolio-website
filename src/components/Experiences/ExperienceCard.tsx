import React from "react";
import { chakra, HStack } from "@chakra-ui/react";
import { Text, VStack } from "@chakra-ui/react";
import Motion from "../common/Motion";

const ExperienceCard = ({
  experience,
}: {
  experience: {
    organization: string;
    from: string;
    to: string;
    color: string;
    position: string;
    description: string;
  };
}) => {
  return (
    <HStack
      alignItems="start"
      flexBasis={0}
      width={["100%", "90%", "80%", "70%", "65%"]}
      mx="auto"
      spacing={[3, 4, 6, 8, 10]}
    >
      <VStack
        alignItems="start"
        justifyContent="flex-start"
        flexGrow={1.35}
        flexBasis={1}
        pl={[0, 0, "5%", "10%", "15%"]}
        px={[5, 5, 0]}
        pt={10}
      >
        <Motion
          initial={{ opacity: 0, y: "50%", lineHeight: 3 }}
          whileInView={{ opacity: 1, y: 0, lineHeight: 1.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Text
            fontSize={[15, 16, 18, 20, 22]}
            fontWeight={700}
            color="#333"
          >
            {experience.organization}
          </Text>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: "50%", lineHeight: 3 }}
          whileInView={{ opacity: 1, y: 0, lineHeight: 1.5 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Text fontSize={[10, 12, 13, 15, 17]} fontStyle="italic" color="#888">
            {experience.from} - {experience.to}
          </Text>
        </Motion>
      </VStack>

      <VStack spacing={0} alignItems="center" h="100%" overflow="hidden">
        <Motion
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            border: "1px solid #999",
            borderRadius: "1000px",
            backgroundColor: "white",
            position: "relative",
            padding: "0.5rem",
            zIndex: 10,
          }}
        >
          <chakra.span
            bg={experience.color}
            boxSize="22px"
            rounded="1000px"
            display="block"
          ></chakra.span>
        </Motion>
        <Motion
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1.5 }}
          transition={{ duration: 0.8 }}
          style={{
            borderLeft: "2px dashed #999",
            transform: "scaleX(0.6)",
            flexGrow: 1,
            transformOrigin: "top",
          }}
        />
      </VStack>

      <VStack
        pt={[6, 7, 10]}
        flexGrow={2}
        flexBasis={1}
        flexShrink={0}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Motion
          initial={{ opacity: 0, y: "50%", lineHeight: 3 }}
          whileInView={{ opacity: 1, y: 0, lineHeight: 1.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Text
            fontSize={[16, 18, 20, 22, 25]}
            fontWeight={700}
            whiteSpace="nowrap"
            color="#333"
          >
            {experience.position}
          </Text>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: "50%", lineHeight: 3 }}
          whileInView={{ opacity: 1, y: 0, lineHeight: 1.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Text fontSize={[12, 13, 15, 17, 18]} color="#555">
            {experience.description}
          </Text>
        </Motion>
      </VStack>
    </HStack>
  );
};

export default ExperienceCard;
