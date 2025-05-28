import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { ReviewMock } from "./ReviewMock";

const ReviewStats = () => {
  const [data, setData] = useState({
    averageRating: 4.6,
    totalReviews: 683,
    starCounts: [562, 81, 33, 5, 2],
  });

  const [selectedRating, setSelectedRating] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(ReviewMock);
  }, []);

  //   useEffect(() => {
  //     // ดึงข้อมูลรีวิวทั้งหมด

  //     fetch("/api/reviews")
  //       .then((res) => res.json())
  //       .then((json) => setReviews(json))
  //       .catch((err) => console.error("Error fetching reviews:", err));
  //   }, []);

  const renderStars = (count) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-6 h-6 ${
            i < count ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"
          }`}
        />
      ))}
    </div>
  );

  const filteredReviews = selectedRating
    ? reviews.filter((review) => review.rating === selectedRating)
    : reviews;

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">All reviews of the shop</h2>

      <div className="flex">
        <div className="w-1/2 flex flex-col items-center">
          <div className="flex items-center mb-2">
            <span className="text-4xl font-bold text-[#22509E] mr-2">
              {data.averageRating}
            </span>
            <span className="text-gray-500">/5</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {data.totalReviews} reviews
          </p>
          <div className="flex space-x-1 mb-4">
            {renderStars(Math.round(data.averageRating))}
          </div>
        </div>

        <div className="w-1/2 space-y-2 mb-6 mr-35">
          {data.starCounts.map((count, i) => (
            <div key={i} className="flex items-center space-x-2">
              {renderStars(5 - i)}
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#193C76] h-2 rounded-full"
                  style={{ width: `${(count / data.totalReviews) * 100}%` }}
                />
              </div>
              <span className="text-sm w-10 text-right">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2 mb-6">
        {[5, 4, 3, 2, 1].map((num) => (
          <button
            key={num}
            onClick={() =>
              setSelectedRating(num === selectedRating ? null : num)
            }
            className={`border rounded-full px-4 py-1 text-sm hover:bg-blue-100 hover:border-[#193C76] ${
              selectedRating === num ? "bg-blue-100 border-[#193C76]" : ""
            }`}
          >
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-[#193C76] stroke-[#193C76]" />
              <span>{num}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredReviews.map((review, idx) => (
          <div key={idx} className="border-b pb-6">
            <div className="flex justify-between items-center">
              <span className="font-medium">{review.name}</span>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
            <div className="flex space-x-2 mt-2 overflow-x-auto">
              {review.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="review-img"
                  className="w-24 h-24 object-cover rounded-lg border"
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              {review.comment}
            </p>
            <div className="mt-2">{renderStars(review.rating)}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewStats;
