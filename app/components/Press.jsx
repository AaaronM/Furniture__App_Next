import React from "react";

//IMG
import brand1 from "../../public/IMG/vogue.png";
import brand2 from "../../public/IMG/gq.png";
import brand3 from "../../public/IMG/bazzar.png";
import brand4 from "../../public/IMG/AD.png";
import Image from "next/image";
export default function Press() {
  return (
    <div>
      <div
        className=" translate-y-[-580px] flex overflow-hidden justify-evenly bg-dark/50
       h-[100px]"
      >
        <Image
          src={brand1}
          className="w-[300px] h-[300px] translate-y-[-100px]"
        ></Image>
        <Image src={brand2} className="w-[200px] h-[100px]  "></Image>
        <Image src={brand3} className="w-[300px] h-[100px]"></Image>
        <Image
          src={brand4}
          className="w-[400px] h-[400px]  translate-y-[-135px]"
        ></Image>
      </div>
    </div>
  );
}
