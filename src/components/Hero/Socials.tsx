import { Icon, Link, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaSquarePhone,
  FaTelegram,
} from "react-icons/fa6";
import Motion from "../common/Motion";

const Socials = () => {
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
    <VStack
      position="absolute"
      right="0"
      transform="translate(50%, -50%)"
      top="50%"
      zIndex={30}
      spacing={6}
    >
      {socials.map(({ icon, link, label }, i) => (
        <Motion
          key={link}
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8.7 + i * 0.3 }}
        >
          <Tooltip label={label} hasArrow bg="#333">
            <Link
              href={link}
              target="_blank"
              bg="#f8e179"
              fontSize={33}
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="36px"
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              <Icon as={icon} />
            </Link>
          </Tooltip>
        </Motion>
      ))}
    </VStack>
  );
};

export default Socials;
