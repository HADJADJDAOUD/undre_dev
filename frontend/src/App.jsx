import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlcaeOrder from "./pages/PlcaeOrder/PlcaeOrder";
import { Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlcaeOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
