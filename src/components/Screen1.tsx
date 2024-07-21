"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import Image from "next/image";
import Img1 from "../../public/image/img (3).png";
import Img2 from "../../public/image/img (5).png";

const Screen1 = () => {
  const zIndexValue = useSelector(
    (state: any) => state.zIndexGlobal.zIndexs[0]?.screen1Value
  );
  const screenRef = useRef(null);

  // useEffect(() => {
  //   // Assume 10 is the active zIndex
  //   gsap.fromTo(
  //     screenRef.current,
  //     { scale: 0.5 },
  //     { scale: 1, duration: 2, ease: "power2.inOut" }
  //   );
  // }, [zIndexValue?.zIndexGlobal?.zIndexs[0]?.screen1Value]);

  return (
    <div
      ref={screenRef}
      className={`h-full glass background1 absolute inset-0 ${
        zIndexValue === 7
          ? "opacity-95"
          : zIndexValue === 6
          ? "opacity-60"
          : "opacity-0"
      }`}
      style={{ zIndex: zIndexValue }}
    >
      <div className="grid grid-cols-2 grid-rows-5 gap-4 h-full w-full relative">
        {/* content */}

        <div className=" z-[1] absolute inset-0 bg-black/10 flex flex-col justify-center items-center p-5">
          <h1 className="news drop-shadow-[1px_1px_1px_black] text-white text-[50px] font-bold  text-start selection:bg-[#d1d1d1] ">
            Jaimeen M.
          </h1>
          <p className=" text-sm  text-black railway bg-white/50 p-2 rounded-md selection:bg-[#d1d1d1]">
            Proficient in Next.js, React.js, and JavaScript, with a passion for
            leveraging technology to deliver exceptional user experiences.
          </p>
        </div>
        {/* content */}

        <div className="row-span-2  relative rounded-br-2xl overflow-hidden">
          <Image
            src={Img1}
            alt="img1"
            width={500}
            height={500}
            quality={100}
            className="min-w-full object-cover object-center"
          />
        </div>
        <div className="row-span-3 relative rounded-bl-2xl overflow-hidden">
          <Image
            src={Img2}
            alt="img1"
            width={500}
            height={500}
            quality={100}
            className="min-w-full object-cover object-center"
          />
        </div>
        <div className="row-span-3 row-start-3"></div>
        <div className="row-span-2 col-start-2 row-start-4"></div>
      </div>
    </div>
  );
};

export default Screen1;
