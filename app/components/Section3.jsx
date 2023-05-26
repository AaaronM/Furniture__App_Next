"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

// ___IMG___
import chairbg from "../../public/IMG/section3/chairbg.png";
import whitechair1 from "../../public/IMG/section3/whitechair1.png";
import whitechair2 from "../../public/IMG/section3/whitechair2.png";
import picmarble1 from "../../public/IMG/section3/picmarble1.png";
import couchpic1 from "../../public/IMG/section3/couchpic1.png";
import Image from "next/image";

export default function Section3() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 900]);
  return (
    <div className=" translate-y-[-400px]">
      <h2 className=" text-center uppercase text-[40px] mb-5 text-dark/80 font-primary translate-y-[200px]">
        designs
      </h2>
      <div className=" bg-transparent flex flex-row overflow-hidden translate-y-[-200px]  -z-10">
        <motion.h1
          style={{ x }}
          className="text-[320px]  text-dark/20 font-thin font-primary  "
        >
          UNIQUE
        </motion.h1>
      </div>

      <div className="flex flex-row flex-wrap justify-evenly">
        <div className=" relative">
          <Image
            src={chairbg}
            className=" w-[400px] translate-y-[-200px] z-50 "
          ></Image>
          <Image
            src={chairbg}
            className=" opacity-10 absolute top-[-280px] left-[-100px] scale-125 -z-10"
          ></Image>
        </div>
        <div className=" relative">
          <Image
            src={whitechair2}
            className=" w-[400px] translate-y-[-200px] z-50 "
          ></Image>
          <Image
            src={whitechair1}
            className=" opacity-10 absolute top-[-280px] left-[-100px] scale-125 -z-10"
          ></Image>
        </div>
        <div className=" relative">
          <Image
            src={picmarble1}
            className=" w-[400px] translate-y-[-200px] z-50 "
          ></Image>
          <Image
            src={picmarble1}
            className=" opacity-10 absolute top-[-280px] left-[-100px] scale-105 -z-10"
          ></Image>
        </div>
        <div className=" relative">
          <Image
            src={couchpic1}
            className=" w-[400px] translate-y-[-200px] z-50 "
          ></Image>
          <Image
            src={couchpic1}
            className=" opacity-10 absolute top-[-280px] left-[-100px] scale-125 -z-10"
          ></Image>
        </div>

        {/* <Image
          src={whitechair2}
          className=" w-[400px] translate-y-[-200px] "
        ></Image>
        <Image
          src={picmarble1}
          className=" w-[400px] translate-y-[-200px] "
        ></Image>
        <Image
          src={couchpic1}
          className=" w-[400px] translate-y-[-200px] "
        ></Image> */}
      </div>
    </div>
  );
}

// return (
//   <div className="bg-gray  ">
//     <div className="translate-y-[-550px] relative">
//       <Image
//         src={chairbg}
//         className=" opacity-10 absolute top-[-200px] left-[-500px]"
//       ></Image>
//     </div>
//     <div className="flex relative">
//       <Image
//         src={chairbg}
//         className=" w-[400px] translate-y-[-200px] "
//       ></Image>

//       <Image
//         src={whitechair2}
//         className=" w-[400px] translate-y-[-200px] "
//       ></Image>

//       <Image
//         src={whitechair1}
//         className=" opacity-10 absolute bottom-[0] right-[0]"
//       ></Image>
//     </div>
//   </div>
// );
