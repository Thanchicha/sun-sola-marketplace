import { useState } from "react";
import { Link } from "react-router-dom";
import LoginBG from "./Components/LoginBG";
import InputField from "./Components/UI/InputField";
import Button from "./Components/UI/Button";

function ForgetPass() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          newPassword,
        }),
      });
      const data = await response.json();
      if (newPassword !== checkNewPassword) {
        alert("Password is not match!");
        return;
      }
      if (response.ok) {
        alert("Password reset successful!");
      } else {
        alert(data.message || "Reset failed");
      }
    } catch (err) {
      console.error("Reset error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/2 relative">
          <LoginBG />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4">
            <div className="text-center">
              <h1 className="p-5 font-bold text-4xl">Forget your Password?</h1>
              <p className="text-[#929292]">Let’s make new password</p>
            </div>
            <div className="text-[#929292]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
                className="flex flex-col gap-2"
              >
                <InputField
                  label="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={setEmail}
                />
                <InputField
                  label="Username"
                  type="text"
                  id="username"
                  value={username}
                  onChange={setUsername}
                />
                <InputField
                  label="New Password"
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={setNewPassword}
                />
                <InputField
                  label="New Password"
                  type="password"
                  id="checkNewPassword"
                  value={checkNewPassword}
                  onChange={setCheckNewPassword}
                />
                <p className="text-right pt-2">
                  New User?{" "}
                  <Link
                    to="/login/register/user"
                    className="text-[#5F7FFF] underline"
                  >
                    Signup
                  </Link>
                </p>
                <div className="text-center pt-5">
                  <Button
                    label="Submit"
                    onClick={handleResetPassword}
                    type="submit"
                  />
                  <p className="p-4">
                    <Link to="/login" className="text-[#5F7FFF] underline">
                      Cancel
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPass;
