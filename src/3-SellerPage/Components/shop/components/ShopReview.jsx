import React from "react";
import { Link, Star } from "lucide-react";

function ShopReview({ Title }) {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-[30px] font-semibold text-[#193C76] mb-2">
          “{Title}”
        </h2>
        <div className="flex items-center gap-1">
          <span className="text-[48px] font-bold text-[#22509E]">4.6</span>
          <span className="text-[#BBBBBB] text-[32px]">/5</span>
          <span className="text-[16px] text-[#000000]">(683 reviews)</span>
          <a href="#" className="ml-auto text-[16px] text-[#8E8E8E] underline">
            {">> See more reviews"}
          </a>
        </div>
        <div className="flex gap-1 mt-2">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="text-yellow-400 fill-yellow-400 w-12 h-12"
            />
          ))}
          <Star className="text-yellow-400 w-12 h-12" />
        </div>
      </div>
      <div className="mb-6">
        <div className="text-[16px] text-[#000000] font-semibold mb-1">
          {}Prasitthichok
        </div>
        <div className="text-sm text-[#454545] mb-3">04/04/2025 09:34 AM</div>
        <div className="flex gap-3 mb-3">
          <img
            src="/public/images/seller/review1.png"
            alt="review 1"
            className="w-[140px] h-[100px] rounded object-cover"
          />
          <img
            src="/public/images/seller/review2.png"
            alt="review 2"
            className="w-[140px] h-[100px] rounded object-cover"
          />
          <img
            src="/public/images/seller/review3.png"
            alt="review 3"
            className="w-[140px] h-[100px] rounded object-cover"
          />
        </div>
        <p className="text-sm text-[#000000]">
          บริการเยี่ยมครับ ผมติดตั้งไปที่บ้านเรียบร้อย ทีมงานมืออาชีพมาก ๆ
          มาถึงตรงเวลาและทำงานเรียบร้อยมาก
          การติดตั้งใช้เวลาประมาณครึ่งวันและอุปกรณ์ที่นำมาใช้ก็มีมาตรฐานสูงมากครับ
          ประทับใจจริง ๆ ครับ
        </p>
      </div>
    </>
  );
}

export default ShopReview;
