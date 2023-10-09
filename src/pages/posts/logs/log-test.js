/* eslint-disable @next/next/no-img-element */
import Thumbnail from "../../../components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState, useEffect } from "react";
import SuggestedListeningPlayer from "../../../components/SuggestedListeningPlayer";
import CodeBlock from "../../../components/CodeBlock";
import MediumPlayer from "../../../components/MediumPlayer";
import SquarePlayer from "../../../components/SquarePlayer";

export default function Template() {
  const [copied, setCopied] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "confetti");

  const confettiSpring = () => {
    confettiReward();
  };

  const songData1 = {
    songTitle: "Your Eyes",
    artist: "Tatsuro Yamashita",
    albumTitle: "For You",
    albumArt:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1689568913/Long%20Addition/Posts/Logs/Test%20Log/tatsuroyour_nfxfac.jpg",
    songSource:
      "https://res.cloudinary.com/dvwbpgk6p/video/upload/v1689568615/Long%20Addition/Posts/Logs/Test%20Log/Tatsuro_Yamashita_-_Your_Eyes_lex7dz.mp3",
  };
  const songData2 = {
    songTitle: "Golden",
    artist: "Parade Of Lights",
    albumTitle: "Feeling Electric",
    albumArt:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1689826984/Long%20Addition/Posts/Audio/The%20Benefits%20Of%20Carb%20And%20Protein%20Listening/paradeoflights_hqbv6e.jpg",
    songSource:
      "https://res.cloudinary.com/dvwbpgk6p/video/upload/v1689827041/Long%20Addition/Posts/Audio/The%20Benefits%20Of%20Carb%20And%20Protein%20Listening/RPReplay_Final1689813395_1_dujqjn.mp3",
  };
  const songData3 = {
    songTitle: "Your Eyes",
    artist: "Tatsuro Yamashita",
    albumTitle: "For You",
    albumArt:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1689568913/Long%20Addition/Posts/Logs/Test%20Log/tatsuroyour_nfxfac.jpg",
    songSource:
      "https://res.cloudinary.com/dvwbpgk6p/video/upload/v1689568615/Long%20Addition/Posts/Logs/Test%20Log/Tatsuro_Yamashita_-_Your_Eyes_lex7dz.mp3",
  };

