"use client";
import { Project } from "@/types";
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
import { IoIosLink } from "react-icons/io";
import { SlSocialGithub } from "react-icons/sl";

const ProjectCard = ({
  view,
  delay,
  size,
  project,
}: {
  view: boolean;
  delay: number;
  size: number;
  project: Project;
}) => {
  return (
    <VStack
      width={`${size}px`}
      spacing={4}
      transform={`translateX(${view ? "0" : "100%"})`}
      opacity={view ? 1 : 0}
      transition="all 1s"
      transitionDelay={`${delay}s`}
    >
      <Box
        position="relative"
        width="100%"
        height={["170px", "200px", "250px"]}
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
          {["github_link", "link"].map(
            (link: string) =>
              project[link as keyof Project] && (
                <ChakraLink
                  key={link}
                  as={Link}
                  href={project[link as keyof Project] as string}
                  target="_blank"
                  rounded="full"
                  boxSize={["45px", "50px", "55px", "60px"]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  visibility="hidden"
                  opacity={0}
                  transition="opacity 0.3s 0.2s, color 0.3s, background 0.3s"
                  color={project.is_dark ? "#fff" : "#111"}
                  border={`2px solid ${project.is_dark ? "#fff" : "#111"}`}
                  _hover={{
                    backgroundColor: project.is_dark ? "#fff" : "#111",
                    color: project.is_dark ? "#111" : "#fff",
                  }}
                >
                  <Icon
                    fontSize={[20, 23, 26, 30]}
                    as={link === "github_link" ? SlSocialGithub : IoIosLink}
                  />
                </ChakraLink>
              ),
          )}
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
            fontSize={[17, 19, 21]}
            position="relative"
            display="inline-block"
            bg="white"
            overflow="hidden"
            width="100%"
          >
            {project.name}
          </Text>
        </HStack>
        <Text fontSize={[14, 16, 18]}>
          {project.description} (Hover on Image)
        </Text>
      </VStack>
    </VStack>
  );
};

export default ProjectCard;

