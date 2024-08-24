import React from "react";
import ContactCard from "./ContactCard";

const Contactus = () => {
  const contactDetails = [
    {
      title: "Email us",
      text: "support@dreamstreamers.com",
      icon: "/images/support-email.png",
    },
    {
      title: "Call us",
      text: "+81-6911169",
      icon: "/images/support-phone.png",
    },
    {
      title: "Address",
      text: "No. 69, New York, Japan",
      icon: "/images/support-address.png",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 mx-8 mt-36 text-white">
      <div>
        <p className="text-4xl font-semibold">Get in touch!</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ContactCard contactDetails={contactDetails} />
      </div>
    </div>
  );
};

export default Contactus;
