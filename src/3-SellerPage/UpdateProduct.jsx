import React, { useState, useEffect } from "react";
import axios from "axios";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import Asterisk from "./Components/UI/Asterisk";
import InputSeller from "./Components/UI/InputSeller";
import mockProductData from "./Components/product/mockProductData";

function UpdateProduct() {
  const [products, setProducts] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    // โหลด mock data เข้า state
    setProducts(mockProductData);
  }, []);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updated = [...products];
      updated[index].Image && URL.revokeObjectURL(updated[index].Image);
      updated[index].Image = URL.createObjectURL(file);
      updated[index].ImageFile = file;
      setProducts(updated);
    }
  };

  const handleChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  const handleAddProduct = () => {
    setProducts([
      ...products,
      { Name: "", Detail: "", Price: "", Image: null, ImageFile: null },
    ]);
  };

  const handleDeleteProduct = () => {
    const updated = [...products];
    updated.splice(deleteIndex, 1);
    setProducts(updated);
    setDeleteIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const product of products) {
      if (
        !product.Name ||
        !product.Detail ||
        !product.Price ||
        !product.ImageFile
      ) {
        alert("กรุณากรอกข้อมูลสินค้าให้ครบทุกช่อง");
        return;
      }
      if (isNaN(product.Price) || Number(product.Price) <= 0) {
        alert("กรุณาใส่ราคาสินค้าให้ถูกต้อง");
        return;
      }
    }

    try {
      for (const product of products) {
        const formData = new FormData();
        formData.append("Name", product.Name);
        formData.append("Detail", product.Detail);
        formData.append("Price", product.Price);
        formData.append("Image", product.ImageFile);

        await axios.put("https://your-api.com/products/update", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      alert("อัปเดตข้อมูลสินค้าสำเร็จแล้ว ✅");

      setProducts([
        { Name: "", Detail: "", Price: "", Image: null, ImageFile: null },
      ]);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการอัปเดต:", error);
      alert("เกิดข้อผิดพลาดในการอัปเดตข้อมูล ❌");
    }
  };

  return (
    <>
      <Narbar icon={<LeftArrow />} page="Product" />
      <div className="mx-[160px] my-[70px] space-y-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {products.map((product, index) => (
            <div key={index} className="border p-6 rounded-xl shadow relative">
              <div className="w-2/5">
                <label className="block font-medium mb-2">
                  Upload Product Image <Asterisk />
                </label>
                <label className="border-2 border-dashed rounded-md h-[250px] flex items-center justify-center text-gray-400 cursor-pointer hover:border-gray-500 relative">
                  <input
                    type="file"
                    accept="Image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, index)}
                  />
                  {product.Image ? (
                    <>
                      <img
                        src={product.Image}
                        alt="Uploaded Product"
                        className="object-contain h-full"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 bg-white rounded-full px-2"
                        onClick={() => {
                          const updated = [...products];
                          updated[index].Image = null;
                          updated[index].ImageFile = null;
                          setProducts(updated);
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <InputSeller
                  label={
                    <>
                      Products Name <Asterisk />
                    </>
                  }
                  type="text"
                  id={`Name-${index}`}
                  value={product.Name}
                  onChange={(e) => handleChange(index, "Name", e.target.value)}
                />
              </div>

              <div className="w-2/3 pt-4">
                <label className="block font-medium mb-1">
                  Detail <Asterisk />
                </label>
                <textarea
                  rows={6}
                  id={`Detail-${index}`}
                  value={product.Detail}
                  onChange={(e) =>
                    handleChange(index, "Detail", e.target.value)
                  }
                  className="w-full border rounded-md px-3 py-2 resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <InputSeller
                  label={
                    <>
                      Price <Asterisk />
                    </>
                  }
                  type="text"
                  id={`Price-${index}`}
                  value={
                    product.Price === ""
                      ? ""
                      : Number(product.Price).toLocaleString("en-US")
                  }
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/,/g, ""); // ลบ comma
                    if (/^\d*$/.test(rawValue)) {
                      handleChange(index, "Price", rawValue); // เก็บเป็น string ของตัวเลข
                    }
                  }}
                />
              </div>

              {products.length > 1 && (
                <button
                  type="button"
                  className="absolute top-3 right-3 text-red-500 underline text-sm"
                  onClick={() => setDeleteIndex(index)}
                >
                  Delete Product
                </button>
              )}
            </div>
          ))}

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleAddProduct}
              className="text-blue-800 font-medium"
            >
              + Add Product
            </button>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </form>

        {/* Modal */}
        {deleteIndex !== null && (
          <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
  <div className="relative bg-gray-100 p-10 rounded-lg shadow-md w-130">
    {/* ปุ่มกากบาท */}
    <button
      onClick={() => setDeleteIndex(null)}
      className="absolute top-3 right-5 text-gray-500 hover:text-gray-700 text-xl font-bold cursor-pointer"
    >
      ×
    </button>

    <p className="text-lg mb-6 text-center">
      Do you want to remove a product from your shop?
    </p>

    <div className="flex justify-center space-x-4">
      <button
        onClick={() => setDeleteIndex(null)}
        className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer"
      >
        Cancel
      </button>
      <button
        onClick={handleDeleteProduct}
        className="px-4 py-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 cursor-pointer"
      >
        Confirm
      </button>
    </div>
  </div>
</div>


        )}
      </div>
    </>
  );
}

export default UpdateProduct; 
