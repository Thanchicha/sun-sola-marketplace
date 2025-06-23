import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoginBG from "./Components/LoginBG";
import Button from "./Components/UI/Button";
import InputField from "./Components/UI/InputField";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleUserLogin = async () => {
    console.log("Submitting:", { Email, Password }); // เช็คค่าที่ส่งไป

    try {
      const response = await axios.post(
        "http://10.4.53.25:5008/customerLogin",
        {
          Email: Email, // แก้จาก email → Email
          Password: Password, // แก้จาก password → Password
        }
      );
      console.log("Response:", response.data);

      // ✅ ตรวจสอบและจัดการข้อมูล user
      if (response.data && response.data.customer) {
        const user = response.data.customer;

        localStorage.setItem(
          "user",
          JSON.stringify({
            id: user.id, // ✅ เพิ่มบรรทัดนี้!
            name: user.name,
            email: user.email,
            role: user.role,
          })
        );

        alert("Login Success");
        window.location.reload(); // เพื่อให้อัปเดตชื่อบน Navbar
      } else {
        alert("Email or Password incorrect");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };
  // console.log("response.data", response.data);
  // console.log("user object", response.data.customer);

  return (
    <>
      <title>Login | Sun Sola</title>
      <div className="h-full flex">
        <div className="w-1/2 relative">
          <LoginBG />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4">
            <div className="text-center p-5">
              <h1 className="p-4 font-bold text-4xl">Login</h1>
              <p className="text-[#929292]">
                Welcome back! Please login to your account
              </p>
            </div>
            <div className="text-[#929292]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserLogin();
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
                  to="/login/forgetPassword"
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

export default Login;
