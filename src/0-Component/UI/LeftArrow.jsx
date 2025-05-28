import React from "react";
import { useNavigate } from "react-router-dom";

function LeftArrow() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.613 24.9999L36.8899 7.72304L33.9436 4.77676L13.7205 24.9999L33.9436 45.223L36.8899 42.2768L19.613 24.9999Z"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
}

export default LeftArrow;
