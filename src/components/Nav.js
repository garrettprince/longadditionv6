/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import { urlList } from "../data/urlList";
import SubscribeButton from "./SubscribeButton";

function Nav() {
  const [menu, setMenu] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const menuOpen = () => {
    setMenu(true);
  };

  const menuClose = () => {
    setMenu(false);
  };

  const searchOpen = () => {
    setSearch(true);
  };

  const searchClose = () => {
    setSearch(false);
  };

  return (
    <div className="fixed top-0 z-50 max-w-2xl w-full bg-transparent backdrop-blur-[10px] backdrop-filter border-b border-zinc-900/20">
      {menu && (
        <div className="bg-transparent fixed top-0 z-50 w-full h-full ">
          <div className="h-screen">
            <motion.div className="flex bg-black items-center justify-between mx-5 my-2 sm:mx-6 sm:my-3">
              <Link href="/" onClick={menuClose}>
                <img
                  src="/assets/brand/logowhiteupdated.png"
                  alt="logo"
                  className="h-10 sm:h-12 bg-transparent mb-1"
                />
              </Link>
              <button onClick={menuClose}>
                <XMarkIcon className="w-9 h-9 bg-transparent" />
              </button>
            </motion.div>
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: -3, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="flex flex-col font-mono text-3xl mt-16 space-y-10"
            >
              <Link href="/" onClick={menuClose}>
                <p className="flex justify-center">ACCOUNT</p>
              </Link>
              <Link href="/about" onClick={menuClose}>
                <p className="flex justify-center">ABOUT</p>
              </Link>
              <Link href="/contact" onClick={menuClose}>
                <p className="flex justify-center">CONTACT</p>
              </Link>
              <Link
                href={`/posts/${
                  urlList[Math.floor(Math.random() * urlList.length)]
                }`}
                onClick={menuClose}
              >
                <p className="flex justify-center">RANDOM</p>
              </Link>
            </motion.div>
          </div>
        </div>
      )}

      <div className="bg-transparent ">
        <div className="flex bg-transparent items-center justify-between mx-5 my-2 sm:mx-6 sm:my-3">
          <Link href="/" className="bg-transparent">
            <img
              src="/assets/brand/logowhiteupdated.png"
              alt="logo"
              className="h-10 sm:h-12 mb-1 bg-transparent"
            ></img>
          </Link>
          <div className=" flex space-x-2 items-center bg-transparent">
            {/* THIS IS THE SEARCH UI, NOT READY TO USE YET, REVISIT WHEN THIS IS SOMETHING YOU CAN TAKE ON, REFERENCE THE CHAT GPT SUGGESTED LIBRARY */}

            {/* {!search && (
              <button>
                <MagnifyingGlassIcon
                  onClick={searchOpen}
                  className="w-7 h-7 bg-transparent"
                />
              </button>
            )}
            {search && (
              <form className="">
                <div className="flex justify-center items-center mt-[.15rem]">
                  <motion.input
                    initial={{ x: 6, opacity: 0 }}
                    animate={{ x: -3, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    className="bg-white/10 placeholder:text-gray-600 placeholder:text-sm py-1 px-2 rounded-lg w-40"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search here..."
                  />
                  <button onClick={searchClose}>
                    <XMarkIcon className="ml-1 w-9 h-9 bg-transparent" />
                  </button>
                  <button type="submit">Search</button>
                </div>
              </form>
            )} */}
            {/* Action button for subscriber functionality below */}
            <SubscribeButton />

            <button className=" sm:hidden" onClick={menuOpen}>
              <Bars3Icon className="w-9 h-9 bg-transparent ml-1" />
            </button>
            <div className="hidden sm:flex space-x-5 font-mono text-lg mt-1 mb-1 bg-transparent">
              <Link href="/about" className="bg-transparent">
                <p className="bg-transparent ml-3">ABOUT</p>
              </Link>
              <Link href="/contact" className=" bg-transparent">
                <p className="bg-transparent">CONTACT</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
