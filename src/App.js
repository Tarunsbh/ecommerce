import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/components/page/HomePage/HomePage";
import Product from "./customer/components/product/Product";
import Footer from "./customer/components/footer/Footer";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CusotmerRouters from "./Routers/CusotmerRouters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CusotmerRouters />}></Route>
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
