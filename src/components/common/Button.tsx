import Link from "next/link";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  isLink?: boolean;
}

const Button = ({ children, isLink = false, ...props }: Props) => {
  return (
    <ChakraLink
      as={isLink ? Link : "button"}
      _hover={{ textDecoration: "none" }}
      color="#333"
      border="1px solid #333"
      px={8}
      py={3}
      fontSize={18}
      position="relative"
      overflow="hidden"
      transition={"all 0.3s"}
      sx={{
        ":before": {
          content: `''`,
          backgroundColor: "#333",
          color: "#fff",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          right: "100%",
          zIndex: -1,
          transition: "right 0.3s ease-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #333",
        },
        ":hover:before": {
          right: "0",
        },
        ":hover": {
          color: "#fff",
        },
      }}
      {...props}
    >
      {children}
    </ChakraLink>
  );
};

export default Button;
