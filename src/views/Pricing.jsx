import React from "react";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const pricingDetails = [
    {
      icon: "/images/free-tier.png",
      plan: "Free Plan",
      access_level: "Basic Access",
      price: "$0/month",
      description:
        "Experience DreamStreamer with essential features at no cost.",
      features: [
        "Access to millions of tracks",
        "AI-powered playlist recommendations",
        "Basic audio quality",
        "Ad-supported streaming",
        "Limited offline downloads (5 tracks)",
      ],
      cta: "Start for Free",
    },

    {
      icon: "/images/premium-tier.png",
      plan: "Premium Plan",
      access_level: "Premium Experience",
      price: "$9.99/month",
      description:
        "Unlock the full potential of DreamStreamer with an ad-free, high-quality music experience.",
      features: [
        "All features in Free Plan",
        "Ad-free listening",
        "High-definition audio quality",
        "Unlimited offline downloads",
        "Early access to new features",
      ],
      cta: "Upgrade to Premium",
    },
    {
      icon: "/images/family-tier.png",
      plan: "Family Plan",
      access_level: "Family Groove",
      price: "$14.99/month",
      description:
        "Share the DreamStreamer experience with your family members, each with their own account.",
      features: [
        "All features in Premium Plan",
        "Up to 6 individual accounts",
        "Personalized playlists for each member",
        "Parental controls for kids’ accounts",
        "Family Mix: a shared playlist based on everyone’s tastes",
      ],
      cta: "Get Family Plan",
    },
    {
      icon: "/images/student-tier.png",
      plan: "Student Plan",
      access_level: "Student Beat",
      price: "$4.99/month",
      description:
        "Enjoy all the benefits of Premium at a discounted rate, exclusively for students.",
      features: [
        "All features in Premium Plan",
        "Special student pricing",
        "Verification required",
      ],
      cta: "Join as a Student",
    },
    {
      icon: "/images/hifi-tier.png",
      plan: "Hi-Fi Plan",
      access_level: "Hi-Fi Sound",
      price: "$19.99/month",
      description:
        "For the true audiophile—experience music in its purest form with lossless audio.",
      features: [
        "All features in Premium Plan",
        "Studio-quality, lossless audio",
        "Priority customer support",
        "Exclusive Hi-Fi playlists",
        "Invitations to live listening sessions with artists affiliated with DreamStreamer",
      ],
      cta: "Upgrade to Hi-Fi",
    },
  ];

  return (
    <div className="mt-36">
      <p className="section-heading text-center">
        We have a pricing plan that fits your every need
      </p>
      <p className="text-white text-center text-xl -mt-8">
        Start with a free plan, upgrade anytime!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 my-20">
        {pricingDetails.map((detail, index) => (
          <PricingCard pricingDetails={detail} key={index} />
        ))}
        {/* <PricingCard />
        <PricingCard />
        <PricingCard /> */}
      </div>
    </div>
  );
};

export default Pricing;
