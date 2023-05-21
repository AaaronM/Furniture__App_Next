"use client";

import React, { useEffect, useState } from "react";
import { data } from "@/app/data/data";
import { livingroomdata } from "@/app/data/data";
import Link from "next/link";
import Image from "next/image";

export default function FurnitureCategoryPage({ params }) {
  const furnitureData = data.find((f) => {
    console.log(f);
    // console.log(params.product);
    console.log(f.slug);
    console.log(params.slug);

    return f.slug.toString().trim() === params.slug.toString().trim();
  });

  return (
    <div>
      {/* <h1>{furnitureData.name}</h1> */}
      <div className="flex flex-wrap gap-5 p-5 justify-start">
        {furnitureData.category.map((item) => {
          return (
            <div className="flex  flex-col mt-[40px] ">
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
