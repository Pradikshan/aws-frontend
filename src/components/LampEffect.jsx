import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import FeaturesOverview from "./FeaturesOverview";

export function LampEffect() {
  return (
    <LampContainer>
      {/* <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 py-4 text-center text-4xl font-medium tracking-tight text-white md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1> */}
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <FeaturesOverview />
      </motion.h1>
    </LampContainer>
  );
}
