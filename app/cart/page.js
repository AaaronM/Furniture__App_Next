"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

export default function Cart() {
  const {
    cartItems,
    addItem,
    decrementItemQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  console.log(cartItems);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="mb-8">Your Products</div>
      <div className="">
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.slug}>
              <div>
                Item Name: {cartItem.name} | Quantity: {cartItem.quantity}{" "}
                <div className="inline ml-8">
                  <div
                    onClick={() => addItem(cartItem)}
                    className="inline hover:cursor-pointer"
                  >
                    <AiFillPlusCircle className="inline" />
                  </div>
                  <div
                    onClick={() => decrementItemQuantity(cartItem)}
                    className="inline hover:cursor-pointer"
                  >
                    <AiFillMinusCircle className="inline" />
                  </div>
                  <div
                    onClick={() => removeFromCart(cartItem)}
                    className="inline hover:cursor-pointer ml-4"
                  >
                    <MdOutlineClear className="inline" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div onClick={() => clearCart()} className="mt-4 cursor-pointer">Clear Cart</div>
      </div>
    </div>
  );
}
