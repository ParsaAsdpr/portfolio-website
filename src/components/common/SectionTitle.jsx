import React from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const SectionTitle = props => {
  return (
    <div>
      <Parallax
        strength={100}
        renderLayer={(precentage) => (
          <div className="mt-20 w-full flex flex-row items-center justify-between">
            <div
              className="border-t border-stone-700"
              style={{ width: `${precentage * 90}%` }}
            ></div>
            <motion.div
              className={`px-5 text-3xl font-bold bg-white parallax duration-1000 ${
                precentage > 0.43 ? "show" : "hide"
              }`}
            >
              {props.title}
            </motion.div>
            <div
              className="border-t border-stone-700"
              style={{ width: `${precentage * 90}%` }}
            ></div>
          </div>
        )}
      ></Parallax>
    </div>
  );
};

export default SectionTitle;
