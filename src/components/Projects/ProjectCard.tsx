"use client";
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const ProjectCard = ({
  view,
  delay,
  project,
}: {
  view: boolean;
  delay: number;
  project: {
    name: string;
    description: string;
    image: string;
    links: { name: string; icon: IconType; url: string }[];
    isDark: boolean;
  };
}) => {
  return (
    <VStack
      width="430px"
      spacing={4}
      transform={`translateX(${view ? "0" : "100%"})`}
      opacity={view ? 1 : 0}
      transition="all 1s"
      transitionDelay={`${delay}s`}
    >
      <Box
        position="relative"
        width="100%"
        height="250px"
        overflow="hidden"
        border="1px solid #333"
        rounded={5}
        cursor="pointer"
        _hover={{
          ".project-image": {
            transform: "scale(1.05)",
            filter: "blur(4px)",
          },
          a: {
            visibility: "visible",
            opacity: 0.8,
          },
        }}
      >
        <HStack
          width="100%"
          height="100%"
          position="absolute"
          zIndex={20}
          justifyContent="center"
          gap={10}
        >
          {project.links.map((link) => (
            <ChakraLink
              key={link.name}
              as={Link}
              href={link.url}
              target="_blank"
              rounded="full"
              boxSize="60px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              visibility="hidden"
              opacity={0}
              transition="opacity 0.3s 0.2s, color 0.3s, background 0.3s"
              color={project.isDark ? "#fff" : "#111"}
              border={`2px solid ${project.isDark ? "#fff" : "#111"}`}
              _hover={{
                backgroundColor: project.isDark ? "#fff" : "#111",
                color: project.isDark ? "#111" : "#fff",
              }}
            >
              <Icon fontSize={30} as={link.icon} />
            </ChakraLink>
          ))}
        </HStack>
        <Box
          className="project-image"
          width="100%"
          height="100%"
          backgroundImage={project.image}
          backgroundSize="cover"
          transition="all 0.7s"
          backgroundPosition="center"
        ></Box>
      </Box>
      <VStack px={2}>
        <HStack width="100%" alignItems="center" position="relative">
          <Text
            as="span"
            flexShrink={1}
            fontWeight={700}
            fontSize={21}
            position="relative"
            display="inline-block"
            bg="white"
            overflow="hidden"
            width="100%"
          >
            {project.name}
          </Text>
        </HStack>
        <Text>{project.description} (Hover on Image)</Text>
      </VStack>
    </VStack>
  );
};

export default ProjectCard;
