import React from "react";
import { Link } from "react-router-dom";

function ButtonBlue({to, value}) {
  return (
    <Link
      to={to}
      className="ml-auto bg-[#193c76] text-white py-3 px-5 text-base w-[158px] h-[50px] rounded-full shadow-md"
    >
      {value}
    </Link>
  );
}

export default ButtonBlue;
