import "./App.css";
import { Routes, Route } from "react-router-dom";

import ForgetPass from "./1-LoginPage/ForgetPass";

import Home from "./2-HomePage/Home";
import AllShop from "./2-HomePage/AllShop";
import Shop from "./2-HomePage/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login/forgetpassword" element={<ForgetPass />} />

        <Route path="/" element={<Home />} />
        <Route path="/allshop" element={<AllShop />} />
        <Route path="/allshop/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
