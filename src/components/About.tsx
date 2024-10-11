"use client";
import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Title from "./common/Title";
import Motion from "./common/Motion";
import data from "../constants/about.json";

const About = () => {
  return (
    <VStack py="5rem" justifyContent="center">
      <Title>About</Title>
      <Motion
        initial={{ opacity: 0, y: "50%", lineHeight: 3 }}
        whileInView={{ opacity: 1, y: 0, lineHeight: 1.8 }}
        transition={{ duration: 0.6 }}
        style={{ width: "45%" }}
      >
        <Text fontSize={22} py={"3rem"}>
          {data.about}
        </Text>
      </Motion>
      <Motion
        initial={{ opacity: 0, y: "50%", lineHeight: 3 }}
        whileInView={{ opacity: 1, y: 0, lineHeight: 1.6 }}
        transition={{ duration: 0.6 }}
        style={{ width: "65%" }}
      >
        <SimpleGrid columns={3} gap={20} py={10}>
          {data.Journies.map((journey) => (
            <VStack alignItems="start" key={journey.title}>
              <Text fontSize={19} fontWeight={800} color="#333">
                {journey.title}
              </Text>
              <Text fontSize={19}>{journey.desc}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Motion>
    </VStack>
  );
};

export default About;
