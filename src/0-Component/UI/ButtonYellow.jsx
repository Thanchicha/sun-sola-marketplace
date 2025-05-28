import React from "react";
import { Link } from "react-router-dom";

function ButtonYellow({ to, onClick, value }) {
  return (
    <Link to={to}>
      <button
        onClick={onClick}
        className="text-[#193c76] bg-[#faf54f] font-extrabold text-base w-[152px] h-[45px] rounded-full shadow-md"
      >
        {value}
      </button>
    </Link>
  );
}

export default ButtonYellow;
