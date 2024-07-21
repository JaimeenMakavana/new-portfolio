import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { CiLink } from "react-icons/ci";
import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiMailboxLight,
  PiMailboxThin,
} from "react-icons/pi";
import { useHover } from "usehooks-ts";

const LinkComponent = () => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  useEffect(() => {
    if (isHover) {
      gsap.fromTo(
        ".github",
        { top: "0", opacity: "0" },
        { top: "-100%", right: "-01px", opacity: "1", duration: "0.5" }
      );
      gsap.fromTo(
        ".linkedin",
        { opacity: "0" },
        { right: "100%", opacity: "1", duration: "0.7" }
      );
    }
  }, [isHover]);

  return (
    <div ref={hoverRef} className="relative">
      {isHover && (
        <Link
          href="https://www.linkedin.com/in/jaimeen-makavana/"
          target="_blank"
          className="border shadow-md border-white rounded-full p-1 cursor-pointer absolute  github"
        >
          <PiLinkedinLogoLight className=" text-white text-xl" />
        </Link>
      )}
      {isHover && (
        <Link
          href="https://github.com/JaimeenMakavana"
          target="_blank"
          className="border shadow-md border-white rounded-full p-1 cursor-pointer absolute linkedin"
        >
          <PiGithubLogoLight className=" text-white text-xl" />
        </Link>
      )}

      <div className="border border-white rounded-full p-1 cursor-pointer shadow-md">
        <CiLink className=" text-white text-xl animate-pulse" />
      </div>
    </div>
  );
};

export default LinkComponent;
