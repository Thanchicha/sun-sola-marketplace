import React from "react";
import { useParams } from "react-router-dom";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import ThisShop from "../3-SellerPage/Components/shop/ThisShop";
import ThisShopProduct from "../3-SellerPage/Components/shop/ThisShopProduct";
import { mockCompanyDataList } from "../3-SellerPage/Components/Information/mockCompanyData";

function Shop() {
  const { id } = useParams(); // ดึง id จาก URL
  const shopDetail = mockCompanyDataList.find(
    (shop) => shop.ShopID === Number(id)
  );

  if (!shopDetail) {
    return (
      <div className="text-center mt-10 text-red-500">ไม่พบข้อมูลร้าน</div>
    );
  }

  return (
    <>
      <Narbar icon={<LeftArrow />} page="Shop" />
      <div className="mx-[160px] my-[65px]">
        <ThisShop shopData={shopDetail} />
        <div className="py-15">
          <ThisShopProduct ShopID={parseInt(id)} />;
        </div>
      </div>
    </>
  );
}

export default Shop;
