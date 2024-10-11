import { Box, HStack, Link, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaSquarePhone,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  const socials = [
    { icon: FaTelegram, link: "https://t.me/abhishekkumar", label: "Telegram" },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/parsa-asadpour-42014322b",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      link: "https://github.com/ParsaAsdpr",
      label: "Github",
    },
    { icon: FaSquarePhone, link: "tel:+989939604178", label: "Phone" },
  ];
  return (
    <Box bg="#262626" py={14}>
      <HStack
        mx="auto"
        maxW="7xl"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        px={8}
      >
        <Text color="#eee" fontSize={14}>
          © 2024 Parsa Asadpour. All Rights Reserved.
        </Text>

        <HStack spacing={10}>
          {socials.map((social) => (
            <Tooltip key={social.label} label={social.label} hasArrow bg="#333" placement="top">
              <Link
                href={social.link}
                target="_blank"
                color='#eee'
                fontSize={23}
                display="flex"
                alignItems="center"
                justifyContent="center"
                transformOrigin='center'
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <social.icon />
              </Link>
            </Tooltip>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
