/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function KingPeentyRedRubies() {
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
    title: "The Search For King Peenty's Big Red Rubies",
    type: "photoLeft",
    link: "/posts/travel/king-peenty-red-rubies",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679810837/Long%20Addition/Posts/The%20Search%20For%20King%20Peenty%27s%20Big%20Red%20Rubies/actionraised2_s499xr.png",
    marginBottom: "mb-20",
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
              07.08.23
            </p>
          </div>
          <div>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              TRAVEL
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
        className=" ml-4 mr-3 text-lg"
      >
        <p id="paragraph" className="mb-4">
          <span className="font-bold">
            Early last year, I found myself on an energetic stroll across
            Stanford’s e-campus.
          </span>{" "}
          Having consumed my third &quot;smart meal&quot; (crushed cashews and
          Joey Chestnut branded wet bread) of the day from the student favorite
          Redwood Cafe, a brisk walk felt appropriate. I’d recently taken to
          alternative speed-walking (toe heel, toe heel) and the preliminary
          results were electric.
        </p>
        <p id="paragraph" className="mb-4">
          I checked my heart rate the old fashioned way (finger in mouth) and
          logged the result. My goal was to burn 2,850 Stanford calories by noon
          and I’d blown past 3,000 by 9am. Sadly, as a result of this adaptive
          energy expenditure, the front of my shins sprouted calf-like muscles.
          I ended up having to swap my Lee’s Skinny Fats for a pair of Dickie’s
          Deeps from the campus clending (clothes vending) machine to
          accommodate the frontal expansion. Jeaned up, I made my way back to
          the Cardinal tent system for a gravity snoozer.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-64 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688459058/Long%20Addition/Posts/The%20Search%20For%20King%20Peenty%27s%20Big%20Red%20Rubies/Group_96_s34jg8.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. LEE’S SKINNY FATS{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          There were a few routes I normally took each day. The most well
          trodden path, now showing advanced signs of ecological decay, happened
          to be the quickest and on rainier days, acted as my personal canal
          system. Seeing as it was as dry as the Gofee Desert, I opted for the
          paved path.
        </p>

        <p id="paragraph" className="mb-4">
          Not five minutes into my journey, I heard the distant drone from a
          nearby classroom of what could only be a tenured professor attempting
          to keep his students interested.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;You see, that’s why language is such a powerful tool!&quot; My
          interest peaked and a single eyebrow raised, I deviated from my route
          and approached the classroom to listen in. &quot;A can mean B, and C
          can mean…. Anyone?&quot; Those still awake in the fluorescent
          auditorium stared blankly back at their instructor. He let out an
          audible sigh.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-64 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688459058/Long%20Addition/Posts/The%20Search%20For%20King%20Peenty%27s%20Big%20Red%20Rubies/Group_99_bk8q7l.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 2. ZARDON{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          I leaned on the doorframe, one leg crossed behind the other with my
          toe resting on the ground, much like a cowboy or a 90’s Levi’s ad
          featuring a cowboy. I removed my prescription sunglasses.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;C can mean D.&quot; I smiled, taking off a second pair of
          prescription sunglasses. &quot;And B.&quot; Every head in the class
          snapped to my silhouette in the doorway in disbelief except for the
          neck brace kid.{" "}
        </p>
        <p id="paragraph" className="mb-4">
          The professor capped his Expo marker. &quot;Thanks, but my 400 level
          class doesn’t meet until 3pm.&quot; I could tell I’d overstepped. The
          bell rang and students filed out, eager to escape the lecture hall.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;So, you’re a language guy, huh?&quot; I asked, still leaning on
          the doorframe like a cowboy. He put his thumbs in his belt loops,
          debating whether to entertain the conversation further. &quot;Yes, I’m
          the professor of Ancient and Foreign Words and Letters here at
          Stanford. Like I said before, class is over and-&quot;
        </p>
        <p id="paragraph" className="mb-4">
          I began my descent down the auditorium steps to meet him at the front.
          &quot;I’m hoping you can help me with this.&quot; I pulled out a
          scroll from my sock and flattened it on the overhead projector. I
          flicked on the creaky bulb. He turned to face the projection and put
          the rest of his fingers in his belt loops in contemplation. Studying
          the hieroglyphics projected from the scroll, his eyes lit up.
          &quot;Where did you get this?&quot;
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-40 sm:h-40 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688459059/Long%20Addition/Posts/The%20Search%20For%20King%20Peenty%27s%20Big%20Red%20Rubies/Group_98_dw6kv6.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 3. ANKLE SWEAT{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          &quot;Can you tell me what it says?&quot; I questioned. Truth was that
          I’d found it in a corked bottle when looking for sea glass years
          prior. Truth was that I’d kept it in my sock every day in hopes of
          finding someone that could translate it for me. &quot;The only word I
          can make out is ‘ruby’. Everything else is a wash.&quot; I continued.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;Ruby?&quot; He turned to me with a look of both wonder and
          concern. &quot;Not just any ruby.&quot; He pushed his glasses up.
          &quot;These are, if my preliminary readings are correct, rough
          coordinates to King Peenty’s Big Red Rubies.&quot;{" "}
        </p>
        <p id="paragraph" className="mb-4">
          I scoffed, shook my head, and removed the scroll from the overhead
          projector. &quot;Funny, Doc.&quot; I rolled it up taquito style and
          sheathed it back in my sock. &quot;Real funny, but we both know those
          rubies have been missing for 5.6 thousand years. Not a single soul has
          seen them since Jesus walked among the reptiles.&quot;
        </p>
        <p id="paragraph" className="mb-4">
          Doctor Zardon paced silently, watching me pack up in frustration.
          &quot;I’m serious.&quot; He plead. I met his gaze. I could see he was
          genuine. &quot;Can I please see the scroll again? I have a feeling it
          could give us some clues as to where the rubies may be. I’m not
          promising anything, but I have a good feeling about this.&quot;
        </p>
        <p id="paragraph" className="mb-4">
          I removed the scroll, now wet from my ankle sweat, rang it out and placed it in Zardon’s hands.
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
          Two days later, my phone rang mid pushup.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;Go for Garrett.&quot; I huffed, switching to one handed pushups
          to take the call.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;It’s Zardon. I found something interesting you might want to
          hear.&quot; I repped out four more pushups, full well knowing my left
          arm, chest, and whole left side of body would be larger and stronger
          because of the muscular imbalance. I told him to proceed. &quot;Again,
          I don’t know if I’m 100 percent correct on the translation, but it’s
          looking like…&quot; Zardon trailed off. I finished my pushups and tied
          my headband tighter.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;It’s looking like what, Doc?&quot; I asked, a wave of curiosity
          washing over me.
        </p>
        <p id="paragraph" className="mb-4">
          Zardon sighed. &quot;The ocean.&quot; I could hear the tears welling
          in his eyes. &quot;The ocean, Garrett. The coordinates don’t even say
          which one. Just, that they were buried in water or maybe an island
          surrounded by water or it could be a continent that’s not water at
          all.&quot; I stayed silent for a few moments. He continued.
          &quot;Garrett, are you there?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          &quot;How much did you say these rubies were worth?&quot; I asked.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;Approximately 5.6 billion dollars.&quot; He responded.
          &quot;Each.&quot;
        </p>

        <p id="final-paragraph" className="mb-20">
          My forehead muscles strained from deep rumination, I could feel my
          headband rip at the seams. After a minute of pacing back and forth, I
          returned to the call. Sweat dripping from neck, Zardon could hear the
          newfound confidence in my voice. &quot;Looks like we’re going to need
          a boat. Or plane. And car, probably.&quot;
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-travel"
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
