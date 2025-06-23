import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import { Link } from "react-router-dom";
import { mockCompanyDataList } from "../3-SellerPage/Components/Information/mockCompanyData";

const useMock = true;

const AllShop = () => {
  const [shopData, setShopData] = useState([]);

  const allShopsRef = useRef(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        let shops = [];

        if (useMock) {
          console.log("Using mock data...");
          shops = mockCompanyDataList;
        } else {
          const response = await axios.get(
            "http://10.4.53.25:5008/showAllShop"
          );
          shops = response.data;
        }

        const formatted = shops.map((shop) => ({
          id: shop.ShopID ?? shop.id,
          name: shop.ShopName ?? shop.name,
          location: shop.Location || "Thailand",
          image:
            shop.Profile?.startsWith?.("/public") && !useMock
              ? `http://10.4.53.25:5008${shop.Profile}`
              : shop.image ?? shop.Profile,
          rating: Math.round(shop.AverageScore) || 0, // เปลี่ยนตรงนี้
          reviews: shop.TotalReviews || 0, // เปลี่ยนตรงนี้
        }));

        setShopData(formatted);
      } catch (error) {
        console.error("Failed to fetch shops", error);
      }
    };

    fetchShops();
  }, []);

  const scrollToAllShops = () => {
    allShopsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nearbyShops = shopData.slice(0, 8);
  const recommendedShops = [...shopData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  const allShops = shopData;

  const renderShops = (shops, columns = 4) => {
    const gridClass =
      columns === 4
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

    return (
      <div className={`grid ${gridClass} gap-4`}>
        {shops.map((shop, index) => (
          <Link
            to={`shop/${shop.id}`} // ส่งไอดีร้านไปใน URL
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

        {/* Section: Recommended shops for you */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-blue-900">
            Recommended shops for you
          </h2>
          <div className="px-40">{renderShops(recommendedShops, 3)}</div>
        </section>

        {/* Section: All shops */}
        <section ref={allShopsRef}>
          <h2 className="text-lg font-semibold mb-4 text-blue-900">
            All shops
          </h2>
          {renderShops(allShops, 4)}
        </section>
      </div>
    </>
  );
};

export default AllShop;
