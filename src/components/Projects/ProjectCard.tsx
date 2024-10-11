"use client";
import {
  Box,
  Divider,
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
              color="white"
              border="2px solid #fff"
              _hover={{
                backgroundColor: "#fff",
                color: "#111",
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
        <HStack width="100%" alignItems="center">
          <Text flexShrink={0} fontWeight={700} fontSize={21}>
            {project.name}
          </Text>
          <Divider
            borderColor="#333"
            flexGrow={1}
            transform="translateY(400%)"
          />
        </HStack>
        <Text>{project.description} (Hover on Image)</Text>
      </VStack>
    </VStack>
  );
};

export default ProjectCard;