//   const code1 = `<div>
//             <p>This is a paragraph.</p>
//             <h1>This is an h1 tag.</h1>
//             {!react && (
//                 <h1>This is a test</h1>
//             )}
//         </div>`;

  const copy = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  const thumbnailInfo = {
    title: "A Different Kind Of Post",
    type: "photoRight",
    link: "/posts/",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: true,
    seriesTitle: "Captain's Log 001",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1690095135/Long%20Addition/Posts/Logs/001%20A%20Different%20Kind%20Of%20Post/Group_132_iwfahj.png",
    marginBottom: "",
  };

  return (
    <div className="mt-24">
      <header className="mx-4">
        <div className="mx-2 mb-[-2rem]">
          <Thumbnail
            title={thumbnailInfo.title}
            type={thumbnailInfo.type}
            key={thumbnailInfo.title}
            link={thumbnailInfo.link}
            category={thumbnailInfo.category}
            titleSize={thumbnailInfo.titleSize}
            date={thumbnailInfo.date}
            duration={thumbnailInfo.duration}
            photo={thumbnailInfo.photo}
            series={thumbnailInfo.series}
            seriesTitle={thumbnailInfo.seriesTitle}
          />
        </div>
        <motion.div
          id="info"
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="flex justify-between mb-5"
        >
          <div>
            <p className="text-sm font-mono text-inactive">BY GARRETT PRINCE</p>
            <p className="text-sm bg-transparent text-inactive font-mono ">
              02.23.23
            </p>
          </div>
          <div>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              MISC
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              15 MIN
            </p>
          </div>
        </motion.div>
      </header>
      <motion.div
        className="sticky z-10 top-[4.3rem] sm:top-[5.3rem] bg-transparent backdrop-blur-2"
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: -3, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <SuggestedListeningPlayer
          artist1={songData1.artist}
          songTitle1={songData1.songTitle}
          albumTitle1={songData1.albumTitle}
          albumArt1={songData1.albumArt}
          songSource1={songData1.songSource}
          artist2={songData2.artist}
          songTitle2={songData2.songTitle}
          albumTitle2={songData2.albumTitle}
          albumArt2={songData2.albumArt}
          songSource2={songData2.songSource}
        />
      </motion.div>

      <motion.div
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: -3, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className=" ml-4 mr-3 text-lg sm:ml-8"
      >
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>

        {/* TODO: Figure out how to style code block, not sure how yet */}
        {/* <CodeBlock code={code1} language="jsx" /> */}

        {/* <MediumPlayer
          artist={songData.artist}
          songTitle={songData.songTitle}
          albumTitle={songData.albumTitle}
          albumArt={songData.albumArt}
          songSource={songData.songSource}
        /> */}

        {/* <div className="mr-2">
            <SquarePlayer
              artist={songData.artist}
              songTitle={songData.songTitle}
              albumTitle={songData.albumTitle}
              albumArt={songData.albumArt}
              songSource={songData.songSource}
            
            />
        </div> */}

        <p id="paragraph" className="mb-4">
          <span className="">Lorem</span> ipsum dolor sit amet consectetur
          adipisicing elit. Atque, explicabo fugiat qui recusandae accusantium
          quia autem facilis pariatur enim! Sed magni minima sequi nisi nulla
          optio non quod debitis ipsum.
        </p>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="/assets/brand/garretttest.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. A SAMPLE PICTURE{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        {/* <div id="gif" className="my-14 mx-10">
          <img
            alt=""
            className="sm:h-88 mx-auto rounded-2xl box-border border-black gif-shadow"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688634235/Long%20Addition/Branding/IMG_3575_uimwbc.gif"
          />
        </div>
        <div id="gif" className="my-14 mx-10 sm:h-88">
          <video
            autoPlay
            playsInline
            loop
            muted
            alt=""
            className="sm:h-88 mx-auto rounded-2xl box-border border-black gif-shadow aspect"
            src="https://res.cloudinary.com/dvwbpgk6p/video/upload/v1688637106/Long%20Addition/Branding/IMG_3233_hyjxix.mov"
          />
        </div> */}
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <h2
          id="pullquote"
          className="mb-11 mt-10 text-3xl font-bold text-center mr-5"
        >
          This is a <span className=" ">pullquote</span> with multiple lines and
          even more text
        </h2>
        <p id="paragraph" className="mb-4">
          Lorem ipsum{" "}
          <Link
            href="/"
            className="border-b-[3px] border-misc cursor-pointer bg-transparent pb-[.1rem]"
          >
            dolor
          </Link>{" "}
          sit amet consectetur adipisicing elit. Atque, explicabo fugiat qui
          recusandae accusantium quia autem facilis pariatur enim! Sed magni
          minima sequi nisi nulla optio non quod debitis ipsum.
        </p>
        <div
          id="dot-divider"
          className="mr-5 pt-8 pb-12 flex mx-auto justify-center"
        >
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
        </div>
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-2xl">
          New Section
        </p>
        <p id="final-paragraph" className="mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          similique alias vel tempore, iure quod delectus recusandae minus,
          deserunt in hic. Cupiditate deserunt illum, laborum ab assumenda
          voluptas. Sit, itaque.
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-inactive"
          ></button>
        </p>
        <div className="flex mt-10 mb-5 justify-center space-x-2 mr-5">
          <Link
            href="/contact"
            className="cursor-pointer flex rounded-lg px-3 py-1 bg-zinc-800 bg-zinc-800-shadow justify-center items-center space-x-2"
          >
            <p className="font-mono text-sm bg-transparent pt-[.15rem]">
              CONTACT
            </p>
          </Link>
          <button
            id="confettiReward"
            disabled={isConfettiAnimating}
            onClick={() => {
              copy(), confettiSpring();
            }}
            className="cursor-pointer flex rounded-lg px-3 py-1 bg-zinc-800 bg-zinc-800-shadow justify-center items-center space-x-2"
          >
            <p className="font-mono text-sm bg-transparent pt-[.15rem] w-44">
              {!copied ? "CLICK TO COPY LINK" : "COPIED! YOU DID IT!"}
            </p>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
