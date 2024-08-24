import { BackgroundGradient } from "./ui/background-gradient";
import { GiArtificialIntelligence } from "react-icons/gi";

const FeaturedCard = ({ icon, heading, text }) => {
  return (
    <BackgroundGradient>
      <div className="bg-white rounded-[1.375rem] px-3 py-7">
        <div className="flex flex-col justify-center">
          {/* <button className="w-11/12 p-3 my-4 border-2 border-black rounded-full bg-black text-white font-bold hover:bg-white hover:text-black">
            See more
          </button> */}
          <div className="flex flex-row items-center">
            {/* <GiArtificialIntelligence className="text-3xl me-5" /> */}
            <img src={icon} width={35} alt="feature-icon" className="me-4" />
            <p className="text-lg font-bold">{heading}</p>
          </div>
          <p className="mt-3">{text}</p>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default FeaturedCard;
