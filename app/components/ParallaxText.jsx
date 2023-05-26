"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

export default function ParallaxText() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 900]);
  return (
    <div className=" bg-transparent flex flex-row overflow-hidden translate-y-[-810px] -z-10">
      <motion.h1
        style={{ x }}
        className="text-[320px]  text-dark/20 font-thin font-primary  "
      >
        TOP
      </motion.h1>
    </div>
  );
}
