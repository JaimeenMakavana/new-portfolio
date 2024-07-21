"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Screen3 = () => {
  const zIndexValue = useSelector(
    (state: any) => state.zIndexGlobal.zIndexs[2]?.screen1Value
  );

  return (
    <div
      className={`h-full glass  absolute inset-0 ${
        zIndexValue === 7
          ? "opacity-95"
          : zIndexValue === 6
          ? "opacity-60"
          : "opacity-0"
      }`}
      style={{ zIndex: zIndexValue }}
    >
      Screen3
    </div>
  );
};

export default Screen3;