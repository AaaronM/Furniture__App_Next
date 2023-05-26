import Image from "next/image";
import React from "react";

//IMG
import img1 from "../../public/IMG/lifestyle1.png";
import img2 from "../../public/IMG/lifestyle4.png";
import img3 from "../../public/IMG/lifestyle5.png";
import lamptop from "../../public/IMG/showroom/lamptop.png";
import shadow from "../../public/IMG/showroom/shadow2.png";
import showroom4 from "../../public/IMG/showroom/showroom4.png";
import showroom5 from "../../public/IMG/showroom/showroom5.png";
import showroom6 from "../../public/IMG/showroom/showroom6.png";
import showroom1 from "../../public/IMG/showroom/showroom1.png";
import showroom2 from "../../public/IMG/showroom/showroom2.png";
import showroom3 from "../../public/IMG/showroom/showroom3.png";
export default function page() {
  return (
    <div className="bg-dark/20">
      <div className=" flex flex-col  m-0 object-cover w-screen overflow-hidden relative">
        <Image
          src={lamptop}
          className=" object-cover  scale-75  translate-y-[-200px]  "
        ></Image>
        <Image src={shadow} className=" absolute  opacity-75 "></Image>
        <h2 className="text-dark text-[40px]  uppercase font-thin absolute top-[500px] left-[300px] text-center">
          Bringing his impeccable <br /> sense of style <br /> to luxury
        </h2>
      </div>

      <div>
        <div className="flex flex-wrap  ">
          <Image src={showroom4} className="w-[700px]"></Image>

          <Image src={showroom5} className="w-[700px]"></Image>
          <Image src={showroom6} className="w-[700px]"></Image>
        </div>
      </div>

      <Image src={showroom1}></Image>
    </div>
  );
}
