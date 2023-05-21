"use client";

import React from "react";
import { data } from "@/app/data/data";
import { items } from "@/app/data/data";
import Image from "next/image";

export default function ItemsPage({ params }) {
  const furnitureData = data.find((f) => {
    // console.log(f);
    // console.log(params.product);
    // console.log(f.category);
    // console.log(params.slug);

    return f.category.map((items) => {
      return items;
    });
  });

  //   const itemsFind = f.category.find((x) => {
  //     console.log(x);
  //   });

  return (
    <div>
      {/* <h1>{furnitureData.name}</h1> */}
      <div className="flex flex-wrap gap-5 p-5 justify-start">
        {furnitureData.map((items) => {
          return (
            <div className="flex  flex-col mt-[40px] ">
              <div className="flex "></div>
              <p className=" uppercase text-[18px] font-primary font-light mt-2">
                {items.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
