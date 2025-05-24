import React from "react";

function Modal({isOpen, onClose, children}) {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white w-[50vw] h-[75vh] rounded-xl shadow-lg relative overflow-hidden">
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-black"
            onClick={onClose}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
