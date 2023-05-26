import Link from "next/link";
import React from "react";
import { data } from "../data/data";
import { type } from "os";
import Image from "next/image";

export default function FurnitureCategoriesPage() {
  return (
    <div className="flex flex-wrap justify-evenly gap-[15px] pt-[150px] p-5 ">
      {data.map((type) => {
        return (
          <div className="flex  flex-col mt-[40px] " key={type.id}>
            <Link href={`furniture/${type.slug}`}>
              <div className="flex " key={type.slug}>
                <Image
                  className="w-[350px] h-[400px] object-fill "
                  src={type.image}
                  alt="First slide"
                />
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
