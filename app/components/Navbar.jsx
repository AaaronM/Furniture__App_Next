"use client";
import Link from "next/link";
import React, { useState } from "react";

// REACT ICONS
import { CiSearch, CiShoppingCart } from "react-icons/ci";
// REACT ICONS

export default function Navbar() {
  // navbar scroll changeBackground function
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 5) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        colorChange
          ? " p-5 bg-transparent  fixed  w-full   font-light text-dark z-[999] "
          : " p-5 bg-transparent  fixed  w-full   font-light text-dark  z-[999]"
      }
    >
      <div className="flex justify-between ">
        <div className="flex gap-2 justify-center items-center mt-[-50px]">
          <CiSearch className="text-[20px]" />
          <p>SEARCH</p>
        </div>
        <div className="flex flex-col   items-center ml-[50px]">
          <Link
            href="/"
            className={
              colorChange
                ? " text-dark z-50  hover:text-dark  hover:font-normal no-underline text-[45px] font-thin transition-all   "
                : " text-dark  z-50  border-none  hover:text-dark  hover:font-normal no-underline text-[45px] font-thin transition-all   "
            }
          >
            CONCEPTS
          </Link>
          <div className=" border-t font-thin ">
            <ul className="flex gap-8 text-[19px] mt-3">
              <li className=" transition-all hover:translate-y-[-5px] border-none  ">
                <Link
                  href="furniture"
                  className={
                    colorChange
                      ? " text-dark z-50  hover:text-dark  hover:font-normal no-underline   "
                      : " text-dark  z-50  border-none  hover:text-dark  hover:font-normal no-underline "
                  }
                >
                  SHOP
                </Link>
              </li>
              <li className=" transition-all hover:translate-y-[-5px] border-none  ">
                <Link
                  href="sale"
                  className={
                    colorChange
                      ? " text-dark z-50  hover:text-dark  hover:font-normal no-underline   "
                      : " text-dark  z-50  border-none  hover:text-dark  hover:font-normal no-underline "
                  }
                >
                  SALE
                </Link>
              </li>

              <li className=" hover:text-dark  hover:font-normal  transition-all hover:translate-y-[-5px]">
                <Link
                  href="showroom"
                  className={
                    colorChange
                      ? " text-dark z-50  hover:text-dark  hover:font-normal no-underline   "
                      : " text-dark  z-50  border-none  hover:text-dark  hover:font-normal no-underline "
                  }
                >
                  SHOWROOM
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center mt-[-50px]">
          <p>USA</p>
          <p>ICON</p>
          <Link href="/cart">
            <CiShoppingCart className=" text-[25px]" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
