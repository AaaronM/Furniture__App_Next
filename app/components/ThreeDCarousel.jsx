"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// ____IMG _____
// require("../../public/IMG/BestSeller/bestseller1.jpeg"),
import bestSeller1 from "../../public/IMG/BestSeller/bestSeller1.jpeg";
import plant from "../../public/IMG/plant.png";
import flowers from "../../public/IMG/flowers.png";

import Image from "next/image";
// ____IMG_____

///Rect ICONS
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function ThreeDCarousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = ["🍔", "🍕", "🌭", "🍗"];
  const itemspics = [
    require("../../public/IMG/BestSeller/bestSeller1.jpeg"),
    require("../../public/IMG/BestSeller/bestSeller2.jpeg"),
    require("../../public/IMG/BestSeller/bestSeller3.jpeg"),
    require("../../public/IMG/BestSeller/bestSeller4.jpeg"),
  ];
  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  // ___________OLD___________
  // const indexInArrayScope =
  //   ((activeIndex % items.length) + items.length) % items.length;
  // ___________OLD___________

  const indexInArrayScopePics =
    ((activeIndex % itemspics.length) + itemspics.length) % itemspics.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time

  // ___________OLD___________
  // const visibleItems = [...items, ...items].slice(
  //   indexInArrayScope,
  //   indexInArrayScope + 3
  // ___________OLD___________

  // ___________OLD___________
  const visibleItemsPics = [...itemspics, ...itemspics].slice(
    indexInArrayScopePics,
    indexInArrayScopePics + 3
    // ___________OLD___________
  );
  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="flex flex-col items-center w-[100%] h-[600px] bg-gray relative   ">
      {/* <div>
        <Image
          src={flowers}
          className="w-[500px] h-[500px] absolute bottom-0 left-0  "
        ></Image>
        <Image
          src={flowers}
          className="w-[500px] h-[500px] absolute top-0 right-0 rotate-180  "
        ></Image>
      </div> */}
      <div className="flex m-[20px]">
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItemsPics.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className=" shadow-md w-[300px] h-[300px] text-[40px] flex  bg-light relative"
                key={item}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItemsPics[0]) {
                      return "left";
                    } else if (item === visibleItemsPics[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                <Image
                  style={{
                    height: "auto",
                  }}
                  src={item}
                  className="w-[300px] h-[300px] transition-all "
                ></Image>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="  flex justify-between gap-[50px] mt-10 Z-50">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
          className=" bg-gray border-dark border-2 h-[70px] w-[70px] text-[30px] flex justify-center items-center   rounded-full  hover:bg-neutral-400/30 transition-all"
        >
          <BsArrowLeft />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(1)}
          className=" bg-gray border-dark border-2 h-[70px] w-[70px] text-[30px] flex justify-center items-center   rounded-full hover:bg-neutral-400/30 transition-all"
        >
          <BsArrowRight />
        </motion.button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: zIndex[position()],
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

const zIndex = {
  left: 1,
  center: 2,
  right: 1,
};
