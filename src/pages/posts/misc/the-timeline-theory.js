/* eslint-disable @next/next/no-img-element */
import Thumbnail from "../../../components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";

export default function TheTimelineTheory() {
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
    title: "My Timeline Theory",
    type: "photoRight",
    link: "/posts/misc/the-timeline-theory",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: true,
    seriesTitle: "the theory series",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1683826432/Long%20Addition/Posts/My%20Timeline%20Theory/thumbnail_kfs1og.png",
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
              07.07.23
            </p>
          </div>
          <div>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              MISC
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              10 MIN
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
          <span className="font-bold">Galileo.</span> Da Vinci. Mona Lisa.
          Crispin Glover. Homer. Salvador Dali. Osmosis Jones. The Wright
          Brothers. Wall-E. Aristotle. Raphael the Ninja Turtle. Raphael the
          Painter. Me. What commonality does this group share? What
          through-line, if any?
        </p>
        <p id="paragraph" className="mb-4">
          All were misunderstood. Often told their ideas and creative works were
          too &quot;out there&quot;. They weren’t truly appreciated in their
          time. Some were burned at the stake. Others, banished to stars in
          space without names (the far ones science and microscopes can’t see).
          All knew there was something more. Something that needed exploration.
          They could see things others couldn’t.
        </p>
        <p id="paragraph" className="mb-4">
          As far back as recorded history tracks (dinosaurs, protozoa, land
          mammals, germs, etc.), Earth’s inhabitants were drawn to the
          measurement of time. Homo Erectus was our first two legged ancestor to
          wear a watch. The Romans were know for their &quot;super-minutes&quot;
          (five Earth minutes). Pterodactyls flew south for the winter each day
          because the sun got hot and the moon was cold.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954931/Long%20Addition/Posts/My%20Timeline%20Theory/Group_117_x3mffo.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. FLYING SOUTH{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          I share the same fascination and, as a part time treasure hunter, have
          seen how time works first hand (clock puzzles in tombs, sun dial
          puzzles in tombs, birthday puzzles in tombs). The academics in this
          area have done incredible work documenting our collective recorded
          history. Albeit, I believe they’ve missed something crucial.
        </p>
        <p id="paragraph" className="mb-4">
          My Timeline Theory, at this point, is only that: A theory. And while
          I’m working on getting additional funding from Sweden’s renowned Time
          and Money and Space Institute to investigate these discoveries
          further, this article, and the visual aids within it, will act as my
          attempt to explain The Timeline Theory in its entirety.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-48 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954940/Long%20Addition/Posts/My%20Timeline%20Theory/Group_119_zjff1b.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 2. A CONSTRUCT{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Before diving in, we must first establish a few things:
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">1.</span> The measurement of time began at
          some point. Most likely by a bird or a fish with arms around 5.6
          billion years ago. For the sake of the Timeline Theory, we’ll call
          this starting point &quot;the beginning of time&quot;. This makes up
          one end of &quot;the timeline&quot; I’ll be referring to: the
          chronological measurement of events from past to future.
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">2.</span> Now, let’s assume that time, as
          we know it today, will continue to be measured beyond our lifetimes,
          and through the inevitable cycle of an ice age, meltdown, a dawn of
          dinosaurs, a continental drift, and collision course,
          &quot;measured&quot; time will cease to exist as those who measure it
          will be long gone. We’ll call the other end of the timeline &quot;the
          end of time&quot;.
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">3.</span> I’ll be referring to my own
          personal timeline (my birth into my inevitable demise) as a
          &quot;lifespan&quot; so as not to confuse it with the main timeline
          (beginning of time to end of time).
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">4.</span> Finally, (this is where it gets
          a bit tricky, but hang with me here) there is a level of
          predestination that is tied directly to this timeline. This is a key
          differentiator from the masses of multiverse theories based on
          something like The Butterfly Effect. For example: I was always going
          to be born in the measured year 1994. Final Fantasy 9 was always going
          to be released on July 7th, 2000. I was always going to literally shit
          the bed in Indonesia in 2023. So on and so forth.
        </p>
        <div className="my-10 mx-10">
          <img
            alt=""
            className="sm:h-[35rem] mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954930/Long%20Addition/Posts/My%20Timeline%20Theory/Tl_1_vjasgz.png"
          />
        </div>
        <p id="paragraph" className="mb-4">
          Now that we have our timeline, let’s zoom in a bit to a look at the
          real girth of the theory. For the sake of this main example, the
          section of time we’ll be looking at will be from 1980 until 2080.
        </p>
        <div className="my-10 mx-10">
          <img
            alt=""
            className="sm:h-[35rem] mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688481381/Long%20Addition/Posts/My%20Timeline%20Theory/iPhone_14_Pro_2_d0hrna.png"
          />
        </div>

        <p id="paragraph" className="mb-4">
          Here is that same time period stretched out and divided by decades for
          better visibility.
        </p>
        <div className="my-10 mx-10">
          <img
            alt=""
            className="sm:h-[35rem] mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954931/Long%20Addition/Posts/My%20Timeline%20Theory/Tl_3_xkd9ix.png"
          />
        </div>
        <p id="paragraph" className="mb-4">
          Not to rain on my own parade, but I will die at some point in time. In
          this example, let’s say that I live to a ripe 80 years old. In the
          diagram below, birth (1994 in my case) will be signified by a circle,
          and death (2074 for the example) with a square. Tying those two shapes
          together is a line signifying the years I live in-between those two
          events (my lifespan).
        </p>
        <div className="my-10 mx-10">
          <img
            alt=""
            className="sm:h-[35rem] mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954935/Long%20Addition/Posts/My%20Timeline%20Theory/Tl_4_z0zufi.png"
          />
        </div>
        <p id="paragraph" className="mb-4">
          In this next diagram, I’ve added another individual named Artie. His
          lifespan will be represented with the same shapes and indicators, only
          blue. Garrett, red. Artie, blue. You can see that his lifespan starts
          a bit earlier than mine. In this example, Artie was born in 1980 and
          will die in 2050 (the actual birth and death dates don’t matter for
          this theory but I wanted to outlive Artie).
        </p>
        <div className="my-10 mx-10">
          <img
            alt=""
            className="sm:h-[35rem] mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954933/Long%20Addition/Posts/My%20Timeline%20Theory/Tl_5_fxavnb.png"
          />
        </div>
        <p id="paragraph" className="mb-4">
          Now, let’s pretend Artie and I know each other and are, in fact, the
          best of friends. So much so that we see each other once a year, every
          year to talk about carriage driving, horse insurance, life, love, etc.
          Let’s say we’ve done that since 2022 and will continue to have that
          yearly meeting until one of us dies an untimely equine related death
          (spoiler: it’s Artie).{" "}
        </p>
        <p id="paragraph" className="mb-4">
          Both Artie and I are experiencing our lives only as we know it today.
          I can only speak from the perspective of my own consciousness, but I’m
          pretty sure everyone around me is experiencing the bare basics of the
          human condition fairly closely to how I am at the same time as I am (I
          breathe, sleep, get hungry, etc.).
        </p>
        <p id="paragraph" className="mb-4">
          {" "}
          But, what if, as I can only experience my own consciousness, other
          individuals on the main timeline (beginning of time to the end of
          time) are experiencing their’s lives at a different point in their own
          personal lifespan?
        </p>
        <div className="my-10 mx-10">
          <img
            alt=""
            className="sm:h-[35rem] mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954933/Long%20Addition/Posts/My%20Timeline%20Theory/Tl_6_ezaqvx.png"
          />
        </div>
        <p id="paragraph" className="mb-4">
          {" "}
          Let’s say, in my own personal lifespan, it’s the year 2035 and I’ve
          been meeting with Artie for 13 years now to talk about horses. This
          doesn’t necessarily mean Artie has met with me for 13 years in his own
          lifespan. He could be in the year 2025 in which we’ve only discussed
          fillies and colts annually for three years. It could even be the year
          1995 in his lifespan, meaning we haven’t even met yet, I’m a newborn
          infant, and he’s just barely gotten his first riding lesson.
        </p>
        <div className="my-10 mx-10">
          <img
            alt=""
            className="sm:h-[35rem] mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954933/Long%20Addition/Posts/My%20Timeline%20Theory/Tl_8_vg7faf.png"
          />
        </div>
        <p id="paragraph" className="mb-4">
          I was always going to meet Artie in my lifespan and Artie was always
          going to meet me in his lifespan, so it’s more a matter of where I am
          in my lifespan compared to where he is in his.
        </p>
        <p id="paragraph" className="mb-4">
          Now, I’ve explained this to people and animals a few times and I
          usually get the same couple of questions. I’d like to answer those
          questions below.
        </p>
        <p id="paragraph" className="mb-4 font-bold">
          Q: &quot;But Garrett, I <span className="italic">know</span> I’m in
          the year 2023. I’m literally right in front of you, talking to you
          right now.&quot;
        </p>
        <p id="paragraph" className="mb-4">
          A: I know you’re <span className="italic">saying</span> you’re in
          2023, but I can only experience my own consciousness, and you, yours.
          Therefore, your consciousness could be at a different point in your
          lifespan as I can only verify for a fact that{" "}
          <span className="italic">I</span> am in the current time and day.
        </p>
        <p id="paragraph" className="mb-4 font-bold">
          Q: &quot;So, I could be in the year 3120 right now?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          A: Nope. Just because you may not be in 2023 doesn’t mean you can be
          at <span className="italic">any</span> point in the timeline. You’d be dead long before the year 3120.
          I understand the hyperbole though. It’s statistically much more likely
          you’re somewhere on the timeline between your birth and 100 years from
          your birth.
        </p>
        <p id="paragraph" className="mb-4 font-bold">
          Q: &quot;Is it possible we’re experiencing our lifespans at the exact
          same time?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          A: Even though it’s highly unlikely we’re experiencing it down to the
          second, technically, yes, we could be.
        </p>
        <div className="mb-4 mt-10 mx-10">
          <img
            alt=""
            className="h-48 sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1688954939/Long%20Addition/Posts/My%20Timeline%20Theory/Group_118_gjbbz1.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 3. COMPREHENSION{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          As I wait on funding (I’ve asked for their entire yearly budget and
          fully expect to receive it <span className="italic">or I walk</span>) from The TAMAS
          Institute, I see the international pushback I’ve received as a sign of
          validation. Prime Ministers and Prime Ministresses have reached out
          and asked me to halt all research immediately as I’m &quot;so
          incredibly wrong and dumb&quot; and &quot;tainting the public water
          supply&quot;, but I only see this metaphorical and legal wall as
          motivation to squint a little harder at the stars at night.
        </p>
        <p id="paragraph" className="mb-4">
          Maybe you’re reading this in 2023. Maybe you’re getting your hover
          Heelys repaired and found this article in 2030. It could be 2002 and
          I’ve just learned about Pokemon Sapphire and Ruby through a branded
          bookmark at the school library and this writing doesn’t exist yet.
        </p>
        <p id="final-paragraph" className="mb-20">
          The Wright Brothers were wrong in their preliminary designs. Wall-E
          wasn’t as closed off as his name might have you believe. My point is
          that while you may read this with a healthy dose of skepticism, know
          that I’m right and history will remember me as the man with two eyes,
          two arms, two legs, over 1000 hairs, an &quot;innie&quot;, and a
          theory that is easily disprovable by anyone with an elementary school
          education.
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
      </motion.div>
    </div>
  );
}
