import React from "react";

function ButtonRole({onClick, role}) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
    >
      {role}
    </button>
  );
}

export default ButtonRole;
