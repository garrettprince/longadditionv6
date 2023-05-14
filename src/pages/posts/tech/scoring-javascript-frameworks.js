/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ScoringJavascriptFrameworks() {
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
    title:
      "Scoring 5 Javascript Frameworks By How Physically Attracted I Am To Them",
    type: "photoRight",
    link: "/posts/tech/scoring-javascript-frameworks",
    titleSize: "text-3xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679806795/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/roseraised2_dx4gcy.png",
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
              05.11.23
            </p>
          </div>
          <div>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              TECH
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
        className=" ml-4 mr-3 text-lg"
      >
        <p id="paragraph" className="mb-4">
          <span className="font-bold">
            Admit it. You’ve Bing’d “Javascript nudes” on at least two
            occasions.{" "}
          </span>
          Once after the kids went to bed and you pounded Chareau out of your
          Snoopy mug and the other on your work computer during the company
          downsizing all hands. Curiosity got the best of you. But the photos
          were… unimpressive. Vanilla, even.{" "}
          <span className="italic">There must be something more</span>, you
          think, trying to fill another mug with Chareau but only getting crumbs
          (I don’t know what Chareau is). There{" "}
          <span className="italic">is</span> something more.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679809855/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/cookiesraised_bryq5z.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. CHAREAU(?){" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Today, I’ll be doing the Lord’s work: Scoring Javascript frameworks
          (and meta-frameworks) on a completely arbitrary number system ranging
          from 0 to 2000. This scale is called{" "}
          <span className="italic">The Sweaty Number</span>. My physical
          attraction to and how I rank these frameworks will be based on four
          key factors: My experience working with it, how the framework name
          sounds, the logo shape, and what I think they would say to me on my
          doorstep after our first date before going in for a wet kiss.
        </p>
        <p id="paragraph" className="mb-4">
          And let’s be honest here: It’s subjective, but the beauty of this
          Bicentennial Man romance is that subjective is good. It’s unsettling
          and provocative. It’s meaningless. It’s time.
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-3xl">
          SvelteKit
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto h-48"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679809856/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/svelteraised_rcwwwx.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 2. TWO ORANGES{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">My Experience</span>: People like
          SvelteKit for the same reason I’ve seen Hitch eight times: It’s
          familiar and Kevin James. The syntax is more similar to vanilla
          Javascript than something like JSX, so in theory, it should be easier
          to learn coming from the fundamentals. I worked with SvelteKit (prior
          to its 1.0 release) when building{" "}
          <Link href="https://www.montanahead.com" className="tech-underline">
            a demo site for a band I&apos;m in
          </Link>{" "}
          and overall it was a pleasant experience. Building the site, that is.
          Not the band. Tons of infighting. Very Fleetwood Mac. Jealousy. Lots
          of weird sex stuff.
        </p>
        <p id="paragraph" className="mb-4">
          It&apos;s just me in the band.
        </p>
        <p id="paragraph" className="mb-4">
          In addition, the built in transitions were nice, &apos;if&apos; blocks
          were a cool way to look at conditional rendering, and while I didn’t
          need to use the universal stores for that project, it seemed way
          easier to use when compared to something like Redux.{" "}
          <span className="font-bold">658 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">How It Sounds:</span> Velvety. Like ice
          cream on a shag carpet. Like I just combed my hair with my cousin’s
          comb. <span className="font-bold">433 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Logo Shape:</span>{" "}
          <Link
            href="https://www.youtube.com/watch?v=nhxDVYaO3eM&ab_channel=LucaConte"
            className="tech-underline"
          >
            Simple And Clean (PlaniTb Remix).
          </Link>
          <span className="font-bold"> 375 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Doorstep Line:</span> &quot;Can you see my
          member through these joggies?&quot;{" "}
          <span className="font-bold">445 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Overall Attraction Score:</span>{" "}
          <span className="font-bold">988 points.</span> Vah vah voom!
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-3xl">
          Astro
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto h-48"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679809855/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/astroraised_vkmd7l.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 3. &quot;A&quot; BLASTING OFF{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">My Experience</span>: Funny enough, I had
          planned to use Astro with its MDX and Tailwind integrations for this
          very website. It’s incredibly alluring knowing you can incorporate
          components from other frameworks. Astro is this gymnast that wants to
          prove how flexible they are, but in reality, I just want quiet
          missionary with the lava lamp off.
        </p>

        <p id="paragraph" className="mb-4">
          I ended up changing my mind pretty early in the build considering a
          few issues I had with the icons integration and made the (good?/bad?)
          decision to forego MDX completely for writing elsewhere (the Apple
          Notes app) and publishing in JSX.{" "}
          <span className="font-bold">342 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">How It Sounds:</span> Warm like hot heat.{" "}
          <span className="font-bold">343 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Logo Shape:</span> Sharp and round in all
          the right places. The type of ‘A’ you’d see on a Minor League Baseball
          jersey.
          <span className="font-bold"> 344 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Doorstep Line:</span> &quot;Watch
          this.&quot; I stand motionless as Astro Grudge-crawls a figure eight
          across the dewy apartment complex lawn.{" "}
          <span className="font-bold">305 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Overall Attraction Score:</span>{" "}
          <span className="font-bold">897 points.</span> I got the ick after the
          first date but will probably hit them up after a few plates(?) of
          Chareau.
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-3xl">
          React
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto h-48"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679809855/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/reactraised_huhqtv.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 4. AN OLD FRIEND{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">My Experience</span>: I may be a bit
          biased here. I, like many others, chose React as the first framework
          to spend time in after working in vanilla Javascript for a few months.
          I knew it was the most popular, had the highest likelihood of job
          opportunities, and the most robust selection of external libraries.
          React, to me, is old reliable.
        </p>

        <p id="paragraph" className="mb-4">
          I can see React smoking a Black and Mild, hunched over the corner of a
          well worn queen mattress at a single story, roadside motel.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;Hey.&quot; I say. &quot;Hey.&quot; They say back. &quot;How’ve
          you been?&quot; They take a long drag and look up at their reflection
          in the Zenith tube tv. &quot;You really want to know? Or should we
          just jump into it?&quot; I keep my stringer on (I had just broken a
          bench press record). &quot;Yeah, I really want to know.&quot; React
          lets out a soft laugh and ashes their cigar on my Crocs. &quot;It’s{" "}
          <Link
            href="https://javascript.plainenglish.io/why-create-react-app-is-outdated-in-2022-b1d9c99e18d0#:~:text=While%20this%20is%20super%20convenient,you%20dislike%20the%20default%20configuration"
            className="border-b-[3px] border-tech cursor-pointer bg-transparent pb-[.1rem]"
          >
            been
          </Link>
          …{" "}
          <Link
            href="https://devclass.com/2022/11/07/interview-react-server-components-still-a-very-unproven-architecture-says-jamstack-advocate-matt-biilmann/"
            className="border-b-[3px] border-tech cursor-pointer bg-transparent pb-[.1rem]"
          >
            Interesting
          </Link>
          .&quot;<span className="font-bold"> 408 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">How It Sounds:</span> Like a knee-jerk
          coping mechanism. Or two beakers making contact. An eye wash station.{" "}
          <span className="font-bold">120 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Logo Shape:</span> Unimpressive. That is,
          until I found out there was an outline of a bolt as a reference to
          bolt.js in the center of the logo. Sneaky and cool, React. Sneaky and
          cool.
          <span className="font-bold"> 450 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Doorstep Line:</span> &quot;I think we
          both know where this is going.&quot;{" "}
          <span className="font-bold">367 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Overall Attraction Score:</span>{" "}
          <span className="font-bold">910 points.</span> There is comfort in the
          known.
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-3xl">
          Vue
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto h-48"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679809856/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/vueraised_qmvryo.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 5. COMPLIMENTARY COLORS{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">My Experience</span>: It’s limited, but I
          didn’t mind the brief time I shared with Vue. It was my introduction
          to the template/script/style split in a single file, which made way
          more sense to my brain. And this was about the time I started
          experimenting with Tailwind, so the two of those together felt
          incredibly natural. I’m aware that I was working in a Vue 2 project,
          which handles data significantly differently than Vue 3, but even
          still, it felt a bit boring. There was nothing inherently wrong with
          Vue, just no spark. <span className="font-bold"> 401 points.</span>
        </p>

        <p id="paragraph" className="mb-4">
          <span className="font-bold">How It Sounds:</span> Respectfully
          invasive. Futuristic. But the kind of futuristic where everyone moved
          underground and our eyes shriveled up into raisins because we didn’t
          use them. <span className="font-bold">320 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Logo Shape:</span> High cheekbones and a
          green that will make you call your parents for unrelated reasons.
          <span className="font-bold"> 207 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Doorstep Line:</span> &quot;I had a great
          time tonight.&quot; Vue says, already walking away. &quot;Bowling was
          a blast.&quot; Almost out of earshot at this point. &quot;We should do
          this again sometime.&quot;{" "}
          <span className="font-bold">128 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Overall Attraction Score:</span>{" "}
          <span className="font-bold">815 points.</span> Side hug.
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-3xl">
          Next
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto h-48"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679809856/Long%20Addition/Posts/Scoring%205%20Javascript%20Frameworks%20By%20How%20Attracted%20I%20Am%20To%20Them/nextraised_uceygp.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 6. MORE THAN FRIENDS{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">My Experience</span>: Next is, simply put,
          my favorite framework (again, meta-framework if we’re being picky) to
          work with. It is my go to for starting any new project. It’s a
          performant and expandable React. It’s incredibly well maintained and
          while I’m dragging my feet a bit on upgrading to Next 13, I have
          complete faith in the direction its headed.{" "}
          <span className="font-bold"> 521 points.</span>
        </p>

        <p id="paragraph" className="mb-4">
          <span className="font-bold">How It Sounds:</span> Playfully deceiving.
          There is no &quot;next&quot;. There is only &quot;here and now&quot;
          when using Next. <span className="font-bold">345 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Logo Shape:</span> My single complaint.
          Derivative of the Latin letter &quot;N&quot;.
          <span className="font-bold"> 213 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Doorstep Line:</span> &quot;Let’s head
          inside and talk about Cap’n Crunch’s Crunchling Adventure over a
          piece(?) of Chareau.&quot;{" "}
          <span className="italic">
            Context: I like talking about Cap’n Crunch’s Crunchling Adventure.
          </span>{" "}
          <span className="font-bold">455 points.</span>
        </p>
        <p id="paragraph" className="mb-4">
          <span className="font-bold">Overall Attraction Score:</span>{" "}
          <span className="font-bold">1043 points.</span> I still get
          butterflies typing create-next-app.
        </p>
        <p id="sectionchange" className="mb-4 mt-12 font-bold text-3xl">
          Conclusion
        </p>
        <p id="paragraph" className="mb-4">
          Every framework has their strengths. Literally, each framework can
          lift a metric ton. That being said, there can only be one ranked
          &quot;Most Moist&quot; according to{" "}
          <span className="italic">The Sweaty Number</span>. After careful
          consideration and with all deductions added, the winner is:
        </p>
        <p id="paragraph" className="mb-4">
          Holy shit, it’s a tie! That’s not what I was expecting at all.
          Seriously, go back and add all of those numbers together if you don’t
          believe me. Absolutely bonkers. That’s never happened before. I’ll
          need to rework the scoring system for this scale I’ll never use again.
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-tech"
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
