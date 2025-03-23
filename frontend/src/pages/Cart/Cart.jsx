import React, { useContext } from "react";
import "./Cart.css";

import { StoreContext } from "../../components/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  console.log("this is cart items", cartItems);
  console.log("this is food list", food_list);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{2}</p>
              
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{0}</p>
            </div>
            
          </div>
          <button>PROCED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>if you have a promo code put it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="promo code" />
              <button>Apply</button>  
          
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Cart;
