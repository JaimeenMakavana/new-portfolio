"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import Image from "next/image";
import Img1 from "../../public/image/img (3).png";
import Img2 from "../../public/image/img (5).png";
import Wrapper from "./UI/Wrapper";

const Intro = () => {
  const zIndexValue = useSelector(
    (state: any) => state.zIndexGlobal.zIndexs[0]?.screen1Value
  );

  useEffect(() => {
    if (zIndexValue === 7) {
      gsap.fromTo(
        ".name",
        { translateX: "100%", opacity: "0" },
        { translateX: "0%", opacity: "1", duration: "0.7" }
      );
      gsap.fromTo(
        ".desc",
        { translateX: "-100%", opacity: "0" },
        { translateX: "0%", opacity: "1", duration: "0.9" }
      );
      gsap.fromTo(
        ".img1",
        { translateX: "100%", opacity: "0" },
        { translateX: "0%", opacity: "1", duration: "0.9" }
      );
      gsap.fromTo(
        ".img2",
        { translateX: "-100%", opacity: "0" },
        { translateX: "0%", opacity: "1", duration: "0.9" }
      );
      gsap.fromTo(
        ".main",
        { translateX: "-100%", opacity: "0" },
        { translateX: "0%", opacity: "1", duration: "0.9" }
      );
    }
  }, [zIndexValue]);

  return (
    <Wrapper index={0} gsapClass="main">
      <div className="grid grid-cols-2 grid-rows-5 gap-4 h-full w-full relative md:grid-cols-5 ">
        {/* content */}
        <div className=" z-[1] absolute inset-0 bg-black/10 flex flex-col justify-center items-center p-5">
          <h1 className="news drop-shadow-[1px_1px_1px_black] text-white text-[50px] font-bold  text-start selection:bg-[#d1d1d1]  name">
            Jaimeen M.
          </h1>
          <p className=" text-lg  text-black railway bg-white/50 p-2 rounded-lg selection:bg-[#d1d1d1] max-w-md lg:text-lg xl:text-2xl xl:max-w-xl lg:p-10 desc">
            Proficient in Next.js, React.js, and JavaScript, with a passion for
            leveraging technology to deliver exceptional user experiences.
          </p>
        </div>
        {/* content */}

        <div className="row-span-2  relative rounded-br-2xl overflow-hidden md:col-span-2 md:row-span-3">
          <Image
            src={Img1}
            alt="img1"
            width={500}
            height={500}
            quality={100}
            className="min-w-full object-cover object-center md:object-top img1"
          />
        </div>
        <div className="row-span-3 relative rounded-bl-2xl overflow-hidden md:col-span-2 md:row-span-4 md:col-start-4 md:row-start-1">
          <Image
            src={Img2}
            alt="img1"
            width={500}
            height={500}
            quality={100}
            className="min-w-full object-cover object-center img2"
          />
        </div>
        <div className="row-span-3 row-start-3 md:row-span-5 md:col-start-3 md:row-start-1"></div>
        <div className="row-span-2 col-start-2 row-start-4 md:col-span-2 md:row-span-2 md:row-start-4"></div>
        <div className="hidden md:block md:col-span-2 md:col-start-4 md:row-start-5"></div>
      </div>
    </Wrapper>
  );
};

export default Intro;
