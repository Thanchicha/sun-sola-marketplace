import React from "react";
import SizeBox from "./๊UI/SizeBox";
import { Link } from "react-router-dom";

function Size() {
  return (
    <>
      <div className="p-[32px] text-[30px] font-bold px-[40px]">
        ตรวจสอบขนาดและน้ำหนักของโซลาร์เซลล์ให้สอดคล้องกับพื้นที่ที่จะนำไปติดตั้ง
      </div>
      <div className="flex">
        <SizeBox
          bgColor="#11284F"
          textColor="#FFFFFF"
          title="แผงขนาดเล็ก"
          size="มีขนาดประมาณ 0.5 x 1 เมตร และน้ำหนัก 5-10 กิโลกรัม"
          content="เหมาะสำหรับพื้นที่ติดตั้งที่มีจำกัด เช่น โซลาร์เซลล์แบบ พกพา
            ระบบไฟส่องสว่าง ชุดนอนนา เป็นต้น"
        />
        <SizeBox
          bgColor="#2E2E2E"
          textColor="#FFFFFF"
          title="แผงขนาดกลาง"
          size="เป็นขนาดที่นิยมใช้กันในบ้านเรือนขนาดเล็กไปจนถึงขนาดกลาง"
          content="มีขนาดประมาณ 1 x 1.7 เมตร และน้ำหนัก 15-20 กิโลกรัม
            ซึ่งโดยส่วนใหญ่แล้วมักจะใช้มากกว่า 1 แผง
            จึงต้องเตรียมพื้นที่ติดตั้งให้เพียงพอ"
        />
        <SizeBox
          bgColor="#fcf995"
          title="แผงขนาดใหญ่"
          size="มีขนาดประมาณ 1.2 x 2 เมตร และน้ำหนัก 25 กิโลกรัมขึ้นไป"
          content="ใช้พื้นที่ติดตั้งค่อนข้างมาก โดยส่วนใหญ่แล้วจึงนิยมใช้สำหรับ
            เชิงพาณิชย์ โรงงานอุตสาหกรรม หรือโซลาร์ฟาร์มเป็นหลัก"
        />
      </div>
      <div>
        <Link
          to="/allshop"
          className="block text-center text-[#8E8E8E] text-[20px] underline pt-[50px] pb-[120px]"
        >
          Go to shop
        </Link>
      </div>
    </>
  );
}

export default Size;
