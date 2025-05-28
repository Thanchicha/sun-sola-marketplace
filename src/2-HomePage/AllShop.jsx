import React from "react";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import { shopData } from "./Component/AllShop/AllShopMock";
import { Link } from "react-router-dom";

const AllShop = () => {
  return (
    <>
      <Narbar icon={<LeftArrow />} page="All Shop" />
      <div className="mx-[160px] my-[65px]">
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shopData.map((shop, index) => (
            <Link
              to="shop"
              key={index}
              className="border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={shop.image}
                alt="shop"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-md font-semibold">{shop.name}</h2>
                <p className="text-sm text-gray-500">{shop.location}</p>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {"★".repeat(shop.rating)}
                    {"☆".repeat(5 - shop.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({shop.reviews} reviews)
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </>
  );
};

export default AllShop;
