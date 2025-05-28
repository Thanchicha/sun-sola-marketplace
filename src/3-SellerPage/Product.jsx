import React from "react";
import { useState } from "react";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import Asterisk from "./Components/UI/Asterisk";
import InputSeller from "./Components/UI/InputSeller";

import UploadLogo from "./Components/Information/UplodeLogo";
import UploadShop from "./Components/Information/UplodeShop";

function Product() {
  return (
    <>
      <Narbar icon={<LeftArrow />} page="Product" />
      <div className="mx-[160px] my-[70px]">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputSeller
              label={
                <>
                  Products Name <Asterisk />
                </>
              }
              type="text"
              id="Name"
              // value={Name}
              // onChange={setName}
            />
          </div>

          <div className="w-2/3">
            <label className="block font-medium mb-1">
              Detail <Asterisk />
            </label>
            <textarea
              rows={6}
              id="Detail"
              // value={Detail}
              // onChange={setDetail}
              className="w-full border rounded-md px-3 py-2 resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputSeller
              label={
                <>
                  Price <Asterisk />
                </>
              }
              type="number"
              id="Price"
              // value={Price}
              // onChange={setPrice}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              className="bg-gray-200 text-black px-6 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Product;
