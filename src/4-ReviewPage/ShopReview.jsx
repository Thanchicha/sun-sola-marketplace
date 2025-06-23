import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import ReviewStats from "../3-SellerPage/Components/review/ReviewStats";
import ButtonYellow from "../0-Component/UI/ButtonYellow";

function ShopReview() {
  const navigate = useNavigate();
  const { id } = useParams(); // shop id
  const user = JSON.parse(localStorage.getItem("user"));
  const [reviewData, setReviewData] = useState(null); // เก็บข้อมูลรีวิวถ้ามี
  const hasReviewed = !!reviewData;

  useEffect(() => {
    if (user && user.id) {
      fetch(`/api/reviews?shopId=${id}&userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Review API response:", data); // เพิ่มบรรทัดนี้ดูข้อมูล
          if (data && data.length > 0) {
            setReviewData(data[0]);
          } else {
            setReviewData(null);
          }
        })
        .catch(() => setReviewData(null));
    }
  }, [id, user]);

  const handleAddReview = () => {
    if (!user || !user.id) {
      alert("กรุณาเข้าสู่ระบบก่อนรีวิว");
      navigate("/");
      return;
    }

    if (hasReviewed) {
      // ถ้ามีรีวิวแล้ว ให้ไปหน้าแก้ไข โดยใช้ reviewId จาก reviewData
      navigate(`/allshop/shop/${id}/review/${reviewData.ReviewID}/update`);
    } else {
      // ถ้ายังไม่มีรีวิว ไปหน้าเพิ่มรีวิว
      navigate(`/allshop/shop/${id}/review/${user.id}/add`);
    }
  };

  return (
    <>
      <Narbar icon={<LeftArrow />} page="Review" />

      <div className="mx-[160px] my-[65px]">
        <div className="flex mb-[38px]">
          <button className="ml-auto mt-4 md:mt-0" onClick={handleAddReview}>
            {hasReviewed ? (
              <>
                <ButtonYellow value="Edit Review" />
              </>
            ) : (
              <ButtonYellow value="+ Review" />
            )}
          </button>
        </div>
        <ReviewStats />
      </div>
    </>
  );
}

export default ShopReview;
