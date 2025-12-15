import React from "react";
import ButtonYellow from "../../../0-Component/UI/ButtonYellow";

function Recommend() {
  return (
    <div className="bg-[#11284F] h-145 flex flex-col text-center">
      <h2 className="text-white text-4xl py-20">แนะนำการเลือกซื้อแผง Solar Cell ที่เหมาะสมกับคุณ</h2>
      <div className="flex items-center justify-center gap-40 pb-15">
        <img src="/images/home/house.png" alt="house" className="h-45" />
        <img src="/images/home/car.png" alt="car" className="h-35" />
      </div>
      <ButtonYellow to="/recommend" value="See more" />
    </div>
  );
}

export default Recommend;