import React from "react";
import { useParams } from "react-router-dom";
import ThisShop from "./Components/shop/ThisShop";
import ThisShopProduct from "./Components/shop/ThisShopProduct";
import { mockCompanyDataList } from "./Components/Information/mockCompanyData";
import Narbar from "../0-Component/Navbar";
import ButtonBlue from "../0-Component/UI/ButtonBlue";

function MyShop() {
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
      <Narbar
        icon={
          <img
            src="/public/images/icons/sunsolaLogo.png"
            alt="logo"
            width="78"
          />
        }
        line={{ borderLeft: "2px solid white" }}
        page="My Shop"
      />
      <div className="mx-[160px] my-[65px]">
        <div className="flex mb-[38px]">
          
          <button className="ml-auto mt-4 md:mt-0">
            <ButtonBlue to="/myshop/information/update" value="Update Shop" />
          </button>
        </div>
        <ThisShop shopData={shopDetail} />
        <div className="border-t-3 border-[#D9D9D9] my-[38px]">
          <div className="flex my-[38px]">
            <button className="ml-auto mt-4 md:mt-0">
              <ButtonBlue to="/myshop/product/update" value="Update Product" />
            </button>
          </div>
        </div>
        <ThisShopProduct ShopID={parseInt(id)} />
      </div>
    </>
  );
}

export default MyShop;