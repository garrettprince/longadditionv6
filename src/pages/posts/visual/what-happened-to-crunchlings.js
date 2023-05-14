/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function WhatHappenedCrunchlings() {
  const [copied, setCopied] = useState(false);
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "confetti");

  const confettiSpring = () => {
    confettiReward();
  };

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
    title: "What Ever Happened To My Crunchlings",
    type: "photoLeft",
    link: "/posts/visual/what-happened-to-crunchlings",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679793057/Long%20Addition/Posts/What%20Happened%20To%20My%20Crunchlings/crunchgroup2_vwuvzq.png",
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
              VISUAL
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              15 MIN
            </p>
          </div>
        </motion.div>
      </header>
      <motion.div
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: -3, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className=" ml-4 mr-3 text-lg"
      >
        <p id="paragraph" className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          explicabo fugiat qui recusandae accusantium quia autem facilis
          pariatur enim! Sed magni minima sequi nisi nulla optio non quod
          debitis ipsum.
        </p>
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
        <div className="mb-4 mt-10 ml-10 mr-14">
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
            className="cursor-pointer flex rounded-lg px-3 py-1 bg-zinc-800 justify-center items-center space-x-2"
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
            className="cursor-pointer flex rounded-lg px-3 py-1 bg-zinc-800 justify-center items-center space-x-2"
          >
            <p className="font-mono text-sm bg-transparent pt-[.15rem] w-44">
              {!copied ? "CLICK TO COPY LINK" : "COPIED! YOU DID IT!"}
            </p>
          </button>
        </div>
        {/* <div className="flex justify-between mb-5 ml-5 mr-10 text-sm">
          <p className="font-mono text-inactive">PREVIOUS</p>
          <Link href='/' className="font-mono text-inactive">HOME</Link>
          <p className="font-mono text-inactive">NEXT</p>
        </div> */}
      </motion.div>
    </div>
  );
}
