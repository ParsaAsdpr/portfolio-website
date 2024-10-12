import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Motion from "../common/Motion";

const Navbar = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <HStack gap="12rem" justifyContent="center" transform="translateY(-50%)">
      {navItems.map((item, i) => (
        <Motion
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7.8 + i * 0.3 }}
          key={item.label}
        >
          <ChakraLink
            as={Link}
            href={item.href}
            fontWeight={600}
            fontSize={18}
            className="bebas-neue-regular"
            bg="#f8e179"
            px={3}
            py={1.5}
            position="relative"
            overflow="hidden"
            _hover={{ textDecoration: "none" }}
            sx={{
              ":after, :before": {
                content: '""',
                border: "1px solid #222",
                width: "0",
                height: "0",
                position: "absolute",
                transition: "opacity, height 0.6s, width 0.6s",
                opacity: 0,
              },
              ":before": {
                borderTop: "none",
                borderRight: "none",
                bottom: 0,
                left: 0,
              },
              ":after": {
                borderBottom: "none",
                borderLeft: "none",
                top: 0,
                right: 0,
              },
              ":hover:after, :hover:before": {
                width: "calc(100% - 1px)",
                height: "calc(100% - 1px)",
                opacity: 1,
              },
            }}
          >
            {item.label}
          </ChakraLink>
        </Motion>
      ))}
    </HStack>
  );
};

export default Navbar;
