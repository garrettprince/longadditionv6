import React from "react";
import Link from "next/link";

function SubscribeButton() {
  return (
    <Link href='/subscribe' className="subscribe-shadow latest-shadow-2 subscribe-word-shadow font-mono text-xs bg-gradient-to-tr from-cta-gradient-1 to-cta-gradient-2 h-5 rounded-md px-2 pt-[.15rem] py-0 mr-1 mb-[.4rem]">
      SUBSCRIBE
    </Link>
  );
}

export default SubscribeButton;
