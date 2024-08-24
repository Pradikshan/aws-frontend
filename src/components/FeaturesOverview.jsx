import React from "react";
import FeaturesBox from "./FeaturesBox";
import FeaturedCard from "./FeaturedCard";

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
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturesOverview;
