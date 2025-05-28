import React from "react";

function ShopImage() {
  return (
    <div className="flex w-full">
      <img
        src="/public/images/seller/store1.png"
        alt="store 1"
        className="w-1/3"
      />
      <img
        src="/public/images/seller/store2.png"
        alt="store 2"
        className="w-1/3"
      />
      <img
        src="/public/images/seller/store3.png"
        alt="store 3"
        className="w-1/3"
      />
    </div>
  );
}

export default ShopImage;
