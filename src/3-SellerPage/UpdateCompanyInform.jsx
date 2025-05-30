import React, { useState, useEffect } from "react";
import axios from "axios";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import Asterisk from "./Components/UI/Asterisk";
import InputSeller from "./Components/UI/InputSeller";
import mockCompanyData from "./Components/Information/mockCompanyData"; // ปรับ path ตามโครงสร้างโปรเจกต์

const useMock = true; // ตั้งค่านี้เพื่อสลับระหว่าง mock / API จริง


function UpdateCompanyInform() {
  const [CompanyName, setCompanyName] = useState("");
  const [ShopName, setShopName] = useState("");
  const [Title, setTitle] = useState("");
  const [Detail, setDetail] = useState("");
  const [Facebook, setFacebook] = useState("");
  const [Phone, setPhone] = useState("");
  const [Line, setLine] = useState("");
  const [Email, setEmail] = useState("");
  const [Website, setWebsite] = useState("");
  const [imageLogo, setImageLogo] = useState(null); // preview logo
  const [imageLogoFile, setImageLogoFile] = useState(null); // logo file

  const [shopImages, setShopImages] = useState([]); // preview array shop
  const [shopImageFiles, setShopImageFiles] = useState([]); // shop array file

  const [loading, setLoading] = useState(false);

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageLogoFile(file);
    setImageLogo(URL.createObjectURL(file)); // show preview
  };

  const handleShopUpload = (event) => {
    const files = Array.from(event.target.files);
    const remainingSlots = 6 - shopImages.length;

    const selectedFiles = files.slice(0, remainingSlots);
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    setShopImageFiles((prev) => [...prev, ...selectedFiles]);
    setShopImages((prev) => [...prev, ...imageUrls]); // show preview
  };

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        if (useMock) {
          const data = mockCompanyData;
          setCompanyName(data.CompanyName);
          setShopName(data.ShopName);
          setTitle(data.Title);
          setDetail(data.Detail);
          setFacebook(data.Facebook);
          setPhone(data.Phone);
          setLine(data.Line);
          setEmail(data.Email);
          setWebsite(data.Website);
          setImageLogo(data.LogoUrl);
          setShopImages(data.ShopImageUrls);
        } else {
          const response = await axios.get(
            "http://10.4.53.25:5008/sellerAddShop"
          );
          const data = response.data;
          setCompanyName(data.CompanyName);
          setShopName(data.ShopName);
          setTitle(data.Title);
          setDetail(data.Detail);
          setFacebook(data.Facebook);
          setPhone(data.Phone);
          setLine(data.Line);
          setEmail(data.Email);
          setWebsite(data.Website);
          setImageLogo(data.LogoUrl);
          setShopImages(data.ShopImageUrls);
        }
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };

    fetchCompanyData();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (imageLogoFile) {
      formData.append("Logo", imageLogoFile);
    }

    shopImageFiles.forEach((file, i) => {
      formData.append(`ShopImage${i}`, file);
    });

    if (
      !CompanyName ||
      !ShopName ||
      !Title ||
      !Detail ||
      !Phone ||
      !Email ||
      !imageLogoFile ||
      shopImageFiles.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("CompanyName", CompanyName);
    formData.append("ShopName", ShopName);
    formData.append("Title", Title);
    formData.append("Detail", Detail);
    formData.append("Facebook", Facebook);
    formData.append("Phone", Phone);
    formData.append("Line", Line);
    formData.append("Email", Email);
    formData.append("Website", Website);
    formData.append("Logo", imageLogoFile);
    shopImageFiles.forEach((file, i) => formData.append(`ShopImage${i}`, file));

    setLoading(true);
    try {
      await axios.put("http://your-api-url.com/company/123", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Success! Company information submitted.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Narbar icon={<LeftArrow />} page="Company Information" />
      <div className="mx-[160px] my-[70px]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Logo Upload */}
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

          {/* Company & Shop Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputSeller
              label={
                <>
                  Company Name <Asterisk />
                </>
              }
              type="text"
              id="CompanyName"
              value={CompanyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <InputSeller
              label={
                <>
                  Shop Name <Asterisk />
                </>
              }
              type="text"
              id="ShopName"
              value={ShopName}
              onChange={(e) => setShopName(e.target.value)}
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
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={Detail}
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
          </div>

          {/* Shop Picture */}
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

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputSeller
              label="Facebook"
              type="text"
              id="Facebook"
              value={Facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
            <InputSeller
              label={
                <>
                  Phone <Asterisk />
                </>
              }
              type="tel"
              id="PhoneCompany"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div />
            <InputSeller
              label="Line"
              type="text"
              id="Line"
              value={Line}
              onChange={(e) => setLine(e.target.value)}
            />
            <InputSeller
              label={
                <>
                  E-mail <Asterisk />
                </>
              }
              type="email"
              id="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div />
            <InputSeller
              label="Website"
              type="url"
              id="Website"
              value={Website}
              onChange={(e) => setWebsite(e.target.value)}
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
              disabled={loading}
              className={`px-6 py-2 rounded-md text-white ${
                loading ? "bg-blue-400" : "bg-blue-900"
              }`}
            >
              {loading ? "Submitting..." : "Next"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateCompanyInform;
