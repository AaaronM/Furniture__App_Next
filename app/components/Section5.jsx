"use client";

import Image from "next/image";
import React from "react";

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

export default function section5() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className=" translate-y-[-500px]">
      <div className="h-screen flex  p-5 pt-[300px] bg-gray relative overflow-hidden  ">
        <motion.div style={{ y }} className="z-50 relative">
          <Image
            src={get1}
            className=" translate-y-[-350px] ml-[3rem]  w-[700px]  z-50  "
          ></Image>

          <Image
            src={get2}
            className=" translate-y-[-780px]  w-[200px]  z-50  "
          ></Image>
          <Image
            src={get2}
            className=" translate-y-[-780px]  w-[200px]  -z-10   absolute top-[675px] left-[430px]   "
          ></Image>

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
        </motion.div>
        <h1 className=" absolute text-[120px] top-[22rem] left-[500px] text-dark/20 font-thin font-primary ">
          GET THE LOOK
        </h1>
      </div>
    </div>
  );
}
