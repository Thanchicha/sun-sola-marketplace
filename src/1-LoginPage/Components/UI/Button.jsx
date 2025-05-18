import React from "react";

function Button({ label, type, onClick = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#343E56] text-white text-xl w-full rounded-4xl shadow-md p-2"
    >
      {label}
    </button>
  );
}

export default Button;
