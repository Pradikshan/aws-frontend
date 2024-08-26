import React from "react";
import { ArtistDetail } from "../components/ArtistDetail";

const Artists = () => {
  return (
    <div className="mt-36">
      <p className="text-white text-[2.8rem] font-semibold text-center">
        View Artists
      </p>
      <ArtistDetail />
    </div>
  );
};

export default Artists;
