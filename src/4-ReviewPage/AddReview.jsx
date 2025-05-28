import { useState } from "react";
import { FaStar } from "react-icons/fa";

import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";

export default function AddReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [files, setFiles] = useState([null, null, null, null]);
  const [status, setStatus] = useState("");

  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("rating", rating);
    formData.append("review", review);
    files.forEach((file, index) => {
      if (file) formData.append(`file${index + 1}`, file);
    });

    try {
      const response = await fetch("https://your-backend-api.com/api/review", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("ส่งรีวิวสำเร็จ");
        setRating(0);
        setReview("");
        setFiles([null, null, null, null]);
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
                accept="image/*,video/*"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                className="hidden"
              />
            </label>
          ))}
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

        {/* ปุ่ม Submit */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
        >
          Submit
        </button>

        {status && (
          <p className="text-center text-sm mt-4 text-gray-600">{status}</p>
        )}
      </div>
    </>
  );
}
