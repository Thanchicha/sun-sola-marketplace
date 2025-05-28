import React from "react";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import ThisShop from "../3-SellerPage/Components/shop/ThisShop";
import ThisShopProduct from "../3-SellerPage/Components/shop/ThisShopProduct";

function Shop() {
  return (
    <>
      <Narbar icon={<LeftArrow />} page="Shop" />
      <div className="mx-[160px] my-[65px]">
        <ThisShop />
        <div className="py-15">
        <ThisShopProduct /></div>
      </div>
    </>
  );
}

export default Shop;
