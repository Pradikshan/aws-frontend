import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const PricingCard = ({ pricingDetails }) => {
  return (
    <div className="flex h-full">
      <BackgroundGradient className="h-full">
        <div className="bg-[#162032] text-white rounded-[1.375rem] px-8 py-7 h-full flex flex-col justify-between">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row items-center">
              <img
                src={pricingDetails.icon}
                width={35}
                alt="feature-icon"
                className="me-4"
              />
              <p className="text-2xl font-bold">{pricingDetails.plan}</p>
            </div>
            <p className="mt-3 font-semibold text-xs">
              {pricingDetails.access_level}
            </p>
            <p className="text-4xl my-5 font-semibold">
              {pricingDetails.price}
            </p>
            <p className="mt-3 font-semibold">Description:</p>
            <p className="text-[0.95rem]">{pricingDetails.description}</p>
            <p className="mt-3 font-semibold">Features:</p>
            <ul className="list-disc text-[0.9rem]">
              {pricingDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="w-11/12 p-3 my-4  rounded-full bg-black text-white font-bold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500">
              {pricingDetails.cta}
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default PricingCard;
