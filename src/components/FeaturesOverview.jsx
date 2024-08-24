import React from "react";
import FeaturesBox from "./FeaturesBox";
import FeaturedCard from "./FeaturedCard";
import { GiArtificialIntelligence } from "react-icons/gi";

const FeaturesOverview = () => {
  return (
    <div className="mx-6">
      <h1 className="text-5xl text-white font-semibold text-center">
        Features Overview
      </h1>
      <div className="grid grid-cols-3 gap-8 my-7">
        {/* <FeaturesBox />
        <FeaturesBox />
        <FeaturesBox />
        <FeaturesBox /> */}
        <FeaturedCard
          icon={<GiArtificialIntelligence className="text-3xl me-5" />}
          heading={"Personalized Playlists"}
          text={
            "Let our advanced AI curate playlists tailored to your unique musical taste, ensuring every track resonates with you."
          }
        />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturesOverview;
