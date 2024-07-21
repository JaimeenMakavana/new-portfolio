"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "./UI/Wrapper";
import Image from "next/image";
import Img1 from "../../public/image/exp (1).png";
import Img2 from "../../public/image/exp (2).png";
import gsap from "gsap";

const Education = () => {
  const zIndexValue = useSelector(
    (state: any) => state.zIndexGlobal.zIndexs[2]?.screen1Value
  );

  useEffect(() => {
    if (zIndexValue === 7) {
      gsap.fromTo(
        ".eduMain",
        { translateY: "-100%", translateX: "-100%", opacity: "0" },
        { translateY: "0%", translateX: "0%", opacity: "1", duration: "0.9" }
      );
      gsap.fromTo(
        ".edu",
        { translateX: "100%", opacity: "0" },
        { translateX: "0%", opacity: "1", duration: "0.7" }
      );
      gsap.fromTo(
        ".tables",
        { translateX: "-100%", opacity: "0" },
        { translateX: "0%", opacity: "1", duration: "0.9" }
      );
    }
  }, [zIndexValue]);

  return (
    <Wrapper index={2} gsapClass="eduMain">
      <div className="grid grid-cols-2 grid-rows-5 gap-4 h-full w-full relative expMain">
        {/* content */}
        <div className=" absolute inset-0 bg-white/20 flex flex-col justify-center items-center z-[1]">
          <h1 className="news drop-shadow-[1px_1px_1px_black] text-white text-[50px] font-bold  text-start selection:bg-[#d1d1d1] edu">
            Education
          </h1>
          <div className="overflow-x-auto max-w-full ">
            <table className="min-w-full tables text-left text-sm mx-5 whitespace-nowrap bg-white/80 ">
              <thead className="tracking-wider border-b-2 ">
                <tr>
                  <th scope="col" className="p-1">
                    Institute
                  </th>
                  <th scope="col" className="p-1">
                    Location
                  </th>
                  <th scope="col" className="p-1">
                    Board
                  </th>
                  <th scope="col" className="p-1">
                    Result
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td scope="row" className="p-1">
                    Little Flower School of Science
                  </td>
                  <td className="p-1">Surat</td>
                  <td className="p-1">HSC</td>
                  <td className="p-1">85.4%</td>
                </tr>
                {/* --- */}
                <tr className="border-b">
                  <td scope="row" className="p-1">
                    L.D.College of engineering
                  </td>
                  <td className="p-1">Ahmedabad</td>
                  <td className="p-1">B.Tech</td>
                  <td className="p-1">8.43</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* content */}
        <div className="row-span-3 relative rounded-br-2xl overflow-hidden">
          <Image
            src={Img1}
            alt="img1"
            width={500}
            height={500}
            quality={100}
            className="min-w-full min-h-full object-cover object-center md:object-top"
          />
        </div>
        <div className="row-span-3 col-start-2 row-start-3 relative rounded-tl-2xl overflow-hidden">
          <Image
            src={Img2}
            alt="img1"
            width={500}
            height={500}
            quality={100}
            className="min-w-full min-h-full object-cover object-center md:object-top"
          />
        </div>
        <div className="row-span-2 col-start-1 row-start-4"></div>
        <div className="row-span-2 col-start-2 row-start-1"></div>
      </div>
    </Wrapper>
  );
};

export default Education;
