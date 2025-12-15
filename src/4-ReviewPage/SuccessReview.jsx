import React from "react";
import { Link } from "react-router-dom";

function SuccessReview() {
  return (
    <div className="relative h-screen w-screen">
      <img
        src="/images/review/success.png"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl text-[#FFFDFD]">Successful!</h1>
        <Link
          to="/"
          className="text-2xl text-[#FAF54F] underline"
        >
          Return to home page
        </Link>
      </div>
    </div>
  );
}

export default SuccessReview;
