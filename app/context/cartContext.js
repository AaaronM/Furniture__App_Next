"use client";

import React, { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];

export const initializer = (initialValue = initialState) => {
  return JSON.parse(localStorage.getItem("localCart")) || initialValue;
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.find((item) => item.slug === action.item.slug)
        ? state.map((item) =>
            item.slug === action.item.slug
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        : [...state, { ...action.item, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.slug !== action.item.slug);

    case "DECREMENT_QUANTITY":
      return state.find((item) => item.slug === action.item.slug)?.quantity ===
        1
        ? state.filter((item) => item.slug !== action.item.slug)
        : state.map((item) =>
            item.slug === action.item.slug
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          );

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], initializer);

  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      item,
    });
  };

  const decrementItemQuantity = (item) => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      item,
    });
  };
  
  const removeFromCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item,
    });
  };
  
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, decrementItemQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
