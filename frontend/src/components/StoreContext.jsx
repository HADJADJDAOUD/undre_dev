import React, { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setcartItems] = useState({});
  const url = "http://localhost:4000";
  const [food_list, setFoodList] = useState([]);
  const [token, setToken] = useState("");

  const addTocart = async (itemID) => {
    setcartItems((prev) => ({
      ...prev,
      [itemID]: (prev[itemID] || 0) + 1, // Ensure it starts from 1
    }));
    
    if (token) {
      await axios.post(
        `${url}/api/cart/add`,
        {
         itemId:itemID,
        },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemID) => {
    setcartItems((prev) => {
      if (!prev[itemID]) return prev; // Prevent negative values
      const updatedItems = { ...prev, [itemID]: prev[itemID] - 1 };
      if (updatedItems[itemID] <= 0) delete updatedItems[itemID]; // Remove if zero

      if(token){
        axios.post(
          `${url}/api/cart/remove`,
          {
            itemId:itemID,
          },
          { headers: { token } }
        );  
      }
      return updatedItems;
    
    });
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);

      setFoodList(response.data.data);
      console.log("Food list fetched successfully:", response.data.data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };
const loadCartData = async (token) => {

  
    try {
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token } }
      );
      setcartItems(response.data.cartData);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  

}
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }

    loadData();
  }, []);
  const contextValue = {
    food_list,
    cartItems,
    addTocart,
    removeFromCart,
    setcartItems,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
