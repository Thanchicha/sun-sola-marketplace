import { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import reviewMock from "./mock/reviewMock";

const API_BASE_URL = "https://your-backend-api.com/api";

export default function UpdateReview() {
  const [rating, setRating] = useState(reviewMock.Score);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState(reviewMock.Detail);
  const [files, setFiles] = useState([null, null, null, null]);
  const [status, setStatus] = useState("");
  const [reviewTypes, setReviewTypes] = useState(
    Object.entries(reviewMock.Category)
      .filter(([_, val]) => val)
      .map(([key]) => key)
  );

  const toggleReviewType = (type) => {
    setReviewTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  // ✅ รวมฟังก์ชัน uploadImage ไว้ในไฟล์เดียว
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.filename;
  };

  // ✅ รวมฟังก์ชัน updateReview ไว้ในไฟล์เดียว
  const updateReview = async (reviewId, reviewData) => {
    const response = await axios.put(`${API_BASE_URL}/review/${reviewId}`, reviewData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (reviewTypes.length === 0) {
      setStatus("กรุณาเลือกประเภทของรีวิวอย่างน้อย 1 อย่าง");
      return;
    }

    try {
      const uploadedFileNames = await Promise.all(
        files.filter((f) => f).map(uploadImage)
      );

      const now = new Date();
      const reviewDate = now.toISOString();

      const categoryObj = {
        shop: reviewTypes.includes("shop"),
        product: reviewTypes.includes("product"),
      };

      const reviewData = {
        Username: reviewMock.Username,
        reviewDate,
        Score: rating,
        Image: [...reviewMock.Image, ...uploadedFileNames],
        Detail: review,
        Category: categoryObj,
      };

      await updateReview("12345", reviewData); // 🔁 เปลี่ยน ID ตามจริง
      setStatus("อัปเดตรีวิวสำเร็จ");

    } catch (error) {
      console.error("Error:", error);
      setStatus("เกิดข้อผิดพลาดในการอัปเดตรีวิว");
    }
  };

  return (
    <>
      <Narbar icon={<LeftArrow />} page="Review" />
      <div className="mx-[190px] my-[65px]">
        <p className="mb-2">คุณภาพของสินค้า</p>
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={30}
              className={`cursor-pointer transition ${
                (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>

        <p className="mb-2">เพิ่มรูปภาพและวิดีโอเพื่อรีวิวสินค้า</p>
        <div className="grid grid-cols-4 gap-3 mb-4">
          {files.map((file, index) => (
            <label
              key={index}
              className="flex items-center justify-center w-full aspect-square border border-blue-900 rounded-md cursor-pointer hover:bg-gray-50"
            >
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <span className="text-2xl text-blue-900">+</span>
              )}
              <input
                type="file"
                accept="image/*,video/*"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                className="hidden"
              />
            </label>
          ))}
        </div>

        <p className="mb-2">ประเภทของรีวิว</p>
        <div className="flex gap-3 mb-4">
          <button
            type="button"
            onClick={() => toggleReviewType("shop")}
            className={`cursor-pointer px-4 py-2 rounded-full border ${
              reviewTypes.includes("shop")
                ? "bg-blue-900 text-white"
                : "border-blue-900 text-blue-900 bg-white"
            }`}
          >
            Shop review
          </button>

          <button
            type="button"
            onClick={() => toggleReviewType("product")}
            className={`cursor-pointer px-4 py-2 rounded-full border ${
              reviewTypes.includes("product")
                ? "bg-blue-900 text-white"
                : "border-blue-900 text-blue-900 bg-white"
            }`}
          >
            Product review
          </button>
        </div>

        <p className="mb-2">เขียนรีวิวของคุณ</p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          placeholder="..."
          className="w-full p-3 border border-blue-900 rounded-xl focus:outline-none resize-none mb-4"
        />

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-40 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </div>

        {status && (
          <p className="text-center text-sm mt-4 text-gray-600">{status}</p>
        )}
      </div>
    </>
  );
}
