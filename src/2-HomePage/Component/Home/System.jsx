import React from "react";
import SystemBox from "./๊UI/SystemBox";

function System() {
  return (
    <>
      <div className="bg-[#2e2e2e] text-white p-[32px] text-[30px] font-bold px-[100px]">
        ระบบการทำงานของโซลาร์เซลล์แบ่งออกเป็น 2 ประเภทหลัก
      </div>
      <div className="flex">
        <SystemBox
          bgColor="#fcf995"
          title="On-Grid System"
          content="ระบบโซลาร์เซลล์ที่เชื่อมกับไฟบ้านโดยตรง ต้องใช้ Inverter
            แปลงไฟจากกระแสตรงเป็นกระแสสลับ ผลิตไฟได้เฉพาะตอนมีแสงแดด"
        />
        <SystemBox
          bgColor="#11284F"
          textColor="#FFFFFF"
          title="Off-Grid System"
          content="ระบบโซลาร์เซลล์ที่เชื่อมกับแบตเตอรี่ไม่ต่อกับไฟบ้านเก็บพลังงานไว้ใช้ได้ทั้งกลางวันและกลางคืน
            แต่มีราคาสูงจากแบตเตอรี่และค่าดูแลรักษา"
        />
      </div>
      <img
        src="/images/home/solar3.png"
        alt="solar"
        className="w-full"
      />
    </>
  );
}

export default System;
