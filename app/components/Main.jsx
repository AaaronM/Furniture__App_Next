"use client";

import Image from "next/image";
import React from "react";

// IMG
import mainimage from "../../public/IMG/main.png";
import mainimage2 from "../../public/IMG/main2.png";
import mainimage3 from "../../public/IMG/mainimage3.png";
import mainimage4 from "../../public/IMG/mainimage4.png";
import mainimage5 from "../../public/IMG/mainimage5.png";
import mainimage6 from "../../public/IMG/mainimage6.png";
import shadowbg from "../../public/IMG/main/bgshadow.png";
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

export default function Main() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div>
      <div className="h-screen flex justify-center items-center p-5 pt-[300px] bg-gray relative overflow-hidden  ">
        <motion.div style={{ y }} className="z-50">
          <Image
            src={shadowbg}
            className=" w-[800px]  object-center z-50  "
          ></Image>
        </motion.div>

        <h1 className=" absolute text-[320px] top-[11rem] text-dark/20 font-thin font-primary ">
          CONCEPTS
        </h1>
      </div>
    </div>
  );
}

// return (
//   <div>
//     <div>
//       <Image
//         src={mainimage6}
//         className=" h-[600px]  object-cover w-full"
//       ></Image>
//       <div className="flex flex-col justify-center items-center text-[50px]  translate-y-[-350px] text-slate-100  font-primary ">
//         <h2>Refined Luxury Living</h2>
//         <button
//           className=" bg-slate-100 text-black text-[15px] font-thin p-2
//         w-[150px] mt-3 hover:text-gold  hover:font-normal  transition-all hover:translate-y-[-5px]
//         "
//         >
//           SHOP NOW
//         </button>
//       </div>
//     </div>
//   </div>
// );
