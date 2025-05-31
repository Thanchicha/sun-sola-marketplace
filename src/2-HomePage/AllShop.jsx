import React, { useRef } from "react";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import { shopData } from "./Component/AllShop/AllShopMock";
import { Link } from "react-router-dom";

const AllShop = () => {
  const allShopsRef = useRef(null);

  const scrollToAllShops = () => {
    allShopsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // แก้ให้ recommended กับ all ดึง 8 ร้าน (4x2)
  const nearbyShops = shopData.slice(0, 8);
    const recommendedShops = [...shopData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6); // 3x2
  const allShops = shopData;

  // ใช้ class ตายตัวแทน dynamic tailwind (tailwind ไม่รองรับ string interpolation ใน class)
  const renderShops = (shops, columns = 4) => {
    const gridClass =
      columns === 4
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

    return (
      <div className={`grid ${gridClass} gap-4`}>
        {shops.map((shop, index) => (
          <Link
            to="shop"
            key={index}
            className="border rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={shop.image}
              alt="shop"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <h2 className="text-sm font-semibold">{shop.name}</h2>
              <p className="text-xs text-gray-500">{shop.location}</p>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(shop.rating)}
                  {"☆".repeat(5 - shop.rating)}
                </div>
                <span className="ml-2 text-xs text-gray-600">
                  ({shop.reviews} reviews)
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <Narbar icon={<LeftArrow />} page="All Shop" />
      <div className="mx-[40px] lg:mx-[160px] my-[40px] space-y-10">

        {/* ปุ่มลัดไปยัง All shops */}
        <div className="flex justify-end">
          <button
            onClick={scrollToAllShops}
            className="text-sm text-blue-700 font-semibold flex items-center space-x-1 hover:underline"
          >
            <span>All shops</span>
            <span>&raquo;</span>
          </button>
        </div>

        {/* Section: Shops near you */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-blue-900">
            Shops near you
          </h2>
          {renderShops(nearbyShops, 4)}
        </section>

        {/* Section: Recommended shops for you */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-blue-900">
            Recommended shops for you
          </h2>
          <div className="px-40">{renderShops(recommendedShops, 3)}</div>
        </section>

        {/* Section: All shops */}
        <section ref={allShopsRef}>
          <h2 className="text-lg font-semibold mb-4 text-blue-900">All shops</h2>
          {renderShops(allShops, 4)}
        </section>
      </div>
    </>
  );
};

export default AllShop;
