import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";

export default function AddReview() {
  const { id: shopId, user_id: userId } = useParams();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [files, setFiles] = useState([null, null, null, null]);
  const [status, setStatus] = useState("");
  const [reviewTypes, setReviewTypes] = useState([]); // eg. ['shop', 'product']
  const toggleReviewType = (type) => {
    setReviewTypes(
      (prev) =>
        prev.includes(type)
          ? prev.filter((t) => t !== type) // ถ้ามีอยู่แล้ว กดซ้ำ = เอาออก
          : [...prev, type] // ถ้ายังไม่มี = เพิ่มเข้าไป
    );
  };

  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (reviewTypes.length === 0) {
      setStatus("กรุณาเลือกประเภทของรีวิวอย่างน้อย 1 อย่าง");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("Category", reviewTypes.join(","));
      formData.append("Score", rating);
      formData.append("Detail", review);

      const now = new Date();
      const reviewDate = now.toISOString().slice(0, 19).replace("T", " ");
      formData.append("reviewDate", reviewDate);
      formData.append("Customers_ID", userId);
      formData.append("ShopID", shopId);

      // ✅ แนบไฟล์ทั้งหมด
      files.forEach((file) => {
        if (file) {
          formData.append("images", file);
        }
      });

      const response = await axios.post(
        "http://10.4.53.25:5008/customerReviewWithImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setStatus("ส่งรีวิวสำเร็จ");
        setRating(0);
        setReview("");
        setFiles([null, null, null, null]);
        setReviewTypes([]);
      } else {
        setStatus("เกิดข้อผิดพลาดในการส่งรีวิว");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์");
    }
  };

  return (
    <>
      <Narbar icon={<LeftArrow />} page="Review" />
      <div className="mx-[190px] my-[65px]">
        {/* ให้คะแนน */}
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

        {/* Upload รูป/วิดีโอ */}
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
                accept="image/*"
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

        {/* เขียนรีวิว */}
        <p className="mb-2">เขียนรีวิวของคุณ</p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          placeholder="..."
          className="w-full p-3 border border-blue-900 rounded-xl focus:outline-none resize-none mb-4"
        />

        <div className="flex justify-center">
          {/* ปุ่ม Submit */}
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
