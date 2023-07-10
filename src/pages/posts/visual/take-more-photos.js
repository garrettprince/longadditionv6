/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";

export default function Template() {
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
    title: "Advice For People Like Me: Take More Photos",
    type: "photoRight",
    link: "/posts/visual/take-more-photos",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1683823345/Long%20Addition/Posts/Advice%20For%20People%20Like%20Me%20-%20Take%20More%20Photos/thumbnail_yjaeao.png",
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
              07.10.23
            </p>
          </div>
          <div>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              VISUAL
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              7 MIN
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
            I refused to take photos and videos for a long time.
          </span>{" "}
          Almost a decade. I would tell people (my ex, friends, family, etc.)
          that it wasn’t really necessary. My argument was something along the
          lines of: &quot;You don’t always need to document everything.&quot;
          And, while I still agree with that sentiment in the most literal
          sense, I would use that thought process as an excuse not to document
          <span className="italic"> anything</span>. Ten years out from that
          decision, I now see how flawed that thinking was.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-64 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688051152/Long%20Addition/Posts/Advice%20For%20People%20Like%20Me%20-%20Take%20More%20Photos/Group_91_y2c4c5.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. REAL LIFE PHOTO{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          I created my Instagram account in 2012. I was a junior in high school
          and saw many of my peers joining the photo sharing service. Naturally,
          I felt the need to join in. I posted a few photos here and there. One
          of me getting an Aaron Carter CD after a haircut. Another in a bathtub
          my siblings and I found in a construction site. Eventually, I’d post
          one of me skydiving on North Shore in my first year at the University
          of Hawaii. Ballpark, I posted about 30 photos in three years.
        </p>
        <p id="paragraph" className="mb-4">
          When I dropped out of college and moved in with some extended family
          in 2015, I (stupidly) decided to delete my Facebook and wipe my
          Instagram account. I can’t honestly remember if it was an act of
          rebellion (still not sure who against), embarrassment, social
          exhaustion, or prep to reinvent myself. Regardless of the reason, I
          didn’t save backups of those photos and that kind of sucks. Those were
          moments of my adolescence that I can’t recover.
        </p>
        <p id="paragraph" className="mb-4">
          At the time, I didn’t think anything of it.{" "}
          <span className="italic">
            Why would I want to see what my hair looked like in 2012? Who cares
            about a bathtub in a construction site?
          </span>{" "}
          Garrett ten years later checking in. I do.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-64 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688051152/Long%20Addition/Posts/Advice%20For%20People%20Like%20Me%20-%20Take%20More%20Photos/Group_92_l3tgj3.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-[-1.5rem] mb-10">
            FIG 2. CHECKING IN{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          In October of 2022, I traveled abroad to Australia. I stayed in
          Sydney, Dee Why, and Cairns for a total of 28 days. Brand new
          continent, culture, people. The whole nine. I took a grand total of 17
          photos and 10 videos on my phone. <span className="italic">27 things!</span> That’s not even a single
          photo or video everyday! Granted, I wasn’t at the Great Barrier Reef
          or bungee jumping everyday, but{" "}
          <span className="italic">
            what did the house I stayed in look like?
          </span>{" "}
          Did it have red brick? Gray? I genuinely don’t remember and that’s
          bothered me more and more.
        </p>
        <p id="paragraph" className="mb-4">
          This leads us back to my original thought process of &quot;I don’t
          need to document every single little thing&quot;. It’s not like I need
          to know what color the bricks were (this guy’s obsessed with bricks).
          It’s not really about the bricks. It’s about the places, as a whole.
          The people. The Unicorn was such a strange pub with a cast of
          characters and not a single photo was taken. My friend Chris and I got
          hustled by a few pool sharks at the RSL in Dee Why. No cataloguing of
          the havoc those men wreaked on our poor soles. It’s not about taking
          the photo to take the photo. It’s knowing that one day I’ll want to
          kook back at that moment in time.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-64 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688124109/Long%20Addition/Posts/Advice%20For%20People%20Like%20Me%20-%20Take%20More%20Photos/Group_94_v0nzed.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 3. CHUM IN THE WATER{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          The irony is not lost on me. Droves of friends have explained to me
          this exact reasoning. I’ve heard the pitches and their points were
          solid. Sadly, it just had to click when I was in a place where I could
          actually hear it, process it, and change my habits. It’s like learning
          to ride a bike, taking photos. I genuinely have to remind myself to
          take out my phone or camera and press the button. It’s second nature
          for a lot of people, but I’ve had to lunge out of my comfort zone to
          take a picture of a bridge. It’s so strange that I can strike up a
          conversation with anyone anywhere, but I think twice about capturing
          (via photo, not like evil villain capture) the people I care about.
        </p>
        <p id="paragraph" className="mb-4">
          Previously, I relied on others to do the documenting. I was the
          &quot;Hey, can you send me that?&quot; guy. And while that can be fine
          (for the most part) in a group setting, there are so many times I’d
          wander off by myself and have nothing to remember it by. My mind isn’t
          a steel trap. It’s much closer to one of those flimsy lockboxes people
          have at garage sales. Or a duct tape wallet. Things go in and then
          evaporate into thin air. In fact, I think I’m the{" "}
          <span className="italic">perfect</span> candidate to take more photos
          specifically because of my subpar mental filing system.
        </p>
        <p id="paragraph" className="mb-4">
          I can only imagine John Photograph (inventor of the camera) tightening
          up the last screw on his invention and saying aloud to his brother:
          &quot;Some poor sap will really need this contraption one day! His
          memory is butter, see?&quot; And his brother Walter responds with
          &quot;Yeah, boss! He’s toast!&quot; And they do finger guns at each
          other, laugh, and apply a thick grease to their mustaches.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-64 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688124109/Long%20Addition/Posts/Advice%20For%20People%20Like%20Me%20-%20Take%20More%20Photos/Group_95_ods4nr.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 4. JOHN PHOTOGRAPH{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Maybe there’s something to strictly recalling events from memory.
          Maybe that’s why I preferred not taking photos. I could choose how I
          wanted to remember things. Maybe the sunset was just a tad more pink
          in my memory. Maybe they were smiling a bit more. Maybe I looked
          happier than I actually was. Things go your way more when you choose
          how to remember them (if you do at all). You create the narrative. But
          photos feel more definitive to me. A reflection of who you were, who
          you were with, where you were, etc. A literal snapshot of a moment in
          time which now feels more reliable than having to second guess if I
          was even there.
        </p>
        <p id="paragraph" className="mb-4">
          <span className="italic">Just take more photos and videos</span>. It’s not hard and you (meaning me)
          may feel a bit touristy or awkward in some situations, but take a
          second to weigh the outcome: Look dumb (which, you, by the way, are
          the only one thinking that) for a brief moment or forget the memory
          over time. Forget exactly what it looked like.
        </p>
        <p id="paragraph" className="mb-4">
          Have I been oversteering lately? Taking too many photographs? Maybe.
          I’ve taken roughly 2000 photos and videos in the last three months
          alone. Is that a better problem to have in contrast to having no
          photographs at all? Absolutely.
        </p>

        <p id="final-paragraph" className="mb-20">
          I know both Google and Apple Photos have this feature where they’ll
          automatically create a slideshow for you based on photos taken in a
          specific timeframe or place (ex. a weekend in the Alps, your trip to
          Mexico, John Photographs’s funeral, etc.). Funny enough, Apple stopped
          making them for me last year. Which, makes complete sense since it would have just been screenshots and memes at that time. Nothing wrong with
          that, but I’m excited to see what they make for me a year from now.
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-visual"
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
      </motion.div>
    </div>
  );
}
