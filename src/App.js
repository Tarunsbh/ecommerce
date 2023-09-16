import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/components/page/HomePage/HomePage";
import Product from "./customer/components/product/Product";
import Footer from "./customer/components/footer/Footer";
import ProductDetails from "./customer/components/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
        <Footer />
      </div>
    </div>
  );
}

export default App;
