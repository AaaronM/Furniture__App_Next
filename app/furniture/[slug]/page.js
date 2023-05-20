"use client";

import React from "react";
import { data } from "@/app/data/data";

export default function page({ params }) {
  console.log(data);
  {
    data.map((item, index) => {
      if (params.slug === item.id) {
        return hello;
      }
    });
  }
}
