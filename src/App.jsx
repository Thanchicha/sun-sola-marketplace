import "./App.css";
import { Routes, Route } from "react-router-dom";

import ForgetPass from "./1-LoginPage/ForgetPass";

import Home from "./2-HomePage/Home";
import AllShop from "./2-HomePage/AllShop";
import Shop from "./2-HomePage/Shop";

import CompanyInform from "./3-SellerPage/CompanyInform";
import Product from "./3-SellerPage/Product";
import MyShop from "./3-SellerPage/MyShop";
import SellerReview from "./3-SellerPage/SellerReview";

import ShopReview from "./4-ReviewPage/ShopReview";
import AddReview from "./4-ReviewPage/AddReview";
import SuccessReview from "./4-ReviewPage/SuccessReview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login/forgetpassword" element={<ForgetPass />} />

        <Route path="/" element={<Home />} />
        <Route path="/allshop" element={<AllShop />} />
        <Route path="/allshop/shop" element={<Shop />} />
        <Route path="/allshop/shop/review" element={<ShopReview />} />
        <Route path="/allshop/shop/review/add" element={<AddReview />} />

        <Route path="/allshop/shop/review/add/success" element={<SuccessReview />} />

        <Route path="/myshop" element={<MyShop />} />
        <Route path="/myshop/information" element={<CompanyInform />} />
        <Route path="/myshop/product" element={<Product />} />
        <Route path="/myshop/review" element={<SellerReview />} />     
      </Routes>
    </>
  );
}

export default App;
