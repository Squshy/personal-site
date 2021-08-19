import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useOnScreen from "../hooks/useOnScreen";

export const FadeIn: React.FC = ({ children }) => {
  const controls = useAnimation();
  const ref: any = useRef<HTMLDivElement>();
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen)
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });
  }, [onScreen, controls]);
  
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} ref={ref}>
      {children}
    </motion.div>
  );
};
