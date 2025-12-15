import React from "react";
import Contact from "./UI/Contact";

function ShopContact({
  Facebook,
  LineID,
  CompanyEmail,
  PhoneCompany,
  Website,
}) {
  return (
    <>
      <h3 className="ml-3 font-bold text-lg">Contact Us:</h3>
      <div className="ml-11">
        <ul className="space-y-2 mt-2">
          <Contact icon="/icons/shop/Facebook.svg" value={Facebook} />
          <Contact icon="/icons/shop/LINE.svg" value={LineID} />
          <Contact icon="/icons/shop/Phone.svg" value={CompanyEmail} />
          <Contact icon="/icons/shop/Gmail Logo.svg" value={PhoneCompany} />
          <Contact icon="/icons/shop/Geography.svg" value={Website} />
        </ul>
      </div>
    </>
  );
}

export default ShopContact;
