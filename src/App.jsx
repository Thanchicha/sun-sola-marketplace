import "./App.css";
import { Routes, Route } from "react-router-dom";
import RequireSeller from "./RequireSeller";

import ForgetPass from "./1-LoginPage/ForgetPass";

import Home from "./2-HomePage/Home";
import AllShop from "./2-HomePage/AllShop";
import Shop from "./2-HomePage/Shop";

import CreateCompanyInform from "./3-SellerPage/CreateCompanyInform";
import UpdateCompanyInform from "./3-SellerPage/UpdateCompanyInform";
import CreateProduct from "./3-SellerPage/CreateProduct";
import UpdateProduct from "./3-SellerPage/UpdateProduct";

import MyShop from "./3-SellerPage/MyShop";
import SellerReview from "./3-SellerPage/SellerReview";

import ShopReview from "./4-ReviewPage/ShopReview";
import AddReview from "./4-ReviewPage/AddReview";
import UpdateReview from "./4-ReviewPage/UpdateReview";
import SuccessReview from "./4-ReviewPage/SuccessReview";

import AddressForm from "./3-SellerPage/Components/Information/AdressForm";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/login/forgetpassword" element={<ForgetPass />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/allshop" element={<AllShop />} />
        <Route path="/allshop/shop/:id" element={<Shop />} />
        <Route path="/allshop/shop/:id/review" element={<ShopReview />} />
        <Route path="/allshop/shop/:id/review/add" element={<AddReview />} />
        <Route path="/allshop/shop/:id/review/update" element={<UpdateReview />} />
        <Route
          path="/allshop/shop/review/add/success"
          element={<SuccessReview />}
        />
        {/* <Route element={<RequireSeller />}> */}
          <Route path="/myshop/:id" element={<MyShop />} />
          {/* <Route path="/myshop/:id/address" element={<AddressForm />} /> */}
          <Route path="/myshop/:id/information" element={<CreateCompanyInform />} />
          <Route path="/myshop/:id/information/update" element={<UpdateCompanyInform />} />
          <Route path="/myshop/:id/product/" element={<CreateProduct />} />
          <Route path="/myshop/:id/product//update" element={<UpdateProduct />} />
          <Route path="/myshop/:id/review" element={<SellerReview />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
