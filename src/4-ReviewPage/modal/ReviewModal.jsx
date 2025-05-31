import React from "react";

function ReviewModal({showModal, handleCancelModal, handleCancelModal, handleEditReview}) {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full relative">
            <button
              onClick={handleCancelModal}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-3 text-center">
              คุณเคยรีวิวร้านนี้แล้ว
            </h2>
            <p className="text-center mb-4">คุณต้องการแก้ไขรีวิวเดิมหรือไม่?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleCancelModal}
                className="px-4 py-2 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleEditReview}
                className="px-4 py-2 rounded-full bg-blue-900 text-white hover:bg-blue-800"
              >
                แก้ไขรีวิว
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewModal;
