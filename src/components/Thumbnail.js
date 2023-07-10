/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { newStarsList, popularStarsList } from "../data/starsList";

function Thumbnail({
  link,
  type,
  title,
  titleSize,
  date,
  category,
  duration,
  photo,
  marginBottom,
  popular,
  newPost,
  series,
  seriesTitle,
}) {
  return (
    <div>
      {/* /////////// */}
      {/* PHOTO RIGHT */}
      {/* /////////// */}
      {type === "photoRight" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="cursor-pointer mb-16 sm:ml-10"
        >
          <Link
            href={link ? `${link}` : `${"error"}`}
            className={
              marginBottom === "mb-20"
                ? `${"grid grid-cols-10 cursor-pointer mb-20"}`
                : `${"grid grid-cols-10 cursor-pointer mb-10 sm:mb-20"}`
            }
          >
            <div className="z-10 col-start-1 col-end-8 sm:col-end-6 bg-transparent font-bold row-start-1 row-end-2">
              <p
                className={
                  series === true
                    ? `${"text-sm bg-transparent title-shadow"}`
                    : `${"hidden"}`
                }
              >
                {seriesTitle.toUpperCase()}
              </p>
              <h1
                className={
                  titleSize === "text-4xl"
                    ? `${"bg-transparent text-4xl sm:text-6xl"}`
                    : titleSize === "text-3xl"
                    ? `${"bg-transparent text-3xl sm:text-5xl"}`
                    : `${"bg-transparent text-2xl sm:text-4xl"}`
                }
              >
                <span className="bg-transparent font-bold title-shadow pr-1">
                  {title}
                </span>
              </h1>
              <div className="flex flex-col justify-start bg-transparent text-sm">
                <p className="bg-transparent mt-1 text-inactive font-mono ">
                  {date}
                </p>
                <p className="bg-transparent text-inactive font-mono">
                  {category.toUpperCase()}
                </p>
                <p className="bg-transparent text-inactive font-mono">
                  {duration.toUpperCase()}
                </p>
              </div>
            </div>
            <img
              className="col-start-4 col-end-11 row-start-1 row-end-2 "
              alt=""
              src={photo}
            />
            {popular && (
              <img
                className="absolute right-[-1rem] bottom-[-1rem] bg-transparent h-32 w-32  sm:h-48 sm:w-48"
                alt=""
                src={
                  popularStarsList[
                    Math.floor(Math.random() * popularStarsList.length)
                  ]
                }
              />
            )}
            {newPost && (
              <img
                className="absolute right-[-1rem] bottom-[-1rem] bg-transparent h-32 w-32 sm:h-48 sm:w-48"
                alt=""
                src={
                  newStarsList[Math.floor(Math.random() * newStarsList.length)]
                }
              />
            )}
          </Link>
        </motion.div>
      )}
      {/* ////////// */}
      {/* PHOTO LEFT */}
      {/* ////////// */}
      {type === "photoLeft" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="cursor-pointer mb-16 sm:ml-10"
        >
          <Link
            href={link ? `${link}` : `${"error"}`}
            className={
              marginBottom === "mb-20"
                ? `${"grid grid-cols-10 cursor-pointer mb-20"}`
                : `${"grid grid-cols-10 cursor-pointer mb-10 sm:mb-20"}`
            }
          >
            <div className="z-10 col-start-[-1] col-end-3 sm:col-end-5 bg-transparent font-bold row-start-1 row-end-2 text-end">
              <div className="bg-transparent flex justify-end">
                <p
                  className={
                    series === true
                      ? `${"text-sm bg-transparent title-shadow"}`
                      : `${"hidden"}`
                  }
                >
                  {seriesTitle.toUpperCase()}
                </p>
              </div>
              <h1
                className={
                  titleSize === "text-4xl"
                    ? `${"bg-transparent text-4xl sm:text-6xl"}`
                    : titleSize === "text-3xl"
                    ? `${"bg-transparent text-3xl sm:text-5xl"}`
                    : `${"bg-transparent text-2xl sm:text-4xl"}`
                }
              >
                <span className="bg-transparent font-bold title-shadow pl-1">
                  {title}
                </span>
              </h1>

              <div className="flex flex-col justify-end bg-transparent text-sm">
                <p className="mt-1 bg-transparent text-inactive font-mono ">
                  {date}
                </p>
                <p className="bg-transparent text-inactive font-mono">
                  {category.toUpperCase()}
                </p>
                <p className="bg-transparent text-inactive font-mono">
                  {duration.toUpperCase()}
                </p>
              </div>
            </div>
            <img
              className="col-start-1 col-end-8 row-start-1 row-end-2 "
              alt=""
              src={photo}
            />
            {popular && (
              <img
                className="absolute left-[-1rem] bottom-[-1rem] bg-transparent h-32 w-32  sm:h-48 sm:w-48"
                alt=""
                src={
                  popularStarsList[
                    Math.floor(Math.random() * popularStarsList.length)
                  ]
                }
              />
            )}
            {newPost && (
              <img
                className="absolute left-[-1rem] bottom-[-1rem] bg-transparent h-32 w-32 sm:h-48 sm:w-48"
                alt=""
                src={
                  newStarsList[Math.floor(Math.random() * newStarsList.length)]
                }
              />
            )}
          </Link>
        </motion.div>
      )}
      {/* ////////////////////// */}
      {/* NEWSLETTER CTA LARGE 1 */}
      {/* ////////////////////// */}
      {type === "newsletterCtaLarge1" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="sm:ml-10 sm:mb-20 mb-16"
        >
          <div className="flex items-center w-full h-80 rounded-2xl mb-10 bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 ">
            <div className="flex mx-2 rounded-xl w-full bg-black h-[19rem]">
              <div className="flex flex-col justify-between rounded-xl py-2">
                <div className="space-y-3 px-4">
                  <div>
                    <p className="font-bold text-2xl sm:text-3xl">
                      &quot;Sign up for my free weekly newsletter.&quot;
                    </p>
                    <p className="font-bold text-lg sm:text-xl italic">
                      - 3 year old me on a horse
                    </p>
                  </div>
                  <div className="flex">
                    <div className="">
                      <p className="text-sm sm:text-lg mb-2">
                        Join <span className="font-bold">34</span> others.
                        It&apos;s free and it counts toward your community
                        service hours.
                      </p>
                      <Link
                        href="/"
                        className="text-sm sm:text-lg border-b-[3px] pb-[.1rem] border-cta cursor-pointer bg-transparent"
                      >
                        See what&apos;s in it.
                      </Link>
                    </div>
                    <img
                      src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1678822760/Long%20Addition/Branding/lil_g_riding_horse_tclxjs.png"
                      alt=""
                      className="h-32"
                    />
                  </div>
                </div>
                <div className="flex justify-between rounded-lg px-[.35rem] h-8 mb-1 items-center space-x-2 bg-white/20 mx-4">
                  <input
                    className="bg-transparent pl-1 text-sm w-full placeholder:font-mono placeholder:text-xs active:ring-cta"
                    placeholder="ENTER EMAIL HERE"
                  ></input>
                  <button className="font-mono text-xs bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 h-5 rounded-md px-2 pt-[.1rem] py-0">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ////////////////////// */}
      {/* NEWSLETTER CTA LARGE 2 */}
      {/* ////////////////////// */}
      {type === "newsletterCtaLarge2" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="sm:ml-10 sm:mb-20 mb-16"
        >
          <div className="flex mr-2 rounded-2xl w-full bg-zinc-900 h-[19rem]">
            <div className="flex flex-col justify-between rounded-2xl py-3 bg-zinc-900 zinc-900-shadow">
              <div className="space-y-3 px-4 bg-transparent">
                <div className="bg-transparent">
                  <p className="bg-transparent font-bold text-2xl sm:text-3xl">
                    &quot;Sign up for my free weekly newsletter.&quot;
                  </p>
                  <p className="bg-transparent font-bold text-lg sm:text-xl italic">
                    - 3 year old me on a horse
                  </p>
                </div>
                <div className="flex bg-transparent">
                  <div className="bg-transparent">
                    <p className="bg-transparent text-sm sm:text-lg mb-2">
                      Join <span className="font-bold">5</span> others.
                      It&apos;s free and it counts toward your community service
                      hours.
                    </p>
                    <Link
                      href="/"
                      className="text-sm sm:text-lg border-b-[3px] pb-[.1rem] border-cta cursor-pointer bg-transparent"
                    >
                      See what&apos;s in it.
                    </Link>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1678822760/Long%20Addition/Branding/lil_g_riding_horse_tclxjs.png"
                    alt=""
                    className="h-28 bg-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-between rounded-lg px-[.35rem] h-8 mb-1 pr-2 items-center space-x-2 bg-zinc-700 mx-4">
                <input
                  className="bg-transparent pl-1 text-sm w-full placeholder:font-mono placeholder:text-xs active:ring-cta"
                  placeholder="ENTER EMAIL HERE"
                ></input>
                <button className="font-mono text-xs bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 h-5 rounded-md px-2 mb-1 pt-[.1rem] py-0 subscribe-shadow">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ////////////////////// */}
      {/* ///// PLACEHOLDER //// */}
      {/* ////////////////////// */}
      {type === "placeholder" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="sm:ml-10 sm:mb-20 mb-16 w-[18.4rem]"
        >
          <div className="flex justify-center py-3 rounded-2xl bg-zinc-900">
            <p className=" bg-transparent font-bold text-xl sm:text-2xl font-mono text-zinc-500 text-center w-full">
              MORE COMING SOON
            </p>
          </div>
        </motion.div>
      )}

      {type === "message" && (
        <motion.div
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: -3, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="sm:ml-10 sm:mb-20 mb-16"
        >
          <div className="w-full bg-zinc-800 rounded-lg">
            <p className="bg-transparent p-2 pl-3 text-sm">{title}</p>
            <p className="font-mono bg-transparent px-2 pb-2 text-xs text-right text-inactive">
              {date}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Thumbnail;
