import React from "react";

function CategoryBar({ selected, setSelected }) {
  return (
    <div className="fixed ml-[-.3rem] flex flex-col font-mono text-sm sm:text-md min-w-[4.7rem] h-64 mt-24 space-y-15">
      <button
        onClick={() => setSelected("latest")}
        className={`${
          selected === "latest"
            ? "rotate-270 transition-all duration-100 scale-105 bg-white rounded-md px-1 text-black latest-shadow"
            : "rotate-270 text-inactive duration-100 transition-all"
        }`}
      >
        LATEST
      </button>
      <button
        onClick={() => setSelected("misc")}
        className={`${
          selected === "misc"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-misc rounded-md px-2 mr-[.15rem] text-white misc-shadow"
            : "rotate-270 mb-10 text-inactive duration-100 transition-all"
        }`}
      >
        MISC
      </button>
      <button
        onClick={() => setSelected("travel")}
        className={`${
          selected === "travel"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-travel travel-shadow rounded-md  px-2  text-white"
            : "rotate-270 mb-14 text-inactive duration-100 transition-all"
        }`}
      >
        TRAVEL
      </button>
      <button
        onClick={() => setSelected("tech")}
        className={`${
          selected === "tech"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-tech tech-shadow rounded-md px-2  mr-[.15rem] text-white"
            : "rotate-270 mb-12 text-inactive duration-100 transition-all"
        }`}
      >
        TECH
      </button>
      <button
        onClick={() => setSelected("audio")}
        className={`${
          selected === "audio"
            ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-audio audio-shadow rounded-md px-2  text-black"
            : "rotate-270 mb-14 text-inactive duration-100 transition-all"
        }`}
      >
        AUDIO
      </button>
      <div className="flex flex-col space-y-7 pt-1">
        <button
          onClick={() => setSelected("visual")}
          className={`${
            selected === "visual"
              ? "rotate-270 mb-12 transition-all duration-100 scale-105 bg-visual visual-shadow rounded-md px-2  text-white"
              : "rotate-270 mb-12 text-inactive duration-100 transition-all"
          }`}
        >
          VISUAL
        </button>
        <button
          onClick={() => setSelected("health")}
          className={`${
            selected === "health"
              ? "rotate-270 mb-12 mt-4 transition-all duration-100 scale-105 bg-health health-shadow rounded-md px-2  text-black"
              : "rotate-270 mb-14 text-inactive duration-100 transition-all"
          }`}
        >
          HEALTH
        </button>
      </div>
    </div>
  );
}

export default CategoryBar;
