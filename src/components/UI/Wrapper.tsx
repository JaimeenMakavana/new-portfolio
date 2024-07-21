import React, { useRef } from "react";
import { useSelector } from "react-redux";

const Wrapper = ({
  index,
  children,
  gsapClass,
}: {
  index: number;
  children: React.ReactNode;
  gsapClass: string;
}) => {
  const zIndexValue = useSelector(
    (state: any) => state.zIndexGlobal.zIndexs[index]?.screen1Value
  );
  const screenRef = useRef(null);
  return (
    <div
      ref={screenRef}
      className={`h-full ${gsapClass} glass background1 absolute inset-0 ${
        zIndexValue === 7
          ? "opacity-95"
          : zIndexValue === 6
          ? "opacity-60"
          : "opacity-0"
      }`}
      style={{ zIndex: zIndexValue }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
