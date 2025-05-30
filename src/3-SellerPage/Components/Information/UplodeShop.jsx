import React from "react";

export default function UploadShop({ onChange }) {
  const [shopImages, setShopImages] = useState([]); // preview array shop
  const [shopImageFiles, setShopImageFiles] = useState([]); // shop array file
  const handleShopUpload = (event) => {
    const files = Array.from(event.target.files);
    const remainingSlots = 6 - shopImages.length;

    const selectedFiles = files.slice(0, remainingSlots);
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    setShopImageFiles((prev) => [...prev, ...selectedFiles]);
    setShopImages((prev) => [...prev, ...imageUrls]); // show preview
  };
  return (
    <div>
      <label className="block font-medium mb-2">
        Picture of your store <Asterisk />
      </label>
      <label className="border-2 border-dashed rounded-md w-64 h-40 flex items-center justify-center text-gray-400 cursor-pointer hover:border-gray-500 relative">
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleShopUpload}
          disabled={shopImages.length >= 6}
        />
        <span>+ Add picture ({shopImages.length}/6)</span>
      </label>
      {shopImages.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {shopImages.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Uploaded ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md border"
              />
              <button
                type="button"
                onClick={() => {
                  const updatedImages = shopImages.filter(
                    (_, i) => i !== index
                  );
                  const updatedFiles = shopImageFiles.filter(
                    (_, i) => i !== index
                  );
                  setShopImages(updatedImages);
                  setShopImageFiles(updatedFiles);
                }}
                className="absolute top-0 right-0 bg-white text-red-600 rounded-full px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
