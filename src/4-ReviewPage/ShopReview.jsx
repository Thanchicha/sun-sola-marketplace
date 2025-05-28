import React from "react";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import ReviewStats from "../3-SellerPage/Components/review/ReviewStats";
import ButtonYellow from "../0-Component/UI/ButtonYellow";

function ShopReview() {
  return (
    <>
      <Narbar icon={<LeftArrow />} page="Review" />

      <div className="mx-[160px] my-[65px]">
        <div className="flex mb-[38px]">
          <button className="ml-auto mt-4 md:mt-0">
            <ButtonYellow to="add" value="+ Review" />
          </button>
        </div>
        <ReviewStats />
      </div>
    </>
  );
}

export default ShopReview;
