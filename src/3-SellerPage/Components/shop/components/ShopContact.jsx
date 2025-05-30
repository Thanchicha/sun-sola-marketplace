import React from "react";
import Contact from "./UI/Contact";

function ShopContact() {
  return (
    <>
      <h3 className="ml-3 font-bold text-lg">Contact Us:</h3>
      <div className="ml-11">
        <ul className="space-y-2 mt-2">
          <Contact icon="/public/icons/shop/Facebook.svg" value="jjordgobpb Solar" />
          <Contact icon="/public/icons/shop/LINE.svg" value="@jjordgobpbsolar" />
          <Contact icon="/public/icons/shop/Phone.svg" value="099-123-4567" />
          <Contact icon="/public/icons/shop/Gmail Logo.svg" value="contact@jjordgobpbsolar.com" />
          <Contact icon="/public/icons/shop/Geography.svg" value="www.jjordgobpbsolar.com" />
        </ul>
      </div>
    </>
  );
}

export default ShopContact;
