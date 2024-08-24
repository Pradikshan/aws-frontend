import React from "react";
import { Sparkles } from "../components/Sparkles";
import { VortexDemo } from "../components/Vortex";
import { TypewriterTextEffect } from "../components/TypeWriterEffect";
import { WavyBackgroundEffect } from "../components/WavyBackgroundEffect";
import { GoogleGeminiHeroEffect } from "../components/GoogleGeminiHeroEffect";
import { LampEffect } from "../components/LampEffect";
import FeaturesOverview from "../components/FeaturesOverview";

const Home = () => {
  return (
    <>
      <Sparkles />
      {/* <WavyBackgroundEffect /> */}
      {/* <GoogleGeminiHeroEffect /> */}
      {/* <VortexDemo /> */}
      <TypewriterTextEffect />
      <LampEffect />
      <FeaturesOverview />
    </>
  );
};

export default Home;
