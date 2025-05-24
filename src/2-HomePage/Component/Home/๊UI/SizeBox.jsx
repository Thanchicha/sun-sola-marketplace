import React from "react";

function SizeBox({bgColor, textColor, title, size, content}) {
  return (
    <div className="py-[60px] px-[40px] w-1/3" style={{ backgroundColor: bgColor, color: textColor }}>
      <h2 className="text-[32px]">{title}</h2>
      <p className="text-[16px] pb-[25px]">
        {size}
      </p>
      <p className="text-[18px]">
        {content}
      </p>
    </div>
  );
}

export default SizeBox;
