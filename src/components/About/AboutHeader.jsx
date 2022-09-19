import React from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const AboutHeader = () => {
    return (
      <Parallax
        strength={100}
        renderLayer={(precentage) => (
          <div className="mt-20 w-full flex flex-row items-center justify-between">
            <div
              className="border-t border-stone-700"
              style={{ width: `${precentage * 90}%` }}
            ></div>
              <motion.div
                className={`px-5 text-3xl font-bold bg-white about duration-1000 ${precentage > 0.43 ? "show" : "hide"}`}
              >
                About
              </motion.div>
            <div
              className="border-t border-stone-700"
              style={{ width: `${precentage * 90}%` }}
            ></div>
          </div>
        )}
      ></Parallax>
    );
  };
  
  export default AboutHeader;
  