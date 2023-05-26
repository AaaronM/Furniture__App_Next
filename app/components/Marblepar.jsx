"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

//IMG
import mrblepar1 from "../../public/IMG/marblepar/marblepar1.png";
import mrblepar2 from "../../public/IMG/marblepar/marblepar2.png";
import mrblepar3 from "../../public/IMG/marblepar/marblepar3.png";

export default function Marblepar() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 900]);
  return (
    <div className="bg-gray flex flex-row overflow-hidden">
      <motion.div style={{ x }} className="">
        <div className="flex">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Image src={mrblepar1} className="w-[300px] h-[300px]"></Image>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>

        <Image src={mrblepar2} className="w-[300px] h-[300px]"></Image>
        <Image src={mrblepar3} className="w-[300px] h-[300px]"></Image>
      </motion.div>
    </div>
  );
}
