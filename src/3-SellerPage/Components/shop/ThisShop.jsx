import React from "react";

import ShopName from "./components/ShopName";
import ShopReview from "./components/ShopReview";
import ShopImage from "./components/ShopImage";
import ShopDetail from "./components/ShopDetail";
import ShopContact from "./components/ShopContact";

function ThisShop() {
  return (
    <>
      <div className="flex">
        <div className="w-2/5 flex flex-col md:flex-row items-start mb-10">
          <ShopName />
        </div>
        <div className="w-3/5 pl-3">
          <ShopReview />
        </div>
      </div>

      <ShopImage />

      <div className="flex mt-10">
        <ShopDetail />
        <div className="border-l-3 border-[#D9D9D9] ml-7">
          <ShopContact />
        </div>
      </div>
    </>
  );
}

export default ThisShop;
