import React from "react";
import { Link } from "react-router-dom";

function ButtonYellow({ to, onClick, value }) {
  return (
    <Link to={to}>
      <button
        onClick={onClick}
        className="text-[#193c76] bg-[#faf54f] font-extrabold text-base w-[152px] h-[45px] rounded-full shadow-md 
                   hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
      >
        {value}
      </button>
    </Link>
  );
}

export default ButtonYellow;
