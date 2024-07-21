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
      <div className="flex justify-start items-center gap-3">
        <GrFormPrevious
          onClick={() => dispatch(handlePrev())}
          className=" text-white text-xl cursor-pointer"
        />
        <GrFormNext
          onClick={() => dispatch(handleNext())}
          className=" text-white text-xl cursor-pointer"
        />
      </div>

      {/* <CiLink className=" text-white text-xl" /> */}
      <LinkComponent />
    </div>
  );
};

export default NextButton;
