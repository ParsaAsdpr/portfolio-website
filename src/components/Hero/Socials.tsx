"use client";
import { Flex, Icon, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import Motion from "../common/Motion";
import { Social } from "@/types";
import { SOCIALS_MAP } from "@/utils/consts";

const Socials = ({ socials }: { socials: Social[] }) => {
  return (
    <Flex
      position="absolute"
      right={["50%", "0"]}
      transform="translate(50%, -50%)"
      top={["100%", "50%"]}
      flexDir={["row", "column"]}
      zIndex={30}
      gap={[4, 5, 6]}
    >
      {socials?.map((social, i) => (
        <Motion
          key={social.key}
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 8.7 + i * 0.3 }}
        >
          <Tooltip
            label={SOCIALS_MAP[social.key].label}
            hasArrow
            bg="#333"
            placement="left"
          >
            <Link
              href={social.link}
              target="_blank"
              bg={"#f8e179"}
              fontSize={[24, 26, 28, 30, 33]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize={["28px", "32px", "34px", "36px"]}
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              <Icon as={SOCIALS_MAP[social.key].icon} />
            </Link>
          </Tooltip>
        </Motion>
      ))}
    </Flex>
  );
};

export default Socials;

