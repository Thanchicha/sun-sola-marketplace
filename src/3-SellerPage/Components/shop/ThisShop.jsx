import React, { useEffect, useState } from "react";
import axios from "axios";
import SName from "./components/ShopName";
import ShopReview from "./components/ShopReview";
import ShopImage from "./components/ShopImage";
import ShopDetail from "./components/ShopDetail";
import ShopContact from "./components/ShopContact";
// import mockCompanyData from "../Information/mockCompanyData";

const useMock = false;

function ThisShop({ shopData }) {
  if (!shopData) return null;

  const {
    CompanyName,
    ShopName,
    Title,
    Detail,
    Facebook,
    PhoneCompany,
    LineID,
    CompanyEmail,
    Website,
    Profile,
    ShopImages,
  } = shopData;
  // const [CompanyName, setCompanyName] = useState("");
  // const [ShopName, setShopName] = useState("");
  // const [Title, setTitle] = useState("");
  // const [Detail, setDetail] = useState("");
  // const [Facebook, setFacebook] = useState("");
  // const [PhoneCompany, setPhoneCompany] = useState("");
  // const [LineID, setLineID] = useState("");
  // const [CompanyEmail, setCompanyEmail] = useState("");
  // const [Website, setWebsite] = useState("");
  // const [Profile, setProfile] = useState(null);
  // const [ShopImages, setShopImages] = useState([]);

  // useEffect(() => {
  //   const fetchCompanyData = async () => {
  //     try {
  //       const data = useMock
  //         ? mockCompanyData
  //         : (await axios.get(`http://10.4.53.25:5008/showShopImage/${shopId}`))
  //             .data;

  //       if (Array.isArray(data) && data.length > 0) {
  //         const company = data[0];

  //         setCompanyName(company.CompanyName);
  //         setShopName(company.ShopName);
  //         setTitle(company.Title);
  //         setDetail(company.Detail);
  //         setFacebook(company.Facebook);
  //         setPhoneCompany(company.PhoneCompany);
  //         setLineID(company.LineID);
  //         setCompanyEmail(company.CompanyEmail);
  //         setWebsite(company.Website);
  //         setProfile(company.Profile);
  //         setShopImages(
  //           Array.isArray(company.ShopImages) ? company.ShopImages : []
  //         );
  //       } else {
  //         console.warn("Data is empty or not an array");
  //       }
  //     } catch (err) {
  //       console.error("Error loading data:", err);
  //     }
  //   };

  //   if (shopId) {
  //     fetchCompanyData();
  //   }
  // }, [shopId]);

  return (
    <>
      <div className="flex">
        <div className="w-2/5 flex flex-col md:flex-row items-start mb-10">
          <SName
            Profile={Profile}
            ShopName={ShopName}
            CompanyName={CompanyName}
          />
        </div>
        <div className="w-3/5 pl-3">
          <ShopReview Title={Title} />
        </div>
      </div>

      <ShopImage ShopImages={ShopImages} />

      <div className="flex mt-10">
        <ShopDetail Detail={Detail} />
        <div className="border-l-3 border-[#D9D9D9] ml-7">
          <ShopContact
            Facebook={Facebook}
            LineID={LineID}
            CompanyEmail={CompanyEmail}
            PhoneCompany={PhoneCompany}
            Website={Website}
          />
        </div>
      </div>
    </>
  );
}

export default ThisShop;
