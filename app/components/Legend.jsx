"use client";

import Image from "next/image";
import React from "react";

// __IMG___
import legend1 from "../../public/IMG/legend1.jpg";
import legend2 from "../../public/IMG/legend2.jpg";
// __IMG___

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

export default function Legend() {
  return (
    <div className="flex  m-0 object-fill w-full h-[100vh] overflow-hidden ">
      <div className="bg-light w-full flex ">
        <Image src={legend1} className="w-auto"></Image>

        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" flex flex-col  justify-center  content-center p-10"
        >
          <h2 className=" uppercase text-[45px] text-green font-primary font-light ">
            The legend <br /> returns
          </h2>
          <p className="text-[18px] text-green font-light leading-7  ">
            The mastermind behind many iconic pieces, his prolific portfolio
            features rare and important works, each a true collector's item.
            Available to a wide audience for the first time in decades - or in
            some cases, the first time ever.
          </p>
        </motion.div>
        <Image src={legend2} className="w-auto"></Image>
      </div>
    </div>
  );
}
