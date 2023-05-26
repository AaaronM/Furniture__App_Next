import React from "react";
import ThreeDCarousel from "./ThreeDCarousel";

export default function Section2() {
  return (
    <div>
      <div className="bg-gray  justify-evenly items-center ">
        <h2 className=" text-center uppercase text-[40px] mb-5 text-dark/80 font-primary">
          {" "}
          top collections
        </h2>
        <ThreeDCarousel />
      </div>
    </div>
  );
}
