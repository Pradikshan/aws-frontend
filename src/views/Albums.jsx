import React from "react";
import { AlbumDetail } from "../components/AlbumDetail";

const Albums = () => {
  return (
    <div className="mt-36">
      <p className="text-white text-[2.8rem] font-semibold text-center">
        View Albums
      </p>
      <AlbumDetail />
    </div>
  );
};

export default Albums;
