import React from "react";

const FeatureContainer = ({ child1, child2 }) => {
  return (
    <div className="my-36">
      <div className="flex flex-col md:grid grid-cols-2 gap-2 mx-8 text-white">
        {child1}
        {child2}
      </div>
    </div>
  );
};

export default FeatureContainer;
