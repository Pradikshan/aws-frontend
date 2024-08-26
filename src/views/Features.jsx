import React from "react";
import FeatureContainer from "../components/FeatureContainer";

const Features = () => {
  return (
    <div>
      <FeatureContainer
        child1={
          <img
            src="/images/features-AI.jpg"
            className="w-fit"
            alt="feature-img"
          />
        }
        child2={
          <div className="mx-5">
            <p className="feature-heading">AI-Driven Recommendations</p>
            <p>
              Our advanced AI learns your preferences to deliver the perfect
              soundtrack, anytime.
            </p>
          </div>
        }
      />

      <FeatureContainer
        child2={
          <img
            src="/images/features-music.jpg"
            className="w-fit"
            alt="feature-img"
          />
        }
        child1={
          <div className="mx-5">
            <p className="feature-heading">Expansive Music Library</p>
            <p>Access millions of tracks across all your favorite genres.</p>
          </div>
        }
      />

      <FeatureContainer
        child1={
          <img
            src="/images/features-cross2.jpg"
            className="w-fit"
            alt="feature-img"
          />
        }
        child2={
          <div className="mx-5">
            <p className="feature-heading">Cross-Platform Sync</p>
            <p>Enjoy your music on any device, wherever you are.</p>
          </div>
        }
      />

      <FeatureContainer
        child2={
          <img
            src="/images/features-offline.jpg"
            className="w-fit"
            alt="feature-img"
          />
        }
        child1={
          <div className="mx-5">
            <p className="feature-heading">Offline Listening</p>
            <p>
              Download your favorite tracks and listen without an internet
              connection.
            </p>
          </div>
        }
      />

      <FeatureContainer
        child1={
          <img
            src="/images/features-ad.jpg"
            className="w-fit"
            alt="feature-img"
          />
        }
        child2={
          <div className="mx-5">
            <p className="feature-heading">Ad-Free Experience</p>
            <p>Upgrade to Premium for uninterrupted music enjoyment.</p>
          </div>
        }
      />
    </div>
  );
};

export default Features;
