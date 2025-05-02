import React, { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast.error("Error fetching orders");
      console.log(err);
    }
  };

  const statusHandler = async (e, orderId) => {
    e.preventDefault();

    const response = await axios.post(url + "/api/order/status", {
      orderId: orderId,
      status: e.target.value,
    });
    if (response.data.success) {
      toast.success("Status updated successfully");
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div className="order-item" key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items
                  .map((item) => `${item.name} x${item.quantity}`)
                  .join(", ")}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    "," +
                    order.address.state +
                    "," +
                    order.address.country}
                </p>
              </div>
            </div>
            <p className="order-item-phone">{order.address.phone}</p>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              name=""
              id=""
            >
              <option value="food processing">food processing</option>
              <option value="out of delivery">out of delivery</option>
              <option value="delivered">delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
