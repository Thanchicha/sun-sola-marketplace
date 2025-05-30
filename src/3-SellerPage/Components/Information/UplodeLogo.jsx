import React from "react";
import { useState } from "react";
import Asterisk from "../UI/Asterisk";

export default function UploadLogo({onChange, onClick}) {

  return (
    <div>
      <label className="block font-medium mb-2">
        Logo Your store <Asterisk />
      </label>
      <label className="border-2 border-dashed rounded-md w-2/5 h-[250px] flex items-center justify-center text-gray-400 cursor-pointer hover:border-gray-500 relative">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleLogoUpload}
        />
        {imageLogo ? (
          <>
            <img
              src={imageLogo}
              alt="Uploaded Logo"
              className="object-contain h-full"
            />
            <button
              type="button"
              className="absolute top-2 right-2 bg-white rounded-full px-2"
              onClick={() => {
                setImageLogo(null);
                setImageLogoFile(null);
              }}
            >
              ✕
            </button>
          </>
        ) : (
          <span>+ Add picture</span>
        )}
      </label>
    </div>
  );
}
