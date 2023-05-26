"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
// __IMG___
import section4pic1 from "../../public/IMG/section4/section4.1.jpg";
import section4pic2 from "../../public/IMG/section4/section4.2.jpg";
import section4pic3 from "../../public/IMG/section4/section4.3.jpg";
import section4pic4 from "../../public/IMG/section4/section4.4.png";
import section4pic5 from "../../public/IMG/section4/section4.5.jpg";
import section4pic6 from "../../public/IMG/section4/section4.6.png";
import gio3 from "../../public/IMG/section4/gio3.png";
import framesection4 from "../../public/IMG/frame.png";
import Image from "next/image";
import Link from "next/link";
// __IMG___

export default function Section4() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 900]);
  return (
    <div className=" translate-y-[-500px]  ">
      <div>
        <h2 className=" text-center uppercase text-[40px] mb-5 text-dark/80 font-primary translate-y-[300px]">
          Gianfranco Frattini
        </h2>
        <div className=" bg-transparent flex flex-row overflow-hidden translate-y-[630px]  -z-10">
          <motion.h1
            style={{ x }}
            className="text-[320px]  text-dark/20 font-thin font-primary  "
          >
            Gianfranco
          </motion.h1>
        </div>
      </div>
      <div className=" relative translate-y-[-200px]">
        <Image src={gio3} className="  rounded-r-full  "></Image>
        <div className="flex">
          <p className="text-[25px] text-dark/80 font-light  w-[600px] absolute top-[300px] left-[700px] z-100 leading-8">
            Bringing his impeccable sense of style to luxury spaces across
            Italy, Gianfranco Frattini was interested in creating interiors, not
            furnishing them. From, material and lighting were all parts of his
            vision to bring pleasure, comfort and ambiance to each project.
          </p>
          <p className="text-[25px] text-dark/80 font-light  w-[600px] absolute top-[530px] left-[1000px] z-100 leading-8">
            "Gianfranco Frattini"
          </p>
        </div>
      </div>
    </div>
  );
}
