import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const PricingCard = () => {
  return (
    <BackgroundGradient>
      <div className="bg-[#162032] text-white rounded-[1.375rem] px-5 py-7">
        <div className="flex flex-col justify-center">
          <button className="w-11/12 p-3 my-4 border-2 border-black rounded-full bg-black text-white font-bold hover:bg-white hover:text-black">
            See more
          </button>
          <div className="flex flex-row items-center">
            {/* <img src={} width={35} alt="feature-icon" className="me-4" /> */}
            <p className="text-lg font-bold"></p>
          </div>
          <p className="mt-3"></p>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default PricingCard;
