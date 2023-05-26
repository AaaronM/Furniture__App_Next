"use client";

import Image from "next/image";
import React, { useState } from "react";

// IMG
import get1 from "../../public/IMG/getthelook/get1.png";
import get2 from "../../public/IMG/getthelook/get2.png";
import get3 from "../../public/IMG/getthelook/get3.png";
import get4 from "../../public/IMG/getthelook/get4.png";

// IMG

////FRAMER
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

//variants
import { fadeIn } from "../variants";

///REACT ICONS
import { BiShow } from "react-icons/bi";
import Link from "next/link";

export default function section5() {
  const [isHovering, setIsHovering] = useState(false);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className=" translate-y-[-500px]">
      <div className="h-screen flex  p-10 pt-[300px] bg-gray relative overflow-hidden  ">
        <motion.div style={{ y }} className="z-50 relative">
          <Image
            src={get1}
            className=" translate-y-[-350px] ml-[3rem]  w-[700px]  z-50   "
          ></Image>
          {isHovering && (
            <div className="  bg-neutral-400/30  border-dark border-2 h-[240px] w-[200px] text-[30px] flex justify-center items-center   rounded-xl  hover:bg-gray transition-all absolute top-[4.5rem] left-[30.5rem] z-[80]  ">
              <div className="flex flex-col justify-center  p-2 items-center">
                <Image src={get1} className="    w-[120px]  z-50  "></Image>
                <div>
                  <p className="text-[15px]">ELWOOD OAK WOOD QUEEN BED</p>
                  <p className="text-[12px] font-bold">$1990.00</p>
                  <p className="text-[12px]">
                    Solid white oak frame, certified sustainable by the Forest
                    Stewardship Council
                  </p>
                </div>
              </div>
            </div>
          )}
          <div
            className=" bg-neutral-400/30  border-dark border-2 h-[50px] w-[50px] text-[30px] flex justify-center items-center   rounded-full  hover:bg-gray transition-all absolute top-[-28.5rem] left-[15.5rem] z-[80] animate-bounce"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <BiShow />
          </div>
          {isHovering && (
            <div className="  bg-neutral-400/30  border-dark border-2 h-[240px] w-[200px] text-[30px] flex justify-center items-center   rounded-xl  hover:bg-gray transition-all absolute top-[4.5rem] left-[1.5rem] z-[80] ">
              <div className="flex flex-col justify-center  p-2 items-center">
                <Image src={get2} className="    w-[120px]  z-50  "></Image>
                <div>
                  <p className="text-[15px]">STIVALE 2-DRAWER OAK NIGHTSTAND</p>
                  <p className="text-[12px] font-bold">$699.00</p>
                  <p className="text-[12px]">
                    Natural oak veneer frame is set off by high-gloss walnut
                    legs at its curved base.{" "}
                  </p>
                </div>
              </div>
            </div>
          )}
          <Image
            src={get2}
            className=" translate-y-[-780px]  w-[200px]  z-50   "
          ></Image>
          {isHovering && (
            <div className="  bg-neutral-400/30  border-dark border-2 h-[240px] w-[200px] text-[30px] flex justify-center items-center   rounded-xl  hover:bg-gray transition-all absolute top-[-25.5rem] left-[30.5rem] z-[80] ">
              <div className="flex flex-col justify-center  p-2 items-center">
                <Image src={get3} className="    w-[120px]  z-50  "></Image>
                <div>
                  <p className="text-[15px]">
                    RAMBLE TALL WHITE CERAMIC TABLE LAMP
                  </p>
                  <p className="text-[12px] font-bold">$399.00</p>
                  <p className="text-[12px]">
                    Oversized natural jute shade casts an organic glow atop a
                    ceramic column base finished
                  </p>
                </div>
              </div>
            </div>
          )}
          <Image
            src={get2}
            className=" translate-y-[-780px]  w-[200px]  -z-10   absolute top-[675px] left-[430px]   "
          ></Image>{" "}
          <Image
            src={get3}
            className=" translate-y-[-980px]  w-[120px]  z-50 absolute top-[852px] left-[30px]  "
          ></Image>
          <Image
            src={get3}
            className=" translate-y-[-780px]  w-[110px]  -z-10   absolute top-[636px] left-[460px]   "
          ></Image>
          <Image
            src={get4}
            className=" translate-y-[-780px]  w-[250px]  -z-10   absolute top-[380px] left-[150px]   "
          ></Image>
          {isHovering && (
            <div className="  bg-neutral-400/30  border-dark border-2 h-[240px] w-[200px] text-[30px] flex justify-center items-center   rounded-xl  hover:bg-gray transition-all absolute top-[-25.5rem] left-[-1.5rem] z-[80] ">
              <div className="flex flex-col justify-center  p-2 items-center">
                <Image src={get4} className="    w-[120px]  z-50  "></Image>
                <div>
                  <p className="text-[15px]">AMBER II' FRAMED WALL ART</p>
                  <p className="text-[12px] font-bold">$75.00</p>
                  <p className="text-[12px]">
                    Inspired by a trip to northern Argentina, earthy texture.
                  </p>
                </div>
              </div>
            </div>
          )}
          <Link
            href="/showroom"
            className="  bg-neutral-400/30  border-dark border-[1px]  p-2 h-[30px] w-auto text-[19px] flex justify-center items-center hover:bg-gray transition-all  z-[80] uppercase  rounded-full absolute top-[150px] left-[250px] shadow-md font-thin"
          >
            show more
          </Link>
        </motion.div>
        <div>
          <h1 className=" absolute text-[120px] top-[22rem] left-[500px] text-dark/20 font-thin font-primary ">
            GET THE LOOK
          </h1>
        </div>
      </div>
    </div>
  );
}
