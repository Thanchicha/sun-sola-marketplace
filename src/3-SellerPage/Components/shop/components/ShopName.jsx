import React from "react";

function ShopName() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/public/images/seller/shopLogo.png"
        alt="Jiorgdopbp Solar"
        className="rounded-lg w-full h-[320px] object-cover border border-[#193C76] mb-3"
      />
      <h1 className="text-[32px] font-bold">jiorgdopbp.Shop</h1>
      <p className="text-[20px] text-[#000000]">jiorgdopbp_solar</p>
    </div>
  );
}

export default ShopName;
