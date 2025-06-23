import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";

const API_BASE_URL = "http://10.4.53.25:5008";

export default function UpdateReview() {
  const { reviewId } = useParams();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [files, setFiles] = useState([null, null, null, null]);
  const [status, setStatus] = useState("");
  const [reviewTypes, setReviewTypes] = useState([]);
  const [fetchedData, setFetchedData] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // เพื่อเปลี่ยนสีหรือไอคอนของ Modal

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/getReviewById/${reviewId}`
        );
        const data = res.data;

        setFetchedData(data);
        setRating(data.Score || 0);
        setReview(data.Detail || "");
        setReviewTypes(
          Object.entries(data.Category || {})
            .filter(([_, val]) => val)
            .map(([key]) => key)
        );

        const filePreviews = [null, null, null, null];
        if (data.Image && Array.isArray(data.Image)) {
          data.Image.forEach((imgPath, i) => {
            filePreviews[i] = `${API_BASE_URL}/${imgPath}`;
          });
        }
        setFiles(filePreviews);
      } catch (error) {
        console.error("Failed to load review:", error);
        setStatus("ไม่สามารถโหลดข้อมูลรีวิว");
      }
    };

    fetchReview();
  }, [reviewId]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fetchedData) return;

    if (reviewTypes.length === 0) {
      setModalMessage("กรุณาเลือกประเภทของรีวิวอย่างน้อย 1 อย่าง");
      setIsSuccess(false);
      setShowModal(true);
      return;
    }

    try {
      const formData = new FormData();

      let categoryString = "";
      if (reviewTypes.includes("shop")) {
        categoryString += "shop";
      }
      if (reviewTypes.includes("product")) {
        if (categoryString !== "") {
          categoryString += ",";
        }
        categoryString += "product";
      }
      formData.append("Category", categoryString);

      formData.append("Score", rating);
      formData.append("Detail", review);
      const now = new Date();
      const formattedDate = now.toISOString().slice(0, 19).replace("T", " ");

      formData.append("reviewDate", formattedDate);
      formData.append("Customers_ID", fetchedData.Customers_ID);
      formData.append("ShopID", fetchedData.ShopID);

      files.forEach((file) => {
        if (file && typeof file !== "string") {
          formData.append("images", file);
        }
      });

      await axios.put(
        `${API_BASE_URL}/updateCustomerReviewWithImage/${reviewId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setModalMessage("อัปเดตรีวิวสำเร็จ!");
      setIsSuccess(true);
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("เกิดข้อผิดพลาดในการอัปเดตรีวิว กรุณาลองใหม่อีกครั้ง");
      setIsSuccess(false);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (isSuccess) {
      navigate(`/allshop/shop/${fetchedData.ShopID}/review`);
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
                typeof file === "string" ? (
                  <img
                    src={file}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                )
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

      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className={`bg-white p-6 rounded-lg shadow-lg text-center ${
              isSuccess ? "border-green-500" : "border-red-500"
            } border-2`}
          >
            <p className="text-lg font-semibold mb-4">
              {modalMessage}
            </p>
            <button
              onClick={handleCloseModal}
              className={`px-4 py-2 rounded-full text-white ${
                isSuccess ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
              } transition`}
            >
              ตกลง
            </button>
          </div>
        </div>
      )}

      {status && (
        <p className="text-center text-sm mt-4 text-gray-600">{status}</p>
      )}
    </div>
    </>
  );
}
