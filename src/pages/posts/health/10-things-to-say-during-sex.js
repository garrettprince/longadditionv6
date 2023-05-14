/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ThingsToSayDuringSex() {
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
    title: "Not Vocal Enough? Here Are My Top 10 Things To Say During Sex",
    type: "photoRight",
    link: "/posts/health/10-things-to-say-during-sex",
    titleSize: "text-3xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1679861498/Long%20Addition/Posts/Not%20Vocal%20Enough/thumbnailraised_v9a4rc.png",
    marginBottom: "mb-20",
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
              HEALTH
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
            Has your partner asked you to be more vocal during slippery season?
          </span>{" "}
          Can you only think of one or two things to say and they’re both the
          same thing and it’s &quot;oh yeah&quot;? Have you tried out something
          new and it didn’t roll off the tongue like you’d hoped?
        </p>
        <p id="paragraph" className="mb-4">
          If you answered yes or no to any of the above, read on. I’ve got your
          back. As someone who’s picked from the Garden of Glands (humpy bumpy)
          at least once before, I’ve found the more vocal you are now, the less
          grief counseling you’ll need in a decade.
        </p>
        <p id="paragraph" className="mb-4">
          Sex is like tetherball for adults. You should be doing equations in
          your head at all times about the trajectory and velocity of a firm
          ball tied to a string. Often missing from those equations is the
          auditory output variables. Scientifically speaking: One big goose honk
          ain’t going to cut it.
        </p>

        <p id="paragraph" className="mb-4">
          So, here are my top 10 things to say during the big back scratch:
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          10. &quot;Now how about that?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          Great opener <span className="italic">and</span> closer. It may lack
          some creativity but Rome wasn’t built in 30 seconds.
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          9. &quot;What do you mean I have witch fingers?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          This one is more of a response, but it’s happened enough times that
          I’m legally obligated to include it.
        </p>
        <p>
          My lawyers also informed me that if I lie about how long my toes are
          again (three cubic Newtons), I get the chair.
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          8. &quot;I&apos;m not normally this sweaty.&quot;
        </p>
        <p id="paragraph" className="mb-4">
          You are, and that’s okay. In reality, it shows your partner
          you&apos;re working hard. Or, you have a pituitary issue.
        </p>
        <p id="paragraph" className="mb-4">
          Which do you prefer? The sound of{" "}
          <Link
            href="https://youtu.be/blmiTe8wzAM"
            className="health-underline"
          >
            a cartoon slide
          </Link>{" "}
          or{" "}
          <Link
            href="https://youtu.be/dUol19S7EaY"
            className="health-underline"
          >
            a cartoon piano crash
          </Link>
          ? The answer lies in how stained your gray tee shirts are.
        </p>
        <p>
          I’ve seen enough Gatorade commercials to know I’m not the only one
          with orange cascading down my frown lines on a frequent basis.
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          7. &quot;A toast: Never lie, steal, cheat, or drink. But if you must
          lie, lie in the arms of the one you love. If you must steal, steal
          away from bad company. If you must cheat, cheat death. And if you must
          drink, drink in the moments that take your breath away.&quot;
        </p>
        <p id="paragraph" className="mb-4">
          This is a quote from Will Smith’s character Alex Hitchens in the
          critically acclaimed romantic comedy Hitch. I’ve never been able to
          get through the whole toast, but I imagine it would go over really
          well.
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          6. &quot;How’s the scrote?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          <span className="italic">The</span> wildcard question with a
          cornucopia of possible responses.
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          5. &quot;Oh shit.&quot;
        </p>
        <p id="paragraph" className="mb-4">
          An exclamation. A warning. An exchange of emotion. The often too
          common catalyst for staring at the ceiling fan mere moments later,
          scrambling for a new way to say “How was that for you?”
        </p>
        <p id="paragraph" className="mb-4">
          While on the surface, similar to “oh yeah”, “oh shit” demands a
          gravity that is unmatched in intimate, two word communication. Pure
          poetry.
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          4. &quot;Have I ever told you about my (insert theory here)
          theory?&quot;
        </p>
        <p id="paragraph" className="mb-4">
          When your partner inevitably says &quot;Yes, you talk about it all the
          time.&quot; respond defensively with &quot;Okay, explain it to me
          then.&quot; Correct them immediately when any minute detail is off. If
          you don’t have a well constructed theory on hand, feel free to use{" "}
          <Link href="/" className="">
            one of mine.
          </Link>
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          3. &quot;Dipsy doo, dunkaroo!&quot;
        </p>
        <p id="paragraph" className="mb-4">
          March Madness, anyone? Show that special somebody in your life you’re
          thinking of a 70 year old man during your holy union.
        </p>
        <p>
          There’s nothing more comforting than the thought of punching your
          ticket to The Big Dance while simultaneously showing your partner you
          physically don’t know how to dance.
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          2. &quot;Boom, baby!&quot;
        </p>
        <p id="paragraph" className="mb-4">
          Risky, but Pacha didn’t risk leaving his hut on the hill to confront
          Cuzco for nothing. Bonus points if you can master both the John
          Goodman <span className="italic">and</span> David Spade versions.
        </p>
        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          1. &quot;G-g-g-ghooooooost!!!&quot;
        </p>
        <p id="paragraph" className="mb-4">
          My go-to. I’ve lost count of the number of ghouls and specters I’ve
          seen hovering in the dimly lit doorway of the bathroom near the bed.
        </p>
        <p>
          If it weren’t for my darkest-corner-of-the-room, always-running
          Panasonic camcorders pointed every direction but my Casper branded
          Twinplet (twice the size of Twin, about eleven feet, long ways, so we
          can sleep head-toe head-toe) mattress, these paranormal sightings may
          have gone undocumented.
        </p>

        <p id="sectionchange" className="mb-3 mt-12 font-bold text-2xl">
          Conclusion
        </p>
        <p id="paragraph" className="mb-4">
          Change can be hard, but rewarding. If you’ve been as quiet as church
          mouse, try speaking from the chest pouch (your diaphragm). If you’ve
          been mute as the moon, try speaking from the chest balloon (also using
          the diaphragm).
        </p>

        <p id="final-paragraph" className="mb-4">
          If you happen to use any of these, let me know how it goes. If you
          happen to use all ten in a single outing, send me an email titled
          &quot;My Name Is (your name there) And I Did The Thing&quot;. I’ll
          send you a complimentary* &quot;I said all 10 things from a dumb thing
          Garrett wrote and I’ll I got was this tee shirt and now I’m
          lonely.&quot; tee shirt.
          <button
            disabled
            className="ml-2 h-3 w-3 rounded-full bg-health"
          ></button>
        </p>

        <p className="mb-20 text-sm">
          *It’s not complimentary and you’ll be invoiced for parts, labor, and
          my inflated cost of living.
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
