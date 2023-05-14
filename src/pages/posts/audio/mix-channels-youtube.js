/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function MixChannelsYoutube() {
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
    title: "The Divine Comfort Of Mix Channels",
    type: "photoRight",
    link: "/posts/template",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680657574/Long%20Addition/Posts/Mix%20Channels%20on%20Youtube/thumbnail_skwygo.png",
    marginBottom: "",
    premium: false,
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
              AUDIO
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
            I spent a large portion of 2022 coding.
          </span>{" "}
          Seeing as I’m self taught, it required a certain amount of discipline
          (which I did not have in the beginning and barely have now) as a lot
          of the core concepts of web development sink in with repetition and
          real world examples. All of this to say, for better or for worse, I
          spent a lot of time on YouTube researching answers to my coding
          questions. Inevitably, &quot;the algorithm&quot;, a recommendations
          engine based on your view history (and several other factors), would
          suggest something new for me to watch on the sidebar. And then
          another. And another.
        </p>
        <p id="paragraph" className="mb-4">
          My swan dive into the recommendation rabbit hole starts with a search
          on out how to create a custom hook in React and ends an hour later
          with me reading five year old comments on{" "}
          <Link
            href="https://www.youtube.com/watch?v=-WYYlRArn3g&ab_channel=MusicEntertainment"
            className="audio-underline"
          >
            Prince’s 2007 Super Bowl Halftime Show.
          </Link>{" "}
          An hour after that, I’m chest deep in{" "}
          <Link
            href="https://www.youtube.com/watch?v=dj7gEkVjZvU&ab_channel=TheTheorizer"
            className="audio-underline"
          >
            Shrek-iverse conspiracy theories.
          </Link>{" "}
          The algorithm giveth and the algorithm taketh away.
        </p>
        <p id="paragraph" className="mb-4">
          Now, I want to be clear about the algorithmic recommendations: I
          mostly dislike them. They are deliberately engineered to rip your
          attention away from the task at hand and more often than not, aren’t
          even relevant to the current content. That being said, once in a blue
          moon, it strikes gold.
        </p>
        <p id="paragraph" className="mb-4">
          One night, as I began work on a new project, I was recommended the
          eerily titled &quot;C Y B E R D R E A M&quot; to be played next.
          Someone had photoshopped Bart Simpson as the T-1000(?) for the
          thumbnail and I’m a rube so I clicked it.
        </p>
        <p id="paragraph" className="mb-4">
          Plucky synth pads welcomed me with open arms. The pulsing bass line
          felt like a mall massage chair delivering just the right amount of
          pressure to my back meat. It didn’t take long for me to slide into
          Cyber’s world. It was smooth and perfectly curated. It felt like my
          ears had put on a robe. Cyber Dream delivered an hour long mix of
          synth wave that felt complimentary to what I was doing, never
          contradictory.
        </p>
        <p id="paragraph" className="mb-4">
          I went back to the project I was working on and kept Cyber Dream on in
          the background. An hour later, I played it back. An hour after that, I
          looked for the repeat button. The mix was so unobtrusive and I needed
          that while I studied, coded and put the concepts I was learning into
          practice. It was comforting, but I knew I couldn’t listen to that same
          mix forever, so I went looking for more.
        </p>
        <p id="paragraph" className="mb-4">
          There were days when I needed something more tame. Something with a
          laidback feel. Less &quot;the year 2085&quot; and more &quot;camomile
          tea&quot;. I found a few mixes for that. My siblings and I have a few
          mixes we let play in the background when gaming online. There are even
          some I listen to when completing mind-numbingly boring clerical work.
        </p>
        <p id="paragraph" className="mb-4">
          I know a good portion of people that would look at these and think:
          &quot;Why not just play something on Spotify? Why YouTube?&quot;
          There’s just something about the algorithm that has queued up some
          really winners for me, and that’s why I keep coming back. I’m also a
          sucker for spending a few minutes in the comment section on most
          visits to these mixes. I have an unhealthy fascination with people
          pouring their hearts out under an early 2000’s rap rock performance.
        </p>
        <p id="paragraph" className="mb-4">
          As a gift to you, here are a few of my favorites for all types of
          moods:
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-2xl">
          A more relaxed study mix
        </p>
        <Link
          href="https://www.youtube.com/watch?v=3jWRrafhO7M&t=6990s&ab_channel=CafeMusicBGMchannel"
          className="audio-underline"
        >
          Studio Ghibli Cafe Bosa Nova Mix
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=9Q3_fB1LqV0&t=5372s&ab_channel=JohnOethGuitar"
          className="audio-underline"
        >
          Final Fantasy Classical Guitar Collection
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=xZtVCGtLU9g&t=6290s&ab_channel=Falkenhayn"
          className="audio-underline"
        >
          3 hours of relaxed Donkey Kong music
        </Link>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-2xl">
          A more synth-y mix
        </p>
        <Link
          href="https://www.youtube.com/watch?v=yhCuCqJbOVE&t=5857s&ab_channel=SmoothSounds"
          className="audio-underline"
        >
          Cyber Dream (of course)
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=INSsZk-5Pco&t=3767s&ab_channel=SmoothSounds"
          className="audio-underline"
        >
          Cyber Dream 2 (the sequel)
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=Hc_SEDzN23o&ab_channel=SoulSearchAndDestroy"
          className="audio-underline"
        >
          Voyage 5
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=Nx3lzO7c3Ac&ab_channel=SoulSearchAndDestroy"
          className="audio-underline"
        >
          The Final Frontier
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=Du501yIktJY&ab_channel=SoulSearchAndDestroy"
          className="audio-underline"
        >
          Simulations 3
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=OvYeYtujzjQ&ab_channel=SoulSearchAndDestroy"
          className="audio-underline"
        >
          Smolder
        </Link>
        <br />
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-2xl">
          Something with a little more bounce
        </p>
        <Link
          href="https://www.youtube.com/watch?v=W5opbWtFMuM&ab_channel=SmoothSounds"
          className="audio-underline"
        >
          Trappin In Paradise 85
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=O2wTaUtmqXw&ab_channel=MelonGroove"
          className="audio-underline"
        >
          Japanese City Pop Mixtape Vol. 11
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=YC7Nsv9Tc8M&ab_channel=SoulSearchAndDestroy"
          className="audio-underline"
        >
          Fun Tonight
        </Link>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-2xl">
          When I&apos;m feeling weird and I want to sit in that feeling for a
          bit
        </p>
        <Link
          href="https://www.youtube.com/watch?v=EKdHeNVzHcE&t=11s&ab_channel=Tanju"
          className="audio-underline"
        >
          Midwest Emo Mix
        </Link>
        <br />
        <Link
          href="https://www.youtube.com/watch?v=CKAc3nYEatw&ab_channel=scrapper9000"
          className="audio-underline mb-4"
        >
          Aquatic Ambience 10 Hours
        </Link>
        <br />

        <p id="paragraph" className="mt-8">
          And while they’re not technically the type of mix I’m referring to (a
          collection of unedited songs strung together into a single video), any{" "}
          <span className="italic">What’s Happening</span> mix by{" "}
          <Link
            href="https://www.youtube.com/@KEIFERGR33N/videos"
            className="audio-underline"
          >
            Keiffer Gr33n
          </Link>{" "}
          is outstanding.
        </p>
        <p id="paragraph" className="mb-4 mt-4">
          For those studying, learning, working, etc. in silence: I commend you.
          You have reached singularity and will soon transcend this mortal
          plane. For the rest of us, find something you can put on in the
          background and finally finish making that video essay breaking down
          the inner workings of Shrek Forever After. Lord knows we need it now
          more than ever.
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-audio"
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
