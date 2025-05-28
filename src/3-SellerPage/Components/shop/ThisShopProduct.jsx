import React from "react";

const products = [
  {
    brand: "LONGi",
    watt: "635w",
    type: "N-type BIFACIAL",
    specs: {
      pmax: "635W",
      voc: "57.39V",
      isc: "13.97A",
      vmp: "48.15V",
      imp: "13.19A",
      dimensions: "2465x1134x30mm",
    },
    price: "2,585 บาท",
    image: "/images/longi635.png",
  },
  {
    brand: "Jinko",
    watt: "580w",
    type: "N-type Mono half cell",
    specs: {
      pmax: "580W",
      voc: "52.31V",
      isc: "14.01A",
      vmp: "43.35V",
      imp: "13.38A",
      dimensions: "2278x1134x30mm",
    },
    price: "2,640 บาท",
    image: "/images/jinko580.png",
  },
  {
    brand: "JA",
    watt: "625w",
    type: "N-type BIFACIAL",
    specs: {
      pmax: "625W",
      voc: "52.77V",
      isc: "15.16A",
      vmp: "43.71V",
      imp: "14.30A",
      dimensions: "2465x1134x35mm",
    },
    price: "2,545 บาท",
    image: "/images/ja625.png",
  },
];

export default function ThisShopProduct() {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">Our products</h2>
      {products.map((product, index) => (
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
      ))}
    </div>
  );
}
