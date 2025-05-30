import React from "react";

function ShopImage({ ShopImages }) {
  return (
    <div className="grid grid-cols-3">
      {ShopImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`store ${index + 1}`}
          className="w-full h-60 object-cover"
        />
      ))}
    </div>
  );
}

export default ShopImage;
