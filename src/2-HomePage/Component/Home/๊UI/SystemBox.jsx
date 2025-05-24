import React from "react";

function SystemBox({bgColor,textColor, title, content}) {
  return (
    <div className="py-[60px] px-[100px]" style={{ backgroundColor: bgColor, color: textColor }}>
      <h2 className="text-[32px] pb-[25px]">{title}</h2>
      <p className="text-[18px]">
        {content}
      </p>
    </div>
  );
}

export default SystemBox;
