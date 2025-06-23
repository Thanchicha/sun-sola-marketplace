import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ เพิ่ม useNavigate
import axios from "axios";
import LoginBG from "./Components/LoginBG";
import Button from "./Components/UI/Button";
import InputField from "./Components/UI/InputField";

function LoginSeller() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSellerLogin = async () => {
    try {
      const response = await axios.post("http://10.4.53.25:5008/sellerLogin", {
        Email,
        Password,
      });
      console.log("Login response:", response.data);

      if (response.data && response.data.seller) {
        const user = response.data.seller;
        const shop = user.shop;

        localStorage.setItem(
          "user",
          JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            shopId: shop ? shop.id : null, // ✅ เก็บ shopId ถ้ามี
          })
        );

        alert("Login Success");

        if (!shop) {
          // ❌ ยังไม่มีร้าน
          navigate(`/${user.id}/createshop`);
        } else {
          // ✅ มีร้านแล้ว
          navigate(`/${user.id}/myshop/${shop.id}`);
        }
      } else {
        alert("Email or Password incorrect");
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response) {
        alert(err.response.data || "Something went wrong. Please try again.");
      } else {
        alert("Network error or server not responding.");
      }
    }
  };

  return (
    <>
      <title>Login for Seller | Sun Sola</title>
      <div className="h-full flex">
        <div className="w-1/2 relative">
          <LoginBG />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4">
            <div className="text-center p-5">
              <h1 className="py-4 font-bold text-3xl">Seller Login</h1>
              <p className="text-[#929292]">
                Welcome back! Please login to your seller account
              </p>
            </div>
            <div className="text-[#929292]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSellerLogin();
                }}
                className="flex flex-col gap-2"
              >
                <InputField
                  label="Email"
                  type="email"
                  id="Email"
                  value={Email}
                  onChange={setEmail}
                />
                <InputField
                  label="Password"
                  type="password"
                  id="Password"
                  value={Password}
                  onChange={setPassword}
                />
                <Link
                  to="forgetPassword"
                  className="block text-right font-semibold text-sm underline pt-2"
                >
                  Forget Password?
                </Link>
                <div className="text-center pt-4 pb-10">
                  <Button label="Submit" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSeller;
