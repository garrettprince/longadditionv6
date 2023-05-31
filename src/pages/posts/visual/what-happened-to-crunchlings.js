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
    title: "What Ever Happened To My Crunchlings?",
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
              05.31.23
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
          <span className="font-bold">What’s your earliest memory?</span> No,
          really. Humor me and take a second to think about it. Is it with your
          family? Maybe a trip to the beach? Did you think you were an extra in
          the movie{" "}
          <span className="italic">Willy Wonka and the Chocolate Factory</span>{" "}
          because nobody explicitly told you that you weren’t?
        </p>
        <p id="paragraph" className="mb-4">
          I remember dancing on a dresser with sunglasses on (I was wearing
          them, not the dresser) around age three. I can’t quite remember the
          context other than trying to ham it up for the family. Which, if we’re
          being totally honest, is still an active pursuit to this day.
        </p>
        <p id="paragraph" className="mb-4">
          Dancing on a dresser is the first thing I remember doing in my life.
        </p>

        <p id="paragraph" className="mb-4">
          I remember learning to ride a bike in 30 seconds at age five. I
          remember trying to sneak some rocks home from a family reunion in Lake
          Tahoe because &quot;if I painted them gold they would be worth
          something big&quot;.
        </p>
        <p id="paragraph" className="mb-4">
          At six, to complete my &quot;magician&quot; costume for the school
          Halloween dress up contest, my dad drew a mustache on me with my mom’s
          mascara. The kids at school told me they really liked it, but I
          thought they had all met with each other beforehand to practice their
          messaging and make &quot;the lie&quot; believable. I attempted to
          smear the mustache off in the bathroom but my mother sprang for the
          waterproof mascara flavor and it looked like I had just fired a
          cartoon canon, leaving my face covered in soot from the recoil. I
          eventually went home &quot;sick&quot; with a self-diagnosed &quot;gut
          illness&quot;.
        </p>
        <p id="paragraph" className="mb-4">
          At age seven, I thought about death for the first time.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-10">
          <img
            alt=""
            className="h-72 sm:h-80 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1685511798/Long%20Addition/Posts/What%20Happened%20To%20My%20Crunchlings/kid_ur2dxc.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. HAM{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Growing up in the Mormon faith, the church (and many other Christian
          religions) did a bang up job teaching children how temporary this life
          and their bodies were. How there was a master plan that, when you died
          (assuming you lived the life you were instructed to), you’d be
          welcomed with open arms to a place unimaginably better than where you
          were right then. Many people find comfort in messages like that, in
          all types of religions, not just the one I grew up in.
        </p>
        <p id="paragraph" className="mb-4">
          For me, not so much. Unsurprisingly, as a child, it made me feel a bit
          sick, the gravity of it all. I’d picture this void of nothingness. An
          empty room. Space. I’d try my hardest to fill it with palm trees and
          sunsets. I’d seen it pictured, these descriptions of Heaven, as a
          paradise. So why couldn’t I see it? Why was it just… nothing?
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
          That same year, at the height of toys and goodies being shipped within
          cereal boxes, my siblings and I cracked open a fresh Crunch Berries to
          find some of the best marketing of the early 2000’s:{" "}
          <Link
            href="https://youtu.be/AtgljTf5NOk"
            className="visual-underline"
          >
            <span className="italic">Cap’n Crunch’s Crunchling Adventure</span>
          </Link>
          . A computer game centered on growing and raising a small, furry
          creatures, aptly named <span className="italic">Crunchlings</span>, to
          adulthood through various physical challenges (jumping, riding a
          skateboard, throwing things into a volcano), all to defeat{" "}
          <span className="italic">The Crunchium Thief</span>.
        </p>
        <p id="paragraph" className="mb-4">
          This was all, of course, a ploy to get children to beg their parents
          for more Cap’n Crunch. It was a McDonald’s Happy Meal. It was
          collectible Pez dispensers. It was HitClips. Well, it’s not actually
          close to HitClips at all but I wanted to bring them up because
          remember when kids would spend multiple dollars on a 30 second clip of
          a Top 40 song and only be able to listen to it with one ear? Wild.
          Continuing with the Happy Meal line of thinking, the only way your
          Crunchling would grow in game was to feed it, you guessed it, Crunch
          Berries.{" "}
        </p>
        <p id="paragraph" className="mb-4">
          I think, even back then, my siblings and I knew what the true angle of
          the game was. We weren’t naive. But goddamn did they make a
          multi-faceted, action-packed, barn burner of a free cereal box CD. We
          were hooked.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-10">
          <img
            alt=""
            className="h-64 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1685511797/Long%20Addition/Posts/What%20Happened%20To%20My%20Crunchlings/crunchling_wtuuyu.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 2. YOUNG ADULT CRUNCHLING{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          We spent days playing Crunchling Adventure. Weeks, even. We were,
          rightfully so, forced to take turns raising our Crunchlings on the
          communal Gateway desktop. Hours between plays felt like an eternity.
        </p>
        <p id="paragraph" className="mb-4">
          There were color customizations and repeatable courses, all with the
          promise of a new high score. There were different flavors of crunch
          berries you could feed your Crunchling. There were secrets in the
          skateboarding level. New ways to throw lava rocks. Cap’n Crunch would
          drop in every so often and share some of his wisdom. I repeat:{" "}
          <span className="italic">
            The blue guy with the white mustache from the cereal box would
            bestow his knowledge upon you.
          </span>{" "}
        </p>
        <p id="paragraph" className="mb-4">
          It was a cereal-themed Sims knockoff, but it gave my siblings and I
          weeks of fun. Of course, time passed and those days of entertainment
          with the Cap’n became few and far between. Inevitably, Our interests
          changed. New games came out. Actual games from studios not in the
          cereal business. I discovered Zelda. The Cap’n Crunch’s Crunchling
          Adventure cd-rom would eventually be retired to the shelf, collecting
          dust.
        </p>
        <p
          id="pullquote"
          className="mb-11 mt-10 text-3xl font-bold text-center mr-5"
        >
          We weren&apos;t naive.
        </p>
        <p id="paragraph" className="mb-4">
          I’ve been thinking about those Crunchlings lately. Not a lot, but more
          than any other time since I was seven. It doesn’t keep me up at night,
          but that seems to be when I think about these things. Why did I like
          that game so much? What kind of a life did a Crunchling have outside
          of the activities I assisted them with? Can a Crunchling skateboard
          themselves to death?
        </p>
        <p id="paragraph" className="mb-4">
          One question lingered longer than the others: How many generations had
          passed since I so callously abandoned my Crunchlings?
        </p>
        <p id="paragraph" className="mb-4">
          Well, I sat down and did the math.
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
          On average, to the best of my recollection, I could birth, feed,
          nurture, raise, grow, and subsequently move onto a new Crunchling in
          about two real life days. Now, the game wouldn’t let you see your
          Crunchling on their deathbed and I think that’s a net positive.
          Confronting Crunchling dementia while I was in the first grade would
          have short circuited my brain. All of this to say: You leave your
          Crunchling in what looks like a healthy middle age. Given the ability
          to raise and nurture them to the end, that would have most likely
          taken four days.
        </p>
        <p id="paragraph" className="mb-4">
          I’m 28 now. It’s been close to 21 years since I stopped playing{" "}
          <span className="italic">Cap’n Crunch’s Crunchling Adventure</span>.
          I’m rounding to my birthday in each calculation and subtracting the
          five month difference until my 29th birthday. I’m also adding in five
          additional days due to leap years in the past two decades. That leaves
          us with 7,520 days.{" "}
        </p>
        <p id="paragraph" className="mb-4">
          We must also consider the mating habits of Crunchlings. My belief
          (which is backed up by absolutely nothing) is that Crunchlings can
          begin to produce offspring within 2.5 human Earth days. This would
          give the parents of the offspring time to raise, nurture, feed, and
          train their own Crunchlings (in my omnipotent absence) to ensure the
          lineage progresses.
        </p>
        <p id="paragraph" className="mb-4">
          Dividing the time since I’ve played (7,520 days) by the time it takes
          to establish a new generation (on average) of Crunchlings (2.5 days),
          we are left with 3,008.{" "}
          <span className="italic">3,008 generations of Crunchlings</span>.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-10">
          <img
            alt=""
            className="h-48 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1685511798/Long%20Addition/Posts/What%20Happened%20To%20My%20Crunchlings/skateboardcrunch_e9rcoa.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 3. WHAT HAVE THEY SEEN?{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          What technological breakthroughs did they experience in this time?
          What medical advances made their way into the minds and four fingered
          hands of these Crunchlings? Could cereal politics have influenced
          Crunchling government mandated birthing requirements?{" "}
        </p>
        <p id="paragraph" className="mb-4">
          3,008 generations of love and loss. 3,008 generations of heartbreak
          and happiness. Millenia (to them) of discovery, hope, lust, fear, and
          hunger. Hunger for something greater than themselves. Would the game
          be the same if I were to boot it up today? Would they still want to
          jump endlessly? Throw rocks into lava and skateboard through a
          carnival? Was there still an innate hostility toward The Crunchium
          Thief? Was Crunchium a resource they still shed Crunchling blood
          (milk) over?
        </p>

        <p id="paragraph" className="mb-4">
          Or would it be different? Would a Crunchling smile back at me behind
          their &quot;Oops! All Berries&quot; branded deep space molecular
          communication goggles? Would they think the same things about me? My
          lineage?
        </p>
        <p id="paragraph" className="mb-4">
          Does their life mean any less than mine? Do they sit and ponder on the finality of it all as well?  
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
          Humans have a funny way of talking about, describing, and confronting
          death. Sometimes, it’s a black void. Like how I saw it as a kid.
          Sometimes, it’s beautiful. The back cover to a well-worn novel. Other
          times, springs of water flowing endlessly in the clouds. And there’s
          beauty in that as well.
        </p>
        <p id="final-paragraph" className="mb-20">
          I guess now we can add calculating the current Crunchling generation
          to that list.
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
        {/* <div className="flex justify-between mb-5 ml-5 mr-10 text-sm">
          <p className="font-mono text-inactive">PREVIOUS</p>
          <Link href='/' className="font-mono text-inactive">HOME</Link>
          <p className="font-mono text-inactive">NEXT</p>
        </div> */}
      </motion.div>
    </div>
  );
}
