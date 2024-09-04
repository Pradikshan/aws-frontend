//workinf
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./ui/use-outside-click";

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  return `${minutes}:${remainderSeconds.toString().padStart(2, "0")}`;
}

export function AlbumDetail() {
  const [active, setActive] = useState(null);
  const [albums, setAlbums] = useState([]); // State to store the list of albums
  const id = useId();
  const ref = useRef(null);

  useOutsideClick(ref, () => setActive(null));

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

  useEffect(() => {
    // Fetch the list of albums from your API
    async function fetchAlbums() {
      try {
        const response = await fetch(
          "https://vud6lh3r68.execute-api.eu-west-1.amazonaws.com/dev/get-album"
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }

    fetchAlbums();
  }, []);

  const handleAlbumClick = async (album) => {
    try {
      const response = await fetch(
        `https://k9wnoczy6f.execute-api.eu-west-1.amazonaws.com/dev/get-songs?albumName=${album.albumName}`
      );
      const songs = await response.json();
      setActive({ ...album, tracks: songs });
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

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
          <div className="fixed inset-0 overflow-y-auto z-[100] bg-black bg-opacity-80 p-4">
            <motion.button
              key={`button-${active.albumName}-${id}`}
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
              layoutId={`card-${active.albumName}-${id}`}
              ref={ref}
              className="w-full max-w-6xl mx-auto bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden bg-gradient-to-r from-fuchsia-600  via-red-500 to-pink-600"
            >
              {/* Header with Album Art and Details */}
              <motion.div className="relative h-80 flex items-end ">
                <img
                  src={active.albumArtUrl}
                  alt={active.albumName}
                  className="absolute bottom-0 left-4 w-32 h-32 object-cover object-top rounded-xl shadow-2xl mb-5"
                />
                <div className="ml-40 mb-4 text-white p-4">
                  <h3 className="text-4xl font-bold">{active.albumName}</h3>
                  <p className="text-lg">{active.artistName}</p>
                  <p className="text-sm">
                    {active.albumYear} • {active.genre}
                  </p>
                </div>
              </motion.div>

              {/* Tracklist */}
              <div className="p-6 text-white bg-slate-850 text-sm">
                <ul>
                  {active.tracks.map((track, index) => (
                    <li
                      key={`${track.songName}-${index}`}
                      className="flex justify-between py-2 border-b border-neutral-200"
                    >
                      <span>{track.songName}</span>
                      <span>{formatDuration(track.trackLength)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid grid-cols-1 md:grid-cols-4 items-start gap-4 my-10 mx-8">
        {albums.map((album) => (
          <motion.div
            layoutId={`card-${album.albumName}-${id}`}
            key={album.albumName}
            onClick={() => handleAlbumClick(album)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${album.albumName}-${id}`}>
                <img
                  src={album.albumArtUrl}
                  alt={album.albumName}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${album.albumName}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {album.albumName}
                </motion.h3>
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
