import React from "react";
import h from "../static/image/h-blue.png";
import Image from "next/image";
export default function SectionTitle({
  title,
  textClass = "text-gray-800",
  lineColor = ["bg-cyan-600", "bg-cyan-500"],
  containerClass = "",
}) {
  return (
    <div className={`flex justify-center items-center m-4 ${containerClass}`}>
      <div>
        <div className={`w-11 h-1.5 ${lineColor[0]} rounded-md ml-2 mb-1`} />
        <div className={`w-11 h-1.5 ${lineColor[1]}  rounded-md`} />
      </div>
      <h1
        className={`mx-3 font-semibold capitalize text-center text-3xl ${textClass} `}>
        {title}
      </h1>
      <div>
        <div className={`w-11 h-1.5 ${lineColor[1]} rounded-md ml-2 mb-1`} />
        <div className={`w-11 h-1.5 ${lineColor[0]}  rounded-md`} />
      </div>
    </div>
  );
}
