import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setcartItems] = useState({});

  const addTocart = (itemID) => {
    setcartItems((prev) => ({
      ...prev,
      [itemID]: (prev[itemID] || 0) + 1, // Ensure it starts from 1
    }));
  };

  const removeFromCart = (itemID) => {
    setcartItems((prev) => {
      if (!prev[itemID]) return prev; // Prevent negative values
      const updatedItems = { ...prev, [itemID]: prev[itemID] - 1 };
      if (updatedItems[itemID] <= 0) delete updatedItems[itemID]; // Remove if zero
      return updatedItems;
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount=0;
    for (const item in cartItems) {
    if(cartItems[item]>0){
      let itemInfo = food_list.find((product) => product._id === item);
      totalAmount+=itemInfo.price*cartItems[item];
    }
      
    }
    return totalAmount;
  }


  const contextValue = {
    food_list,
    cartItems,
    addTocart,
    removeFromCart,
    setcartItems,
    getTotalCartAmount,
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
