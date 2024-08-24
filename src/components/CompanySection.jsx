import React from "react";

const CompanySection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-36">
        <p className="text-white text-5xl font-semibold my-16">
          Our Music Partners
        </p>
        <div className="flex flex-row justify-between">
          <img
            src="/public/images/universal.jpg"
            alt="company-logo"
            className="w-80 mx-8"
          />
          <img
            src="/public/images/warner.png"
            alt="company-logo"
            className="w-80 h-40 mx-8"
          />
          <img
            src="/public/images/sony.jpg"
            alt="company-logo"
            className="w-60 h-40 mx-8"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
