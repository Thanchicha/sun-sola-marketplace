import React from "react";

function InputField({ label, type, id, value, onChange }) {
  return (
    <>
      <div>
        <label htmlFor={id} className="text-sm">{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[36px] border border-[#C8C8C8] rounded-md shadow-md p-2 text-sm"
        />
      </div>
    </>
  );
}

export default InputField;
