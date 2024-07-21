"use client";
import { handleNext, handlePrev } from "@/features/zIndexStore/zIndexSlice";
import React from "react";
import { CiLink } from "react-icons/ci";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import LinkComponent from "./LinkComponent";

const NextButton = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed bottom-2 inset-x-0 flex justify-between px-5 items-center z-[10]">
      <div className="hidden md:block"></div>

      <div className="flex justify-start items-center gap-3 lg:gap-10">
        <div className="border border-white rounded-full p-1 cursor-pointer shadow-md">
          <GrFormPrevious
            onClick={() => dispatch(handlePrev())}
            className=" text-black text-xl cursor-pointer"
          />
        </div>
        <div className="border border-white rounded-full p-1 cursor-pointer shadow-md">
          <GrFormNext
            onClick={() => dispatch(handleNext())}
            className=" text-black text-xl cursor-pointer"
          />
        </div>
      </div>

      {/* <CiLink className=" text-white text-xl" /> */}
      <LinkComponent />
    </div>
  );
};

export default NextButton;
