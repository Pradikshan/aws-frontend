import { HoverBorderGradient } from "./ui/hover-border-gradient.tsx";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect.tsx";
export function TypewriterTextEffect() {
  const words = [
    {
      text: "Exprience",
    },
    {
      text: "AI-curated",
    },
    {
      text: "Music",
    },
    {
      text: "Tailored",
    },
    {
      text: "Just",
    },
    {
      text: "For",
    },
    {
      text: "You",
      className: "dark:text-pink-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-white text-2xl font-bold">
        Unleash Your Personal Soundtrack
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          Start Your Free Trial
        </HoverBorderGradient> */}
        <button className="p-[3px] relative transition-all ease-in-out duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r  from-pink-500 to-violet-600 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-semibold hover:bg-transparent">
            Start Your free Trial
          </div>
        </button>
        <button className="p-[3px] relative transition-all ease-in-out duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-semibold hover:bg-transparent">
            Explore Our Music
          </div>
        </button>
        {/* <button className="w-fit rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold border border-black  text-md">
          Explore Our Music
        </button> */}

        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Start Your Free Trial
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Explore Our Library
        </button> */}
      </div>
    </div>
  );
}
