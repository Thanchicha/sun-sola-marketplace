import { useState } from "react";
import { Link } from "react-router-dom";
import LoginBG from "./Components/LoginBG";
import Button from "./Components/UI/Button";
import InputField from "./Components/UI/InputField";

function LoginSeller() {
  const [organEmail, setOrganEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, password);
  const handleSellerLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
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
                  label="Organization Email"
                  type="email"
                  id="organEmail"
                  value={organEmail}
                  onChange={setOrganEmail}
                />
                <InputField
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={setPassword}
                />
                <Link
                  to="/login/forgetpassword"
                  className="block text-right font-semibold text-sm underline pt-2"
                >
                  Forget Password?
                </Link>
                <div className="text-center pt-4 pb-10">
                  <Button
                    label="Login"
                    onClick={handleSellerLogin}
                    type="submit"
                  />
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
