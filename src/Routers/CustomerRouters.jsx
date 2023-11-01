import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../customer/components/page/HomePage/HomePage";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/footer/Footer";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/product/Product";
import ProductDetails from "../customer/components/productDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/acount/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
