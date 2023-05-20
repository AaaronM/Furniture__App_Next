"use client";

import React, { useEffect, useState } from "react";
import { data } from "@/app/data/data";

export default function FurnitureCategoryPage({ params }) {

  const furnitureData = data.find((f) => {
    return f.slug.toString().trim() === params.slug.toString().trim();
  });

  return (
    <div>
      <h1>{furnitureData.name}</h1>
    </div>
  )
}
