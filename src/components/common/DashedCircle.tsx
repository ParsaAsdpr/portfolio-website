import React from "react";
import Motion from "./Motion";
interface Props {
  size: number;
  position: [number, number];
}
const DashedCircle = ({ size, position }: Props) => {
  return (
    <Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: [0, 360] }}
      transition={{
        opacity: { delay: 8, duration: 1 },
        rotate: {
          duration: 100,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
      style={{
        position: "absolute",
        top: `${position[0]}%`,
        left: `${position[1]}%`,
        width: `${size}px`,
        height: `${size}px`,
        border: "8px dashed #00000010",
        borderRadius: "1000000px",
        zIndex: 1,
      }}
    ></Motion>
  );
};

export default DashedCircle;
