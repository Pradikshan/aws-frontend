import React from "react";
import { SongList } from "../components/SongList";
import { SongDetails } from "../components/SongDetails";

const Songs = () => {
  return (
    <div className="mt-36">
      <p className="text-white text-[2.8rem] font-semibold text-center">
        Songs Curated By DreamStreamer
      </p>
      {/* <SongList /> */}
      <SongDetails />
    </div>
  );
};

export default Songs;
