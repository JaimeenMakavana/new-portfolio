import React from "react";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxFramerLogo } from "react-icons/rx";
import {
  SiAuthy,
  SiGooglecloud,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiReactrouter,
} from "react-icons/si";

export const CoreSkills = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <SiNextdotjs />
        <p>Next.js</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <SiReact />
        <p>React.js</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <SiJavascript />
        <p>Javascript</p>
      </div>
    </>
  );
};

export const LangSkills = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <p>English</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <p>Hindi</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <p>Gujarati</p>
      </div>
    </>
  );
};

export const RoutingSkills = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <SiReactrouter />
        <p>React Router for client</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <SiNextdotjs />
        <p>Next for server component</p>
      </div>
    </>
  );
};

export const Softkills = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <p>Team Management</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <p>Problem Solving</p>
      </div>
    </>
  );
};

export const Stylingkills = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <RiTailwindCssFill />
        <p>Tailwindcss</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <FaBootstrap />
        <p>Bootstrap</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <MdOutlineSettingsApplications />
        <p>GSAP</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <RxFramerLogo />
        <p>Framer Motion</p>
      </div>
    </>
  );
};

export const Otherkills = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <SiReactquery />
        <p>React Query</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <SiAuthy />
        <p>Nextauth.js</p>
      </div>
    </>
  );
};

export const Extrakills = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <FaGithub />
        <p>Git</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <SiGooglecloud />
        <p>Google Cloud</p>
      </div>
    </>
  );
};

export const StateSkills = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        <p>Redux</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <p>Zustand</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <p>Context Api</p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <p>Recoil</p>
      </div>
    </>
  );
};
