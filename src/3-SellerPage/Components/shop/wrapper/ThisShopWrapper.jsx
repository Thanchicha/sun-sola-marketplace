import React from "react";
import { useParams } from "react-router-dom";
import ThisShop from "../ThisShop";

function ThisShopWrapper() {
  const { id } = useParams(); // ดึง id จาก url
  return <ThisShop shopId={id} />;
}

export default ThisShopWrapper;