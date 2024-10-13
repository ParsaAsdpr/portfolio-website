"use client";
import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Title from "./common/Title";
import Motion from "./common/Motion";
import data from "../constants/about.json";

const About = () => {
  return (
    <VStack
      py={["3rem","4rem","5rem"]}
      justifyContent="center"
      id="about"
      sx={{
        ".aboutMotion": {
          width: ["100%", "90%", "80%", "75%", "65%", "55%"],
        },
        ".journyMotion": {
          width: ["100%", "95%", "90%", "85%", "80%", "65%"],
        },
      }}
    >
      <Title>About</Title>
      <Motion
        initial={{ opacity: 0, y: "50%", lineHeight: 3 }}
        whileInView={{ opacity: 1, y: 0, lineHeight: 1.8 }}
        transition={{ duration: 0.6 }}
        className="aboutMotion"
      >
        <Text
          fontSize={[17, 18, 19, 20, 21]}
          py={["1.25rem", "2rem", "3rem"]}
          px={[4, 7, 0]}
          as='main'
        >
          {data.about}
        </Text>
      </Motion>
      <Motion
        initial={{ opacity: 0, y: "50%", lineHeight: 3 }}
        whileInView={{ opacity: 1, y: 0, lineHeight: 1.6 }}
        transition={{ duration: 0.6 }}
        className="journyMotion"
      >
        <Grid
          templateAreas={{
            base: `"item1"
                   "item2"
                   "item3"`,
            md: `"item1 item2" 
                 "item3 item3"`,
            xl: `"item1 item2 item3"`,
          }}
          gap={20}
          py={10}
          px={[5, 7, 0]}
        >
          {data.Journies.map((journey, i) => (
            <GridItem key={journey.title} area={`item${i + 1}`}>
              <VStack alignItems="start">
                <Text fontSize={[16, 17, 18, 19]} fontWeight={800} color="#333">
                  {journey.title}
                </Text>
                <Text fontSize={[16, 17, 18, 19]}>{journey.desc}</Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Motion>
    </VStack>
  );
};

export default About;
