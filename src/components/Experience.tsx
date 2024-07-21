"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "./UI/Wrapper";
import Image from "next/image";
import Img1 from "../../public/image/exp (1).png";
import Img2 from "../../public/image/exp (2).png";
import gsap from "gsap";

const Experience = () => {
  const zIndexValue = useSelector(
    (state: any) => state.zIndexGlobal.zIndexs[1]?.screen1Value
  );

  useEffect(() => {
    if (zIndexValue === 7) {
      gsap.fromTo(
        ".expMain",
        { translateY: "-100%", opacity: "0" },
        { translateY: "0%", opacity: "1", duration: "0.9" }
      );
      gsap.fromTo(
        ".exp",
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
    <Wrapper index={1} gsapClass="expMain">
      <div className="grid grid-cols-2 grid-rows-5 gap-4 h-full w-full relative expMain">
        {/* content */}
        <div className=" absolute inset-0 bg-white/20 flex flex-col justify-center items-center z-[1]">
          <h1 className="news drop-shadow-[1px_1px_1px_black] text-white text-[50px] font-bold  text-start selection:bg-[#d1d1d1] exp">
            Experience
          </h1>
          <div className="overflow-x-auto max-w-full ">
            <table className="min-w-full tables text-left text-sm mx-5 whitespace-nowrap bg-white/80 ">
              <thead className="tracking-wider border-b-2 ">
                <tr>
                  <th scope="col" className="p-1">
                    Company
                  </th>
                  <th scope="col" className="p-1">
                    Location
                  </th>
                  <th scope="col" className="p-1">
                    Role
                  </th>
                  <th scope="col" className="p-1">
                    Year
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td scope="row" className="p-1">
                    KoffeeKodes pvt ltd
                  </td>
                  <td className="p-1">Surat</td>
                  <td className="p-1">Next/React Developer</td>
                  <td className="p-1">Nov 2023 - continue</td>
                </tr>
                {/* --- */}
                <tr className="border-b">
                  <td scope="row" className="p-1">
                    WebApster pvt ltd
                  </td>
                  <td className="p-1">Chhattisgarh</td>
                  <td className="p-1">React Developer</td>
                  <td className="p-1">Oct 2022 - Nov 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* content */}

        <div className="col-span-2 row-span-2 relative rounded-b-2xl overflow-hidden">
          <Image
            src={Img1}
            alt="img1"
            width={500}
            height={500}
            quality={100}
            className="min-w-full min-h-full object-cover object-center md:object-top"
          />
        </div>
        <div className="row-span-2 col-start-1 row-start-4  relative rounded-2xl overflow-hidden">
          <Image
            src={Img2}
            alt="img1"
            width={500}
            height={500}
            quality={100}
            className="min-w-full object-cover object-center md:object-top"
          />
        </div>
        <div className="row-span-3 col-start-2 row-start-3"></div>
        <div className="col-start-1 row-start-3"></div>
      </div>
    </Wrapper>
  );
};

export default Experience;
