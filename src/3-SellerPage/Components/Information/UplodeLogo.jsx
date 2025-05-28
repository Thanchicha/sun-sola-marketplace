import React from "react";
import { useState } from "react";
import Asterisk from "../UI/Asterisk";

export default function UploadLogo() {
  const [imageLogo, setImageLogo] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // ตัวอย่าง: จำลองการอัปโหลดและได้ URL กลับ
    const fakeUpload = (file) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(file)); // ใช้ URL ชั่วคราวแทนของจริง
        }, 1000);
      });

    const url = await fakeUpload(file);
    setImageLogo(url);
  };

  return (
    <div>
      <label className="block font-medium mb-2">
        Logo Your store <Asterisk />
      </label>

      <label className="border-2 border-dashed rounded-md w-2/5 h-[250px] flex items-center justify-center text-gray-400 cursor-pointer hover:border-gray-500">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        {imageLogo ? (
          <img
            src={imageLogo}
            alt="Uploaded"
            className="object-contain h-full"
          />
        ) : (
          <span>+ Add picture</span>
        )}
      </label>
    </div>
  );
}
