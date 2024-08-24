import React from "react";

const CompanySection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <p className="text-white text-5xl font-bold my-5">Our Partners</p>
        <div className="flex flex-row justify-between">
          <img src="/public/images/warner.png" alt="company-logo" width={340} />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
