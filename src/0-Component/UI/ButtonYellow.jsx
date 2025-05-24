import React from "react";

function ButtonYellow({onClick, value}) {
  return (
    <button
      onClick={onClick}
      className="text-[#193c76] bg-[#faf54f] font-extrabold text-base w-[158px] h-[50px] rounded-full shadow-md"
    >
      {value}
    </button>
  );
}

export default ButtonYellow;
