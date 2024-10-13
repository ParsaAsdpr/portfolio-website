"use client";
import { Text, VStack } from "@chakra-ui/react";
import experiences from "../../constants/experiences.json";
import Motion from "../common/Motion";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <VStack
      py={["3rem", "4rem", "5rem"]}
      spacing={["2rem", "3rem"]}
      id="experiences"
    >
      <Motion
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text
          fontSize={[35, 40, 45, 50, 55, 60]}
          fontWeight="bold"
          color="#333"
        >
          My Experiences
        </Text>
      </Motion>

      <VStack spacing={0}>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.organization}
            experience={experience}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default Experiences;
