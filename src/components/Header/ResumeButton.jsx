import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

const ScrollButton = () => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2 }}
      className="px-4 py-3 sm:px-5 lg:px-8 md:py-3 text-sm md:text-lg border border-stone-800 mt-10 md:mt-20 relative cursor-pointer hover:bg-stone-800
       z-20 hover:text-slate-100 duration-300 flex flex-row items-center justify-between w-7/12 lg:w-1/2"
      href="/CV Parsa Asadpour.pdf"
      download="CV Parsa Asadpour.pdf"
    >
      Download CV <FiArrowDown />
    </motion.a>
  );
};

export default ScrollButton;
