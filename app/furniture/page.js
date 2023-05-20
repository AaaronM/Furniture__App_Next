import Link from "next/link";
import React from "react";
import { data } from "../data/data";
import { type } from "os";

export default function FurnitureCategoriesPage() {
  return (
    <div className="flex flex-wrap justify-evenly gap-[15px] pt-[150px] ">
      <p className="text-[70px]">FURNITURE CATEGORY PAGE</p>
      {data.map((type) => {
        return (
          <div className="flex  flex-col mt-[40px] " key={type.id}>
            <Link href={`furniture/${type.slug}`}>
              <div className="flex " key={type.id}>
                {/* <Image
                  className="w-[350px] h-[400px] object-fill "
                  src={type.image}
                  alt="First slide"
                /> */}
              </div>
              <p className=" uppercase text-[18px] font-primary font-light mt-2">
                {type.name}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
