/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useReward } from "react-rewards";

export default function FishbowlEffect() {
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
    title: "The Fishbowl Effect",
    type: "photoRight",
    link: "/posts/the-fishbowl-effect",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679812065/Long%20Addition/Posts/Losing%20Money%20In%20Australia/collageraised_w9snh3.png",
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
              TRAVEL
            </p>
            <p className="text-sm bg-transparent text-inactive font-mono text-right">
              20 MIN
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
        <p id="first-paragraph" className="mb-4">
          <span className="font-bold">
            &quot;I’ll tip you as much as this app will let me if you can get me
            to the marina before 8am.&quot;
          </span>{" "}
          I planted my hands firmly on the rolled down window as my Uber driver
          scanned what was visible of me.
        </p>
        <p id="paragraph" className="mb-4">
          He glanced at the dash. <span className="italic">7:36.</span> The
          doors unlocked and he motioned me in. I catapulted my day pack into
          the seat next to me and greeted his Camry’s cloth seats with that
          morning’s back sweat deposit. I’d only been awake a few minutes but
          with the tropical humidity and my stress levels reaching heights
          previously unknown to the stress level measuring community, I looked
          as though I had ran a marathon moments earlier. Or, attempted to, at
          least, before faking a hamstring injury at mile 18.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;You know, there’s traffic headed into the city.{" "}
          <span className="italic">Everyone</span> is headed into the city. I’m
          not going to say we can’t, but-&quot; he sighed and adjusted his
          mirror to see the desperation in my eyes. &quot;I’ll see what I can
          do.&quot; He flipped a U-turn and made his way back to the main road.
          Both him and I knew the commute from Palm Cove to Cairns on a Friday
          morning wasn’t without it’s metaphorical, and literal, speed bumps.
        </p>
        <p id="paragraph" className="mb-4">
          <span className="italic">7:38.</span> I glanced down at the app to see
          the estimated arrival. <span className="italic">8:07</span>.
          <span className="italic"> Shit</span>.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;Can’t be late for work again?&quot; The driver questioned,
          trying to make conversation as we weaved in and out of traffic on the
          two lane highway. I ignored the factually correct implication that I
          manage my time poorly, even while traveling. &quot;Scuba diving,
          actually.&quot; I responded. &quot;The boat leaves at 8.&quot; We made
          eye contact in the rearview mirror again. This time, shooting me a
          look of disbelief, translating to:{" "}
          <span className="italic">I’m speeding so you can look at fish?</span>
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-48 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679811612/Long%20Addition/Posts/Losing%20Money%20In%20Australia/rearviewraised_yaeulx.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. DISBELIEF{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          The inertia of each roundabout pushed the limited contents of my
          stomach to its walls. <span className="italic">7:52</span>. In
          hindsight, it would have made more sense to schedule the Uber the day
          previous, considering there were so few Uber drivers in Palm Cove that
          I ended up being a few drivers’ repeat American customer. In
          hindsight, five minutes of Googling before booking my stay in
          Queensland, I would have learned that Palm Cove was not, in fact,
          &quot;a short drive to Cairns&quot;.
        </p>
        <p
          id="pullquote"
          className="mb-11 mt-10 text-3xl font-bold text-center mr-5"
        >
          &quot;<span className="italic">Everyone</span> is headed into the
          city.&quot;
        </p>
        <p id="paragraph" className="mb-4">
          &quot;Have you been to The Great Barrier Reef?&quot; I asked, deciding
          to volley back some small talk to drown out the car horns. He kept his
          eyes on the road this time. &quot;Uh, yeah.&quot; He signaled to get
          over a lane. &quot;It was… great.&quot;{" "}
          <span className="italic">7:56.</span> Maybe silence wasn&apos;t so
          bad.
        </p>
        <p id="paragraph" className="mb-4">
          I pulled out my phone again. 8:04 arrival.{" "}
          <span className="italic">
            Okay, we’re making up time. Could be worse.
          </span>
        </p>
        <p id="paragraph" className="mb-4">
          I stayed up the previous night nursing some light nausea and a
          headache, making the Formula 1 tryout that was my Uber ride to the
          marina all the more punishing. My first day in Cairns hadn’t exactly
          been smooth sailing, but I was determined to get some sun as a direct
          response to the previous two weeks of downpour in Sydney. Somehow I’d
          managed to book my trip to Australia during one of the country’s
          rainiest springs. Tragedy plus timing, as they say.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679811613/Long%20Addition/Posts/Losing%20Money%20In%20Australia/boatraised_txhfjl.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 2. BOAT (FOR DIVING){" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          We pulled into the city and raced to the drop-off point, making sure
          to avoid the swarths of hungover backpackers showing up to their
          temporary shift work. Cairns had this buzz about it that I really took
          to. There were families and tourists, but the city seemed to attract a
          specific type of backpacker that I’d been more inclined to connect
          with than those in Sydney.
        </p>
        <p id="paragraph" className="mb-4">
          The Camry screeched to a halt inches from the marina’s curb.{" "}
          <span className="italic">8:02.</span> My departure from his backseat
          set the land speed record for the quickest to unstick a back and
          fastest to sling a Herschel over their shoulder, all while narrowly
          avoiding the backpack induced decapitation of a Romanian family making
          their way to the pier behind me. &quot;Thank you so much! I really
          cannot express-&quot; I started. The driver cut me off. &quot;Go! What
          are you waiting for!?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          Back in the humidity, and with the five dollar sandals I purchased in
          Dee Why, I clopped my way to the boat I’d signed on to scuba with. A
          lady with a checklist stood near the stairs to board, verifying the
          passengers as they climbed in. I stopped just short of her, gasping
          for breath.
        </p>
        <p id="paragraph" className="mb-4">
          &quot;Name?&quot; She smiled. <span className="italic">8:05</span>.
          &quot;Prince. Garrett.&quot; I heaved in response. &quot;Garrett
          Prince. Can I still board?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          She studied her clipboard. &quot;Prince, Prince, Prince… Oh! Got you
          right here.&quot; She marked my name off on the attendance sheet and
          laughed. &quot;Yeah, I don’t see why you couldn’t.&quot; She looked up
          from her papers. &quot;We don’t leave until 8:30.&quot;
        </p>
        <div className="pt-8 pb-12 flex mx-auto justify-center">
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
        </div>
        <p id="paragraph" className="mb-4">
          A month earlier, I sat inches from my monitor rereading my latest
          application rejection email. &quot;The team loved you, but due to
          economic circumstances…&quot;. I knew how it went. I’d been broken up
          with before. Luckily, this time around, I didn’t have to convince the
          HR rep to let me keep the cat.
        </p>
        <p id="paragraph" className="mb-4">
          By that point in September, I’d spent the better part of 2022 coding
          each night. After staring at a computer, working my remote sales
          training position for most of the day, I’d then stare at a computer
          and work on software engineering and music projects until my body
          called it quits for the night. Some nights, I’d end early and walk to
          the Basha’s across the street with my roommate and best friend Tanner.
          We’d cheers a Topo Chico and talk about doing something big with our
          lives. Some days I’d work until I was so exhausted it looked as though
          I’d been haunting the abandoned house at the end of the lane that the
          neighbor kids dare each other to go inside when there’s a full moon
          and some get scared but others inevitably find strength in numbers and
          form a life long bond. Most nights, I was just tired.
        </p>
        <p id="paragraph" className="mb-4">
          In all of these late nights, and in all of this uncertainty, it got me
          thinking.
        </p>
        <p id="paragraph" className="mb-4">
          When I was a freshman in high school, a friend of a friend informed me
          of another friend that had smoked weed for the first time. Hearing the
          news, I responded with &quot;Oh. Wow. I hope she’s okay.&quot; My 14
          year old Mormon version of the sign of the cross. My friend told me
          about how the classmate had gotten so high she had thought she was in
          a fishbowl. She banged on the walls, but to no avail. They were so
          thick no one could hear.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679811612/Long%20Addition/Posts/Losing%20Money%20In%20Australia/fishbowlraised_xjbvni.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 3. STANDARD FISH BOWL{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Now, I’m well aware of the stories we tell each other around that age.
          I once told a girl I couldn’t date her because I was in a long
          distance letter writing relationship. I also once had a zit so large
          and so deep on my cheek, I told my friends I had fallen and my knee
          hit it at just the right angle but it could also be hereditary
          &quot;so I may have to get my blood checked to see.&quot; Whether my
          classmate had been stretching the truth or not when relaying her
          experiences to my friend, that image stuck with me: Banging on the
          sides of a fishbowl. Trying to escape.
        </p>
        <p id="paragraph" className="mb-4">
          I often describe pivotal moments of my life using that visual:{" "}
          <span className="italic">The Fishbowl Effect</span>, if you will.
          Applying for colleges and feeling like I had to get out of my hometown
          in Oregon: Stuck in the fishbowl. Leaving for the University of
          Hawaii: Getting out of the fishbowl. Developing feelings for someone
          who’s engaged to be married: Fishbowl. Starting a new career, moving,
          and getting over them: Out.
        </p>
        <p id="paragraph" className="mb-4">
          Engineering nightly, keeping too much to myself, feeling like I wasn’t
          creating things that I actually enjoyed making: There I was, banging
          on the glass again.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679811612/Long%20Addition/Posts/Losing%20Money%20In%20Australia/backturnedraised_x7bysv.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 4. MY PERSONAL FISH BOWL{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          I’d been toying around with the idea of traveling abroad for a few
          years, but there was always a reason why I didn’t. Of course, the
          pandemic threw a wrench into some tentative plans, but my hesitations
          came years before that. It was always the &quot;wrong&quot; time. The
          &quot;wrong&quot; place. There was always something else more
          important. Something that needed my attention right then and there.
          Things I thought were important, but in reality, played such a small
          part in my life.
        </p>
        <p
          id="pullquote"
          className="mb-11 mt-10 text-3xl font-bold text-center mr-5"
        >
          The action we take is the way out.
        </p>
        <p id="paragraph" className="mb-4">
          So, I made up my mind. In all honesty, on a whim. Australia. For a
          month. I had a place to stay, Tanner would watch my cat, and by
          combining all of my airline points I’d be able to get there by paying
          only a few hundred out of pocket. Yes, there are infinitely more
          efficient and cost effective ways to travel (which I’ll touch on at a
          later date), but I wasn’t worried about that.
        </p>
        <p id="paragraph" className="mb-4">
          It seemed that, with age, the fishbowl kept getting a bit thicker, so
          I needed something stronger. It sounds incredibly simple, but that’s
          because it is: The action we take is the way out.
        </p>
        <p id="paragraph" className="mb-4">
          On paper, this was a logistically awful idea. It was last minute,
          expensive, with no itinerary, during the end of Sydney’s rainy season.
          On paper, this trip shouldn’t have changed how I thought about what I
          would do and the type of person I wanted to be when I got back.
        </p>
        <p id="paragraph" className="mb-4">
          It shouldn’t have, but it did.
        </p>
        <div className="pt-8 pb-12 flex mx-auto justify-center">
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-inactive mx-1"></div>
        </div>
        <p id="paragraph" className="mb-4">
          Once on board the vessel that would take our group to the outermost
          reef, I eagerly scanned the groups of tourists, searching for a German
          man named Philip I had befriended a day earlier. Excitement permeated
          throughout the main cabin as I grabbed the mandatory legal disclosures
          and found my chair beside Philip near the center of the seating area.
          There was an air of confidence from the certified and experienced
          divers, nervous chatter from the first timers, and an overall calm
          amongst the crew as they set out explaining the ins and outs of The
          Great Barrier Reef. As I fell into the &quot;first timers&quot;
          bucket, I listened attentively to the warnings of &quot;If you touch
          this specific hermit crab and it stabs you, you’ll have four minutes
          to live&quot; and &quot;you may have to fend off this type of
          fish&quot;. The warnings were wrapped nicely in a &quot;have fun and
          be safe!&quot; as we side-eyed each other amidst a chorus of hesitant
          laughter.
        </p>
        <p
          id="pullquote"
          className="mb-11 mt-10 text-3xl font-bold text-center mr-5"
        >
          &quot;Can you see the terror through my dive mask?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          &quot;Are you nervous?&quot; Philip questioned. I grinned back at him.
          &quot;I wasn’t until now.&quot; My mind swam with visions of slicked
          back antenna hermit crabs with poison switchblades, snapping in unison
          on the ocean floor. I’d been so hyper fixated with stepping foot onto
          the charter boat that I hadn’t really put much thought into all the
          uniquely aquatic ways I could die that morning.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679811616/Long%20Addition/Posts/Losing%20Money%20In%20Australia/crabraised_yian4x.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 5. DEATH BY CRAB{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Philip, myself, and a recent uni grad from the Netherlands suited up
          for our guided dive with Jose, our certified pro. Within a few
          minutes, we were in the surprisingly temperate water, excitedly
          practicing the basic hand signs for &quot;yes&quot;, &quot;no&quot;,
          and &quot;can you see the terror through my dive mask?&quot;. The last
          sign can be achieved by opening up your eyes as wide as you can,
          tensing your body from head to toe, and cramping up most, if not all,
          of your fingers, resulting in two arthritic shadow puppet shapes.
        </p>
        <p id="paragraph" className="mb-4">
          I delivery-room gripped Jose’s left bicep as we sank deeper to inspect
          the world famous reefs. Once the nerves had warn off a bit and I
          started breathing regularly like a human again, my focus redirected
          itself from basic biological survival to a quiet curiosity.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679811614/Long%20Addition/Posts/Losing%20Money%20In%20Australia/fishraised_mpv59t.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 6. SERENITY{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          The rays of light penetrating the surface colored the millennia-old
          coral and acted as a natural highlight, guiding my eye-line to the
          schools of fish, hurriedly jetting from one direction to the next. Sea
          anemone danced effortlessly along the current. Our group floated among
          the sub-aquatic scenery, simply observing.
        </p>
        <p id="final-paragraph" className="mb-4">
          Among the other divers and the thousands of eye catching fish swimming
          in absolute freedom, there was one thing I didn’t see: A glass fish
          bowl.
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-travel"
          ></button>
        </p>
        <div className="flex my-20 justify-center space-x-2 mr-5">
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
