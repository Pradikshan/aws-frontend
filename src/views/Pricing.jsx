import React from "react";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <div className="mt-36">
      <p className="section-heading text-center">
        We have a pricing plan that fits every need
      </p>
      <div className="grid grid-cols-4 gap-4 mx-8">
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
