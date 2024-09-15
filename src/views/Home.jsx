import React from "react";
import { Sparkles } from "../components/Sparkles";
import { VortexDemo } from "../components/Vortex";
import { TypewriterTextEffect } from "../components/TypeWriterEffect";
import { WavyBackgroundEffect } from "../components/WavyBackgroundEffect";
import { GoogleGeminiHeroEffect } from "../components/GoogleGeminiHeroEffect";
import { LampEffect } from "../components/LampEffect";
import FeaturesOverview from "../components/FeaturesOverview";
import CompanySection from "../components/CompanySection";
import TestimonialSection from "../components/TestimonialSection";
import { BuiltWithCard } from "../components/BuiltWith";
import { AlbumParallax } from "../components/AlbumParallax";

const Home = () => {
  return (
    <>
      <Sparkles />
      {/* <WavyBackgroundEffect /> */}
      {/* <GoogleGeminiHeroEffect /> */}
      {/* <VortexDemo /> */}
      <TypewriterTextEffect />
      {/* <LampEffect /> */}
      <FeaturesOverview />
      <p className="text-white text-[2.8rem] font-semibold text-center mt-36">
        Built with
      </p>
      <BuiltWithCard />
      <AlbumParallax />
      <CompanySection />
      <TestimonialSection />
    </>
  );
};

export default Home;
