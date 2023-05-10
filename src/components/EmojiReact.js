import React, { useState } from "react";

function EmojiReact({ emoji1, emoji2, emoji3 }) {
  // I know I'll have to replace with a function that sends to a database in the future if I want the count to persist, but it looks fine for right now. This is a V2/V3 thing.
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Props will look something like this if I end up using this
  {
    /* <EmojiReact emoji1={"🥹"} emoji2={"🥵"} emoji3={"🫡"} /> */
  }

  return (
    <div>
      <div className="flex justify-evenly mr-6 my-10">
        <button
          onClick={() => setCount1(count1 + 1)}
          className="cursor-pointer flex rounded-2xl px-3 py-1 bg-white/20 justify-center items-center space-x-2"
        >
          <p className="text-lg bg-transparent">{emoji1}</p>
          <p className="font-mono text-sm bg-transparent">{count1}</p>
        </button>
        <button
          onClick={() => setCount2(count2 + 1)}
          className="cursor-pointer flex rounded-2xl px-3 py-1 bg-white/20 justify-center items-center space-x-2"
        >
          <p className="text-lg bg-transparent">{emoji2}</p>
          <p className="font-mono text-sm bg-transparent">{count2}</p>
        </button>
        <button
          onClick={() => setCount3(count3 + 1)}
          className="cursor-pointer flex rounded-2xl px-3 bg-white/20 justify-center items-center space-x-2"
        >
          <p className="text-lg bg-transparent">{emoji3}</p>
          <p className="font-mono text-sm bg-transparent">{count3}</p>
        </button>
      </div>
    </div>
  );
}

export default EmojiReact;
