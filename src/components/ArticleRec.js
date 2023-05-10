import React from "react";
import Link from "next/link";

// doesn't work yet

function ArticleRec() {
  return (
    <div>
      <p
        id="sectionchange"
        className="mb-4 mt-14 text-center mr-5 font-bold text-2xl"
      >
        You might also like:
      </p>
      <div className="flex mx-7">
        <Link href="" id="paragraph" className="justify-center mb-4 mr-5">
          Article Title
        </Link>
      </div>
    </div>
  );
}

export default ArticleRec;
