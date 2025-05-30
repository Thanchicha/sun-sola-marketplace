import React from "react";

function SName({Profile, ShopName, CompanyName}) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={Profile}
        alt="Jiorgdopbp Solar"
        className="rounded-lg w-full h-[320px] object-cover border border-[#193C76] mb-3"
      />
      <h1 className="text-[32px] font-bold">{ShopName}</h1>
      <p className="text-[20px] text-[#000000]">{CompanyName}</p>
    </div>
  );
}

export default SName;
