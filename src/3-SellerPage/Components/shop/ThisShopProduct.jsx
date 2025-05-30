import React from "react";
import mockProductData from "../product/mockProductData";

export default function ThisShopProduct({ shopId = 101 }) {
  const products = mockProductData;
  // [shopId] || [];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Our products</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">ไม่มีสินค้าสำหรับร้านนี้</p>
      ) : (
        products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 border-b-3 border-[#D9D9D9] py-6"
          >
            <img
              src={product.Image}
              alt={product.Name}
              className="w-40 h-auto object-contain border border-[#193C76] rounded-lg"
            />
            <div>
              <h3 className="text-xl font-medium">{product.Name}</h3>
              <p className="text-sm text-gray-700 whitespace-pre-line mt-2">
                {product.Detail}
              </p>
              <p className="text-lg text-blue-700 font-bold mt-2">
                ราคา {product.Price} บาท
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
