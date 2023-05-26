"use client";

import React from "react";

import abitare1 from "../../public/IMG/abitare1.jpg";
import abitare2 from "../../public/IMG/abitare2.jpg";
import Image from "next/image";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

export default function Abitare() {
  return (
    <div className="flex  m-0 object-fill h-[100vh] overflow-hidden w-[100vw] translate-y-[-500px]">
      <div className="bg-gray  w-full flex ">
        <div className="w-[400px]  bg-dark/60 "> Hello</div>
        <Image src={abitare1} className=" object-cover w-full"></Image>
      </div>
    </div>
  );
}

{
  /* <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" flex flex-col  justify-center  content-center p-[2.5rem] w-1/4   "
        >
          <h2 className=" uppercase text-[45px] text-dark font-primary font-light mb-5">
            abitare
          </h2>
          <p className="text-[18px] text-dark/80 font-light leading-7  ">
            Bringing his impeccable sense of style to luxury spaces across
            Italy, Gianfranco Frattini was interested in creating interiors, not
            furnishing them. From, material and lighting were all parts of his
            vision to bring pleasure, comfort and ambiance to each project.
          </p>
        </motion.div> */
}
