import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

function PremiumIconLeft({ premium }) {
  return (
    <div className="flex justify-start bg-transparent">
      <div
        className={
          premium === true
            ? `${"mt-2 flex w-20 bg-transparent font-mono text-xs bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 h-5 rounded-md px-2 pt-[.1rem] py-1 justify-end"}`
            : `${"hidden"}`
        }
      >
        <div className="pt-1 bg-transparent flex justify-between items-center">
          <StarIcon className="bg-transparent pb-[.15rem] h-3 w-3" />
          <p className="bg-transparent ml-[.10rem]">PREMIUM</p>
        </div>
      </div>
    </div>
  );
}

export default PremiumIconLeft;
