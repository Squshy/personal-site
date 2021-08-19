import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const HomeText: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeOut",
        },
      });
  }, [controls]);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      className={`self-center text-2xl md:text-5xl ml-10 md:ml-20 md:font-light italic`}
    >
      CALVIN LAPP
    </motion.div>
  );
};
