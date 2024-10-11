"use client";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

const Motion = ({ children, ...props }: Props) => {
  return (
    <AnimatePresence>
      <motion.div viewport={{ once: true, amount: 0.8 }} {...props}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Motion;
