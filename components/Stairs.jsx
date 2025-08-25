
import { motion } from "motion/react";

const stairAnimation = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "100%"
  },
  exit: {
    top: ["100%", "0%"]
  }
}

// calculare de reverse index fr staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index -1;
}

export const Stairs = () => {
  return <>
  
  {/** Render6 motion divs, each representing a step of the stairs 
   * 
   * Each div will have the same animation defined by stairAnimation object.
   * The delay for each div will be calculated dinamically based on it's reserved index
   * creating a staggered effect with decreasing delay for each subsequent step.
  */}
  {[...Array(6)].map((_, index) => {
    return (
    <motion.div key={index} variants={stairAnimation} initial="initial"
    animate="animate" exit="exit" transition={{
      duration: 0.4,
      ease: "easeIn",
      delay: reverseIndex(index) * 0.1,
    }}
    className="h-full w-full bg-white relative"/>
  )})}
  </>;
};
