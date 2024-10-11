"use client";
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

const Motion = ({ children, ...props }: Props) => {
  return (
    <motion.div viewport={{ once: true, amount: 0.8 }} {...props}>
      {children}
    </motion.div>
  );
};

export default Motion;
