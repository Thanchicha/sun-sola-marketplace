import React from "react";

function InputField({ label, type, id, value, onChange }) {
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-[#C8C8C8] rounded-md shadow-md p-2"
        />
      </div>
    </>
  );
}

export default InputField;
