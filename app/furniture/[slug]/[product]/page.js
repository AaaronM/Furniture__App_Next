"use client";

import React from "react";
import Image from "next/image";
import { findFurnitureProduct } from "@/utils/findFurniture";

export default function ItemsPage({ params }) {

  const product = findFurnitureProduct(params.slug, params.product);

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image} alt="Product Image"/>
    </div>
  )

}
