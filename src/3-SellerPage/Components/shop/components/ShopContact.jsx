import React from "react";

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
        </ul>
      </div>
    </>
  );
}

export default ShopContact;
