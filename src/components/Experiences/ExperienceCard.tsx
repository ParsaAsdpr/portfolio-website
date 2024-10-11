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
    <HStack alignItems="start" flexBasis={0} width="65%" mx="auto" spacing={10}>
      <VStack
        alignItems="start"
        justifyContent="flex-start"
        flexGrow={1.35}
        flexBasis={1}
        pl="15%"
        pt={10}
      >
        <Motion
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Text fontSize={28} fontWeight={700} color="#333">
            {experience.organization}
          </Text>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Text fontStyle="italic" color="#888">
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
        pt={10}
        flexGrow={2}
        flexBasis={1}
        flexShrink={0}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Motion
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Text fontSize={24} fontWeight={700} whiteSpace="nowrap" color="#333">
            {experience.position}
          </Text>
        </Motion>
        <Motion
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Text fontSize={18}>{experience.description}</Text>
        </Motion>
      </VStack>
    </HStack>
  );
};

export default ExperienceCard;
