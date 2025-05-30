import React from "react";
import { Link } from "react-router-dom";
import ButtonBlue from "../../../0-Component/UI/ButtonBlue";

function Stat() {
  return (
    <>
      <div className="w-full bg-[#fcf995] text-[#193c76] text-right pt-9">
        <div className="mr-[118px]">
          <ButtonBlue to="/allshop" value="Go to shop" />
        </div>

        <h1 className="my-[45px] text-center text-[56px] font-extrabold leading-6 tracking-[2.8px]">
          SUN SOLA
        </h1>

        <div className="flex justify-center pb-[65px]">
          <div className="flex flex-col items-center">
            <img
              src="/public/icons/home/Shop.svg"
              alt="Shop"
              width={100}
              className="mb-2.5 mx-[140px]"
            />
            <h3 className="text-xl font-semibold">40+</h3>
            <h4>Shop</h4>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/public/icons/home/Ratings.svg"
              alt="Rating"
              width={100}
              className="mb-2.5 mx-[140px]"
            />
            <h3 className="text-xl font-semibold">3000+</h3>
            <h4>User Reviews</h4>
          </div>

          <div className="flex flex-col items-center ">
            <img
              src="/public/icons/home/Internet.svg"
              alt="Internet"
              width={100}
              className="mb-2.5 mx-[140px]"
            />
            <h3 className="text-xl font-semibold">2M+</h3>
            <h4>People visit your website</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
