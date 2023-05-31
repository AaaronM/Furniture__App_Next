import Link from "next/link";
import React from "react";
import { sale } from "../data/data";
import { type } from "os";
import Image from "next/image";

export default function FurnitureSale() {
  //   const filter = sale.find(
  //     (chair) => "PINET TEAK OUTDOOR LOUNGE CHAIR" === chair.name
  //   );
  return (
    <div className="">
      <div className="pt-[150px] p-5">
        <button></button>
      </div>
      <div className="flex flex-wrap justify-evenly gap-[35px] pt-[150px] p-5 ">
        {sale.map((item) => {
          return (
            <div className="flex  flex-col mt-[40px] " key={item.id}>
              <Link href={`furniture/${item.slug}`}>
                <div className="flex " key={item.slug}>
                  <Image
                    className="w-[350px] h-[400px] object-fill "
                    src={item.image}
                    alt="First slide"
                  />
                </div>
                <div>
                  <p className=" uppercase text-[16px] font-primary font-light mt-2">
                    {item.name}
                  </p>
                  <div className="flex flex-row gap-5 justify-start">
                    <p className=" uppercase text-[14px] font-primary font-semibold  mt-2  text-rose-700 ">
                      {item.sale}
                    </p>
                    <p className=" uppercase text-[14px] font-primary font-light mt-2">
                      reg. {item.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
