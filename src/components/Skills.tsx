"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "./UI/Wrapper";
import gsap from "gsap";
import {
  CoreSkills,
  Extrakills,
  LangSkills,
  Otherkills,
  RoutingSkills,
  Softkills,
  StateSkills,
  Stylingkills,
} from "./UI/SkillsComponent";

const Skills = () => {
  const [isHoverCore, setisHoverCore] = useState(false);
  const [isStateManage, setisStateManage] = useState(false);
  const [isLang, setisLang] = useState(false);
  const [isSoftSkill, setisSoftSkill] = useState(false);
  const [isRouting, setisRouting] = useState(false);
  const [isExtra, setisExtra] = useState(false);
  const [isOther, setisOther] = useState(false);
  const [isStyling, setisStyling] = useState(false);

  const zIndexValue = useSelector(
    (state: any) => state.zIndexGlobal.zIndexs[3]?.screen1Value
  );

  useEffect(() => {
    if (zIndexValue === 7) {
      gsap.fromTo(
        ".skillMain",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
      gsap.fromTo(
        ".core",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [zIndexValue]);

  useEffect(() => {
    if (isHoverCore) {
      gsap.fromTo(
        ".coreDiv",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [isHoverCore]);

  useEffect(() => {
    if (isLang) {
      gsap.fromTo(
        ".langDiv",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [isLang]);

  useEffect(() => {
    if (isRouting) {
      gsap.fromTo(
        ".routingDiv",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [isRouting]);

  useEffect(() => {
    if (isStyling) {
      gsap.fromTo(
        ".stylingDiv",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [isStyling]);

  useEffect(() => {
    if (isOther) {
      gsap.fromTo(
        ".otherDiv",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [isOther]);

  useEffect(() => {
    if (isExtra) {
      gsap.fromTo(
        ".extraDiv",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [isExtra]);

  useEffect(() => {
    if (isSoftSkill) {
      gsap.fromTo(
        ".softDiv",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [isSoftSkill]);

  useEffect(() => {
    if (isStateManage) {
      gsap.fromTo(
        ".stateDiv",
        { scale: "0.5", opacity: "0" },
        { scale: "1", opacity: "1", duration: "1" }
      );
    }
  }, [isStateManage]);

  return (
    <Wrapper index={3} gsapClass="skillMain">
      <div className="grid grid-cols-3 grid-rows-5 gap-4 h-full w-full relative">
        {/* core */}
        {isHoverCore && (
          <div className=" absolute inset-10 rounded-md bg-white/90 z-[2] coreDiv flex justify-center items-center flex-col gap-y-5">
            <CoreSkills />
          </div>
        )}
        {/* core */}
        {/* lang */}
        {isLang && (
          <div className=" absolute inset-10 rounded-md bg-white/90 z-[2] langDiv flex justify-center items-center flex-col gap-y-5">
            <LangSkills />
          </div>
        )}
        {/* lang */}
        {/* routing */}
        {isRouting && (
          <div className=" absolute inset-10 rounded-md bg-white/90 z-[2] routingDiv flex justify-center items-center flex-col gap-y-5">
            <RoutingSkills />
          </div>
        )}
        {/* routing */}
        {/* styling */}
        {isStyling && (
          <div className=" absolute inset-10 rounded-md bg-white/90 z-[2] stylingDiv flex justify-center items-center flex-col gap-y-5">
            <Stylingkills />
          </div>
        )}
        {/* styling */}

        {/* other */}
        {isOther && (
          <div className=" absolute inset-10 rounded-md bg-white/90 z-[2] otherDiv flex justify-center items-center flex-col gap-y-5">
            <Otherkills />
          </div>
        )}
        {/* other */}

        {/* extra */}
        {isExtra && (
          <div className=" absolute inset-10 rounded-md bg-white/90 z-[2] extraDiv flex justify-center items-center flex-col gap-y-5">
            <Extrakills />
          </div>
        )}
        {/* extra */}
        {/* state */}
        {isStateManage && (
          <div className=" absolute inset-10 rounded-md bg-white/90 z-[2] stateDiv flex justify-center items-center flex-col gap-y-5">
            <StateSkills />
          </div>
        )}
        {/* state */}
        {/* soft */}
        {isSoftSkill && (
          <div className=" absolute inset-10 rounded-md bg-white/90 z-[2] softDiv flex justify-center items-center flex-col gap-y-5">
            <Softkills />
          </div>
        )}
        {/* soft */}
        <div
          onMouseEnter={() => setisHoverCore(true)}
          onMouseLeave={() => setisHoverCore(false)}
          className="row-span-3 col-start-2 row-start-2 border bg-gray-700/20 rounded-md flex justify-center items-center core cursor-pointer"
        >
          Core
        </div>
        <div
          onMouseEnter={() => setisLang(true)}
          onMouseLeave={() => setisLang(false)}
          className="row-span-2 col-start-3 row-start-1 border bg-gray-600/20 rounded-md flex justify-center items-center cursor-pointer"
        >
          Lang
        </div>
        <div
          onMouseEnter={() => setisRouting(true)}
          onMouseLeave={() => setisRouting(false)}
          className="col-span-2 col-start-2 row-start-5 border bg-gray-300/20 rounded-md flex justify-center items-center"
        >
          Routing
        </div>
        <div
          onMouseEnter={() => setisStyling(true)}
          onMouseLeave={() => setisStyling(false)}
          className="row-span-2 col-start-1 row-start-2 border bg-gray-400/20 rounded-md flex justify-center items-center"
        >
          Styling
        </div>
        <div
          onMouseEnter={() => setisOther(true)}
          onMouseLeave={() => setisOther(false)}
          className="col-start-1 row-start-4 border bg-gray-100/20 rounded-md flex justify-center items-center"
        >
          Other
        </div>
        <div
          onMouseEnter={() => setisExtra(true)}
          onMouseLeave={() => setisExtra(false)}
          className="col-start-1 row-start-5 border bg-gray-50/20 rounded-md flex justify-center items-center"
        >
          Extra
        </div>
        <div
          onMouseEnter={() => setisStateManage(true)}
          onMouseLeave={() => setisStateManage(false)}
          className="col-span-2 col-start-1 border row-start-1 bg-gray-50/20 rounded-md flex justify-center items-center"
        >
          State Management
        </div>
        <div
          onMouseEnter={() => setisSoftSkill(true)}
          onMouseLeave={() => setisSoftSkill(false)}
          className="row-span-2 col-start-3 border cursor-pointer row-start-3 bg-gray-100/20 rounded-md flex justify-center items-center"
        >
          Soft Skill
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
