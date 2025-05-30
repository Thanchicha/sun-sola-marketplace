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
<<<<<<< HEAD
          <Contact icon="/public/icons/shop/Facebook.svg" value="jjordgobpb Solar" />
          <Contact icon="/public/icons/shop/LINE.svg" value="@jjordgobpbsolar" />
          <Contact icon="/public/icons/shop/Phone.svg" value="099-123-4567" />
          <Contact icon="/public/icons/shop/Gmail Logo.svg" value="contact@jjordgobpbsolar.com" />
          <Contact icon="/public/icons/shop/Geography.svg" value="www.jjordgobpbsolar.com" />
=======
          <li>
            <span className="font-semibold">Facebook: </span>
            {Facebook}
          </li>
          <li>
            <span className="font-semibold">Line: </span>
            {LineID}
          </li>
          <li>
            <span className="font-semibold">Phone: </span>
            {PhoneCompany}
          </li>
          <li>
            <span className="font-semibold">Email: </span> {CompanyEmail}
          </li>
          <li>
            <span className="font-semibold">Website: </span> {Website}
          </li>
>>>>>>> da326233d8e1c6b99386a84f8be034dcb605a4c4
        </ul>
      </div>
    </>
  );
}

export default ShopContact;
