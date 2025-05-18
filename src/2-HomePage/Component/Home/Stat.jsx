import React from "react";

function Stat() {
  return (
    <>
      <button className="mt-9 mb-0 mr-[118px] ml-auto bg-[#193c76] text-white px-4 py-2 rounded">
        Go to shop
      </button>

      <h1 className="my-[45px] text-center text-[56px] font-extrabold leading-6 tracking-[2.8px]">
        SUN SOLA
      </h1>

      <div className="flex justify-center pb-[65px]">
        <div className="flex flex-col items-center mx-[140px]">
          <img src="/pic/Shop.png" alt="Shop" width={100} />
          <h3 className="text-xl font-semibold">40+</h3>
          <h4>Shop</h4>
        </div>

        <div className="flex flex-col items-center mx-[140px]">
          <img src="/pic/Rating.png" alt="Rating" width={100} />
          <h3 className="text-xl font-semibold">3000+</h3>
          <h4>User Reviews</h4>
        </div>

        <div className="flex flex-col items-center mx-[140px]">
          <img
            src="/pic/Internet.png"
            alt="Internet"
            width={100}
            className="mb-2.5"
          />
          <h3 className="text-xl font-semibold">2M+</h3>
          <h4>People visit</h4>
          <h4>your website</h4>
        </div>
      </div>
    </>
  );
}

export default Stat;
