import React from "react";

const ContactCard = ({ contactDetails }) => {
  return (
    <>
      {contactDetails.map((detail, index) => (
        <div
          className="rounded-xl bg-[#162032] text-white p-3 hover:scale-105 transition-all ease-in-out duration-500"
          key={index} // key should be here on the outermost element
        >
          <div className="flex flex-row items-center">
            <img src={detail.icon} className="w-7 me-2" alt={detail.title} />
            <p className="font-semibold text-lg">{detail.title}</p>
          </div>
          <p className="text-sm my-4">{detail.text}</p>
        </div>
      ))}
    </>
  );
};

export default ContactCard;
