"use client";
import { HStack, useBreakpointValue, VStack } from "@chakra-ui/react";
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
  const cardSize = useBreakpointValue({
    base: 280,
    sm: 320,
    md: 380,
    lg: 430,
  });
  const itemsPerView = useBreakpointValue({
    base: 1,
    md: 2,
    xl: 3,
  });
  return (
    <VStack py={20} id="projects">
      <Title>Projects</Title>

      <VStack
        width={((cardSize || 430) + 10) * (itemsPerView || 3)}
        overflow="hidden"
        spacing={10}
        alignItems="start"
      >
        <HStack
          mt={14}
          spacing="10px"
          width={((cardSize || 430) + 10) * projects.length}
          justifyContent="start"
          alignItems="start"
          transition="transform 0.5s ease-in-out"
          transform={`translateX(${(-(cardSize || 430) - 10) * offset}px)`}
          ref={sliderRef}
        >
          {projects.map((project, i) => (
            <ProjectCard
              size={cardSize || 430}
              key={project.name}
              delay={i * 0.2}
              view={view}
              project={project}
            />
          ))}
        </HStack>

        <SliderButtons
          itemsPerView={itemsPerView}
          offset={offset}
          setOffset={setOffset}
          projectLength={projects.length}
        />
      </VStack>
    </VStack>
  );
};

export default Projects;
