import { BackgroundGradient } from "./ui/background-gradient";

const FeaturedCard = ({ title, category, price, children }) => {
  return (
    <BackgroundGradient>
      <div className="bg-white rounded-[1.375rem]">
        {children}

        <div className="m-2">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-slate-500">{category}</p>
          <p className="font-bold">{price}</p>
        </div>

        <div className="flex justify-center">
          <button className="w-11/12 p-3 my-4 border-2 border-black rounded-full bg-black text-white font-bold hover:bg-white hover:text-black">
            See more
          </button>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default FeaturedCard;
