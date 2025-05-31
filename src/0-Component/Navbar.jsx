import React, { useState, useEffect } from "react";
import Login from "../1-LoginPage/Login";
import LoginSeller from "../1-LoginPage/LoginSeller";
import RegisUser from "../1-LoginPage/RegisUser";
import RegisSeller from "../1-LoginPage/RegisSeller";
import ButtonYellow from "./UI/ButtonYellow";
import ButtonRole from "./UI/ButtonRole";
import Modal from "./UI/Modal";

function Narbar({ icon, line, page }) {
  const [LoginOpen, setLoginOpen] = useState(false);
  const [LoginUserOpen, setLoginUserOpen] = useState(false);
  const [LoginSellerOpen, setLoginSellerOpen] = useState(false);
  const [RegisOpen, setRegisOpen] = useState(false);
  const [RegisUserOpen, setRegisUserOpen] = useState(false);
  const [RegisSellerOpen, setRegisSellerOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  return (
    <>
      <nav className="px-5 flex items-center justify-between bg-[#11284f] h-[80px]">
        <div className="flex items-center">
          <div className="w-24 flex justify-center items-center">{icon}</div>
          <span
            className="text-white text-[28px] font-medium ml-5 pl-5"
            style={line}
          >
            {page}
          </span>
        </div>

        <div className="flex gap-4">
          {user ? (
            <div className="flex items-center gap-4 text-white">
              <span className="font-medium">
                {user.Role === "seller" ? "🛒" : "👤"} {user.Name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              {/* LOGIN */}
              <div className="relative inline-block text-left">
                <ButtonYellow
                  onClick={() => {
                    setLoginOpen(!LoginOpen);
                    setRegisOpen(false);
                  }}
                  value="Login"
                />
                {LoginOpen && (
                  <div className="absolute left-0 mt-2 w-[158px] rounded-md bg-white shadow-lg z-50">
                    <ButtonRole
                      onClick={() => setLoginUserOpen(true)}
                      role="For User"
                    />
                    <ButtonRole
                      onClick={() => setLoginSellerOpen(true)}
                      role="For Seller"
                    />
                  </div>
                )}
              </div>

              {/* REGISTER */}
              <div className="relative inline-block text-left">
                <ButtonYellow
                  onClick={() => {
                    setRegisOpen(!RegisOpen);
                    setLoginOpen(false);
                  }}
                  value="Register"
                />
                {RegisOpen && (
                  <div className="absolute left-0 mt-2 w-[158px] rounded-md bg-white shadow-lg z-50">
                    <ButtonRole
                      onClick={() => setRegisUserOpen(true)}
                      role="For User"
                    />
                    <ButtonRole
                      onClick={() => setRegisSellerOpen(true)}
                      role="For Seller"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </nav>

      {/* MODALS */}
      <Modal
        isOpen={LoginUserOpen}
        onClose={() => setLoginUserOpen(false)}
        children={<Login />}
      />
      <Modal
        isOpen={LoginSellerOpen}
        onClose={() => setLoginSellerOpen(false)}
        children={<LoginSeller />}
      />
      <Modal
        isOpen={RegisUserOpen}
        onClose={() => setRegisUserOpen(false)}
        children={<RegisUser />}
      />
      <Modal
        isOpen={RegisSellerOpen}
        onClose={() => setRegisSellerOpen(false)}
        children={<RegisSeller />}
      />
    </>
  );
}

export default Narbar;
