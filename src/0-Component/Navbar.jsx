import React from "react";
import { useState } from "react";
import Login from "../1-LoginPage/Login";
import RegisUser from "../1-LoginPage/RegisUser";
import RegisSeller from "../1-LoginPage/RegisSeller";

function Narbar() {
  const [LoginOpen, setLoginOpen] = useState(false);
  const [RegisOpen, setRegisOpen] = useState(false);
  const [RegisUserOpen, setRegisUserOpen] = useState(false);
  const [RegisSellerOpen, setRegisSellerOpen] = useState(false);

  return (
    <>
      <nav className="px-5 flex items-center justify-between bg-[#11284f]">
        <div className="flex items-center">
          <img
            src="/public/images/icons/sunsolaLogo.png"
            alt="logo"
            width="95"
          />
          <span className="border-l text-white text-[36px] font-medium ml-5 pl-5">
            Home
          </span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setLoginOpen(true)}
            className="text-[#193c76] bg-[#faf54f] font-extrabold text-base w-[158px] h-[50px] rounded-full shadow-md"
          >
            Login
          </button>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setRegisOpen(!RegisOpen)}
              className="text-[#193c76] bg-[#faf54f] font-extrabold text-base w-[158px] h-[50px] rounded-full shadow-md"
            >
              Register
            </button>

            {RegisOpen && (
              <div className="absolute left-0 mt-2 w-[158px] rounded-md bg-white shadow-lg z-50">
                <button
                  onClick={() => setRegisUserOpen(true)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  For User
                </button>
                <button
                  onClick={() => setRegisSellerOpen(true)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  For Seller
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Modal */}
      {LoginOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[50vw] h-[75vh] rounded-xl shadow-lg relative overflow-hidden">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setLoginOpen(false)}
            >
              ✕
            </button>
            <Login />
          </div>
        </div>
      )}

      {RegisUserOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[50vw] h-[75vh] rounded-xl shadow-lg relative overflow-hidden">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setRegisUserOpen(false)}
            >
              ✕
            </button>
            <RegisUser />
          </div>
        </div>
      )}

      {RegisSellerOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[50vw] h-[75vh] rounded-xl shadow-lg relative overflow-hidden">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setRegisSellerOpen(false)}
            >
              ✕
            </button>
            <RegisSeller />
          </div>
        </div>
      )}
    </>
  );
}

export default Narbar;