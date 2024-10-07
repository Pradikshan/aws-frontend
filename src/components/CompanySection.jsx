import React from "react";

const CompanySection = () => {
  return (
    <div>
      <div className="hidden md:flex flex-col justify-center items-center mt-36">
        <p className="section-heading">Our Music Partners</p>
        <div className="flex flex-row justify-between">
          <img
            src="/images/universal.jpg"
            alt="company-logo"
            className="w-80 mx-8"
          />
          <img
            src="/images/warner.png"
            alt="company-logo"
            className="w-80 h-40 mx-8"
          />
          <img
            src="/images/sony.jpg"
            alt="company-logo"
            className="w-60 h-40 mx-8"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
