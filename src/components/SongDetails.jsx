//newest code
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./ui/use-outside-click";

export function SongDetails() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]); // Filtered songs
  const [active, setActive] = useState(null);
  const [filters, setFilters] = useState({ album: "", genre: "", artist: "" }); // Filters
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(
        "https://k9wnoczy6f.execute-api.eu-west-1.amazonaws.com/dev/get-song"
      );
      const songsData = await response.json();

      const songsWithAlbumArt = await Promise.all(
        songsData.map(async (song) => {
          const albumCoverResponse = await fetch(
            `https://vud6lh3r68.execute-api.eu-west-1.amazonaws.com/dev/get-album-cover?albumId=${song.albumId}`
          );
          const albumCoverData = await albumCoverResponse.json();
          return { ...song, albumArtUrl: albumCoverData.albumArtUrl };
        })
      );

      setSongs(songsWithAlbumArt);
      setFilteredSongs(songsWithAlbumArt); // Set filtered songs
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
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

  const handleSongClick = async (song) => {
    setActive(song);

    const payload = {
      album_id: song.albumId,
      song_id: song.songId,
      album_name: song.albumName,
      song_name: song.songName,
      genre: song.genre,
      artist_name: song.artistName,
      track_length: song.trackLength,
    };

    try {
      console.log("Payload", JSON.stringify(payload));
      const response = await fetch(
        "https://dfg5xvb41m.execute-api.eu-west-1.amazonaws.com/dev/update-engagement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        console.log("Engagement updated successfully!");
      } else {
        console.error("Failed to update engagement.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds.toString().padStart(2, "0")}`;
  }

  // Handle Filter Change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Apply Filters
  useEffect(() => {
    const filtered = songs.filter((song) => {
      return (
        (filters.album === "" || song.albumName === filters.album) &&
        (filters.genre === "" || song.genre === filters.genre) &&
        (filters.artist === "" || song.artistName === filters.artist)
      );
    });
    setFilteredSongs(filtered);
  }, [filters, songs]);

  // Get unique values for dropdowns
  const uniqueAlbums = [...new Set(songs.map((song) => song.albumName))];
  const uniqueGenres = [...new Set(songs.map((song) => song.genre))];
  const uniqueArtists = [...new Set(songs.map((song) => song.artistName))];

  return (
    <>
      {/* Modal Section */}
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
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.songName}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.songName}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.songName}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.albumArtUrl}
                  alt={active.songName}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.songName}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.songName}
                    </motion.h3>
                    <motion.p
                      layoutId={`artist-${active.artistName}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.artistName}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    <p>
                      <strong>Genre:</strong> {active.genre}
                    </p>
                    <p>
                      <strong>Album:</strong> {active.albumName}
                    </p>
                    <p>
                      <strong>Year:</strong> {active.songYear}
                    </p>
                    <audio controls>
                      <source src={active.songFileUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Filter Section */}
      <div className="flex gap-4 my-4 ms-24">
        <select
          name="album"
          value={filters.album}
          onChange={handleFilterChange}
          className="p-2 border rounded-lg"
        >
          <option value="">All Albums</option>
          {uniqueAlbums.map((album) => (
            <option key={album} value={album}>
              {album}
            </option>
          ))}
        </select>

        <select
          name="genre"
          value={filters.genre}
          onChange={handleFilterChange}
          className="p-2 border rounded-lg"
        >
          <option value="">All Genres</option>
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select
          name="artist"
          value={filters.artist}
          onChange={handleFilterChange}
          className="p-2 border rounded-lg"
        >
          <option value="">All Artists</option>
          {uniqueArtists.map((artist) => (
            <option key={artist} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>

      {/* Song List Section */}
      <ul className="w-[90%] mx-auto gap-4">
        {filteredSongs.map((song, index) => (
          <motion.div
            layoutId={`card-${song.songName}-${id}`}
            key={`card-${song.songName}-${id}`}
            onClick={() => handleSongClick(song)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer my-3 bg-slate-800 border-2 border-black"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${song.songName}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={song.albumArtUrl}
                  alt={song.songName}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${song.songName}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {song.songName}
                </motion.h3>
                <motion.p
                  layoutId={`artist-${song.artistName}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {song.artistName}
                </motion.p>
                <motion.p
                  layoutId={`artist-${song.trackLength}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {formatDuration(song.trackLength)}
                </motion.p>
              </div>
            </div>
            <motion.div>
              <button className="p-3 w-36 font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-white">
                Play
              </button>
            </motion.div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
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
