"use client";
import { Text, VStack } from "@chakra-ui/react";
import Motion from "../common/Motion";
import ExperienceCard from "./ExperienceCard";
import { Experience, SiteData } from "@/types";

const Experiences = ({ site_data }: { site_data: SiteData }) => {
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
        {site_data.experiences?.map((experience: Experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </VStack>
    </VStack>
  );
};

export default Experiences;

