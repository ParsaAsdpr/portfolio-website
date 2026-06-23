"use client";

import { Box, Flex, HStack, Icon, Link, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { SiteData } from "@/types";
import { SOCIALS_MAP } from "@/utils/consts";

const Footer = ({ site_data }: { site_data: SiteData }) => {
  return (
    <Box as="footer" bg="#262626" py={[8, 10, 12, 14]} mt={{ base: 20, lg: 0 }}>
      <Flex
        mx="auto"
        maxW="7xl"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        px={8}
        flexDir={["column", "column", "row"]}
        gap={[5, 7, 10]}
      >
        <Text color="#eee" fontSize={[10, 12, 14]}>
          © {new Date().getFullYear()} {site_data?.title}. All Rights Reserved.
        </Text>

        <HStack spacing={[5, 7, 10]}>
          {site_data.socials.map((social) => (
            <Tooltip
              key={social.key}
              label={SOCIALS_MAP[social.key].label}
              hasArrow
              bg="#333"
              placement="top"
            >
              <Link
                href={social.link}
                target="_blank"
                color="#eee"
                fontSize={[18, 20, 23]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                transformOrigin="center"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Icon as={SOCIALS_MAP[social.key].icon} />
              </Link>
            </Tooltip>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;

