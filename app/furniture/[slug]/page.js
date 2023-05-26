"use client";

import React from "react";
import { data } from "@/app/data/data";
import Link from "next/link";
import Image from "next/image";
import { findFurnitureBySlug } from "@/utils/findFurniture";

export default function FurnitureCategoryPage({ params }) {
  const furnitureData = findFurnitureBySlug(params.slug);

  return (
    <div>
      {/* <h1>{furnitureData.name}</h1> */}
      <div className="flex flex-wrap justify-start gap-[15px] pt-[150px] p-5   ">
        {/* flex flex-wrap gap-5 p-5 justify-start  */}
        {furnitureData.category.map((item) => {
          return (
            <div className="flex  flex-col mt-[40px]" key={item.id}>
              <Link href={`furniture/${params.slug}/${item.slug}`}>
                <div className="flex " key={item.id}>
                  <Image
                    className="w-[350px] h-[400px] object-fill "
                    src={item.image}
                    alt="First slide"
                  />
                </div>
                <p className=" uppercase text-[18px] font-primary font-light mt-2">
                  {item.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
