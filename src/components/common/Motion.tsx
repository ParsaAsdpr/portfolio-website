"use client";
import { useBreakpoint } from "@chakra-ui/react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

const Motion = ({ children, ...props }: Props) => {
  const breakPoint = useBreakpoint();
  return (
    <AnimatePresence>
      <motion.div
        viewport={{
          once: true,
          amount: breakPoint === "base" || breakPoint === "sm" ? 0 : 0.8,
        }}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Motion;
