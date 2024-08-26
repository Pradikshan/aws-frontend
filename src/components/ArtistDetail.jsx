import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./ui/use-outside-click";

export function ArtistDetail() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

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
          <div className="fixed inset-0  grid place-items-center z-[100] ">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid grid-cols-1 md:grid-cols-4 items-start gap-4 my-10 mx-8">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
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

const cards = [
  {
    description: "Canadian Singer and Songwriter",
    title: "The Weeknd",
    src: "https://th.bing.com/th/id/OIP.PMAHNMHv7RSs8o56KwXvhwHaEs?w=289&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Abel Makkonen Tesfaye (Amharic: አቤል መኮንን ተስፋዬ; born February 16,
          1990), known professionally as the Weeknd, is a Canadian
          singer-songwriter. He is known for his unconventional musical
          production, artistic reinventions and use of the falsetto register.
        </p>
      );
    },
  },
  {
    description: "American Pop Rock Band",
    title: "OneRepublic",
    src: "https://th.bing.com/th/id/OIP.Wa5sckuGYGZhHphRS9dJcwHaEq?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          OneRepublic is an American pop rock band formed in Colorado Springs,
          Colorado, in 2002. The lineup currently consists of Ryan Tedder (lead
          vocals, piano), Zach Filkins (lead guitar, viola), Drew Brown (rhythm
          guitar), Brent Kutzle (bass, cello), Eddie Fisher (drums), and Brian
          Willett (keyboards, percussion, violin).
        </p>
      );
    },
  },
  {
    description: "American Heavy Metal Band",
    title: "Metallica",
    src: "https://th.bing.com/th/id/OIP.qe2VI4xJJP_DOSv_DUZq2gHaEs?w=308&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Metallica is an American heavy metal band. The band was formed in 1981
          in Los Angeles by vocalist and guitarist James Hetfield and drummer
          Lars Ulrich, and has been based in San Francisco for most of its
          career. The band's fast tempos, instrumentals and aggressive
          musicianship made them one of the founding "big four" bands of thrash
          metal, alongside Megadeth, Anthrax and Slayer. Metallica's current
          lineup comprises founding members and primary songwriters Hetfield and
          Ulrich, longtime lead guitarist Kirk Hammett and bassist Robert
          Trujillo. Guitarist Dave Mustaine, who formed Megadeth after being
          fired from Metallica, and bassists Ron McGovney, Cliff Burton and
          Jason Newsted are former members of the band.
        </p>
      );
    },
  },
  {
    description: "American Hard Rock Band",
    title: "Guns N' Roses",
    src: "https://th.bing.com/th/id/OIP.VYhKAfOMNhVnmaq_pMeJGgHaFA?w=269&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Guns N' Roses is an American hard rock band from Los Angeles,
          California, formed in March 1985 when local bands Hollywood Rose and
          L.A. Guns merged. When they signed to Geffen Records in 1986, the
          band's "classic lineup" consisted of vocalist Axl Rose, lead guitarist
          Slash, rhythm guitarist Izzy Stradlin, bassist Duff McKagan, and
          drummer Steven Adler. The current lineup consists of Rose, Slash,
          McKagan, guitarist Richard Fortus, drummer Frank Ferrer and
          keyboardists Dizzy Reed and Melissa Reese.
        </p>
      );
    },
  },
  {
    description: "American Rapper",
    title: "Eminem",
    src: "https://th.bing.com/th/id/OIP.tHj6Avshz1CN7xPPJf2vFAHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Marshall Bruce Mathers III (born October 17, 1972), known
          professionally as Eminem (stylized as EMINƎM), is an American rapper
          and music producer. He is credited with popularizing hip hop in Middle
          America and is regarded as one of the greatest rappers of all time.
          His success is considered to have broken racial barriers to the
          acceptance of white rappers in popular music. While much of his
          transgressive work during the late 1990s and early 2000s made him a
          controversial figure, he came to be a representation of popular angst
          of the American underclass and has been cited as influencing many
          musical artists.
        </p>
      );
    },
  },
  {
    description: "American Country Singer",
    title: "Johnny Cash",
    src: "https://th.bing.com/th/id/OIP.Dyt2pxCoqztyUM5XUbBhLQHaFO?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          John R. Cash (born J. R. Cash; February 26, 1932 – September 12, 2003)
          was an American singer-songwriter. Most of Cash's music contains
          themes of sorrow, moral tribulation, and redemption, especially songs
          from the later stages of his career. He was known for his deep, calm,
          bass-baritone voice, the distinctive sound of his backing band, the
          Tennessee Three, that was characterized by its train-like chugging
          guitar rhythms, a rebelliousness coupled with an increasingly somber
          and humble demeanor, and his free prison concerts. Cash wore a
          trademark all-black stage wardrobe, which earned him the nickname "Man
          in Black".
        </p>
      );
    },
  },

  {
    description: "Australian Psychedelic Music Project",
    title: "Tame Impala",
    src: "https://th.bing.com/th/id/OIP.8CZV7fri4-bVlsy1m63AqwHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Tame Impala is the psychedelic music project of Australian
          multi-instrumentalist Kevin Parker. In the recording studio, Parker
          writes, records, performs, and produces all of the project's music. As
          a touring act, Tame Impala consists of Parker (vocals, guitar,
          synthesizer), Dominic Simper (guitar, synthesiser), Jay Watson
          (synthesiser, vocals, guitar), Cam Avery (bass guitar, vocals,
          synthesizer), and Julien Barbagallo (drums, vocals). The group has a
          close affiliation with fellow Australian psychedelic rock band Pond,
          sharing members and collaborators, including Nick Allbrook, formerly a
          live member of Tame Impala. Originally signed to Modular Recordings,
          Tame Impala is now signed to Interscope Records in the United States
          and Fiction Records in the United Kingdom.
        </p>
      );
    },
  },

  {
    description: "American Rock Band",
    title: "Green Day",
    src: "https://th.bing.com/th/id/OIP.j-ZTuxCnsJDlkB7ds1wW_wHaE7?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Green Day is an American rock band formed in Rodeo, California in 1987
          by lead vocalist and guitarist Billie Joe Armstrong and bassist and
          backing vocalist Mike Dirnt, with drummer Tré Cool joining in 1990. In
          1994, their major-label debut Dookie, released through Reprise
          Records, became a breakout success and eventually shipped over 10
          million copies in the U.S. Alongside fellow California punk bands Bad
          Religion, the Offspring, Rancid, NOFX, Pennywise and Social
          Distortion, Green Day is credited with popularizing mainstream
          interest in punk rock in the U.S.
        </p>
      );
    },
  },

  {
    description: "American Singer, Songwriter, and Actor",
    title: "Justin Timberlake",
    src: "https://th.bing.com/th/id/OIP.AwzItwVCVwzTzzlid3UGXAHaIr?w=161&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Justin Randall Timberlake (born January 31, 1981) is an American
          singer, songwriter, record producer, and actor. Dubbed the "Prince of
          Pop", he is regarded as one of the most influential entertainers of
          his generation. Timberlake is recognized as the best performing Pop
          Airplay male solo artist of all time by Billboard and remains one of
          the best-selling recording artists of all time, with sales of over 117
          million records worldwide. Timberlake is known for his diverse
          artistry in songwriting, showmanship, tenor vocal range, music
          production, and roles in films. He has won numerous awards and
          accolades, including ten Grammy Awards, four Primetime Emmy Awards,
          three Brit Awards, nine Billboard Music Awards, the Contemporary Icon
          Award by the Songwriters Hall of Fame, and MTV's Michael Jackson Video
          Vanguard Award.
        </p>
      );
    },
  },

  {
    description: "American Rock Band",
    title: "Creedence Clearwater Revival",
    src: "https://th.bing.com/th/id/OIP.RltknCyFCwX1Sovum6dHxgHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Creedence Clearwater Revival, commonly abbreviated as CCR or simply
          Creedence, was an American rock band formed in El Cerrito, California.
          The band consisted of lead vocalist, lead guitarist, and primary
          songwriter John Fogerty, his brother, rhythm guitarist Tom Fogerty,
          bassist Stu Cook, and drummer Doug Clifford. These members had played
          together since 1959, first as the Blue Velvets and later as the
          Golliwogs, before settling on Creedence Clearwater Revival in 1967.
          The band's most prolific and successful period between 1969 and 1971
          produced fourteen consecutive Top 10 singles (many of which were
          double A-sides) and five consecutive Top 10 albums in the United
          States, two of which – Green River (1969) and Cosmo's Factory (1970) –
          topped the Billboard 200 chart. The band performed at the 1969
          Woodstock festival in Upstate New York, and was the first major act
          signed to appear there.
        </p>
      );
    },
  },

  {
    description: "German Synth-Pop Band",
    title: "Alphaville",
    src: "https://th.bing.com/th/id/OIP.vdIDgazR7y34IWcVrMBf2AHaFL?w=279&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Alphaville is a German synth-pop band formed in Münster in 1982. They
          gained popularity in the 1980s. The group was founded by singers
          Marian Gold, Bernhard Lloyd, and Frank Mertens. They achieved chart
          success with the singles "Forever Young", "Big in Japan", "Sounds Like
          a Melody", "The Jet Set", and "Dance with Me". Gold remains the only
          continuous original member of Alphaville. They took their name from
          Jean-Luc Godard's film of the same name.
        </p>
      );
    },
  },

  {
    description: "French Electronic Music Duo",
    title: "Daft Punk",
    src: "https://th.bing.com/th/id/OIP.FQBF8n5ymqSX8Mf3tXswBwHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

    content: () => {
      return (
        <p>
          Daft Punk were a French electronic music duo formed in 1993 in Paris
          by Thomas Bangalter and Guy-Manuel de Homem-Christo. They achieved
          early popularity in the late 1990s as part of the French house
          movement, combining elements of house music with funk, disco, techno,
          rock and synth-pop. They are regarded as one of the most influential
          acts in dance music.
        </p>
      );
    },
  },
];
