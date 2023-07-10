/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function WhatIsLongAddition() {
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
    title: "What Is Long Addition?",
    type: "photoRight",
    link: "/posts/misc/what-is-long-addition",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1683327434/Long%20Addition/Posts/What%20Is%20Long%20Addition/thumbnailnew_d5ce8x.png",
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
              05.11.23
            </p>
          </div>
          <div>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              MISC
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              5 MIN
            </p>
          </div>
        </motion.div>
      </header>
      <motion.div
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: -3, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className=" ml-4 mr-3 text-lg sm:ml-8"
      >
        <p id="paragraph" className="mb-4">
          <span className="font-bold">
            In early January, I sat down on a stationary bike for my daily
            cardio.
          </span>{" "}
          I’d been dealing with a nasty bout of Runner’s Knee and pedaling
          became the voluntary poison I picked to maintain my sanity. To my
          surprise, pedaling nowhere turned out to be quite tranquil. I was
          never great at meditation but this felt as close as I was going to get
          to momentary inner-peace. As an added benefit, this small activity
          each day gave me time to think.
        </p>
        <p id="paragraph" className="mb-4">
          I thought about what I would eat immediately after the workout.
          January seemed like a natural time to reevaluate and realign so I
          thought about my plans for the year. I thought about my career growth,
          or rather, lack thereof. I thought about food again. Ultimately, by
          the time my tailbone went numb with each stationary ride, my mind
          drifted back to the same set of questions:
        </p>
        <p id="paragraph" className="mb-4">
          How do I want to spend my time? Where do I see myself in one year? A
          month? Should I keep growing or stay 6’3”? What does meaningful work
          and creation mean to me? If I had the opportunity to do anything, what
          would I do?
        </p>
        <div className="mb-4 my-10">
          <img
            alt=""
            className="w-40 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1683828728/Long%20Addition/Posts/What%20Is%20Long%20Addition/stationarybike_v2rbgs.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. SHAVASANA{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Over and over, I returned to these questions. Every mile, a new idea.
          Every kilometer, 62% of an idea. I knew I needed answers for myself if
          I was ever going to make the progress I wanted to, and over many
          stationary bike sessions and the months that followed, I found them.
        </p>
        <p id="paragraph" className="mb-6">
          I now have two goals for the rest of my life:
        </p>
        <p id="sectionchange" className="mb-4 font-bold text-2xl">
          1. Physically be where it&apos;s warm and sunny
        </p>
        <p id="sectionchange" className="mb-6 font-bold text-2xl">
          2. Make things until I&apos;m dead
        </p>

        <p id="paragraph" className="mb-4">
          I haven’t yet learned how to harness and control the weather (bigger
          kite with bigger key?), so it looks like traveling is the most
          realistic route in achieving goal number one. Check. And while
          &quot;making things until I’m dead&quot; may sound a bit nebulous on
          the surface, it’s as clear as day to me.
        </p>

        <p id="paragraph" className="mb-4">
          I’ve been working on this site. That’s a thing. I’ve been writing a
          ton. Definitely a thing. I made some music. Those are things. I might
          direct a claymation film. I probably won’t, but I{" "}
          <span className="italic">could</span> and that would be a thing too.
          Why not include them all in one place?
        </p>
        <div className="mb-4 my-10">
          <img
            alt=""
            className="w-44 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1683828730/Long%20Addition/Posts/What%20Is%20Long%20Addition/makingthings_ofb3cr.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 2. MAKING THINGS{" "}
          </p>
        </div>

        <p id="paragraph" className="mb-4">
          Long Addition is the home for documenting goal number 2 and to take it
          a step further, I’ve separated each creation into one of six
          categories: Audio, Tech, Travel, Health, Visual, and Misc. You may
          have seen them on the sidebar of the homepage. If you didn’t, my
          website is broken. Either way, these are the topics that interest me
          and what I’ll be diving into further on a regular basis.
        </p>
        <p id="paragraph" className="mb-4">
          Long Addition is my ADHD personified. Long Addition is the Bodies
          Exhibit but with my limbs and clothes and hair still attached. Long
          Addition is me at the Applebee’s bar leaning over to the guy next to
          me and saying &quot;Hey, so I’ve been thinking about human skin
          wings.&quot; and then the guy gets up and leaves and I’m not allowed
          back in any Applebee’s on the Western seaboard. Long Addition is me
          staring at a painting and saying &quot;Okay, I definitely see it
          now&quot;. Long Addition is my penpal.
        </p>
        <p id="final-paragraph" className="mb-20">
          Thanks for checking it out. I hope it adds some value for you in the
          long run.
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-misc"
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
