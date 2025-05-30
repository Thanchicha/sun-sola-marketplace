import React from "react";
import mockProductData from "../product/mockProductData";

export default function ThisShopProduct({ shopId = 101 }) {
  const products = mockProductData
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
              src={product.image}
              alt={`${product.brand} ${product.watt}`}
              className="w-40 h-auto object-contain"
            />
            <div>
              <h3 className="text-xl font-medium">
                แผงโซล่าเซลล์ {product.brand} {product.watt} {product.type}
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
                <li>Maximum power(Pmax): {product.specs.pmax}</li>
                <li>Open Circuit Voltage(Voc): {product.specs.voc}</li>
                <li>Short Circuit Current(Isc): {product.specs.isc}</li>
                <li>Operating Voltage(Vmp): {product.specs.vmp}</li>
                <li>Operating Current(Imp): {product.specs.imp}</li>
                <li>Dimensions: {product.specs.dimensions}</li>
              </ul>
              <p className="text-lg text-blue-700 font-bold mt-2">
                ราคา {product.price}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
