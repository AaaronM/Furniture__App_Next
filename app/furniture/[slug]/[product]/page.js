"use client";

import React from "react";
import Image from "next/image";
import { findFurnitureProduct } from "@/utils/findFurniture";

export default function ItemsPage({ params }) {
  const product = findFurnitureProduct(params.slug, params.product);
  let cart = [];

  function addToCard() {
    cart.push(product);
    console.log(cart);
  }

  return (
    <div className="pt-[220px] ">
      <div className="flex  justify-center gap-[100px] ">
        <div className="p-5">
          <Image
            src={product.image}
            className="w-[570px] h-[620px] object-fill   "
            alt="hi"
          ></Image>
          <p className="font-light text-gray-500 pt-2">{product.short_desk}</p>
        </div>
        <div className=" w-[500px] p-4">
          <p className="text-[30px] mb-3 font-thin">{product.name}</p>
          <p className="border-b border-b-gray-400 pb-2 font-bold">
            {product.price}
          </p>
          <p className=" uppercase font-semibold text-dark pb-2 pt-2">
            Details
          </p>
          <p className=" font-light text-gray-600  border-b border-b-gray-400 pb-3">
            {product.log_desk}
          </p>
          <p className=" uppercase font-semibold text-dark pb-2 pt-2">
            Dimensions
          </p>
          <div className="border-b border-b-gray-400 pb-2">
            <p className=" font-thin"> Width: {product.width}</p>
            <p className=" font-thin"> Depth: {product.depth}</p>
            <p className=" font-thin"> Height: {product.height}</p>
          </div>
          <p className=" uppercase font-semibold text-dark pb-1 pt-4">Care</p>
          <p className=" font-light text-gray-600 border-b border-b-gray-400 pb-5">
            {product.careinstructions}
          </p>
          <div className="text-center justify-center items-center mt-2 ">
            <button
              className=" font-bold uppercase bg-dark text-light bg-gray-900 w-full p-2 "
              onClick={addToCard}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
