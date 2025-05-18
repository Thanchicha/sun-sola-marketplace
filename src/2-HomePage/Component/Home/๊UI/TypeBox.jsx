import React from "react";

function TypeBox({ image, title, subtitle, detail, usage }) {
  return (
    <div className="rounded-[10px] border border-[#b8c9e5] bg-gradient-to-b from-[#193c76] via-white to-white shadow-md w-full md:w-[30%]">
      <img
        src={image}
        alt={subtitle}
        className="h-[250px] p-[20px_55px_40px_55px] mx-auto"
      />
      <div className="text-left p-[15px]">
        <div className="text-[#11284f] font-semibold">
          {title}
          <br />({subtitle})
        </div>
        <div className="indent-8 mt-2">{detail}</div>
        <div className="text-[#11284f] font-semibold mt-3">
          เหมาะกับ: <span className="font-normal text-black">{usage}</span>
        </div>
      </div>
    </div>
  );
}

export default TypeBox;
