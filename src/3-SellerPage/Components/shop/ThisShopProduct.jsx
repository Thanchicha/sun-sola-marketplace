import React, { useEffect, useState } from "react";
import axios from "axios";
import mockProductDataList from "../product/mockProductData";

const useMock = true;

export default function ThisShopProduct({ ShopID }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!ShopID) return;

    if (useMock) {
      setProducts(mockProductDataList[ShopID] || []);
    } else {
      axios
        .get(`http://10.4.53.25:5008/showProduct/${ShopID}`)
        .then((res) => {
          if (Array.isArray(res.data)) {
            setProducts(res.data);
          } else {
            setProducts([]);
          }
        })
        .catch((err) => {
          console.error("Error loading products:", err);
          setProducts([]);
        });
    }
  }, [ShopID]);

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
