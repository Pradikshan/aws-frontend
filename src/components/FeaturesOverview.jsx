import React from "react";
import FeaturedCard from "./FeaturedCard";
// import { GiArtificialIntelligence } from "react-icons/gi";

const FeaturesOverview = () => {
  return (
    <div className="mx-6">
      <h1 className="section-heading text-center">Features Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-7 mx-5">
        {/* <FeaturesBox />
        <FeaturesBox />
        <FeaturesBox />
        <FeaturesBox /> */}
        <FeaturedCard
          icon={"/images/playlist-1.png"}
          heading={"Personalized Playlists"}
          text={
            "Let our advanced AI curate playlists tailored to your unique musical taste, ensuring every track resonates with you."
          }
        />
        <FeaturedCard
          icon={"/images/genre.png"}
          heading={"Wide Genre Selection"}
          text={
            "Explore an expansive library spanning every genre, from timeless classics to the latest hits, all in one place at an affordable price."
          }
        />
        <FeaturedCard
          icon={"/images/streaming.png"}
          heading={"Seamless Streaming"}
          text={
            "Enjoy uninterrupted music with smooth, high-quality streaming across all your devices, wherever you go anywhere in the world."
          }
        />
      </div>
    </div>
  );
};

export default FeaturesOverview;
