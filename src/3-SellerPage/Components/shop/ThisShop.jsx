import React from "react";

import SName from "./components/ShopName";
import ShopReview from "./components/ShopReview";
import ShopImage from "./components/ShopImage";
import ShopDetail from "./components/ShopDetail";
import ShopContact from "./components/ShopContact";

function ThisShop() {
  return (
    <>
      <div className="flex">
        <div className="w-2/5 flex flex-col md:flex-row items-start mb-10">
          <SName
            Profile="/public/images/seller/shopLogo.png"
            ShopName="jiorgdopbp.Shop"
            CompanyName="CompanyName"
          />
        </div>
        <div className="w-3/5 pl-3">
          <ShopReview Title="สร้างอนาคตสีเขียว เริ่มต้นด้วยพลังงานแสงอาทิตย์" />
        </div>
      </div>

      <ShopImage
        ShopImages={[
          "/images/seller/store1.png",
          "/images/seller/store2.png",
          "/images/seller/store3.png",
        ]}
      />

      <div className="flex mt-10">
        <ShopDetail
          Detail="Jjordgobpb Solar ก่อตั้งขึ้นในปี พ.ศ. 2557
        ด้วยความมุ่งมั่นที่จะนำพลังงานสะอาดจากแสงอาทิตย์มาใช้ให้เกิดประโยชน์สูงสุดในประเทศไทย
        เราเชี่ยวชาญด้าน การวิเคราะห์และติดตั้งระบบโซลาร์เซลล์ครบวงจร
        ทั้งสำหรับบ้านพักอาศัย ธุรกิจ และโรงงานอุตสาหกรรม
        ตลอดกว่า 10 ปี ที่ผ่านมา เราได้ให้บริการลูกค้ามาแล้วมากกว่า 1,000
        โครงการทั่วประเทศ
        ทีมงานมืออาชีพและระบบการวิเคราะห์ที่ได้รับการรับรองมาตรฐานระดับสากล
        เราใส่ใจในทุกขั้นตอน ตั้งแต่การวิเคราะห์เบื้องต้นหน้างาน
        การเลือกใช้วัสดุคุณภาพสูง ไปจนถึงการติดตั้งที่ได้มาตรฐาน
        เพื่อให้ลูกค้าทุกท่านได้รับประสิทธิภาพการผลิตพลังงานสูงสุดและผลตอบแทนที่คุ้มค่าที่สุด"
        />
        <div className="border-l-3 border-[#D9D9D9] ml-7">
          <ShopContact
            Facebook="jjordgobpb Solar"
            LineID="@jjordgobpbsolar"
            CompanyEmail="contact@jjordgobpbsolar.com"
            PhoneCompany="099-123-4567"
            Website="https://www.jiorgdopbpsolar.com"
          />
        </div>
      </div>
    </>
  );
}

export default ThisShop;
