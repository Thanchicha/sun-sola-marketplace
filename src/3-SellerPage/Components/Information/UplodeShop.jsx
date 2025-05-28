import { useState } from "react";

export default function UploadShop() {
  const [shopImages, setShopImages] = useState([]);

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    const remainingSlots = 6 - shopImages.length;

    const selectedFiles = files.slice(0, remainingSlots); // จำกัดไม่เกิน 6
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setShopImages((prev) => [...prev, ...imageUrls]);
  };

  return (
    <div>
      <label className="block font-medium mb-2">
        Picture of your store <span className="text-red-500">*</span>
      </label>

      <label className="border-2 border-dashed rounded-md w-64 h-40 flex items-center justify-center text-gray-400 cursor-pointer hover:border-gray-500 relative">
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImageUpload}
          disabled={shopImages.length >= 6}
        />
        <span>+ Add picture ({shopImages.length}/6)</span>
      </label>

      {shopImages.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {shopImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Uploaded ${index + 1}`}
              className="w-24 h-24 object-cover rounded-md border"
            />
          ))}
        </div>
      )}
    </div>
  );
}
