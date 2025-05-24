import React, { useState } from "react";

const Banner = () => {
  const images = [
    "/public/images/home/banner1.png",
    "/public/images/home/banner2.png",
    "/public/images/home/banner3.png",
    "/public/images/home/banner4.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex h-screen p-4 gap-4">
      <div className="w-1/2 flex  justify-center">
        <img
          src={selectedImage}
          alt="banner"
          className="h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-[35px] p-[60px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`baner ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`w-full h-full object-cover rounded-xl cursor-pointer shadow transition-transform duration-200 hover:scale-105 ${
              selectedImage === img ? "ring-4 ring-blue-400" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;