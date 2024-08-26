import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./ui/use-outside-click";

export function AlbumDetail() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 overflow-y-auto grid place-items-center z-[100] bg-black bg-opacity-80 p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              className="absolute top-4 right-4 bg-white rounded-full h-8 w-8 flex items-center justify-center"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-3xl bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Header with Album Art and Details */}
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="relative"
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                  <h3 className="text-2xl font-bold">{active.title}</h3>
                  <p className="text-lg">{active.artist}</p>
                  <p className="text-sm">
                    {active.year} • {active.genre}
                  </p>
                </div>
              </motion.div>

              {/* Tracklist */}
              <div className="p-6">
                <h4 className="text-lg font-bold mb-4">Tracks</h4>
                <ul>
                  {active.tracks.map((track, index) => (
                    <li
                      key={index}
                      className="flex justify-between py-2 border-b border-neutral-200"
                    >
                      <span>{track.name}</span>
                      <span>{track.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid grid-cols-1 md:grid-cols-4 items-start gap-4 my-10 mx-8">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Canadian Singer and Songwriter",
    title: "The Weeknd",
    src: "https://th.bing.com/th/id/OIP.PMAHNMHv7RSs8o56KwXvhwHaEs?w=289&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    artist: "The Weeknd",
    year: "2021",
    genre: "R&B/Soul",
    tracks: [
      { name: "Save Your Tears", duration: "3:36" },
      { name: "Blinding Lights", duration: "3:20" },
      // Add more tracks as needed
    ],
  },
  {
    description: "American Pop Rock Band",
    title: "OneRepublic",
    src: "https://th.bing.com/th/id/OIP.Wa5sckuGYGZhHphRS9dJcwHaEq?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    artist: "OneRepublic",
    year: "2020",
    genre: "Pop Rock",
    tracks: [
      { name: "Counting Stars", duration: "4:17" },
      { name: "Apologize", duration: "3:04" },
      // Add more tracks as needed
    ],
  },
];
