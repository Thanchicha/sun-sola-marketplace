import React from "react";

function InputSeller({ label, type, id, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2"
      />
    </div>
  );
}

export default InputSeller;
