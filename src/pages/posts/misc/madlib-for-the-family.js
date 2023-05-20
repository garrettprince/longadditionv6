/* eslint-disable @next/next/no-img-element */
import Thumbnail from "/src/components/Thumbnail";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Field, Form, Formik } from "formik";

export default function MadlibForTheFamily() {
  const [copied, setCopied] = useState(false);
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "confetti");
  const [showStory, setShowStory] = useState(false);
  const [formValues, setFormValues] = useState("");

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
    title: "I Made A Mad Lib For The Whole Family",
    type: "photoLeft",
    link: "/posts/misc/madlib-for-the-family",
    titleSize: "text-4xl",
    date: "",
    category: "",
    duration: "",
    series: false,
    seriesTitle: "",
    photo:
      "https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680049461/Long%20Addition/Posts/I%20Made%20A%20Madlib/thumbnailraised_j068qn.png",
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
              05.20.23
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
          <span className="font-bold">It’s the summer of 2006.</span> I’m lying
          belly down on my friend Mitchell’s bedroom carpet. Twelve and
          cellphone-less, we spent most afternoons long boarding, watching Rob &
          Big and drinking Arizona Iced Teas from Bob’s Family Market, but that
          day we stumbled on a relic of the times: a Mad Libs book that had seen
          nary a scribble. Untouched and untainted by our pre-teen minds, we
          couldn’t think of a better use for our time.
        </p>
        <p id="paragraph" className="mb-4">
          For the uninitiated,{" "}
          <Link href="https://www.madlibs.com/" className="misc-underline">
            Mad Libs
          </Link>{" "}
          are small, silly stories with some key descriptors (adjectives, verbs,
          nouns) removed. You, as both the reader and writer, are responsible
          for filling in the missing words to complete the story.
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680204851/Long%20Addition/Posts/I%20Made%20A%20Madlib/madlib_nmbfk3.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 1. FUN WITH FRIENDS{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          For example: A typical Mad Lib may ask you for an adjective and you
          may write in &quot;handsome&quot;. The result would look something
          like this:
        </p>

        <p id="paragraph" className="mb-4">
          &quot;The <span className="italic">handsome</span> dog ran after the
          mailman.&quot; It’s funny because normally, you’d expect something
          like &quot;shaggy&quot; or &quot;Maltese&quot; to describe the dog,
          but instead you called the dog handsome!
        </p>
        <div className="mb-4 mt-10 ml-10 mr-14">
          <img
            alt=""
            className="sm:h-64 h-56 mx-auto"
            src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680205508/Long%20Addition/Posts/I%20Made%20A%20Madlib/handsomedog_zffsm2.png"
          />
          <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
            FIG 2. HUBBA HUBBA{" "}
          </p>
        </div>
        <p id="paragraph" className="mb-4">
          Mitchell and I spent hours filling in that book of Mad Libs, laughing
          with every unlikely adjective and outlandish noun. It’s these memories
          that made me want to craft my own, so you, reader, can share that same
          feeling we did.
        </p>
        <p id="paragraph" className="mb-4">
          Take a moment and fill in the descriptors below. Hit submit when
          you’re done (make sure to fill out every field) and share with your
          friends!
        </p>

        {!showStory && (
          <Formik
            initialValues={{
              adj1: "",
              verb1: "",
              noun1: "",
              pnoun1: "",
              verb2: "",
              exclaim: "",
              adj2: "",
              noun2: "",
              country: "",
            }}
            onSubmit={async (values) => {
              setFormValues(values);
              setShowStory(true);
            }}
          >
            {({ values, errors, touched, dirty, setFieldValue }) => (
              <Form className=" p-3 space-y-3 rounded-xl mr-4 mt-10 sm:w-96 text-white sm:mx-auto mb-24">
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive">
                    ADJECTIVE
                  </p>
                  <Field
                    type="text"
                    name="adj1"
                    className="pl-2 ml-3 w-full rounded-lg border border-white/20"
                  />
                </div>
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive">
                    VERB
                  </p>
                  <Field
                    type="text"
                    name="verb1"
                    className="pl-2 ml-3 w-full rounded-lg border border-white/20"
                  />
                </div>
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive">
                    NOUN
                  </p>
                  <Field
                    type="text"
                    name="noun1"
                    className="pl-2 ml-3 w-full rounded-lg border border-white/20"
                  />
                </div>
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive">
                    PROPER NOUN
                  </p>
                  <Field
                    type="text"
                    name="pnoun1"
                    className="pl-2 ml-3 w-full rounded-lg border border-white/20"
                  />
                </div>
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive">
                    VERB
                  </p>
                  <Field
                    type="text"
                    name="verb2"
                    className="pl-2 ml-3 w-full rounded-lg border border-white/20"
                  />
                </div>
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive">
                    EXCLAMATION
                  </p>
                  <Field
                    type="text"
                    name="exclaim"
                    className="pl-2 ml-3 w-full rounded-lg border border-white/20"
                  />
                </div>
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive">
                    ADJECTIVE
                  </p>
                  <Field
                    type="text"
                    name="adj2"
                    className="pl-2 ml-3 w-full rounded-lg border border-white/20"
                  />
                </div>
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive">
                    NOUN
                  </p>
                  <Field
                    type="text"
                    name="noun2"
                    className=" pl-2 ml-5 w-full rounded-lg border border-white/20"
                  />
                </div>
                <div className="flex items-center bg-transparent">
                  <p className="text-center font-mono bg-transparent text-sm w-28 text-inactive mb-8">
                    COUNTRY
                  </p>
                  <Field
                    type="text"
                    name="country"
                    className="pl-2 ml-3 w-full rounded-lg border border-white/20 mb-8"
                  />
                </div>
                <button
                  type="submit"
                  className="mx-auto cursor-pointer flex rounded-lg px-3 py-1 bg-white/20 justify-center items-center space-x-2"
                >
                  <p className="font-mono px-5 text-sm bg-transparent pt-[.15rem]">
                    SUBMIT
                  </p>
                </button>
              </Form>
            )}
          </Formik>
        )}

        {showStory && (
          <motion.div
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: -3, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="mb-20"
          >
            <h2
              id="pullquote"
              className="mb-1 mt-20 text-3xl font-bold text-center mr-5"
            >
              The Hospital
            </h2>
            <p id="label" className="italic mb-6 text-center mr-5">
              A Mad Lib by Garrett Prince
            </p>

            <p id="paragraph" className="mb-4">
              &quot;I’m sorry.&quot; The doctor rested his clipboard on the edge
              of the beige bed frame. &quot;She hasn’t been responding to any of
              the treatments. We’ve tried everything. There’s just… nothing else
              we can do.&quot;
            </p>
            <p id="paragraph" className="mb-4">
              Artie sat motionless, unable to meet the doctor’s eyes. His
              knuckles produced a new shade of white, gripping the chair he’d
              been sleeping on for the past two months. Artie felt his eyes
              welling up. He thought he’d cried everything out. It was good to
              know he still had something left in him.
            </p>
            <p id="paragraph" className="mb-4">
              Glancing over to the hospital bed just inches away, he saw his
              whole life. His everything. For a moment, she looked peaceful.
              Serene, even.
            </p>
            <p id="paragraph" className="mb-4">
              He thought back to the first time they met. It all started with a
              horse drawn carriage pile-up in Central Park. She was a carriage
              operator. Artie, the other horse driver. They flirted and
              exchanged horse insurance. Turns out both of their horse papers
              were expired, but that was <span className="italic">their</span>{" "}
              little secret.{" "}
            </p>
            <div className="mb-4 mt-10 ml-10 mr-14">
              <img
                alt=""
                className="sm:h-64 mx-auto"
                src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1680225158/Long%20Addition/Posts/I%20Made%20A%20Madlib/horse_lajntw.png"
              />
              <p className="text-center text-inactive text-sm font-mono font-bold mt-5 mb-10">
                FIG 3. 3D EQUINE RENDER{" "}
              </p>
            </div>
            <p id="paragraph" className="mb-4">
              These memories made Artie feel like she was right there beside him
              again. But Artie knew she wasn’t{" "}
              <span className="italic">really</span> there. Not like before.
            </p>
            <p id="paragraph" className="mb-4">
              The double cranioectomy (full removal and reattachment of the
              head) was a risky procedure with little to no evidence in favor of
              its effectiveness. Plus, the stitching was just a hair off so that
              made it pretty hard to look at her.
            </p>
            <p id="paragraph" className="mb-4">
              &quot;Pull the plug.&quot; Artie whispered, turning to the large
              window pane, tears streaming down his cheeks.
            </p>
            <p id="paragraph" className="mb-4">
              The doctor nodded and reached for the large plug in the wall
              labeled &quot;PULL IF DEATH&quot;. He looked up at Artie.
              &quot;Anything else you want to say?&quot;
            </p>
            <p id="paragraph" className="mb-4">
              Artie rested his forehead against his raised arm, positioned
              firmly on the chilled window. &quot;Yeah.&quot; He took a deep
              breath. &quot;
              <span className="font-bold">
                ...{formValues.adj1}, {formValues.verb1}, {formValues.noun1},{" "}
                {formValues.pnoun1}, {formValues.verb2}, {formValues.exclaim},{" "}
                {formValues.adj2}, {formValues.noun2}, {formValues.country}.
              </span>
              &quot;
            </p>
          </motion.div>
        )}
        <div className="flex my-10 mb-5 justify-center space-x-2 mr-5">
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
