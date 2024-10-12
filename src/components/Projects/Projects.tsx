"use client";
import { HStack, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import Title from "../common/Title";
import projects from "../../constants/projects";
import ProjectCard from "./ProjectCard";
import SliderButtons from "./SliderButtons";
import { useInView } from "framer-motion";

const Projects = () => {
  const [offset, setOffset] = React.useState(0);
  const sliderRef = useRef(null);
  const view = useInView(sliderRef, { once: true });
  return (
    <VStack py={20}>
      <Title>Projects</Title>

      <VStack
        width={(430 + 10) * 3}
        overflow="hidden"
        spacing={10}
        alignItems="start"
      >
        <HStack
          mt={14}
          spacing="10px"
          width={(430 + 10) * projects.length}
          justifyContent="start"
          alignItems='start'
          transition="transform 0.5s ease-in-out"
          transform={`translateX(${(-430 - 10) * offset}px)`}
          ref={sliderRef}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              delay={i * 0.2}
              view={view}
              project={project}
            />
          ))}
        </HStack>

        <SliderButtons
          offset={offset}
          setOffset={setOffset}
          projectLength={projects.length}
        />
      </VStack>
    </VStack>
  );
};

export default Projects;
