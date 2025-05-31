import React, { useState } from "react";
import axios from "axios"; // อย่าลืม import axios นะครับ
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import Asterisk from "./Components/UI/Asterisk";
import InputSeller from "./Components/UI/InputSeller";

function Product() {
  const [products, setProducts] = useState([
    { name: "", detail: "", price: "", image: null, imageFile: null },
  ]);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updated = [...products];
      updated[index].image = URL.createObjectURL(file);
      updated[index].imageFile = file;
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
      { name: "", detail: "", price: "", image: null, imageFile: null },
    ]);
  };

  const handleDeleteProduct = () => {
    if (deleteIndex === null) return;
    const updated = [...products];
    updated.splice(deleteIndex, 1);
    setProducts(updated);
    setDeleteIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    for (const product of products) {
      if (
        !product.name ||
        !product.detail ||
        !product.price ||
        !product.imageFile
      ) {
        alert("กรุณากรอกข้อมูลสินค้าให้ครบทุกช่อง");
        return;
      }
      if (isNaN(product.price) || Number(product.price) <= 0) {
        alert("กรุณาใส่ราคาสินค้าให้ถูกต้อง");
        return;
      }
    }

    try {
      for (const product of products) {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("detail", product.detail);
        formData.append("price", product.price);
        formData.append("image", product.imageFile); // ไฟล์จริง
        formData.append("imageName", product.imageFile.name); // ⬅️ เพิ่มชื่อไฟล์

        await axios.post("http://10.4.53.25:5008/sellerAddProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      alert("เพิ่มข้อมูลสินค้าสำเร็จ ✅");
      setProducts([
        { name: "", detail: "", price: "", image: null, imageFile: null },
      ]);
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("ไม่สามารถเพิ่มข้อมูลสินค้าได้ ❌");
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
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, index)}
                  />
                  {product.image ? (
                    <>
                      <img
                        src={product.image}
                        alt="Uploaded Product"
                        className="object-contain h-full"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 bg-white rounded-full px-2"
                        onClick={() => {
                          const updated = [...products];
                          updated[index].image = null;
                          updated[index].imageFile = null;
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
                  value={product.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </div>

              <div className="w-2/3 pt-4">
                <label className="block font-medium mb-1">
                  Detail <Asterisk />
                </label>
                <textarea
                  rows={6}
                  id={`Detail-${index}`}
                  value={product.detail}
                  onChange={(e) =>
                    handleChange(index, "detail", e.target.value)
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
                  type="number"
                  id={`Price-${index}`}
                  value={product.price}
                  onChange={(e) => handleChange(index, "price", e.target.value)}
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
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
              <p className="text-lg mb-4">คุณต้องการลบ product ใช่หรือไม่?</p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setDeleteIndex(null)}
                  className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
                >
                  ยกเลิก
                </button>
                <button
                  onClick={handleDeleteProduct}
                  className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                >
                  ลบ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
