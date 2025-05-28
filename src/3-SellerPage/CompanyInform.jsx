import React from "react";
import { useState } from "react";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import Asterisk from "./Components/UI/Asterisk";
import InputSeller from "./Components/UI/InputSeller";

import UploadLogo from "./Components/Information/UplodeLogo";
import UploadShop from "./Components/Information/UplodeShop";

function CompanyInform() {
  return (
    <>
      <Narbar icon={<LeftArrow />} page="Company Information" />
      <div className="mx-[160px] my-[70px]">
        <form className="space-y-6">
          {/* Logo Upload */}
          <UploadLogo />

          {/* Company and Store Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputSeller
              label={
                <>
                  Company Name <Asterisk />
                </>
              }
              type="text"
              id="CompanyName"
              // value={CompanyName}
              // onChange={setCompanyName}
            />
            <InputSeller
              label={
                <>
                  Shop Name <Asterisk />
                </>
              }
              type="text"
              id="ShopName"
              // value={ShopName}
              // onChange={setShopName}
            />
          </div>

          {/* Slogan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputSeller
              label={
                <>
                  Slogan your Store <Asterisk />
                </>
              }
              type="text"
              id="Title"
              // value={Title}
              // onChange={setTitle}
            />
          </div>

          {/* Detail */}
          <div className="w-2/3">
            <label className="block font-medium mb-1">
              Detail <Asterisk />
            </label>
            <textarea
              rows={6}
              className="w-full border rounded-md px-3 py-2 resize-none"
              id="Detail"
              // value={Detail}
              // onChange={setDetail}
            ></textarea>
          </div>

          {/* Store Picture */}
          <UploadShop />

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputSeller
              label="Facebook"
              type="text"
              id="Facebook"
              // value={Facebook}
              // onChange={setFacebook}
            />
            <InputSeller
              label={
                <>
                  Phone <Asterisk />
                </>
              }
              type="tel"
              id="PhoneCompany"
              // value={PhoneCompany}
              // onChange={setPhoneCompany}
            />
            <div />
            <InputSeller
              label="Line"
              type="text"
              id="Line"
              // value={Line}
              // onChange={setLine}
            />
            <InputSeller
              label={
                <>
                  E-mail <Asterisk />
                </>
              }
              type="CompanyEmail"
              id="email"
              // value={CompanyEmail}
              // onChange={setCompanyEmail}
            />
            <div />
            <InputSeller
              label="Website"
              type="url"
              id="Website"
              // value={Website}
              // onChange={setWebsite}
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

export default CompanyInform;
